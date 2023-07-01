import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom';
import Banner from '../images/img2.jpg'
import"../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
     <div className="home" style={{backgroundImage:`url(${Banner})`}}>
      <div className="headerContainer">
          <h2>Hola!</h2>
          <h1>Biriyani Hub</h1>
          <p>Best Biriyani's Ever</p>
          <Link to="/menu">
          <button> ORDER NOW</button>
          </Link></div>
          
     </div>
   </Layout> 

  )
}

export default Home
