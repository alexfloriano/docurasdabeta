import React, { useContext } from "react";
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';
import Footer from '../components/Footer/Footer';
import { ProdutosContext } from "../context/ProdutosProvider";

const Produtos = () => {

  const { produtos, alteraQuantidade } = useContext(ProdutosContext);
  // console.log("produtos", produtos);
   
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