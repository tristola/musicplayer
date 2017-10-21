import React from 'react'
import { View } from 'react-native'
import SongList from '../Containers/SongList'
import { connect } from 'react-redux'
import styles from './Styles/MusicPlayerScreenStyle'
import PlayerArea from '../Containers/PlayerArea'
import Filter from './../Components/Filter'
import { SearchBar } from 'react-native-elements'
import R from 'ramda'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      currentlyDisplayed: []
    }
  }
  componentWillReceiveProps(props){
    this.setState({currentlyDisplayed: props.songs})
  }
  filterDisplayed(text) {
    this.setState
    ({
      searchTerm: text,
      currentlyDisplayed: this.props.songs
    })
    
    this.setState({currentlyDisplayed: this.props.songs})
  }
  render () {
    const songs = this.state.currentlyDisplayed || []
    return (
      <View style={styles.container}>
      <SearchBar round onChangeText={text => this.filterDisplayed(text)} placeholder='Type Here...' />
        <SongList songs={songs} />
        <PlayerArea />
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
