import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: Metrics.baseMargin,
    borderBottomColor: 'rgba(0, 0, 0, 1)',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: Colors.snow
  }
})
