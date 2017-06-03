import React from 'react'
import { Animated } from 'react-native'
import Animation from 'lottie-react-native'

export default class PlayPause extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
      play: true
    }
  }

  toggle = () => {
    const tovalue = this.state.play ? 1 : 0
    this.setState({play: !this.state.play})
    Animated.timing(this.state.progress, {
      toValue: tovalue,
      duration: 500
    }).start()
    this.props.onPress && this.props.onPress()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.playing !== nextProps.playing
  }
  componentWillUpdate () {
    this.toggle()
  }

  render () {
    return (
      <Animation
        style={{
          width: 200,
          height: 200
        }}
        source={require('./play_pause.json')}
        progress={this.state.progress}
      />
    )
  }
}
