import React, { useState, useRef, useEffect } from "react";
import { TextField, Box, Avatar } from "@mui/material";
import "./chatBot.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { filtByCategory } from "../../redux/Actions/Filter/filtByCategory";
import { Input, Button } from "antd";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
//chatbot actions
import openChat from "../../redux/Actions/ChatBot/OpenChat";
import closeChat from "../../redux/Actions/ChatBot/CloseChat";

const ChatBot = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const user = useSelector((state) => state.user);
  const [inputText, setInputText] = useState("");
  const ordersUser = useSelector((state) => state.ordersUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isChatBotOpen = useSelector((state) => state.isChatBotOpen);

  //chatbot
  const handleCloseChat = () => {
    dispatch(closeChat());
  };
  const handleGoToCategory = (category) => {
    dispatch(filtByCategory(category));
    navigate(`/products/${category}`);
  };

  const emailLink = () => {
    const email = "ladyfitlovers@gmail.com";

    return <a href={`mailto:${email}`}>ladyfitlovers@gmail.com</a>;
  };

  const [messages, setMessages] = useState([
    {
      text: (
        <div>
          ¡Hola {user?.name}! Soy LadyBot🤖, tu asistente virtual. ¿En qué puedo
          ayudarte hoy? Aquí hay algunas opciones que podrías probar: <br />-{" "}
          <strong>Teléfono: </strong> Para obtener nuestro número de teléfono{" "}
          <br />- <strong>Email: </strong> Para obtener nuestro email <br />-{" "}
          <strong>Envíos:</strong> Para información sobre envíos y entrega.{" "}
          <br />- <strong>Productos disponibles:</strong> Para conocer nuestra
          gama de productos.
          <br />- <strong>Cómo realizar un pedido:</strong> Para obtener
          instrucciones sobre cómo comprar.
          <br />- <strong>Mis pedidos:</strong> Para obtener información sobre
          tus pedidos.
          <br />- <strong>Métodos de pago:</strong> Para conocer los métodos de
          pago aceptados.
          <br />- <strong>Tallas y guía de tallas:</strong> Para obtener
          información sobre tallas de productos.
          <br />- <strong>Información sobre el stock:</strong> Para verificar la
          disponibilidad de un producto específico.
          <br />- <strong>Dirección del local:</strong> Para conocer nuestra
          dirección física.
          <br />
        </div>
      ),
      isUser: false,
    },
  ]);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (array) => {
    setMessages([...messages, ...array]);
  };

  const orderHandler = (event) => {
    handleUserMessage(event.target.name);
  };

  const handleUserMessage = (message) => {
    if (message.trim() !== "") {
      let botResponse = "";
      switch (message.toLowerCase()) {
        case "email":
          botResponse = (
            <div>
              Nuestro email es {emailLink()}.<br /> ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "telefono":
        case "teléfono":
          botResponse = (
            <div>
              Nuestro número de teléfono es 123-456-789.
              <br /> ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );

          break;
        case "envíos":
        case "envios":
          botResponse = (
            <div>
              Realizamos envíos a todo el país. Al realizar la compra debe
              elegir tu provincia <br />
              ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "nformación sobre el stock":
        case "informacion sobre el stock":
          botResponse = (
            <div>
              Todos los productos publicados cuentan con stock disponible, en
              caso de no tener stock no vas a poder acceder al producto.
              <br />
              ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "dirección del local":
        case "direccion del local":
          botResponse = (
            <div>
              Estamos ubicados en la Calle Principal 123, Ciudad. ¡Te esperamos!
              ¿Hay algo más en lo que pueda ayudarte?
              <br />
              ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "productos disponibles":
          botResponse = (
            <div>
              Tenemos una amplia gama de productos disponibles, incluyendo
              <strong>
                <span onClick={() => handleGoToCategory("REMERAS")}>
                  {" "}
                  remeras
                </span>
              </strong>
              ,
              <strong>
                <span onClick={() => handleGoToCategory("BUZOS")}> buzos</span>
              </strong>
              ,
              <strong>
                <span onClick={() => handleGoToCategory("BIKERS")}>
                  {" "}
                  bikers
                </span>
              </strong>
              ,
              <strong>
                <span onClick={() => handleGoToCategory("PANTALONES")}>
                  {" "}
                  pantalones
                </span>
              </strong>
              ,
              <strong>
                <span onClick={() => handleGoToCategory("CALZAS")}>
                  {" "}
                  calzas
                </span>
              </strong>
              ,
              <strong>
                <span onClick={() => handleGoToCategory("SHORTS")}>
                  {" "}
                  shorts
                </span>
              </strong>
              ,
              <strong>
                <span onClick={() => handleGoToCategory("VESTIDOS")}>
                  {" "}
                  vestidos
                </span>
              </strong>{" "}
              y
              <strong>
                <span onClick={() => handleGoToCategory("BIKINIS")}>
                  {" "}
                  bikinis
                </span>
              </strong>
              . Están disponibles en diferentes tallas y colores, tanto cortos
              como largos.
              <br />{" "}
              <strong>
                Al hacer click sobre el producto que mas te guste vas a poder
                ver los productos disponibles
              </strong>{" "}
              <br />
              ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "cómo realizar un pedido":
        case "como realizar un pedido":
          botResponse = (
            <div>
              Para realizar un pedido, simplemente selecciona los productos que
              te interesan y agrégales al carrito. Luego, sigue los pasos para
              completar tu compra, incluyendo tu información de envío y pago.
              <br /> ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "métodos de pago":
        case "metodos de pago":
          botResponse = (
            <div>
              Aceptamos varios métodos de pago, incluyendo tarjetas de crédito,
              débito y mercado pago. Puedes elegir el método de pago que sea más
              conveniente para ti durante el proceso de compra.
              <br /> ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
          break;
        case "tallas y guía de tallas":
        case "tallas y guia de tallas":
          botResponse = (
            <div>
              Nuestros productos están disponibles en una variedad de tallas,
              desde XS hasta XXL. También ofrecemos una guía de tallas en
              nuestro sitio web para ayudarte a elegir el tamaño adecuado.
              <br /> ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        case "si":
          botResponse = (
            <div>
              Dime en que mas puedo ayudarte <br />
              <div>
                - <strong>Teléfono: </strong> Para obtener nuestro número de
                teléfono <br />- <strong>Email: </strong> Para obtener nuestro
                email <br />- <strong>Envíos:</strong> Para información sobre
                envíos y entrega. <br />-{" "}
                <strong>Productos disponibles:</strong> Para conocer nuestra
                gama de productos.
                <br />- <strong>Cómo realizar un pedido:</strong> Para obtener
                instrucciones sobre cómo comprar.
                <br />- <strong>Mis pedidos:</strong> Para obtener información
                sobre tus pedidos.
                <br />- <strong>Métodos de pago:</strong> Para conocer los
                métodos de pago aceptados.
                <br />- <strong>Tallas y guía de tallas:</strong> Para obtener
                información sobre tallas de productos.
                <br />- <strong>Información sobre el stock:</strong> Para
                verificar la disponibilidad de un producto específico.
                <br />- <strong>Dirección del local:</strong> Para conocer
                nuestra dirección física.
                <br />
              </div>
            </div>
          );
          break;
        case "no":
          botResponse = "Me alegra haberte ayudado 🤖";
          break;
        case "mis pedidos":
          botResponse = (
            <div>
              {!user.id ? (
                <p>
                  Para poder ver tus usuarios tienes que{" "}
                  <Link to="#" onClick={() => setLoginModalVisible(true)}>
                    ingresar sesión
                  </Link>{" "}
                  .
                </p>
              ) : (
                <div>
                  {!ordersUser.length ? (
                    <p>No tienen pedidos realizados por el momento.</p>
                  ) : (
                    <div>
                      Elije con cual pedido tienes dudas
                      {ordersUser?.map((order) => (
                        <div>
                          <Input
                            name="order"
                            type="button"
                            value={order.id}
                            onClick={orderHandler}
                          ></Input>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
          break;
        case "order":
          const id = event.target.value;
          const respuesta = ordersUser.find((order) => order.id === Number(id));

          botResponse = (
            <div>
              El pedido {respuesta?.id} esta: {respuesta.status}
              <br />
              ¿Puedo ayudarte en algo mas?
              <br />
              Puedes responder con <strong>si</strong> o <strong>no</strong>
            </div>
          );
          break;
        default:
          botResponse = (
            <div>
              Lo siento, no entiendo esa opción. Aquí hay algunas opciones que
              podrías probar <br />- <strong>Teléfono: </strong> Para obtener
              nuestro número de teléfono <br />- <strong>Email: </strong> Para
              obtener nuestro email <br />- <strong>Envíos:</strong> Para
              información sobre envíos y entrega. <br />-{" "}
              <strong>Productos disponibles:</strong> Para conocer nuestra gama
              de productos.
              <br />- <strong>Cómo realizar un pedido:</strong> Para obtener
              instrucciones sobre cómo comprar.
              <br />- <strong>Mis pedidos:</strong> Para obtener información
              sobre tus pedidos.
              <br />- <strong>Métodos de pago:</strong> Para conocer los métodos
              de pago aceptados.
              <br />- <strong>Tallas y guía de tallas:</strong> Para obtener
              información sobre tallas de productos.
              <br />- <strong>Información sobre el stock:</strong> Para
              verificar la disponibilidad de un producto específico.
              <br />- <strong>Dirección del local:</strong> Para conocer nuestra
              dirección física.
              <br />
            </div>
          );
          break;
      }
      let userResponse;
      if (event.target.name === "order") {
        userResponse = event.target.value;
        let prevMessage = <div>Elije con cual pedido tienes dudas</div>;
        let array = [
          { text: prevMessage, isUser: false },
          { text: userResponse, isUser: true },
          { text: botResponse, isUser: false },
        ];
        const botMessage = addMessage(array);
      } else {
        userResponse = inputText;
        setInputText("");
        let array = [
          { text: userResponse, isUser: true },
          { text: botResponse, isUser: false },
        ];
        const botMessage = addMessage(array);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserMessage(inputText);
    }
  };

  return (
    <div className="chat-bot-container">
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
          marginTop: "25vh",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: 800,
            p: 2,
            border: "1px inset #ccc",
            borderRadius: 5,
            marginBottom: "10vh",
            borderColor: "#ba338a",
            background: "white",
          }}
        >
          <Button
            size="small"
            style={{ float: "right", color: "#ba338a" }}
            onClick={handleCloseChat}
          >
            <CloseOutlined />
          </Button>
          <div
            className="div-render-chat"
            ref={chatContainerRef}
            style={{ height: "500px", overflowY: "auto", marginBottom: "10px" }}
          >
            <div claaName="chat-messages" ref={chatContainerRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: message.isUser ? "flex-end" : "flex-start",
                    marginBottom: "10px",
                    textAlign: message.isUser ? "right" : "left",
                    // marginBottom: "10px",
                    // color: message.isUser ? "#ba338a" : "rgb(135 8 98)",
                  }}
                >
                  {!message.isUser ? ( // Verifica si es un mensaje del bot
                    <div>
                      <Avatar alt="Bot" src="/img/ladyBot.png" />
                    </div>
                  ) : null}

                  <div
                    className={message.isUser ? "user-message" : "bot-message"}
                  >
                    {message.text}
                  </div>

                  {message.isUser ? ( // Verifica si es un mensaje del usuario
                    <div>
                      <Avatar alt="User" src={user ? user.image : ""} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="input-conta">
            <Input
              fullWidth
              placeholder="Escribe tu mensaje..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ba338a",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ba338a",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ba338a",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              type="primary"
              style={{ marginTop: "10px", backgroundColor: "#ba338a" }}
              onClick={() => handleUserMessage(inputText)}
            >
              Enviar
            </Button>
          </div>
        </Box>
      </Box>
      {loginModalVisible && (
        <LoginModal
          visible={loginModalVisible}
          onClose={() => setLoginModalVisible(false)}
        />
      )}
    </div>
  );
};

export default ChatBot;
