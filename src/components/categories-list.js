import React, { Component } from 'react'
import { Link } from 'gatsby'

//import CATEGORIES_LIST from '../data/categories.json'
import CATEGORIES_LIST from '../data/categories-buckets.json'

export const allCategory = {
  id: 'all',
  title: 'All',
}

CATEGORIES_LIST.push(allCategory);

class CategoriesList extends Component {
  renderCategory = cat => {
    return (
      <li
        key={cat.id}
        className={`categories-list__category ${cat.id === this.props.selectedCategoryId
          ? 'categories-list__category--selected'
          : ''
          }`}
      >
        {this.props.onSelectCategory ? (
          <button
            className="categories-list__link button button--link"
            onClick={() => this.props.onSelectCategory(cat)}
          >
            {cat.title}
          </button>
        ) : (
          <Link
            className="categories-list__link"
            to={`/work/?category=${cat.id}`}
          >
            {cat.title}
          </Link>
        )}
        <span className="categories-list__selected-indicator" />
      </li>
    )
  }

  render() {
    const numPerColumn = Math.ceil(CATEGORIES_LIST.length / this.props.columns)

    const columns = Array.apply(null, { length: this.props.columns })

    return (
      <div className="pure-g">
        {columns.map((_, i) => {
          return (
            <div
              key={i}
              className={`categories-list__column pure-u-1 pure-u-lg-1-${this.props.columns
                }`}
            >
              <ul
                className={`categories-list ${i > 0 && this.props.includeAll
                  ? 'categories-list--later-column-with-all'
                  : ''
                  }`}
              >
                {i === 0 && this.props.includeAll
                  ? this.renderCategory(allCategory)
                  : null}
                {CATEGORIES_LIST.slice(
                  i * numPerColumn,
                  i * numPerColumn + numPerColumn
                ).map(cat => this.renderCategory(cat))}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

CategoriesList.defaultProps = {
  columns: 4,
  onSelectCategory: null,
  includeAll: false,
}

export default CategoriesList
