import React from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Song from '../Components/Song'
import styles from './Styles/SongListStyle'

class SongList extends React.Component {
  render () {
    const { songs } = this.props
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
              <Song key={index} song={song.metadata} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
