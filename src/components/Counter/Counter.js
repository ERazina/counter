import React from 'react';
import { Button, Result } from '../../components/index';


function Counter () {
  return (
    <div className="counter">
        <Button value="increase"/>
        <Button value="decrease"/>
        <Result />
    </div>
  );
}

export default Counter;