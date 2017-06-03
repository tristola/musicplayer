import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  pause: {
    position: 'absolute',
    right: 0,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  playpause: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 100,
    position: 'absolute',
    right: 20,
    bottom: -10
  }
})
