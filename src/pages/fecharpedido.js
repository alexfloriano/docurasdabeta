import React, { useContext, useState, useEffect } from "react";
import Layout from 'components/Layout';
import Footer from '../components/Footer/Footer';
import { ProdutosContext } from '../context/ProdutosProvider';
import firebase from "gatsby-plugin-firebase";

// criar função fechar pedido
const FecharPedido = () => {
  const [pedidototal, setPedidoTotal] = useState(0);
  const [cliente, setCliente] = useState({
    nome: "",
    fone: "",
    email: "",
  });
  const [erro, setErro] = useState({});

  // criamos uma variavel pedido, iniciando vazia 

  //const [pedido, setPedido] = useState({});
  // criando objeto cliente vazio.
  const [pedido, setPedido] = useState({
    //nome do cliente: ,
    fone: "",
    email: "",
    mensagem: "",
  });

  const { produtos } = useContext(ProdutosContext);
  //console.log(produtos);

  useEffect(() => {

    somarpedido();
  });
  const somarpedido = () => {
    let soma = 0;
    produtos.map(function (produto, index) {
      return (soma = soma + produto.quantidade * produto.preco)
    })
    setPedidoTotal(soma);
    console.log(soma);
  }
  const EnviarPedido = (event) => {
    console.log("Erro:", erro);
    // exibe os dados que o usúario digitou
    event.preventDefault();
    // criando as variaveis e alocando/vindo os dados do formulario
    const nome = event.target.nome.value;
    const fone = event.target.fone.value;
    const email = event.target.email.value;
    const pedidoAux = {
      nomeCliente: nome,
      telefoneCliente: fone,
      emailCliente: email,
      produtos: produtos
    };
    firebase.firestore().collection('pedidos').add(pedidoAux)
      .then(() => {
        alert("pedido enviado com sucesso");
        console.log("Pedido Armazenado com Sucesso!!!");
        setCliente({
          nome: "",
          fone: "",
          email: "",
        });

      })
      .catch((err) => {
        console.log("Problema para armazenar os dados no banco de dados.");
        console.log(err);
      });
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
      // const regexp = /^([1-9]{2})(?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;
      // const regexp = /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
      const regexp = /^(\([1-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/

      if (!regexp.test(fone)) {
        const erroAuxiliar = { ...erro, fone: "Digite seu telefone corretamente. o formato deve ser (99) 9999-9999" };
        setErro(erroAuxiliar);
      };
    }
    const clienteAux = { ...cliente, fone: fone };
    console.log(clienteAux);
    console.log(erro);
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
  return (
    <Layout>
      <h2>Meu Carrinho</h2>
      <p>Confira os produtos adicionados</p>
      <table className="table table-bordered table-striped">
        <tr>
          <th>
            Nome do Produto
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Preço
          </th>
        </tr>
        {produtos.map(function (produto, index) {
          let html = produto.quantidade > 0 ?
            <tr key={index}  >
              <td>
                {produto.nomedoproduto}
              </td>
              <td>
                {produto.quantidade}
              </td>
              <td>
                {produto.preco}
              </td>
            </tr>
            : null
          return (
            html
          )
        })}

      </table>

      <p>
        Total de Produtos R$  {pedidototal}
      </p>

      <form onSubmit={EnviarPedido} className="form">
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
            <div className="alert alert-danger" role="alert">
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


        {erro.mensagem ?
          <div class="alert alert-danger" role="alert">
            {erro.mensagem}
          </div> : null}


        <div className="botoes" id="botao">
          <input className="m-1  botaoEnviar" type="submit" name="botao" value="ENVIAR PEDIDO" />
          {/* <input className="m-1  btnLimpar" type="reset" name="btn" value="LIMPAR" /> */}
        </div>
        <br />
      </form>


      <Footer />
    </Layout>

  )
}

export default FecharPedido;