import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/SongStyle'
import { getFormattedTime } from '../Lib/TimeLib'

export default ({song, file}) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{song.genre}</Text>
    <Text style={styles.text}>{song.artist}</Text>
    <Text style={styles.text}>{song.title}</Text>
    <Text style={styles.text}>{getFormattedTime(song.duration)}</Text>
  </TouchableOpacity>
)
