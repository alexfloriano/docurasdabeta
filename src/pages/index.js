import React from 'react';


import fotodacapa from '../assets/images/Gourmet.png';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
  faFacebook, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO'
import Footer from '../components/Footer/Footer';



const Home = () => (
  <Layout>
    <SEO
          description="Site do Doçuras da Beta"
          keywords="Doces,Doçuras da Beta, Alimentação, Chocolates"
          
    /> 
    <h1 className="title  has-text-light has-text-centered ">Doçuras da Beta</h1>
    <h2 className="subtitle  has-text-warning  has-text-centered ">Chocolates finos</h2>
    <h4 className="has-text-centered title has-text-light ">
      Seja Bem Vindo ao mundo dos chocolates
      </h4>
      <h4 className="has-text-centered title has-text-light ">
      {` Aceitamos encomendas para festas e eventos comemorativos 🍬🍫🍯🐝  
         `}
         </h4>         
    <img className="photo image is-120x120" style={{width:'30%' }}  src= {fotodacapa} alt="logotipo"/> 
    <div className="has-text-centered">    
    <a href="https://www.facebook.com/Do%C3%A7uras-da-Beta-960108510778018" aria-label="facebook">
      <span className=" icon is-large fa-3x" >
      <FontAwesomeIcon icon={faFacebook} />       
      </span> 
      </a> 
    <a href="https://www.instagram.com/docesdabeta.cps/" aria-label="instagram">
      <span className=" icon is-large fa-3x" >
      <FontAwesomeIcon icon={faInstagram} />  
      </span> 
      </a> 

    </div>
    <section className="section content is-size-4-desktop is-size-5-touch" >
    
     <Footer/>     

    
     </section>
  </Layout>
);

export default Home;
