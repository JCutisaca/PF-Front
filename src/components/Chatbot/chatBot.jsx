// import React, { useState, useRef, useEffect } from "react";
// import { Button, TextField, Box, Avatar } from "@mui/material";
// import "./chatBot.css"
// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: (
//         <div>
//           ¡Hola! Soy LadyBot🤖, tu asistente virtual. ¿En qué puedo ayudarte hoy? Aquí hay algunas opciones que podrías probar: <br />
//           - <strong>Teléfono: </strong> Para obtener nuestro número de teléfono <br />
//           - <strong>Hola:</strong> Para saludar y empezar la conversación. <br />
//           - <strong>Necesito ayuda:</strong> Para obtener asistencia personalizada. <br />
//           - <strong>Envíos:</strong> Para información sobre envíos y entrega. <br />
//           - <strong>Productos disponibles:</strong> Para conocer nuestra gama de productos.<br />
//           - <strong>Cómo realizar un pedido:</strong> Para obtener instrucciones sobre cómo comprar.<br />
//           - <strong>Métodos de pago:</strong> Para conocer los métodos de pago aceptados.<br />
//           - <strong>Tallas y guía de tallas:</strong> Para obtener información sobre tallas de productos.<br />
//           - <strong>Necesito información sobre el stock:</strong> Para verificar la disponibilidad de un producto específico.<br />
//           - <strong>Necesito la dirección del local:</strong> Para conocer nuestra dirección física.<br />
//           ¿En qué más puedo ayudarte?"
//         </div>),
//       isUser: false,
//     },
//   ]);
//   const [inputText, setInputText] = useState("");
//   const chatContainerRef = useRef(null);
// console.log("input text", inputText);
//   const scrollToBottom = () => {
//     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const addMessage = (text, isUser = false) => {
//     setMessages([...messages, { text, isUser }]);
//   };

//   const handleUserMessage = (message) => {
//     if (message.trim() !== "") {
//       addMessage(message, true);

//       let botResponse = "";
//       switch (message.toLowerCase()) {
//         case "telefono":
//         case "télefono":
//         case "Télefono":
//         case "Telefono":
//             botResponse = "Nuestro número de teléfono es 123-456-789. ¿En qué más puedo ayudarte?"
//             break;
//         case "hola":
//         case "Hola":
//             botResponse = 
//               <div>
//               ¡Hola! Soy LadyBot🤖, tu asistente virtual. ¿En qué puedo ayudarte hoy? Aquí hay algunas opciones que podrías probar: <br/>
//             - <strong>Teléfono: </strong> Para obtener nuestro número de teléfono <br/> 
//             - <strong>Hola:</strong> Para saludar y empezar la conversación. <br/> 
//             - <strong>Necesito ayuda:</strong> Para obtener asistencia personalizada. <br/> 
//             - <strong>Envíos:</strong> Para información sobre envíos y entrega. <br/> 
//             - <strong>Productos disponibles:</strong> Para conocer nuestra gama de productos.<br/> 
//             - <strong>Cómo realizar un pedido:</strong> Para obtener instrucciones sobre cómo comprar.<br/> 
//             - <strong>Métodos de pago:</strong> Para conocer los métodos de pago aceptados.<br/> 
//             - <strong>Tallas y guía de tallas:</strong> Para obtener información sobre tallas de productos.<br/> 
//             - <strong>Necesito información sobre el stock:</strong> Para verificar la disponibilidad de un producto específico.<br/> 
//             - <strong>Necesito la dirección del local:</strong> Para conocer nuestra dirección física.<br/> 
//             ¿En qué más puedo ayudarte?"
//               </div>           

//                break;
//         case "hola may":
//             botResponse = "hola la puta q te pario!!!!!!"

//             break;
//         case "necesito ayuda":
//         case "Necesito ayuda":
//             botResponse = "Claro, estaré encantada de ayudarte. ¿Qué duda específica tienes sobre nuestros productos o servicios?"

//             break;
//         case "envíos":
//         case "envios":
//         case "Envios":
//         case "Envíos":
//             botResponse = "Sí, realizamos envíos a todo el país. ¿En qué ciudad te encuentras? Así te puedo proporcionar detalles sobre los tiempos de entrega."

//             break;
//         case "necesito información sobre el stock":
//         case "Necesito información sobre el stock":
//         case "Necesito informacion sobre el stock":
//         case "necesito informacion sobre el stock":
//             botResponse = "Para consultas de stock, por favor indícame el nombre o la descripción del producto que te interesa. Así podré verificar la disponibilidad para ti."

//             break;
//         case "Necesito la dirección del local":
//         case "necesito la dirección del local":
//         case "Necesito la direccion del local":
//         case "necesito la direccion del local":
//             botResponse = "Estamos ubicados en la Calle Principal 123, Ciudad. ¡Te esperamos! ¿Hay algo más en lo que pueda ayudarte?"

