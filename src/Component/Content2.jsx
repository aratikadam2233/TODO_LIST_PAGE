import React from 'react';
import styles from './Content2.module.css';

const Content2 = () => {
  return (
    <div className={styles.container}>

      <div className={styles.row}>
        <p>Buy Cloths</p>
        <p>4/10/2025</p>
        <button className={styles.btn}>Delete</button>
      </div>

      <div className={styles.row}>
        <p>Go to office</p>
        <p>13/12/2025</p>
        <button className={styles.btn}>Delete</button>
      </div>

    </div>
  );
};

export default Content2;