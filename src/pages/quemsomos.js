import React from "react";
import PropTypes from 'prop-types';
import { graphql, Link }from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from "../components/Title";
import Footer from '../components/Footer/Footer';

export const queryImage =  graphql`
query {
  post1: file(relativePath: { eq: "golgt.jpg" }) {
    childImageSharp {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
   }  
    post2: file(relativePath: { eq: "StrangerThings.jpg" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }   
    } 
  }
`;
const Blog = ({data }) =>(
<Layout>
    <SEO 

      pageTitle="Blog"

       description="Front end developer, developing apps and web pages"
     keywords="React, Node, Gatsby, front end, developer, API"
    />    
    <section className="section is-size-4-desktop is-size-5-touch">
    
    <Title>Quem Somos</Title>
    <h4>
      Sobre 
    </h4>
    <h5>Desde 2013 no mercado trabalhando com ingredientes de qualidade
      e muita dedicação em cada produto.
     <h5 >Sua satisfação é nossa meta!!!</h5>      
     
     </h5>
    <h5 className="" >      
      Acompanhe nossa pagina em  
       
        {' '}
        <a href="https://www.facebook.com/Do%C3%A7uras-da-Beta-960108510778018" >
        Facebook
        </a> 
        {' '}
        para saber mais sobre
        {' . '}
        </h5>
       Fale conosco
         {' '}
         <Link to="/stack" >Entre</Link> 
         {' '}
          <h5>Nosso parceiro <a href="https://www.boxpressembalagens.com.br/">   
          boxpressembalagens          
           </a>
           </h5>  
         
          
  </section>
  <Footer/>
      </Layout>
   );

Blog.propTypes ={
  data: PropTypes.object.isRequired,
};


export default Blog;