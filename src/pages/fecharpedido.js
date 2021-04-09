import React from "react";
import Layout from 'components/Layout';
import Footer from '../components/Footer/Footer';
// criar função fechar pedido
const FecharPedido =  ({produtos} ) => {
    console.log("produtos",produtos);
    return(
        <Layout>
            <p>
                {produtos}
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