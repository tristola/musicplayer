import React from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Song from '../Components/Song'
import styles from './Styles/SongListStyle'
import PlayerActions from '../Redux/PlayerRedux'

class SongList extends React.Component {
  render () {
    const { songs, setSong } = this.props
    return (
      <View style={styles.container}>
        <View style={{flex: 0.1, flexDirection: 'row'}}>
          <Text style={styles.text}>Genre</Text>
          <Text style={styles.text}>Artist</Text>
          <Text style={styles.text}>Title</Text>
          <Text style={styles.text}>Duration</Text>
        </View>
        <ScrollView>
          <KeyboardAvoidingView behavior='position'>
            {songs.map((song, index) =>
              <Song onPress={() => setSong(song)} key={index} song={song.metadata} />
            )}
          </KeyboardAvoidingView>
        </ScrollView>
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
    setSong: (songName) => dispatch(PlayerActions.playerSetSongName(songName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
