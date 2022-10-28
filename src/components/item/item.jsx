import React from 'react'
import styles from './item.module.css'

export default function Item({item, handleUpdate}) {
  const {id, src, collection, status} = item;
  const active = () => {
    handleUpdate({id, src, collection, status: 'active'})
  }
  const buyItem = () => {
    console.log({id, src,collection, status});
  }
  return (
<div className={styles.item} data-type="active">
    <img src={src} alt="" className={styles.itemImg} />
    {status === 'active'? <div><button disabled>착용중</button></div> : status=== 'deactive' ? <div><button  onClick={active}>착용하기</button></div>: <div className={styles.mint}>잔여수량:10000<br/> <button onClick={buyItem}>구매</button></div>}
    
</div>
  )
}