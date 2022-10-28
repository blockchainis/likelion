import React from 'react';
import styles from './activeItem.module.css';

export default function ActiveItem({item, id, handleUpdate}) {
  const {id, src, collection, status} = item;
    const deactiveItem = () =>{
        handleUpdate({id, src,collection, status: 'deactive'})
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
