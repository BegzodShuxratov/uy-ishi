import styles from "./home.module.css";
import data from "./data.js";
import { Link } from "react-router-dom";

function Home() {
  console.log(data);

  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <img src="./logo.png" alt="df" />
          <input type="text" placeholder="Search for anything..." />
          <div className={styles.icons}>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </header>
      <main>
        <section className="container">
          <div className={styles.ota}>
           {data.map((p,i)=>{
            return <Link to={"/product/"+i}>
             <div key={i} className={styles.card}>
              <img src={p.img[0]} alt="dfs" />
              <p>
               {p.name}
              </p>
              <h2>{p.price} $</h2>
            </div>
            
            </Link>
           })}
            



          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
