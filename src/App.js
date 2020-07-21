import React from 'react';
import styles from './App.module.scss';
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div className={styles.root}>
      <Counter />
    </div>
  );
}

export default App;
