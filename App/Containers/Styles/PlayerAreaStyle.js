import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    backgroundColor: '#d7cec7'
  },
  stop: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    right: 0,
    bottom: 10
  },
  playpause: {
    borderRadius: 200/2,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    right: 40,
    bottom: -40
  },
  textStyle: {
    fontSize: 25,
    color: '#76323f'
  }
})
