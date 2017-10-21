import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  stop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    right: 0,
    bottom: 6
  },
  delayedstart: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    right: 130,
    bottom: 40
  },
  playpause: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    right: 90,
    bottom: 40
  },
  textStyle: {
    fontSize: 25,
    color: 'rgba(255, 255, 255, 1)'
  }
})
