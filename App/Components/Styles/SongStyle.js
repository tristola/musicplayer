import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: Metrics.baseMargin
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: Colors.snow
  }
})
