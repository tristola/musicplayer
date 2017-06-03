import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlayerActions from '../Redux/PlayerRedux'
import { Colors } from '../Themes/'
import styles from './Styles/PlayerAreaStyle'
import PlayPause from '../Components/PlayPause'

const textStyle = {
  fontSize: 20,
  color: Colors.snow
}

const PlayerArea = ({ playing, play, pause, metadata }) => (
  <View>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={textStyle}>
            title: {metadata && metadata.title}
          </Text>
          <Text style={textStyle}>
            artist: {metadata && metadata.artist}
          </Text>
        </View>
        <View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={textStyle}>
            genre:{metadata && metadata.genre}
          </Text>
          <Text style={textStyle}>
            duration:{metadata && metadata.duration}
          </Text>
        </View>
      </View>
    </View>
    <TouchableOpacity
      onPress={playing ? pause : play}
      style={{
        position: 'absolute',
        left: 0,
        bottom: 50
      }}
      >
      <PlayPause playing={playing} />
    </TouchableOpacity>
    <TouchableOpacity
      playing={playing}
      onPress={pause}
      style={styles.pause}
    >
      <Icon size={30} name='stop' color='#fff' />
    </TouchableOpacity>
  </View>
)

const mapStateToProps = ({player}) => {
  const {file, metadata, playing} = player
  return {
    file,
    metadata,
    playing
  }
}

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(PlayerActions.playerPlay()),
  pause: () => dispatch(PlayerActions.playerPause())
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea)
