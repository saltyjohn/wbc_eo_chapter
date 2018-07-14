import React from 'react';

// Icons
import emailIcon from '../icons/zondicons/envelope.svg'

const EmailComponent = ({ email }) => (
  // "mailto:" may not be the desired end result
  <a href={`mailto:${email}`}>{email}
    <img
      src={emailIcon}
      alt="email icon with link"
      style={{
        width: '1.3em',
        height: '1.3em',
        padding: 0,
        margin: '0 1em',
      }}
    />
  </a>
)

export default EmailComponent
