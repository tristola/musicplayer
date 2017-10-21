import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#c09f80'
  },
  text: {
    fontSize: Fonts.size.h4,
    color: Colors.snow
  },
  songlist: {
  }
})