//             break;
//         case "productos disponibles":
//         case "Productos disponibles":
//             botResponse = "Tenemos una amplia gama de productos disponibles, incluyendo remeras, calzas, shorts, vestidos y bikinis. Están disponibles en diferentes tallas y colores, tanto cortos como largos. ¿Tienes algo específico en mente?"

//             break;
//         case "cómo realizar un pedido":
//         case "Cómo realizar un pedido":
//         case "Como realizar un pedido":
//         case "como realizar un pedido":
//             botResponse = "Para realizar un pedido, simplemente selecciona los productos que te interesan y agrégales al carrito. Luego, sigue los pasos para completar tu compra, incluyendo tu información de envío y pago. ¿Necesitas ayuda con el proceso de compra?"

//             break;
//         case "métodos de pago":
//         case "Métodos de pago":
//         case "metodos de pago":
//         case "Metodos de pago":
//             botResponse = "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, débito y PayPal. Puedes elegir el método de pago que sea más conveniente para ti durante el proceso de compra. ¿Hay algo más en lo que pueda asistirte?"

//             break;
//         case "tallas y guía de tallas":
//         case "Tallas y guía de tallas":
//         case "tallas y guia de tallas":
//         case "Tallas y guia de tallas":
//             botResponse = "Nuestros productos están disponibles en una variedad de tallas, desde XS hasta XXL. También ofrecemos una guía de tallas en nuestro sitio web para ayudarte a elegir el tamaño adecuado. ¿Necesitas ayuda para encontrar tu talla?"

//             break;
//             default:
//               botResponse = 
//                 <div>
//                 ¡Hola! Soy LadyBot🤖, tu asistente virtual. ¿En qué puedo ayudarte hoy? Aquí hay algunas opciones que podrías probar: <br/>
//               - <strong>Teléfono: </strong> Para obtener nuestro número de teléfono <br/> 
//               - <strong>Hola:</strong> Para saludar y empezar la conversación. <br/> 
//               - <strong>Necesito ayuda:</strong> Para obtener asistencia personalizada. <br/> 
//               - <strong>Envíos:</strong> Para información sobre envíos y entrega. <br/> 
//               - <strong>Productos disponibles:</strong> Para conocer nuestra gama de productos.<br/> 
//               - <strong>Cómo realizar un pedido:</strong> Para obtener instrucciones sobre cómo comprar.<br/> 
//               - <strong>Métodos de pago:</strong> Para conocer los métodos de pago aceptados.<br/> 
//               - <strong>Tallas y guía de tallas:</strong> Para obtener información sobre tallas de productos.<br/> 
//               - <strong>Necesito información sobre el stock:</strong> Para verificar la disponibilidad de un producto específico.<br/> 
//               - <strong>Necesito la dirección del local:</strong> Para conocer nuestra dirección física.<br/> 
//               ¿En qué más puedo ayudarte?"
//                 </div>
                        

//               break;
//       }

//       addMessage(botResponse, false);
//       setInputText("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleUserMessage(inputText);
//     }
//   };

//   return (
//     <div className="chat-bot-container">
//       <Box
//         sx={{
//           width: "100%",
//           height: "60vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           borderColor: "#ba338a",
//           marginTop: "25vh",
//         }}
//       >
//         <Box
//           sx={{
//             width: "90%",
//             maxWidth: 800,
//             p: 2,
//             border: "1px inset #ccc",
//             borderRadius: 5,
//             marginBottom: "10vh",
//             borderColor: "#ba338a",
//           }}
//         >
//           <div
//             className="div-render-chat"
//             ref={chatContainerRef}
//             style={{ height: "500px", overflowY: "auto", marginBottom: "10px" }}
//           >
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 style={{
//                   textAlign: message.isUser ? "right" : "left",
//                   marginBottom: "10px",
//                   color: message.isUser ? "#ba338a" : "rgb(135 8 98)",
//                 }}
//               >
//                 {message.isUser ? (
//                   <div className="user-message">
//                     {message.text}
//                   </div>
//                 ) : (
//                   <div className="bot-message">
//                     {message.text}
//                   </div>
//                 )}
                
//               </div>
//             ))}
//           </div>
//           <TextField
//             fullWidth
//             placeholder="Escribe tu mensaje..."
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             onKeyPress={handleKeyPress}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#ba338a',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#ba338a',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#ba338a',
//                 },
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ marginTop: "10px", backgroundColor: "#ba338a" }}
//             onClick={() => handleUserMessage(inputText)}
//           >
//             Enviar
//           </Button>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default ChatBot;

