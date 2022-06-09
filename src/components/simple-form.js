import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={{
            width: 500,
            padding: 8,
            borderStyle: 'solid',
            borderColor: '#C9461D',
            borderWidth: '1.3px',
            borderRadius: 0,
          }}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <input
          type="submit"
          value="SUBSCRIBE"
          className="button button--primary button--lg "
          style={{
            width: 'auto',
            minWidth: 0,
            verticalAlign: 'top',
          }}
        />
      </form>
    )
  }
}

export default Form
