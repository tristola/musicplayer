import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import PlayerActions from '../Redux/PlayerRedux'

import styles from './Styles/PlayerAreaStyle'
const PlayerArea = ({ play, pause }) => (
  <View style={styles.container}>
    <Image
      source={Images.metalBackground}
      style={{
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={play} style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 10 }}>
          <Icon size={25} name='control-play' color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity onPress={pause} style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 10 }}>
          <Icon size={25} name='control-pause' color='#fff' />
        </TouchableOpacity>
      </View>
    </Image>
  </View>
)

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(PlayerActions.playerPlay()),
  pause: () => dispatch(PlayerActions.playerPause())
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea)
