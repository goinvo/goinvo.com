import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
// import Footer from '../components/footer'

// import '../styles/components/_header.scss'
// import '../styles/components/footer'

const renderHeader = (element) => {
  ReactDOM.render(<Header />, element)
}
//
// const renderFooter = (element) => {
//   ReactDOM.render(<Footer />, element)
// }

// export renderHeader;
// export renderFooter;

module.exports = renderHeader;
