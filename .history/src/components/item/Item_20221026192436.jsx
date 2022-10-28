import React from 'react'
import styles from './item.module.css'

export default function Item() {
  return (
<div className={styles.item} data-type="active">
    <img src="./images/logo.png" alt="" className={styles.itemImg} />
    <div><button disabled>착용중</button></div>
</div>
  )
}
