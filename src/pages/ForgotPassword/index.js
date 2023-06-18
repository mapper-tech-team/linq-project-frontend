import React, { useState } from 'react';
import * as C from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password recovery logic

    // Display success or error message based on the result
    setMessage('Foi enviada uma mensagem de alteração de senha para o e-mail especificado');
  };

  return (
    <C.Container>
      <C.Label>Esquecimento de senha</C.Label>
      <C.LabelSignup>Informe o seu e-mail para que possamos encaminhar uma mensagem de redefinição de senha:</C.LabelSignup>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Button Text="Alterar senha" onClick={handleSubmit} />
      </C.Content>
      <p>{message}</p>
    </C.Container>
  );
}

export default ForgotPassword;
