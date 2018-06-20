import React, { Component } from 'react'

export class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() {
    return (
        <li>
            {this.props.name}
        </li>
    )
  }
}

export default VideoListItem
