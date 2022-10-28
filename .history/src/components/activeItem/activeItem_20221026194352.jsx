import React from 'react';
import styles from './activeItem.module.css';

export default function activeItem() {
  return (
    <a href="#" class={styles.activeItem} >
    <img class={styles.activeItemImg} src="./images/logo.png" alt="description" />
    <div class={styles.activeItemText}>
        <span>착용해제</span>
    </div>
    </a>     
  )
}
