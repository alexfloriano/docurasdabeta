import React, { useState, useEffect } from 'react';
import firebase from "gatsby-plugin-firebase"
import 'firebase/firestore';

export const ProdutosContext = React.createContext([
  {
    nomedoproduto: "Trufa",
    preco: 3,
    quantidade: 0,
    url_daimagem: "https://firebasestorage.googleapis.com/v0/b/docuras-da-beta.appspot.com/o/tru",
  }
]);

const ProdutosProvider = (props) => {

  const [produtos, setProdutos] = useState([]); // criando a variavel produtos

  useEffect(
    () => {
      // lendo o banco de dados firebase.
      firebase.firestore().collection('produtos').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
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

  // console.log("Produtos no produtos provider", produtos);

  const alteraQuantidade = (event) => {
    const quantidade = event.target.value;
    const indiceProduto = event.target.id;
    // console.log(indiceProduto);
    console.log(produtos[indiceProduto].quantidade);
    const produtostemp = [...produtos]
    produtostemp[indiceProduto].quantidade = quantidade;
    // console.log(produtostemp[indiceProduto].quantidade);
    setProdutos(produtostemp);
    console.log(produtos[indiceProduto].quantidade);


  }

  return (
    <ProdutosContext.Provider
      value={{produtos:produtos, alteraQuantidade}}>
      {props.children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;