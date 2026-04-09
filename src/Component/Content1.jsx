import React from 'react';
import styles from './content1.module.css';

const Content1 = () => {
  return (
    <div className={styles.row}>
      
      {/* Task input */}
      <input type="text" placeholder="Add ToDo here" />

      
      <input type="date" />

    
      <button className={styles.addBtn}>Add</button>

    </div>
  );
};

export default Content1;