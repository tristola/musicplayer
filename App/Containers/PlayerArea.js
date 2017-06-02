import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlayerActions from '../Redux/PlayerRedux'
import { Colors } from '../Themes/'

import styles from './Styles/PlayerAreaStyle'

const textStyle = {
  paddingTop: 4,
  paddingBottom: 4,
  fontSize: 20,
  color: Colors.snow
}

const PlayerArea = ({ play, pause, metadata }) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
      <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
        <Text style={textStyle}>
          title: {metadata && metadata.title}
        </Text>
        <Text style={textStyle}>
          artist: {metadata && metadata.artist}
        </Text>
        <Text style={textStyle}>
          genre:{metadata && metadata.genre}
        </Text>
        <Text style={textStyle}>
          duration:{metadata && metadata.duration}
        </Text>
      </View>
      <TouchableOpacity onPress={play} style={{ padding: 10, flex: 0.2 }}>
        <Icon size={25} name='play' color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity onPress={pause} style={{ padding: 10, flex: 0.2 }}>
        <Icon size={25} name='pause' color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity onPress={pause} style={{ padding: 10, flex: 0.2 }}>
        <Icon size={25} name='stop' color='#fff' />
      </TouchableOpacity>
      <View style={{ padding: 10, flex: 0.2 }} />
    </View>
  </View>
)

const mapStateToProps = ({player}) => {
  const {file, metadata} = player
  return {
    file,
    metadata
  }
}

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(PlayerActions.playerPlay()),
  pause: () => dispatch(PlayerActions.playerPause())
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea)
