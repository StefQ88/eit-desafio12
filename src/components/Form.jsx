import React, { useState, useEffect } from "react";
import Text from "./Text";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const parsedAge = parseInt(formData.age);

    if (!formData.name || !formData.age) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (parsedAge < 18) {
      setMessage(
        `Hola ${formData.name}, eres muy joven para usar esta aplicación `
      );
    } else {
      setMessage(
        `Bienvenido ${formData.name}, gracias por usar nuestra aplicación`
      );
    }
  };

  //limpio el mensaje
  useEffect(() => {
    if (formData.name === "" && formData.age === "") {
      setMessage("");
    }
  }, [formData]);

  return (
    <>
      <div className="container">
        <div className="left-panel">
          <Text as="h1" text="Bienvenido a la aplicación" />
        </div>

        <div className="panel-right">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <Text
                as="label"
                text="Nombre:"
                htmlFor="name"
                className="form-label"
              />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Escribe tu nombre"
              />
            </div>

            <div className="form-group">
              <Text
                as="label"
                text="Edad:"
                htmlFor="age"
                className="form-label"
              />
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Escribe tu edad"
              />
            </div>

            <button type="submit">Enviar</button>

            <Text as="p" text={message} className="form-message" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
