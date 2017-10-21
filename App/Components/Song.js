import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Styles/SongStyle'
import { getFormattedTime } from '../Lib/TimeLib'
import { List, ListItem, Avatar } from 'react-native-elements'

const Song = ({song, file, onPress}) => (
  <ListItem
    avatar={<Avatar small rounded title={song.genre.substring(0,2).toUpperCase()} activeOpacity={0.7} />}
    onPress={() => onPress()}
    key={song.title}
    rightIcon={<View/>}
    badge={{value: getFormattedTime(song.duration)}}
    title={`Artist:${song.artist} title:${song.title}`}
    subtitle={`${song.genre}:${getFormattedTime(song.duration)}`}
  />
)

export default Song
