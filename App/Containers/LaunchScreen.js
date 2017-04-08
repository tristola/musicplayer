import React from 'react'
import { ScrollView, Text, View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text style={styles.sectionText}>
            {'Loading the files'}
          </Text>
        </ScrollView>
      </View>
    )
  }
}
