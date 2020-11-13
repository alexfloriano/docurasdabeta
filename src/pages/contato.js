import React from "react";
import  Helmet  from 'react-helmet';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Footer from '../components/Footer/Footer';

const Stack = ( ) =>(
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
    <style>
      body{}
    </style>
    <body>      
    <section className="section is-size-4-desktop is-size-5-touch">      
        <div className="has-text-centered" >
            <p className="content" >
            Contatos pelos Whatsapp (19) 998811-9553
            Horário de funcionamento: Segunda à Sexta das 8:00 às 17:00 horas
            </p>              
              <form class="form"method="POST"action="./email.php">
                <input class="field"name="nome"placeholder="Nome*"/> <br></br>
                <input class="field" name="telefone" placeholder="Fone*"/> <br></br>                
                <input class="field" name="email" placeholder="E-mail*"/> <br></br>                               
                <textarea class="field" name=" mensagem"cols="100" rows="10" placeholder="Preencha sua mensagem"></textarea>          
              <div id="botao">                 
                  <input type="submit" name="botao " value="ENVIAR" class="botaoEnviar" />
                  <div id="btn">
                    <input type="reset" name="btn" value="LIMPAR" class="btnLimpar" />
                   </div>
               </div>                               
                </form>                
            </div>                
        </section>
        </body>
        <Footer/>        
      </Layout>      
   );
export default Stack;


