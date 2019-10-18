import React, { Component } from 'react'

import Image from './image'

import team from '../data/team.json'

class Author extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // TODO: Also check 'alumni' once that is in
      author: team.find(member => member.name === this.props.name),
    }
  }

  componentDidUpdate() {
    if (this.state.author && this.state.author.name !== this.props.name) {
      this.setState({
        author: team.find(member => member.name === this.props.name),
      })
    }
  }

  render() {
    return (
      <div className="author">
        <div className="author__image pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
          <Image
            src={
              this.props.image || (this.state.author && this.state.author.image)
            }
            className="image--max-width"
          />
        </div>
        <div className="author__bio pure-u-1 pure-u-lg-1-2">
          <p>
            <strong>
              {this.props.name || (this.state.author && this.state.author.name)}
            </strong>
            <span className="text--gray">
              {', '}
              {this.props.company || 'GoInvo'}
            </span>
          </p>
          <p className="text--gray">
            {this.props.children ||
              (this.state.author && this.state.author.bio)}
          </p>
        </div>
      </div>
    )
  }
}

export default Author
