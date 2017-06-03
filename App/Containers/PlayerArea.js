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
      <View style={{postition: 'absolute', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{paddingBottom: 40, flex: 0.8, flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={textStyle}>
            title: {metadata && metadata.title}
          </Text>
          <Text style={textStyle}>
            artist: {metadata && metadata.artist}
          </Text>
        </View>
      </View>
    </View>
    <TouchableOpacity
      onPress={playing ? pause : play}
      style={styles.playpause}
      >
      <PlayPause size={300} playing={playing} />
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
