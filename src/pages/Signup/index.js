import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from './style';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  return (
    <C.Container>
      <C.Label>Faça seu registro no LinQProject e comece a criar o seu portfólio agora mesmo!</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
          type="email"
          placeholder="Confirme seu e-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input 
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        {/* <Button Text="Inscrever-se" onClick={handleSignup} /> */}
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link></Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  )
};

export default Signup;
