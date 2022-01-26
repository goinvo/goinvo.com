import React, { Component } from 'react'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import CATEGORIES_LIST from '../data/os-categories.json'

export const allCategory = {
  id: 'all',
  title: 'All',
}

class CategoriesList extends Component {
  renderCategory = cat => {
    return (
      <li
        key={cat.id}
        className={`os-categories-list__category ${
          cat.id === this.props.selectedCategoryId
            ? 'os-categories-list__category--selected'
            : ''
        }`}
      >
        {this.props.onSelectCategory ? (
          <button
            className="os-categories-list__link button button--link"
            style={{ color: 'white' }}
            onClick={() => this.props.onSelectCategory(cat)}
          >
            {parse(cat.title)}
          </button>
        ) : (
          <Link
            className="os-categories-list__link"
            to={`/work/?category=${cat.id}`}
          >
            {parse(cat.title)}
          </Link>
        )}
        <span className="os-categories-list__selected-indicator" />
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
              className={`os-categories-list__column pure-u-1 pure-u-lg-1-${this.props.columns}`}
            >
              <ul
                className={`os-categories-list ${
                  i > 0 && this.props.includeAll
                    ? 'os-categories-list--later-column-with-all'
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
  columns: 3,
  onSelectCategory: null,
  includeAll: false,
}

export default CategoriesList
