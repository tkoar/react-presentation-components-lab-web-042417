// Code SimpleComponentHere Here

import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  handleClick() {
    const CurrentMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({ mood: CurrentMood })
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.mood}
      </div>
    )
  }


}
