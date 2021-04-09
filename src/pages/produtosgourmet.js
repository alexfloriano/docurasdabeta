import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase"
import 'firebase/firestore';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';
import Footer from '../components/Footer/Footer';


const Gourmet = ({ data }) => {
  const [produtosgourmet, setGourmet] = useState([]);
  console.log("produtos ",produtosgourmet);
  useEffect(
    () => {     
      // lendo o banco de dados firebase.
      firebase.firestore().collection('linhagourmet').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            //console.log(doc.id, '=>', doc.data());
            let gourmet = doc.data();           
            setGourmet((produtosgourmet) => [...produtosgourmet, gourmet]);
            console.log ("produtos ",produtosgourmet);
            
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });

    },
    [produtosgourmet]
  );


  return (
    <Layout>
      <SEO pageTitle="Linha Gourmet" description="Front end developer, developing apps and web pages"
        keywords="React, Node, Gatsby, front end, developer, API" />
      <section className="section is-size-4-desktop is-size-5-touch" >
        <Title>Linha Gourmet</Title>
        <p className="title  has-text-light has-text-centered " > Doces sob encomenda, consulte valores </p>
        <div className="column is-half " >
          {
            produtosgourmet.map(function(gourmet, index) {
              console.log(gourmet);
              return (<Card key={gourmet.nomedoproduto} produto={gourmet} />)
            })
          }
        </div>
      </section>
      <Footer />
    </Layout>
  )
};


Gourmet.propTypes = {
  data: PropTypes.object.isRequired,
};


export default Gourmet;