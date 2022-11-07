import React from "react";
import styles from "./shop.module.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../components/item/item";
import { useAuth } from "../../context/AuthContext";

const Shop = ({
  shopItems,
  setShopItems,
  nickname,
  myStatus,
  setMystatus,
  updateScoreLimit,
}) => {
  const shop = true;

  const { user } = useAuth();
  const history = useNavigate();
  useEffect(() => {
    if (!user || !localStorage.getItem("_user")) {
      history("/");
    }
  });
  const onLogout = () => {
    console.log("logout");
  };
  //shop item

  const handleUpdate = (updated) => {
    setShopItems(shopItems.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleBuy = (item) => {
    setShopItems(
      shopItems.map((i) =>
        i.id === item.id ? { ...item, remain: item.remain - 1 } : i
      )
    );
    setMystatus({
      myItems: [
        ...myStatus.myItems,
        {
          id: crypto.randomUUID(),
          src: item.src,
          collection: item.collection,
          status: "deactive",
        },
      ],
      myScore: myStatus.myScore,
    });
    updateScoreLimit();
  };
  useEffect(() => {
    updateScoreLimit();
  }, [myStatus.myItems]);

  return (
    <section className="all">
      <Header shop={shop} />
      <section className={styles.mobileContents}>
        모바일 환경에서는 접속이 되지 않습니다. <br />
        데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
      </section>
      <section className={styles.contents}>
        <div id={styles.shop}>
          <div className={styles.myStatus}>
            <div className={styles.status}>
              <div className={styles.profile}>
                <img
                  className={styles.profileImg}
                  src="./images/profile.png"
                  alt="profile"
                />
                <div className={styles.nickname}>{nickname}</div>
              </div>
              <div className={styles.address}>지갑주소</div>
              <div className={styles.coin}>보유코인</div>
              <div className={styles.others}>others</div>
            </div>
          </div>
          <div className={styles.buyItems}>
            <div className={styles.namebar}>On Sale</div>
            <div className={styles.Items}>
              {shopItems.map((i) => (
                <Item
                  key={i.id}
                  item={i}
                  handleUpdate={handleUpdate}
                  handleBuy={handleBuy}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Shop;
