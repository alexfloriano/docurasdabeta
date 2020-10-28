import React from "react";
import PropTypes from 'prop-types';
import { graphql,Link }from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';
import Footer from '../components/Footer/Footer';


export const queryImage =  graphql`
query {
  project1: file(relativePath: { eq: "Gourmet.png" }) {
    childImageSharp {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
   }  
    project2: file(relativePath: { eq: "kassellabs.jpg" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
   project3:   file(relativePath: { eq: "maca.jpg" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      } 
  }
`;
const Projects = ({data }) =>(
<Layout>
    <SEO 

      pageTitle="Linha Gourmet"

       description="Front end developer, developing apps and web pages"
     keywords="React, Node, Gatsby, front end, developer, API"
    />    
    <section className="section is-size-4-desktop is-size-5-touch">      
    <Title>Linha Gourmet</Title>
    
    <p className="title  has-text-light has-text-centered " >Doces sob encomenda, consulte valores</p>
   
          
      <div className="column is-half "> 
      <Card 
      title= "Chocolates Gourmet"
      subtitle= "Acoçamos sua vida"
      link= "https://www.instagram.com/docesdabeta.cps/"
      tags={['Entre']}
      image= { <Img fixed={data.project1.childImageSharp.fixed} alt=''/> }    
         
      />
       <Card 
      title= "kassel Labs"
      subtitle= "Nossa missão é ajudar as pessoas a expressar sua criatividade e imaginação"
      link= "https://kassellabs.io/"
      tags={['Entre']}
      image= { <Img fixed={data.project2.childImageSharp.fixed} alt=''/> }       
      />
       <Card 
      title= "Tic-tac-porg"
      subtitle= "Jogo educativo com o tema Guerra nas Estrelas"
      link= "https://luanorlandi.github.io/tic-tac-porg/"
      tags={['Entre']}
      image= { <Img fixed={data.project3.childImageSharp.fixed} alt=''/> }       
      /> 
       </div>
      
            
  </section>
  <Footer/>
      </Layout>
   );

Projects.propTypes ={
  data: PropTypes.object.isRequired,
};


export default Projects;