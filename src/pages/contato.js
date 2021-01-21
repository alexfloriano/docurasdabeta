import React from "react";
import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Footer from '../components/Footer/Footer';


const Contato = () => {
  const EnviarMensagem = (event) => {
    
    //event.preventDefault();

    console.log("cliquei no botão")
  }
  return (
    <Layout>
      <SEO
        pageTitle="Stack"
        description="Front end developer, developing apps and web pages"
        keywords="React, Node, Gatsby, front end, developer, API"
      />
      <Helmet>
        <script
          async
          src="https://cdn1.stackshare.io/javascripts/client-code.js"
          charset="utf-8"
        />
      </Helmet>


      <div className="Container">
        <div className="row">


          <form onSubmit={EnviarMensagem} className="form">
            <div className="form-group">
              
              <input type="text" className="form-control" id="nome" aria-describedby="nome" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              
              <input type="text" className="form-control" id="fone" aria-describedby="fone" placeholder="Seu telefone" />
            </div>
            <div className="form-group">
              
              <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="Seu e-mail" />
              <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
            </div>
            <textarea className="field" name=" mensagem" cols="100" rows="10" placeholder="Preencha sua mensagem"></textarea>
            <div className="botoes" id="botao">
              <input className="m-1  botaoEnviar" type="submit" name="botao" value="ENVIAR" />
              <input className="m-1  btnLimpar" type="reset" name="btn" value="LIMPAR" />
            </div>
            <br />
          </form>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contato;


