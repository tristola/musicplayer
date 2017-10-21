import {StyleSheet} from 'react-native'
import {Fonts, Colors} from '../../Themes/'

export default StyleSheet.create({
  applicationView: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base

  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
