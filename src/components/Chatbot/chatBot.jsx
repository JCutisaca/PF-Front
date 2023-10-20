import React, { useState, useRef, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const addMessage = (text, isUser = false) => {
    setMessages([...messages, { text, isUser }]);
  };

  const handleUserMessage = (message) => {
    if (message.trim() !== "") {
      addMessage(message, true);

      switch (message.toLowerCase()) {
        case "teléfono":
            addMessage("Nuestro número de teléfono es 123-456-789. ¿En qué más puedo ayudarte?", false);
            break;
        case "hola":
            addMessage("¡Hola! Soy LadyBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?", false);
            break;
        case "necesito ayuda":
            addMessage("Claro, estaré encantada de ayudarte. ¿Qué duda específica tienes sobre nuestros productos o servicios?", false);
            break;
        case "envíos":
            addMessage("Sí, realizamos envíos a todo el país. ¿En qué ciudad te encuentras? Así te puedo proporcionar detalles sobre los tiempos de entrega.", false);
            break;
        case "necesito información sobre el stock":
            addMessage("Para consultas de stock, por favor indícame el nombre o la descripción del producto que te interesa. Así podré verificar la disponibilidad para ti.", false);
            break;
        case "necesito la dirección del local":
            addMessage("Estamos ubicados en la Calle Principal 123, Ciudad. ¡Te esperamos! ¿Hay algo más en lo que pueda ayudarte?", false);
            break;
        case "productos disponibles":
            addMessage("Tenemos una amplia gama de productos disponibles, incluyendo remeras, calzas, shorts, vestidos y bikinis. Están disponibles en diferentes tallas y colores, tanto cortos como largos. ¿Tienes algo específico en mente?", false);
            break;
        case "cómo realizar un pedido":
            addMessage("Para realizar un pedido, simplemente selecciona los productos que te interesan y agrégales al carrito. Luego, sigue los pasos para completar tu compra, incluyendo tu información de envío y pago. ¿Necesitas ayuda con el proceso de compra?", false);
            break;
        case "métodos de pago":
            addMessage("Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, débito y PayPal. Puedes elegir el método de pago que sea más conveniente para ti durante el proceso de compra. ¿Hay algo más en lo que pueda asistirte?", false);
            break;
        case "tallas y guía de tallas":
            addMessage("Nuestros productos están disponibles en una variedad de tallas, desde XS hasta XXL. También ofrecemos una guía de tallas en nuestro sitio web para ayudarte a elegir el tamaño adecuado. ¿Necesitas ayuda para encontrar tu talla?", false);
            break;
            default:
              addMessage(
                  "Lo siento, no entiendo esa opción. Aquí hay algunas opciones que podrías probar:\n" +
                  "- Teléfono: Para obtener nuestro número de teléfono.\n" +
                  "- Hola: Para saludar y empezar la conversación.\n" +
                  "- Necesito ayuda: Para obtener asistencia personalizada.\n" +
                  "- Envíos: Para información sobre envíos y entrega.\n" +
                  "- Productos disponibles: Para conocer nuestra gama de productos.\n" +
                  "- Cómo realizar un pedido: Para obtener instrucciones sobre cómo comprar.\n" +
                  "- Métodos de pago: Para conocer los métodos de pago aceptados.\n" +
                  "- Tallas y guía de tallas: Para obtener información sobre tallas de productos.\n" +
                  "- Necesito información sobre el stock: Para verificar la disponibilidad de un producto específico.\n" +
                  "- Necesito la dirección del local: Para conocer nuestra dirección física.\n" +
                  "¿En qué más puedo ayudarte?", false
              );
              break;
    }
    
      setInputText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserMessage(inputText);
    }
  };

  return (
    <div>
      <NavLink to="/" style={{ textAlign: "center", marginTop: "100px", display: "block" }}>
      <h1>Hola soy ladyBot en que puedo ayudarte!!!</h1>
        <Button variant="contained" color="primary" style={{ backgroundColor: "#ba338a" }}>
          Inicio
        </Button>
      </NavLink>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderColor: "#ba338a",
          marginTop: 10
        }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: 500,
            
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 5,
            marginBottom: 10,
            borderColor: "#ba338a",
          }}
        >
          <div
            ref={chatContainerRef}
            style={{ height: "500px", overflowY: "auto", marginBottom: "10px" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  textAlign: message.isUser ? "right" : "left",
                  marginBottom: "10px",
                  color: message.isUser ? "#ba338a" : "#E0B3D3",
                }}
                >
                {message.text}
              </div>
            ))}
          </div>
          <TextField
            fullWidth
            placeholder="Escribe tu mensaje..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ba338a',
                },
                '&:hover fieldset': {
                  borderColor: '#ba338a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ba338a',
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px", backgroundColor: "#ba338a" }}
            onClick={() => handleUserMessage(inputText)}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBot;
