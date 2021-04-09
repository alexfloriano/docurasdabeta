import React, { useContext } from "react";
import Layout from 'components/Layout';
import Footer from '../components/Footer/Footer';
import { ProdutosContext } from '../context/ProdutosProvider';

// criar função fechar pedido
const FecharPedido = () => {

    const {produtos, alteraquantidade} = useContext(ProdutosContext);
    console.log(produtos);

    return (
        <Layout>
            <p>
                nome do produto
                quantidade
                preço
                Trufa 10 quantidades
                preço 25,00
            </p>
            <Footer />
        </Layout>

    )
}

export default FecharPedido;