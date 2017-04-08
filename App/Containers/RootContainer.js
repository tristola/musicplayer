import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import SonglistActions from '../Redux/SonglistRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

  componentDidMount () {
    // if redux persist is not active fire action to scan files
    if (!ReduxPersist.active) {
      const { scanFiles } = this.props
      if (scanFiles) {
        scanFiles()
      }
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  scanFiles: () => dispatch(SonglistActions.scanFiles())
})

export default connect(null, mapDispatchToProps)(RootContainer)
