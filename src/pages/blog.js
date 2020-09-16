import React from "react";
import PropTypes from 'prop-types';
import { graphql, Link }from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from "../components/Title";

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
    <p>Desde 2013 no mercado trabalhando com ingredientes de qualidade
      e muita dedicação em cada produto.
      Sua satisfação é nossa meta!!!
    </p>
    <p className="has-text-centered" >      
      Acompanhe nossa pagina em  
        {' '}
        <a href= "https://br.linkedin.com/in/alex-floriano-4b147679" >
            Linkedin  
        </a> 
        {' '} 
        e
        {' '}
        <a href= "https://www.facebook.com/alex.floriano.37" >
        Facebook
        </a> 
        {' '}
        para saber mais sobre
        {' . '}
        </p>

      <div className="columns is-centered" >
      <div className="column is-half is-offset-one-quarter"> 
      <Card 
      title= "Club Oficial Gol GT"
      subtitle= "Página dedicada a este esportivo nacional da década de 80! Gol Gt isso diz tudo."
      link= "https://www.instagram.com/golgtclube/?hl=pt"
      tags={['Gol GT 1.8']}
      image= { <Img fixed={data.post1.childImageSharp.fixed} alt='Gatsby Course'/> }       
      />
       <Card 
      title= "kassel Labs"
      subtitle= "Alex Floriano e Nihey Takizawa, do Kassel Labs , fizeram isso novamente. Depois de encontrar muito sucesso com seu Star Wars Intro Creator "
      link= "https://kassellabs.io/"
      tags={['Entre']}
      image= { <Img fixed={data.post2.childImageSharp.fixed} alt=''/> }       
      />       
    </div>
</div> 

<p className="has-text-centered" >
       Entre
         {' '}
         <Link to="/stack" >stack</Link>
        .          
         </p>  
          
  </section>
      </Layout>
   );

Blog.propTypes ={
  data: PropTypes.object.isRequired,
};


export default Blog;