import React from "react";
import styles from "./howToPlay.module.css";

export default function HowToPlay() {
  return (
    <>
      <h2 className={styles.title}>❕게임에 대한 소개페이지</h2>
      <div className={styles.howToPlay}>
        <div>
          <h3 className={styles.subtitle}>-로그인 후 메뉴소개</h3>
          <img
            src="./images/aboutmenu.png"
            alt=""
            className={styles.aboutMenuImg}
          />
        </div>
        <div>
          <h3 className={styles.subtitle}>-각페이지 소개</h3>
          <p className={styles.bold}>SHOP :</p>한정 아이템들을 구매가능,
          아이템은 오픈 씨 및 해 사이트에서 열람가능. 아이템 판매는 오픈시에서,
          기존 로그인 지갑으로 로그인시 가능.
          <br />
          <p className={styles.bold}>MY PAGE:</p> 가지고 있는 아이템과
          착용아이템을 확인하고, 아이템 착용 및 해제 가능. 닉네임 변경권 소유시,
          이곳에서 닉네임변경이 가능하다. <br />
          <p className={styles.bold}>GAME START :</p>
          game start!
          <br />
          <br />
        </div>
        <div>
          <h3 className={styles.subtitle}>-게임방법소개</h3>
          게임방법소개 text
          <br />
        </div>
      </div>
    </>
  );
}
