import React from 'react'
import { View } from 'react-native'
import SongList from '../Containers/SongList'
import { connect } from 'react-redux'
import styles from './Styles/MusicPlayerScreenStyle'
import PlayerArea from '../Containers/PlayerArea'
import Filter from './../Components/Filter'
class MusicPlayer extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SongList style={{paddingBottom: 60}} />
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
