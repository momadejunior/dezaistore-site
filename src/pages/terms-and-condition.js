import React, { useState } from "react";
import Breadcrumb from "../breadcumbs";
const TermAndCondition = () => {
  const [concordou, setConcordou] = useState(false);

  const handleConcordouChange = () => {
    setConcordou(!concordou);
  };

  return (
    <>

    <div className="faq">
      <Breadcrumb/>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2>Termos e Condições</h2>
            Ao utilizar os serviços da nossa loja, você concorda e aceita os
            seguintes termos e condições%


            <div className="mb-3">
                <h4>1.Uso Responsável</h4>
                <ul>
                <li>
               Compromete-se a utilizar os serviços de forma
              responsável e em conformidade com todas as leis aplicáveis
            </li>
                </ul>
              </div>


            <h4>2.Conta do Cliente</h4>
            <ul>
            <li>
             Ao criar uma conta, é responsável por manter
              a confidencialidade das informações da sua conta, incluindo senha
              e outras credenciais
            </li>
            </ul>

            <h4> 3. Informações Precisas</h4>
            <ul> 
            <li>
              Ao fornecer informações pessoais,
              compromete-se a garantir que sejam precisas, atualizadas e
              completas
            </li>
            </ul>



           <h4>4. Propriedade Intelectual</h4>
           <ul>
           <li>
               Reconhece que todo o conteúdo
              disponível em nossos serviços, incluindo textos, imagens,
              logotipos, etc., é de propriedade exclusiva da nossa loja
            </li>
           </ul>


           <h4>5. Compras</h4>
           <ul>
           <li>
              Ao realizar uma compra, concorda em fornecer
              informações de pagamento precisas e válidas Reconhece que todas as
              vendas são finais, e as trocas estão sujeitas à nossa política de
              trocas
            </li>

           </ul>

            <h4>6. Comunicação</h4>
            <ul>
              
            <li>
               Concorda em receber comunicações da nossa loja,
              como newsletters e atualizações relevantes. Pode optar por sair a
              qualquer momento
            </li>
            </ul>


          <h4> 7. Uso Não Comercial</h4>
          <ul>
          <li>
              Os serviços são destinados apenas para uso
              pessoal e não comercial. Qualquer uso comercial requer permissão
              explícita
            </li>
          </ul>


           <h4> 8. Alterações nos Termos</h4>
           <ul>
           <li>
              Reservamo-nos o direito de alterar estes
              termos a qualquer momento. As alterações entrarão em vigor
              imediatamente após a sua publicação
            </li>
           </ul>

          <h4> 9. Responsabilidade</h4>
          <ul>
          <li>
              A nossa loja não se responsabiliza por danos
              diretos, indiretos, incidentais ou consequentes decorrentes do uso
              dos nossos serviços.
            </li>
          </ul>


            <p>
              Ao utilizar nossos serviços, concorda em cumprir estes termos e
              condições. Se não concordar com algum destes termos, pedimos que
              não utilize os nossos serviços.
            </p>
            <p>
              Para esclarecimentos adicionais, entre em contato com o nosso
              serviço de atendimento ao cliente Atenciosamente, DEZAI Termos e
              Condições
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default TermAndCondition;
