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
      currentlyDisplayed: []
    }
  }
  componentWillReceiveProps (props) {
    this.setState({currentlyDisplayed: props.songs})
  }
  filterDisplayed (text) {
    const songContains = (a, p, v) => R.path(['metadata', p], a).toLowerCase().indexOf(text.toLowerCase()) > -1
    const currentlyDisplayed = this.props.songs
      .filter(song =>
        songContains(song, 'title') ||
        songContains(song, 'artist') ||
        songContains(song, 'genre')
      )
    this.setState({currentlyDisplayed})
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
  const { songs = [] } = state.songs
  return { songs }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)
