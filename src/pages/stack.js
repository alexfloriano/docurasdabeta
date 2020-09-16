import React from "react";
import  Helmet  from 'react-helmet';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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
            Elogios, Dúvidas, Sugestões e Reclamações
            </p>
            <p className="content"> 19-988067156</p> 

              <div class="contato"></div> 
              <h3 > Formulario de contato</h3>
              <form class="form"method="POST"action="./email.php">
                <input class="field"name="nome"placeholder="Nome"/> <br></br>
                <input class="field" name="telefone" placeholder="(DDD) 00000.00.00"/> <br></br>                
                <input class="field" name="email" placeholder="E-mail"/> <br></br>                               
                <textarea class="field" name=" mensagem"cols="100" rows="10" placeholder="digite sua mensagem"></textarea>                         
                <input type="submit" value="enviar"/>                             
                
                </form>  
            </div>                
        </section>

        </body>
        
      </Layout>
      
   );


export default Stack;


