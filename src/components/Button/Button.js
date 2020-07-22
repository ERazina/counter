import React, {useCallback} from 'react';
import styles from './Button.module.scss';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';


function Button (props) {

    const dispatch = useDispatch();

    const incrementCounter = useCallback(
        () => dispatch({ type: 'increase' }),
        [dispatch]
      )

      const decrementCounter = useCallback(
        () => dispatch({ type: 'decrease' }),
        [dispatch]
      )

    function handleClick(value){
        return value === 'increase' ? incrementCounter() : decrementCounter()
    }

	const btnClass = classnames(
        { [styles[props.value]]: props.value },
            styles.root
	);


  return (
  <button 
    className={btnClass}
    onClick={() => handleClick(props.value)}
    >{props.value}</button>
  );
}

export default Button;