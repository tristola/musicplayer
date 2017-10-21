import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FilterStyle'

export default class Filter extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Filter Component</Text>
      </View>
    )
  }
}
