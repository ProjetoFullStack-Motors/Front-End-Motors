import { useState, useEffect } from "react";
import { BoxMessage } from "./style";

const MessageComponent = () => {
  const message = [
    "Não há carros registrados. Vendemos tudo?!",
    'Não há carros suficiente para fazer a página "rodar".',
    "Os carros foram assistir a Copa Pistão, Ka-Chow!",
    "Vivemos entre os humanos agora, mas sempre escondidos.",
    "Qualquer autobots que esteja me ouvindo, estamos aqui e estamos esperando.",
    "Os carros tiraram férias. Espero que estejam se divertindo!",
    'Os carros saíram para uma "conferência automotiva".',
    "Os carros estão escondidos em algum lugar, mas ninguém sabe onde.",
    "Aqui, a única coisa que corre são os rumores sobre os carros desaparecidos.",
    "Chora não coleguinha... carros não encontrados kkkkkk",
    "Infelizmente, todos os carros foram rebocados",
    "Talvez os carros foram abduzidos!"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const changeMessage = () => {
      const randomIndex = Math.floor(Math.random() * message.length);
      setCurrentMessageIndex(randomIndex);
    };

    const intervalId = setInterval(changeMessage, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BoxMessage>
      <p>{message[currentMessageIndex]}</p>
    </BoxMessage>
  );
};

export default MessageComponent;
