import React from 'react';
import styles from './activeItem.module.css';

export default function ActiveItem({src}) {
    const deactiveItem = () =>{

    }
  return (
    <a href={deactiveItem} class={styles.activeItem} >
    <img class={styles.activeItemImg} src={src} alt="description" />
    <div class={styles.activeItemText}>
        <span>착용해제</span>
    </div>
    </a>     
  )
}
