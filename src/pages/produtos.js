import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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

    firebase.initializeApp(
        firebaseConfig,
    );

    firebase.firestore().collection('produtos').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    return (
        <Layout>
            <SEO pageTitle="Linha Gourmet" description="Front end developer, developing apps and web pages"
                keywords="React, Node, Gatsby, front end, developer, API" />
            <section className="section is-size-4-desktop is-size-5-touch" >
                <Title Linha Gourmet />
                <p className="title  has-text-light has-text-centered " > Doces sob encomenda, consulte valores </p>
                <div className="column is-half " >
                    <Card title="Chocolates Gourmet"
                        subtitle="Acoçamos sua vida"
                        link="https://www.instagram.com/docesdabeta.cps/"
                        tags={
                            ['Entre']}
                        image={
                            <Img fixed={data.project1.childImageSharp.fixed}
                                alt='' />
                        }
                    />
                    <Card title="kassel Labs"
                        subtitle="Nossa missão é ajudar as pessoas a expressar sua criatividade e imaginação"
                        link="https://kassellabs.io/"
                        tags={
                            ['Entre']}
                        image={
                            <Img fixed={data.project2.childImageSharp.fixed}
                                alt='' />
                        }
                    />
                    <Card title="Tic-tac-porg"
                        subtitle="Jogo educativo com o tema Guerra nas Estrelas"
                        link="https://luanorlandi.github.io/tic-tac-porg/"
                        tags={
                            ['Entre']}
                        image={
                            <Img fixed={data.project3.childImageSharp.fixed}
                                alt='' />
                        }
                    />
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