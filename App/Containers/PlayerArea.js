import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlayerActions from '../Redux/PlayerRedux'
import { Colors } from '../Themes/'

import styles from './Styles/PlayerAreaStyle'

const textStyle = {
  fontSize: 20,
  color: Colors.snow
}

const PlayerArea = ({ play, pause, metadata }) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text style={textStyle}>
        {metadata && metadata.title}
      </Text>
      <Text style={textStyle}>
        {metadata && metadata.artist}
      </Text>
      <Text style={textStyle}>
        {metadata && metadata.genre}
      </Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableOpacity onPress={play} style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 10 }}>
        <Icon size={25} name='play' color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity onPress={pause} style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 10 }}>
        <Icon size={25} name='pause' color='#fff' />
      </TouchableOpacity>
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
