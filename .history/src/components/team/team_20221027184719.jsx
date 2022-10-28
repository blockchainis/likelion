import React from 'react';
import styles from './team.module.css';

export default function Team() {
  return (
    <div id={styles.team}>
        <div className={styles.member}>
            <img src="./images/profile.png" alt="" className={styles.memberImg} />
            <div className={styles.name}>박세준</div>
            <div className={styles.detail}>한줄소개</div>
        </div>
        <div className={styles.member}>
            <img src="./images/profile.png" alt="" className={styles.memberImg} />
            <div className={styles.name}>위성환</div>
            <div className={styles.detail}>한줄소개</div>
        </div>
        <div className={styles.member}>
            <img src="./images/profile.png" alt="" className={styles.memberImg} />
            <div className={styles.name}>정우철</div>
            <div className={styles.detail}>한줄소개</div>
        </div>
        <div className={styles.member}>
            <img src="./images/profile.png" alt="" className={styles.memberImg} />
            <div className={styles.name}>이혜림</div>
            <div className={styles.detail}>한줄소개</div>
        </div>

    </div>
  )
}
