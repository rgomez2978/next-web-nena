import React from 'react'
import { Button } from 'primereact/button';

const ButtonComp = ({ cssClassName, cssIcon, cssText, text }) => {
  console.log('ButtonComp', cssClassName, cssIcon)
  return (
    <Button
      className={`${cssClassName}`} aria-label="sesion">
      <i className={`${cssIcon}`}></i>
      <span className={`${cssText}`}>{text}</span>
    </Button>
  )
}

export default ButtonComp