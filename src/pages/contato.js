import React, { useState } from "react";
import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Footer from '../components/Footer/Footer';
import firebase from "gatsby-plugin-firebase"
import 'firebase/firestore';
// import { event } from "jquery";



const Contato = () => {
  // criamos uma variavel erro , iniciando vazia 
  const [erro, setErro] = useState({});
  // criando objeto cliente vazio.
  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  console.log(cliente);
  const GravarMensagem = (event) => {

    // exibe os dados que o usúario digitou
    event.preventDefault();

    // criando as variaveis e alocando/vindo os dados do formulario
    const nome = event.target.nome.value;
    console.log(nome);
    const telefone = event.target.fone.value;
    console.log(telefone);
    // const mensagem = event.target.mensagem.value;
    // const email = event.target.email.value;

    if (!erro) {
      // grava os dados que o usuario digitou no BD    
      firebase.firestore().collection('mensagens').add({
        nome: event.target.nome.value,
        fone: event.target.fone.value,
        email: event.target.email.value,
        mensagem: event.target.mensagem.value,
      });
    }else{
      console.log ("Campo não validos");
    }


  }
  const trataNome = (event) => {
    const nome = event.target.value;
    setErro({});
    if (nome.length === 0) {
      const erroAuxiliar = { ...erro, nome: "Campo Nome não pode ser vazio!" };
      setErro(erroAuxiliar);
    }
    const clienteAux = { ...cliente, nome: nome };
    setCliente(clienteAux);



  }
  const trataFone = (event) => {
    const fone = event.target.value;
    setErro({});
    if (fone.length === 0) {
      const erroAuxiliar = { ...erro, fone: "Campo Telefone não pode ser vazio!" };
      setErro(erroAuxiliar);
    } else {
      // verifica se o usuário digitou corretamente um numero de telefone.
      const regexp = /\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
      //const regexp = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
      if (!regexp.test(fone)) {
        const erroAuxiliar = { ...erro, fone: "Digite seu telefone corretamente. o formato deve ser (99) 9999-9999" };
        setErro(erroAuxiliar);
      };
    }
    const clienteAux = { ...cliente, fone: fone };
    setCliente(clienteAux);
  }




  const trataEmail = (event) => {
    const email = event.target.value;
    setErro({});

    if (email.length === 0) {
      const erroAuxiliar = { ...erro, email: "Campo E-mail não pode ser vazio!" };
      setErro(erroAuxiliar);
    } else {
      const regexpemail = /^[a-z0-9.]+@[a-z0-9.]/i;
      if (!regexpemail.test(email)) {
        const erroAuxiliar = { ...erro, email: " digite seu email corretamente. o formato deve ser xxx@xxx.xxx" };
        setErro(erroAuxiliar);
      }

    }
    const clienteAux = { ...cliente, email: email };
    setCliente(clienteAux);
    console.log(cliente.email);
  }



  const trataMensagem = (event) => {
    const mensagem = event.target.value;
    setErro({});
    if (mensagem.length === 0) {
      const erroAuxiliar = { ...erro, mensagem: "Por favor Deixe sua mensagem conosco!" };
      setErro(erroAuxiliar);
    }
    const clienteAux = { ...cliente, mensagem: mensagem };
    setCliente(clienteAux);

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


          <form onSubmit={GravarMensagem} className="form">
            <div className="form-group">
              <input type="text" className="form-control" name="nome" aria-describedby="nome" placeholder="Seu nome" value={cliente.nome} onChange={trataNome} />
              {erro.nome ?
                <div class="alert alert-danger" role="alert">
                  {erro.nome}
                </div> : null}
            </div>


            <div className="form-group">
              <input type="text" className="form-control" name="fone" aria-describedby="fone" placeholder="(99) 9999-9999" value={cliente.fone} onChange={trataFone} />
              {erro.fone ?
                <div class="alert alert-danger" role="alert">
                  {erro.fone}
                </div> : null}
            </div>


            <div className="form-group">
              <input type="text" className="form-control" name="email" aria-describedby="email" placeholder="Seu e-mail" value={cliente.email} onChange={trataEmail} />
              {erro.email ?
                <div class="alert alert-danger" role="alert">
                  {erro.email}
                </div> : null}
              <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
            </div>


            <textarea className="field" name="mensagem" cols="100" rows="10" placeholder="Preencha sua mensagem" value={cliente.mensagem} onChange={trataMensagem} >
            </textarea>
            {erro.mensagem ?
              <div class="alert alert-danger" role="alert">
                {erro.mensagem}
              </div> : null}


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

