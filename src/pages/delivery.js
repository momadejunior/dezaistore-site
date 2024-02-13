import React from "react";
import Breadcrumb from "../breadcumbs";
const EnviosEEntrega = () => {
  return (

    <>
     <div  className="faq">
      <Breadcrumb/>
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h2>Envios e Entrega</h2>

          <div className="mb-3">
            <h4>Prazo de Entrega:</h4>
            <p>
              O prazo de entrega varia de acordo com a sua localização. Ao
              finalizar a compra, você terá acesso a estimativas de tempo
              específicas para sua região.
            </p>
            <ul>
              <li>Maputo - 1-2 dias úteis</li>
              <li>Províncias - 5-7 dias úteis</li>
            </ul>
          </div>

          <div className="mb-3">
            <h4>Métodos de Envio:</h4>
            <p>
              Oferecemos opções de envio seguro, utilizando serviços confiáveis
              para garantir que seus produtos cheguem em perfeitas condições.
            </p>
            <ul>
              <li>Envio para províncias: Portador diário</li>
              <li>Para Maputo: Serviço de Deliver</li>
            </ul>
          </div>

          <div className="mb-3">
            <h4>Acompanhamento de Pedido:</h4>
            <p>
              Assim que seu pedido for despachado, você receberá um e-mail
              contendo informações de rastreamento.
            </p>
          </div>

          <div className="mb-3">
            <h4>Custos de Envio:</h4>
            <p>
              Os custos de envio são calculados durante o processo de checkout,
              considerando o peso do pedido e o endereço de entrega. Oferecemos
              transparência nesse processo para garantir a clareza nas despesas.
            </p>
            <ul>
              <li>Cidade de Maputo: 200mt</li>
              <li>Matola: 400mt</li>
              <li>Provincias: [Inserir custo para províncias]</li>
            </ul>
          </div>

          <div className="mb-3">
            <h4>Recebimento do Pedido:</h4>
            <p>
              Certifique-se de que haverá alguém disponível para receber o
              pedido no endereço indicado. Caso não seja possível a entrega na
              primeira tentativa, verifique as opções de reagendamento ou
              retirada conforme as políticas locais do serviço de entrega.
            </p>
          </div>

          <div className="mb-3">
            <h4>Atrasos e Problemas na Entrega:</h4>
            <p>
              Em casos de atrasos ou problemas durante a entrega, entre em
              contato conosco imediatamente. Estamos aqui para resolver qualquer
              inconveniente e garantir a sua satisfação.
            </p>
          </div>

          <p>
            Se surgir alguma dúvida adicional sobre o processo de envio, por
            favor, entre em contato conosco através do e-mail{" "}
            <a href="mailto:seuemail@dominio.com">seuemail@dominio.com</a>.
            Estamos comprometidos em proporcionar uma experiência de compra
            tranquila e eficiente.
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    </>
  );
};

export default EnviosEEntrega;
