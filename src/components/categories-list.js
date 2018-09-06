import React, { Component } from 'react'
import { Link } from 'gatsby'

import { CATEGORIES_LIST } from '../../config'

class CategoriesList extends Component {
  render() {
    const numPerColumn = Math.ceil(CATEGORIES_LIST.length / this.props.columns);
    const columns = Array.apply(null, {length: this.props.columns});

    return (
      <div className="pure-g">
        {
          columns.map((_, i) => {
            return (
              <div key={i} className={`pure-u-1 pure-u-lg-1-${this.props.columns}`}>
                <ul className={`categories-list ${ i > 0 ? 'categories-list--later-column' : '' }`}>
                  {
                    CATEGORIES_LIST.slice(i * numPerColumn, (i * numPerColumn) + numPerColumn).map((cat) => (
                      <li key={cat.id}>
                        <Link to={`/work/?category=${cat.id}`}>{cat.title}</Link>
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

CategoriesList.defaultProps = {
  columns: 3
}

export default CategoriesList
