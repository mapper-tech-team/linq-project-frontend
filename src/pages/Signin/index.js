import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from 'react';
import api from '../../Api/api';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    (async () => {
      const response = await api.post('/auth', { email: email, senha: senha });
      if (response.status === 200) {
        localStorage.setItem("user_email", response.data.email);
        localStorage.setItem("user_token", response.data.token);
        localStorage.setItem("user_perfil", response.data.perfil);
        localStorage.setItem("user_id", response.data.id);
        navigate("/home");
      }

    })().catch((err) => { 
      setError("Usuário ou senha incorretos");
      console.log(err);
    });
  };

  return (
    <C.Container>
      <C.Label>Bem-Vindo(a) ao LinQProject!</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
};

export default Signin;