import React, { Component } from 'react'
import { Link } from 'gatsby'

import CATEGORIES_LIST from '../data/categories.json'

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
                      <li key={cat.id} className={`categories-list__category ${cat.id === this.props.selectedCategoryId ? 'categories-list__category--selected' : ''}`}>
                        {
                          this.props.onSelectCategory ?
                            <button className="categories-list__link button button--link" onClick={() => this.props.onSelectCategory(cat.id)}>{cat.title}</button>
                          :
                            <Link className="categories-list__link" to={`/work/?category=${cat.id}`}>{cat.title}</Link>
                        }
                        <span className="categories-list__selected-indicator"></span>
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
  columns: 3,
  onSelectCategory: null
}

export default CategoriesList
