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

const PlayerArea = ({ playing, play, pause, stop, metadata }) => (
  <View>
    <View style={styles.container}>
      <View style={{backgroundColor: 'red', position: 'absolute', left: 0, bottom: 100, height: 100}}>
        <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={textStyle}>
            {metadata && metadata.title}
          </Text>
          <Text style={textStyle}>
            {metadata && metadata.artist}
          </Text>
        </View>
      </View>
    </View>
    <TouchableOpacity
      onPress={playing ? pause : play}
      style={styles.playpause}
      >
      <PlayPause size={200} playing={playing} />
    </TouchableOpacity>
    <TouchableOpacity
      playing={playing}
      onPress={stop}
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
  play: () => dispatch(PlayerActions.playerPlayPressed()),
  pause: () => dispatch(PlayerActions.playerPausePressed()),
  stop: () => dispatch(PlayerActions.playerStopPressed())
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea)
