import React from 'react';
import styles from './team.module.css';

export default function Team() {
  return (
    <div id={styles.team}>
        <div className={styles.member}>
            <img src="./images/profile.png" alt="" className={styles.memberImg} />
            <div>이름</div>
        </div>
        <div className={styles.member}>dd</div>
        <div className={styles.member}>dd</div>
        <div className={styles.member}>dd</div>

    </div>
  )
}
