import React from 'react'
import { View } from 'react-native'
import SongList from '../Containers/SongList'
import { connect } from 'react-redux'
import styles from './Styles/MusicPlayerScreenStyle'

class MusicPlayer extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SongList />
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