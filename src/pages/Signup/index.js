import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import RadioButton from '../../components/RadioButton';
import * as C from './style';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [perfil, setPerfil] = useState({ aluno: false, empresa: false, colaborador: false })
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/signin");
  }

  const onChangePerfil = (e) => {
    const { name } = e.target
    console.log('clicked', name)
    if (name === 'aluno') {
      setPerfil({ aluno: true, empresa: false, colaborador: false })
    }
    if (name === 'empresa') {
      setPerfil({ aluno: false, empresa: true, colaborador: false })
    }
    if (name === 'colaborador') {
      setPerfil({ aluno: false, empresa: false, colaborador: true })
    }
  }


  return (
    <C.Container>
      <C.Label>Faça seu registro no LinQProject</C.Label>
      <C.Label>Comece a criar o seu portfólio agora mesmo!</C.Label>
      <C.Content>
        <div>
          <p style={{ textAlign: "center" }}>Selecione seu tipo de perfil</p>
          <RadioButton
            name="aluno"
            id="aluno"
            value="Aluno"
            text="Aluno"
            onChange={onChangePerfil}
            checked={perfil.aluno}
          />
          <RadioButton
            name="empresa"
            id="empresa"
            value="Empresa"
            text="Empresa"
            onChange={onChangePerfil}
            checked={perfil.empresa}
          />
          <RadioButton
            name="colaborador"
            id="colaborador"
            value="Colaborador"
            text="Colaborador"
            onChange={onChangePerfil}
            checked={perfil.colaborador}
          />
        </div>
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
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/signin">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  )
};

export default Signup;