import React, { useState, useRef, useEffect } from "react";
import { Button, TextField, Box, Avatar } from "@mui/material";
import "./chatBot.css"
import { useSelector } from "react-redux";

const ChatBot = () => {
  const user = useSelector((state)=> state.user)
  const [inputText, setInputText] = useState("")
  // console.log(user);
  const [messages, setMessages] = useState([
    {text:   <div>
             ¡Hola {user?.name}! Soy LadyBot🤖, tu asistente virtual. ¿En qué puedo ayudarte hoy? Aquí hay algunas opciones que podrías probar: <br/>
            - <strong>Teléfono: </strong> Para obtener nuestro número de teléfono <br/> 
            - <strong>Hola:</strong> Para saludar y empezar la conversación. <br/> 
            - <strong>Necesito ayuda:</strong> Para obtener asistencia personalizada. <br/> 
            - <strong>Envíos:</strong> Para información sobre envíos y entrega. <br/> 
            - <strong>Productos disponibles:</strong> Para conocer nuestra gama de productos.<br/> 
            - <strong>Cómo realizar un pedido:</strong> Para obtener instrucciones sobre cómo comprar.<br/> 
            - <strong>Métodos de pago:</strong> Para conocer los métodos de pago aceptados.<br/> 
            - <strong>Tallas y guía de tallas:</strong> Para obtener información sobre tallas de productos.<br/> 
            - <strong>Necesito información sobre el stock:</strong> Para verificar la disponibilidad de un producto específico.<br/> 
            - <strong>Necesito la dirección del local:</strong> Para conocer nuestra dirección física.<br/> 
            ¿En qué más puedo ayudarte?"
              </div>,
              isUser:false }

  ]);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const addMessage = ( array ) => {
    // console.log(newMesagge);
    setMessages([...messages, ...array]);
    // return newMesagge
  };

  const handleUserMessage = (message) => {
    if (message.trim() !== "") {
      
      
      let botResponse = ""
      switch (message.toLowerCase()) {
        case "telefono":
          case "télefono":
            case "Télefono":
              case "Telefono":
                botResponse = "Nuestro número de teléfono es 123-456-789. ¿En qué más puedo ayudarte?"
                
                break;
                // case "hola":
                // case "Hola":
                //     botResponse = 
                //       <div>
                //       ¡Hola! Soy LadyBot🤖, tu asistente virtual. ¿En qué puedo ayudarte hoy? Aquí hay algunas opciones que podrías probar: <br/>
                //     - <strong>Teléfono: </strong> Para obtener nuestro número de teléfono <br/> 
                //     - <strong>Hola:</strong> Para saludar y empezar la conversación. <br/> 
                //     - <strong>Necesito ayuda:</strong> Para obtener asistencia personalizada. <br/> 
                //     - <strong>Envíos:</strong> Para información sobre envíos y entrega. <br/> 
                //     - <strong>Productos disponibles:</strong> Para conocer nuestra gama de productos.<br/> 
                //     - <strong>Cómo realizar un pedido:</strong> Para obtener instrucciones sobre cómo comprar.<br/> 
                //     - <strong>Métodos de pago:</strong> Para conocer los métodos de pago aceptados.<br/> 
                //     - <strong>Tallas y guía de tallas:</strong> Para obtener información sobre tallas de productos.<br/> 
                //     - <strong>Necesito información sobre el stock:</strong> Para verificar la disponibilidad de un producto específico.<br/> 
                //     - <strong>Necesito la dirección del local:</strong> Para conocer nuestra dirección física.<br/> 
                //     ¿En qué más puedo ayudarte?"
                //       </div>           
                //        break;
                case "hola may":
                  botResponse = "hola la puta q te pario!!!!!!"
                  break;
                  case "necesito ayuda":
        case "Necesito ayuda":
            botResponse = "Claro, estaré encantada de ayudarte. ¿Qué duda específica tienes sobre nuestros productos o servicios?"
            break;
            case "envíos":
              case "envios":
                case "Envios":
                  case "Envíos":
                    botResponse = "Realizamos envíos a todo el país. Al realizar la compra debe elegir su provincia"
                    break;
                    case "necesito información sobre el stock":
                      case "Necesito información sobre el stock":
                        case "Necesito informacion sobre el stock":
                          case "necesito informacion sobre el stock":
                            botResponse = "Para consultas de stock, por favor indícame el nombre o la descripción del producto que te interesa. Así podré verificar la disponibilidad para ti."
                            break;
                            case "Necesito la dirección del local":
                              case "necesito la dirección del local":
                                case "Necesito la direccion del local":
                                  case "necesito la direccion del local":
                                    botResponse = "Estamos ubicados en la Calle Principal 123, Ciudad. ¡Te esperamos! ¿Hay algo más en lo que pueda ayudarte?"
                                    break;
                                    case "productos disponibles":
                                      case "Productos disponibles":
            botResponse = "Tenemos una amplia gama de productos disponibles, incluyendo remeras, calzas, shorts, vestidos y bikinis. Están disponibles en diferentes tallas y colores, tanto cortos como largos. ¿Tienes algo específico en mente?"
            break;
        case "cómo realizar un pedido":
        case "Cómo realizar un pedido":
        case "Como realizar un pedido":
          case "como realizar un pedido":
            botResponse = "Para realizar un pedido, simplemente selecciona los productos que te interesan y agrégales al carrito. Luego, sigue los pasos para completar tu compra, incluyendo tu información de envío y pago. ¿Necesitas ayuda con el proceso de compra?"
            break;
            case "métodos de pago":
              case "Métodos de pago":
                case "metodos de pago":
                  case "Metodos de pago":
                    botResponse = "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, débito y PayPal. Puedes elegir el método de pago que sea más conveniente para ti durante el proceso de compra. ¿Hay algo más en lo que pueda asistirte?"
                    break;
                    case "tallas y guía de tallas":
                      case "Tallas y guía de tallas":
                        case "tallas y guia de tallas":
                          case "Tallas y guia de tallas":
                            botResponse = "Nuestros productos están disponibles en una variedad de tallas, desde XS hasta XXL. También ofrecemos una guía de tallas en nuestro sitio web para ayudarte a elegir el tamaño adecuado. ¿Necesitas ayuda para encontrar tu talla?"
                            break;
                            default:
                              botResponse = 
                              <div>
               Lo siento, no entiendo esa opción. Aquí hay algunas opciones que podrías probar <br/>
              - <strong>Teléfono: </strong> Para obtener nuestro número de teléfono <br/> 
              - <strong>Hola:</strong> Para saludar y empezar la conversación. <br/> 
              - <strong>Necesito ayuda:</strong> Para obtener asistencia personalizada. <br/> 
              - <strong>Envíos:</strong> Para información sobre envíos y entrega. <br/> 
              - <strong>Productos disponibles:</strong> Para conocer nuestra gama de productos.<br/> 
              - <strong>Cómo realizar un pedido:</strong> Para obtener instrucciones sobre cómo comprar.<br/> 
              - <strong>Métodos de pago:</strong> Para conocer los métodos de pago aceptados.<br/> 
              - <strong>Tallas y guía de tallas:</strong> Para obtener información sobre tallas de productos.<br/> 
              - <strong>Necesito información sobre el stock:</strong> Para verificar la disponibilidad de un producto específico.<br/> 
              - <strong>Necesito la dirección del local:</strong> Para conocer nuestra dirección física.<br/> 
              ¿En qué más puedo ayudarte?"
                </div>
              break;
            }
            let  userResponse = inputText
            let array = [{text:userResponse, isUser: true}, {text:botResponse, isUser:false} ]
            const botMessage = addMessage(array)
            console.log(messages);
            setInputText("");
          }
        };

        const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserMessage(inputText);
    }
    
  };
  
  return (
    <div className='chat-bot-container'>
      <Box 
        sx={{
          width: "100%",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderColor: "#ba338a",
          marginTop: "25vh"
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: 800,
            p: 2,
            border: "1px inset #ccc",
            borderRadius: 5,
            marginBottom:"10vh",
            borderColor: "#ba338a",
          }}
        >
          <div className="div-render-chat"
            ref={chatContainerRef}
            style={{ height: "500px", overflowY: "auto", marginBottom: "10px" }}
          >
            <div claaName="chat-messages" ref={chatContainerRef}>

            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  textAlign: message.isUser ? "right" : "left",
                  marginBottom: "10px",
                  color: message.isUser ? "#ba338a" : "rgb(135 8 98)",
                }}
                >
                  {message.isUser?
                     (
                       <div>
                        aca{message.text}
                    <Avatar 
                    alt="User"
                    src="https://pbs.twimg.com/media/FkbNNUYXkAMIn3F?format=jpg&name=small"
                    />
                    </div>
                    ): (
                      <Avatar 
                      alt="Bot" 
                      src="https://media.istockphoto.com/id/1307184202/es/vector/chatbot-en-ilustraci%C3%B3n-vectorial.jpg?s=1024x1024&w=is&k=20&c=F-SKCRmRbbVO9PGU2cIhHgNMeOlTTGoAGGbNFFcpVhQ="
                      />
                      )}
                  
                  <div className={message.isUser ? "user-message" : "bot-message"}>{message.text}</div>
              
                {/* <div className="message-text">{message.text}</div> */}

              </div>
            ))}
            </div>
          </div>

          
          <div className="input-conta">
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
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBot;
