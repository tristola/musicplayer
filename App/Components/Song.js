import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/SongStyle'
import { getFormattedTime } from '../Lib/TimeLib'

const Song = ({song, file, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{song.genre}</Text>
    <Text style={styles.text}>{song.artist}</Text>
    <Text style={styles.text}>{song.title}</Text>
    <Text style={styles.text}>{getFormattedTime(song.duration)}</Text>
  </TouchableOpacity>
)

export default Song
