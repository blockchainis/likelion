import React from "react";
import styles from "./team.module.css";

export default function Team() {
  return (
    <>
      <h2 className={styles.title}>❕팀소개</h2>
      <div id={styles.team}>
        <div className={styles.member}>
          <img src="./images/profile.png" alt="" className={styles.memberImg} />
          <div className={styles.name}>박세준</div>
          <div className={styles.detail}>팀장</div>
          <div>기획 및 개발 보조</div>
        </div>
        <div className={styles.member}>
          <img src="./images/profile.png" alt="" className={styles.memberImg} />
          <div className={styles.name}>위성환</div>
          <div className={styles.detail}>unity3d 개발</div>
          <div>게임개발자</div>
        </div>
        <div className={styles.member}>
          <img src="./images/profile.png" alt="" className={styles.memberImg} />
          <div className={styles.name}>정우철</div>
          <div className={styles.detail}>주기획자</div>
          <div>아이디어</div>
        </div>
        <div className={styles.member}>
          <img src="./images/profile.png" alt="" className={styles.memberImg} />
          <div className={styles.name}>이혜림</div>
          <div className={styles.detail}>react 개발</div>
          <div> 웹페이지 개발</div>
        </div>
      </div>
    </>
  );
}
