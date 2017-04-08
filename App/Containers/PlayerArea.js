import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import styles from './Styles/PlayerAreaStyle'
class PlayerArea extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={Images.metalBackground}
          style={{
          }}
          >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 10 }}>
              <Icon size={25} name='control-play' color='#fff' />
            </TouchableOpacity>

            <TouchableOpacity style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 10 }}>
              <Icon size={25} name='control-pause' color='#fff' />
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea)
