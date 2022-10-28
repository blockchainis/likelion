import React from 'react'
import styles from './item.module.css'

export default function Item({src, id, status, handleUpdate}) {
  const active = () => {
    handleUpdate({id, src, status: 'active'})
  }
  const buyItem = () => {
    console.log({id, src, status});
  }
  return (
<div className={styles.item} data-type="active">
    <img src={src} alt="" className={styles.itemImg} />
    {status === 'active'? <div><button disabled>착용중</button></div> : status=== 'deactive' ? <div><button  onClick={active}>착용하기</button></div>: <div>잔여수량 :10000 <button onClick={buyItem}>구매</button></div>}
    
</div>
  )
}
