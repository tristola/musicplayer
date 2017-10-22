import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlayerActions from '../Redux/PlayerRedux'
import { Colors } from '../Themes/'
import styles from './Styles/PlayerAreaStyle'

const textStyle = {
  fontSize: 25,
  color: Colors.snow
}

class PlayerArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 5,
      counting: false
    }
  }
  componentDidMount () {
    const intervalId = setInterval(() => this.timer(), 1000)
    this.setState({intervalId: intervalId})
  }
  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    const {count, counting} = this.state
    if (counting) {
      let newCount = count - 1
      if (newCount === 0) {
        this.props.play()
        this.setState({count: 5, counting: false})
      } else {
        this.setState({count: newCount})
      }
    }
  }
  render () {
    const { playing, play, pause, stop, metadata } = this.props
    const { count } = this.state
    return (
      <View>
        <View style={styles.container}>
          <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', paddingBottom: 20}}>
            <Text style={textStyle}>
              {metadata && metadata.title}
            </Text>
            <Text style={textStyle}>
              {metadata && metadata.artist}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1.0}
          style={styles.delayedstart}
          onPress={() => this.setState({counting: true})}
        >
          { count !== 5
        ? <Text style={{fontSize: 30, color: 'white'}}>{count}</Text>
        : <Icon size={30} name={'play-circle-o'} color={playing ? 'rgba(0, 0, 0, 0)' : '#fff'} />
        }
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={playing ? pause : play}
          style={styles.playpause}
        >
          <Icon size={30} name={playing ? 'pause' : 'play'} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          playing={playing}
          onPress={stop}
          style={styles.stop}
      >
          <Icon size={30} name='stop' color='#fff' />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = ({player}) => {
  const {file, metadata, playing} = player
  return {
    file,
    metadata,
    playing
  }
}

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(PlayerActions.playerPlayPressed()),
  pause: () => dispatch(PlayerActions.playerPausePressed()),
  stop: () => dispatch(PlayerActions.playerStopPressed())
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea)
