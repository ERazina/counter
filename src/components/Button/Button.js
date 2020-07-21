import React from 'react';
import styles from './Button.module.scss';


function Button (props) {

    function handleClick(value){
        return value === "increase" ? console.log('+') : console.log('-')
    }

  return (
  <button 
    className={styles.root}
    onClick={() => handleClick(props.value)}
    >{props.value}</button>
  );
}

export default Button;