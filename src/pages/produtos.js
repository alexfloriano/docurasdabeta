import React, { useState, useEffect } from "react";
//import firebase from 'firebase/app';
import firebase from "gatsby-plugin-firebase"
import 'firebase/firestore';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';
import Footer from '../components/Footer/Footer';


const Produtos = ({ data }) => {
  const [produtos, setProdutos] = useState([]); // criando a variavel produtos
  useEffect(
    () => {
      // lendo o banco de dados firebase.
      firebase.firestore().collection('produtos').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            // console.log(doc.id, '=>', doc.data());
            let produto = doc.data();
            produto.quantidade = 0;
            setProdutos((produtos) => [...produtos, produto]);
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });

    },
    [],
  );

  const alteraQuantidade = (event) => {
    const quantidade = event.target.value;
    //console.log (event.target)
    //console.log (quantidade)
    const indiceProduto = event.target.id;
    //console.log(produtos)
    const produtostemp = [...produtos]
    console.log("Produtos:",produtos)
    produtostemp[indiceProduto].quantidade = quantidade;
    console.log("produtos Temp", produtostemp)
    //const produtos = { ...produtos, mensagem: mensagem };
    console.log(produtos)

    setProdutos(produtostemp);

  }

  return (
    <Layout>
      <SEO pageTitle="Linha Gourmet" description="Front end developer, developing apps and web pages"
        keywords="React, Node, Gatsby, front end, developer, API" />
      <section className="section is-size-4-desktop is-size-5-touch" >
        <Title>Produtos</Title>
        <p className="title  has-text-light has-text-centered " > Doces sob encomenda, consulte valores </p>
        <div className="column is-half " >
          {
            produtos.map(function (produto, index) {
              // console.log("indice = ", index);
              // console.log("produto = ", produto);
              return (<Card key={index} indice={index} produto={produto} alteraQuantidade={alteraQuantidade} />)

            })
          }
        </div>
      </section>
      <Footer />
    </Layout>
  )
};

export default Produtos;