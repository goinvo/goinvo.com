import React from 'react'

const Quote = ({ quotee, quoteeSub, children }) => (
  <div className="quote">
    <p className="quote__content header--lg">{children}</p>
    <p className="text--caption">
      <span>{quotee}</span>
      <br />
      <span>{quoteeSub}</span>
    </p>
  </div>
)

export default Quote
