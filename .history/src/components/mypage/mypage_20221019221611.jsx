import React from 'react';
import styles from './mypage.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MyPage = ({authService}) =>{
    const mypage = true;
    const history = useNavigate();
    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user || history('/');
        });
    });
  

    const onLogout = () => {
        authService.logout();
  };

return (
    <section className={styles.all}>
        <Header authService={authService} onLogout={onLogout} mypage={mypage}/>
        <section className={styles.contents}>
            <div className={styles.profile}>
                <img className={styles.profileImg} src="https://media.istockphoto.com/vectors/dabbing-unicorn-vector-design-vector-id954726306?k=20&m=954726306&s=612x612&w=0&h=2Icz09Ktm0giiVDTwodFwueZ1Cc1g8aFdWQGS7SCjoc=" />
                <div className={styles.status}>
                    <div className={styles.wallet}>
                        <div className={styles.address}>0xF5c1DedC9E25473820b676087EFfd4Fe859C8311</div>
                        <div className={styles.ownedCoin}>232342coin</div>
                    </div>
                    <div className={styles.ownedItems}>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                        </div>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                        </div>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                        <div><button disabled>착용하기</button></div>
                        </div>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                        </div>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />

                        </div>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />

                        </div>
                        <div className={styles.ownedItem}>
                        <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />

                    </div>


                    </div>
                </div>

            </div>
            <div className={styles.allItems}>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button >착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button disabled>구매함</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>
                <div className={styles.item}>
                <img src="https://media.istockphoto.com/vectors/old-ticket-vector-id468417164?k=20&m=468417164&s=612x612&w=0&h=fYWkYYqA196n4BJq8RvkAzwpqhhB9ZN58Wzl4marRPo=" alt="" className={styles.itemImg} />
                <div><button>착용하기</button></div>
                </div>

            </div>


        </section>
        <Footer/>
    </section>
    );
};

// <h1>my page</h1>
// <h2>❕내가 가지고 있는 nft 목록/ 프로필사진 위치 할 예정</h2> 
// <h2>❕프로필사진은 NFT</h2>
// - nft : 한정수량 발급 <br />
// - default character(nft x) - 무료 <br/>
// 프로필 네임 설정 코인으로 구매가능 <br />
// <h2>❕프로필 사진- 착용아이템칸</h2> 
// - wearable NFT : 내가 active 시킨 아이템이 뭔지 직관적으로 확인가능 <br />
// - active 아이템목록 : 직관적으로 확인은 불가능하나 개발이 쉬움 <br />
        

export default MyPage;