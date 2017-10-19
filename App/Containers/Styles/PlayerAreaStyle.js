import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    backgroundColor: '#d7cec7'
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
    color: '#76323f'
  }
})
