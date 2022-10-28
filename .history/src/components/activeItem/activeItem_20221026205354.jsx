import React from 'react';
import styles from './activeItem.module.css';

export default function ActiveItem({src, key}) {
    const deactiveItem = () =>{
        console.log(key);
    }
  return (
    <div onClick={deactiveItem} className={styles.activeItem} >
    <img className={styles.activeItemImg} src={src} alt="description" />
    <div className={styles.activeItemText}>
        <span>착용해제</span>
    </div>
    </div>     
  )
}
