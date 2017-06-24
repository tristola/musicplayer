import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  stop: {
    position: 'absolute',
    right: 25,
    bottom: 40
  },
  playpause: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    position: 'absolute',
    right: 40,
    bottom: -40
  },
  textStyle: {
    fontSize: 25,
    color: Colors.bloodOrange
  }
})
