import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: Metrics.doubleBaseMargin,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  text: {
    fontSize: Fonts.size.h4,
    color: Colors.snow
  }
})
