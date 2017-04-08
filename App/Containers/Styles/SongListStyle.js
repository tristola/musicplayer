import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: Metrics.doubleBaseMargin,
    borderTopRightRadius: Metrics.doubleBaseMargin,
    paddingLeft: 40,
    paddingTop: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: Colors.snow
  }
})
