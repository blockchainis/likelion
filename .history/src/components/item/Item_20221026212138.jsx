import React from 'react'
import styles from './item.module.css'

export default function Item({src, status, handleUpdate}) {
  const active = () => {
    handleUpdate({id, src, status: 'active'})
  }
  return (
<div className={styles.item} data-type="active">
    <img src={src} alt="" className={styles.itemImg} />
    {status === 'active'? <div><button disabled>착용중</button></div> : <div><button  onClick={active}>착용하기</button></div>}
    
</div>
  )
}
