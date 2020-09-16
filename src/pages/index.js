import React from 'react';
import { Link , StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
  faFacebook, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO'


const Home = () => (
  <Layout>
    <SEO
          description="Front end developer, developing apps and web pages"
          keywords="React, Node, Gatsby, front end, developer, API"
    />
    <figure className="photo image is-128x128">      
      <StaticQuery
          query={ graphql`
          query {
            file(relativePath: { eq: "caixinha.jpeg" }) {
              childImageSharp {
                fixed(width: 600, height: 220) {
                  ...GatsbyImageSharpFixed
                }                
              }
            }
          }
       `}
        
        render={data =>(
          <Img 
          fixed={data.file.childImageSharp.fixed}
          imgStyle={{ borderRadius:'10'}}
          alt=" Luan Orlandi"
          />
         )}       
        />     
    </figure>    
    <h1 className="title  has-text-light " >Doçuras da Beta</h1>
    <h2 className="subtitle  has-text-warning ">Chocolates finos</h2>
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
    <h4 className="has-text-centered title has-text-light ">
      Seja Bem Vindo ao mundo dos chocolates!
      
      {' '}
      <span role="img" aria-label="confused">
      😄

      </span>      
      </h4>

    <p>
    <h4 className="has-text-centered title has-text-light ">
      {` Acetamos encomendas para festas e eventos comemorativos 🍬🍫🍯🐝  
         `}
         </h4>         
     </p>  
      
       <p>
         Conheça mais sobre meus trabalhos em: 
         {' '}
         
         <Link to="/projects" >Linha Gourmet</Link> 
         {' '}
         
         <p>  &copy; 2020 DoçurasDabeta</p>
        
       </p>
     </section>
  </Layout>
);

export default Home;
