import React from 'react'
import styles from './howToPlay.module.css'

export default function HowToPlay() {
  return (
    <>
        <h2 className={styles.title}>❕게임에 대한 소개페이지</h2>
        <div className={styles.howToPlay}>
            <div>
                <h3 className={styles.subtitle}>-로그인 후 메뉴소개</h3>
                <img src="./images/aboutmenu.png" alt="" className={styles.aboutMenuImg} />
            </div>
            <div>
            <h3 className={styles.subtitle}>-게임방법소개</h3>
            게임방법소개 text<br/>

            </div>
        
        게임 방법소개<br/>
        각 페이지 소개
        </div>

    </>
    
  )
}