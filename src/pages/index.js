
import React from "react";
//import { Container,Col,Row } from 'react-strap';
import fotodacapa1 from '../assets/images/Gourmet.png';
import fotodacapa2 from '../assets/images/caixinha.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import Layout from 'components/Layout';
import SEO from 'components/SEO'
import Footer from '../components/Footer/Footer';
//import ProdutosProvider from '../context/ProdutosProvider';

const Home = () => {

  // const { produtos } = useContext(ProdutosContext);
  // produtos ? console.log(produtos) : null;

  return (
    <Layout>
      <SEO description="Site do Doçuras da Beta" keywords="Doces,Doçuras da Beta, Alimentação, Chocolates" />
      <div className="Container">
        <div className="row">
          <h1 className="has-text-centered">Doçuras da Beta</h1>
        </div>
        <div className="row">
          <h2 className="">Chocolates finos</h2>
        </div>
        <div className="row">
          <h4 className=" ">
            Seja Bem Vindo ao mundo dos chocolates
      </h4>
        </div>
        <div className="row">
          <h4 className="">
            {` Aceitamos encomendas para festas e eventos comemorativos 🍬🍫🍯🐝  
         `}
          </h4>
        </div>

        <div className="row">
          <div className="col-sm-5">
            <img className="imagem1" src={fotodacapa1} alt="logoGourmet" />
          </div>
          <div className="col-sm-5">
            <img className="imagem2" src={fotodacapa2} alt="caixinhaBrigadeiros" />
          </div>
        </div>

        <div className="has-text-centered">
          <a href="https://www.facebook.com/Do%C3%A7uras-da-Beta-960108510778018" target="_blank" aria-label="facebook">
            <span className=" icon is-large fa-3x" >
              <FontAwesomeIcon icon={faFacebook} />
            </span>
          </a>
          <a class="instagram" href="https://www.instagram.com/docesdabeta.cps/" target="_blank" aria-label="instagram">
            <span className=" instagram icon is-large fa-3x" >
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a class="whatsapp" href=" https://web.whatsapp.com/send?phone=5519988067156" target="_blank" aria-label="instagram">
            <span className="whatsapp icon is-large fa-3x" >
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </a>


       </div>
      </div>
      <section className="section content is-size-4-desktop is-size-5-touch" >
        <Footer />
      </section>
    </Layout>
  )


};

export default Home;
