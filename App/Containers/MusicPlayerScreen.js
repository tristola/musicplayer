import React from 'react'
import { View } from 'react-native'
import SongList from '../Containers/SongList'
import { connect } from 'react-redux'
import PlayerArea from '../Containers/PlayerArea'
import { SearchBar } from 'react-native-elements'
import R from 'ramda'

class MusicPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      currentlyDisplayed: [],
      selectedGenres: []
    }
  }
  componentWillReceiveProps (props) {
    this.setState({currentlyDisplayed: props.songs, selectedGenres: props.genres})
  }
  filterDisplayed (text) {
    const songContains = (a, p) => R.path(['metadata', p], a).toLowerCase().indexOf(text.toLowerCase()) > -1
    let currentlyDisplayed = this.props.songs
      .filter(song =>
        songContains(song, 'title') ||
        songContains(song, 'artist') ||
        songContains(song, 'genre')
      )
    this.setState({currentlyDisplayed: currentlyDisplayed.filter(song => R.contains(song.genre, this.state.selectedGenres))})
  }
  render () {
    const songs = this.state.currentlyDisplayed || []
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SearchBar round onChangeText={text => this.filterDisplayed(text)} placeholder='Type Here...' />
        <SongList songs={songs} />
        <PlayerArea style={{marginTop: -20}} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { songs = [], genres = [] } = state.songs
  return { songs, genres }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)
