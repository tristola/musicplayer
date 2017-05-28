import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlayerActions from '../Redux/PlayerRedux'

import styles from './Styles/PlayerAreaStyle'
const PlayerArea = ({ play, pause }) => (
  <View style={styles.container}>
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
