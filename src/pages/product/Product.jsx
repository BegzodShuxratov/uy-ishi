import styles from './product.module.css'
import data from "../home/data.js"
import { Link, useParams } from 'react-router-dom';


function Product() {
   const {id}= useParams();
   const mahsulot=data[id];


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

    <div className='container'>
      <button><Link to="/">Back</Link></button>
    <div className={styles.main}>
       <img src={mahsulot.img[0]} alt="logo" />
       <div className={styles.textbox}>
        <h3>{mahsulot.yulduz} ⭐⭐⭐ </h3>
        <h1>{mahsulot.name}</h1>
        <h1>{mahsulot.description}</h1>
        <h2>Narxi: {mahsulot.price}$</h2>
        <h2>{mahsulot.color}</h2>
       </div>
      </div>  
    </div>
  

    </div>
  )
}

export default Product