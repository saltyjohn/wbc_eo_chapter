import React from 'react'

const ReunionNavButton = ({ year, cView, handleClick, isActive }) => (
  <button
    id={year}
    className={`${cView === year ? 'btn-active' : ''} ${isActive ? '' : 'btn-disabled'}`}
    onClick={handleClick}
  >
    {year}
  </button>
)


export default ReunionNavButton
