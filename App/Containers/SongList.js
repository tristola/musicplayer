import React from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Song from '../Components/Song'
import styles from './Styles/SongListStyle'
import PlayerActions from '../Redux/PlayerRedux'
import { List, ListItem } from 'react-native-elements'

class SongList extends React.Component {
  render () {
    const { songs, setSong, style = {} } = this.props
    return (
      <View style={[styles.container]}>
        <ScrollView>
            <List>
            {songs.map((song, index) =>
              <Song onPress={() => setSong(song)} key={index} song={song.metadata} />
            )}
            </List>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSong: (songName) => dispatch(PlayerActions.playerSetSongName(songName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
