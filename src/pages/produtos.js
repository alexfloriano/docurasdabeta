import React, { useState, useEffect } from "react";
//import firebase from 'firebase/app';
import firebase from "gatsby-plugin-firebase"
import 'firebase/firestore';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';
import Footer from '../components/Footer/Footer';

const firebaseConfig = {
  apiKey: "AIzaSyDQIFkvPBps22pqidMhm7ecl4eDWP_W-88",
  authDomain: "docuras-da-beta.firebaseapp.com",
  databaseURL: "https://docuras-da-beta.firebaseio.com",
  projectId: "docuras-da-beta",
  storageBucket: "docuras-da-beta.appspot.com",
  messagingSenderId: "238752127009",
  appId: "1:238752127009:web:6d53909b20efd8ac5a2b60"
};

export const queryImage = graphql`
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
const Produtos = ({ data }) => {
  const [produtos, setProdutos] = useState([]);
  console.log(produtos);
  useEffect(
    () => {      
      // lendo o banco de dados firebase.
      firebase.firestore().collection('produtos').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            let produto = doc.data();
            setProdutos((produtos) => [...produtos, produto]);
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });

    },
    [],
  );


  return (
    <Layout>
      <SEO pageTitle="Linha Gourmet" description="Front end developer, developing apps and web pages"
        keywords="React, Node, Gatsby, front end, developer, API" />
      <section className="section is-size-4-desktop is-size-5-touch" >
        <Title>Produtos</Title>
        <p className="title  has-text-light has-text-centered " > Doces sob encomenda, consulte valores </p>
        <div className="column is-half " >
          {
            produtos.map((produto) => {
              return (<Card key={produto.nomedoproduto} produto={produto} />)

            })
          }
        </div>
      </section>
      <Footer />
    </Layout>
  )
};


Produtos.propTypes = {
  data: PropTypes.object.isRequired,
};


export default Produtos;