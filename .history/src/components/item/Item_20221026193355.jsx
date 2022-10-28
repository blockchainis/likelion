import React from 'react'
import styles from './item.module.css'

export default function Item({src, status}) {
  return (
<div className={styles.item} data-type="deactive">
    <img src="./images/logo.png" alt="" className={styles.itemImg} />
    {status === 'active'? <div><button disabled>착용중</button></div> : <div><button >착용하기</button></div>}
    
</div>
  )
}
