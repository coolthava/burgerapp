import React from 'react'

import classes from './Button.module.css'

const button = (props) => (
    <button 
        type={props.type}
        onClick= {props.clicked}
        disabled={props.disabled}
        className={[classes.Button , classes[props.btnType]].join(' ')}
        >{props.children}</button>
)

export default button