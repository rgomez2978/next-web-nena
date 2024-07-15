import React from 'react'


const ButtonComp = ({ cssClassName, cssIcon, cssText, text }) => {
  console.log('ButtonComp', cssClassName, cssIcon)
  return (
    <button
      className={`${cssClassName}`} aria-label="sesion">
      <i className={`${cssIcon}`}></i>
      <span className={`${cssText}`}>{text}</span>
    </button>
  )
}

export default ButtonComp