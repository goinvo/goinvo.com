import React, { Component } from 'react'
import { Link } from 'gatsby'

import config from '../../config'

class TopicsList extends Component {
  render() {
    const numPerColumn = Math.ceil(config.topics.length / this.props.columns);
    const columns = Array.apply(null, {length: this.props.columns});

    return (
      <div className="pure-g">
        {
          columns.map((_, i) => {
            return (
              <div key={i} className={`pure-u-1 pure-u-lg-1-${this.props.columns}`}>
                <ul className={`topics-list ${ i > 0 ? 'topics-list--later-column' : '' }`}>
                  {
                    config.topics.slice(i * numPerColumn, (i * numPerColumn) + numPerColumn).map((topic) => (
                      <li key={topic.id}>
                        <Link to={`/work/?topic=${topic.id}`}>{topic.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}

TopicsList.defaultProps = {
  columns: 3
}

export default TopicsList
