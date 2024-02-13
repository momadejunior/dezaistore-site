import React, { useState } from "react";
import './faq.css';
import Breadcrumb from "./breadcumbs";


const FaqAccordion = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  };

  const faqData = [
    {
        question: "Como faço para comprar na loja online?",
        answer: "- Explore o site, selecione os produtos desejados e adicione ao carrinho. Prossiga para o checkout, entraremos em contato para fornecer os dados de pagamento.",
    },
    {
        question: "Quais métodos de pagamento são aceitos?",
        answer: "- Numerário\n- Transferência bancária\n- E-mail\n- M-Pesa",
    },
    {
        question: "Posso modificar ou cancelar meu pedido após a compra?",
        answer: "Infelizmente, não garantimos alterações após o pagamento. Recomendamos rever cuidadosamente o pedido antes de finalizá-lo.",
    },
    {
        question: "Como rastreio meu pedido?",
        answer: "Enviaremos um e-mail com informações de rastreamento assim que seu pedido for enviado.",
    },
    {
        question: "Qual é a política de devolução?",
        answer: "Aceitamos trocas apenas, dentro de 5 dias úteis após a entrega. Consulte nossa página de 'Política de Trocas e Devoluções' para mais detalhes.",
    },
    {
        question: "Os produtos são de boa qualidade?",
        answer: "Sim, comprometemo-nos com produtos de alta qualidade. Entre em contato se houver algum problema.",
    },
    {
        question: "Vocês oferecem tamanhos plus size?",
        answer: "Atualmente, nossos tamanhos vão até ao L, mas fazemos artigos sob medida para abranger outros tamanhos. Entre em contato para informações adicionais.",
    },
    {
        question: "Qual é o prazo de entrega?",
        answer: "O prazo varia conforme a localização. Consulte nossa página de 'Envio e Entrega' para estimativas de tempo.",
    },
    {
        question: "Como entro em contato com o serviço ao cliente?",
        answer: "Estamos disponíveis por e-mail (infodezai@gmail.com). Respondemos o mais rápido possível para ajudar com suas dúvidas.",
    },
    {
        question: "Vocês oferecem descontos ou promoções?",
        answer: "Sim, ocasionalmente oferecemos descontos e promoções. Fique atento às nossas redes sociais e newsletters para atualizações.",
    },
];

  
  // You can now use the updated faqData array with the additional FAQ entries.
  

  return (
    <>
    <div className="faq">
      <Breadcrumb />
    </div>
    <div className="container-accordion">
      <div className="row">
        <div className="col-accordion">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index + 1}>
                <button
                  id={`accordion-button-${index + 1}`}
                  aria-expanded={expandedItem === index + 1 ? "true" : "false"}
                  onClick={() => toggleAccordion(index + 1)}

                  className="accordion-button"
                >
                  <span className="accordion-title">{faq.question}</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div
                  className={`accordion-content ${
                    expandedItem === index + 1 ? "visible" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FaqAccordion;