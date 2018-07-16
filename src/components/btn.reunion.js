import React from 'react'

const ReunionNavButton = ({ year, cView, handleClick }) => (
  <button
    id={year}
    className={cView === year ? 'btn-active' : ''}
    onClick={handleClick}
  >
    {year}
  </button>
)


export default ReunionNavButton
