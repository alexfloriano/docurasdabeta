import React, { useState, useEffect } from 'react';
import firebase from "gatsby-plugin-firebase"
import 'firebase/firestore';

export const ProdutosContext = React.createContext();

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

      const alteraQuantidade = (event) => {
        const quantidade = event.target.value;    
        const indiceProduto = event.target.id;    
        const produtostemp = [...produtos]    
        produtostemp[indiceProduto].quantidade = quantidade;
        setProdutos(produtostemp);
    
      }
    
     
    return (
        <ProdutosContext.Provider value={{ produtos: produtos, alteraQuantidade:alteraQuantidade }}>
            {props.children}
        </ProdutosContext.Provider>
    );
};

export default ProdutosProvider;