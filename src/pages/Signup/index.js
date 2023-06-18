import React from 'react'
import RequiredInput from "../../components/RequiredInput";
import Button from "../../components/Button";
import RadioButton from '../../components/RadioButton';
import * as C from './style';
import { Link, useNavigate } from "react-router-dom";
import api from '../../Api/api';
import useAuth from "../../hooks/useAuth";
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");
  const [perfil, setPerfil] = useState({ aluno: true, empresa: false, colaborador: false })
  const [ra, setRa] = useState("");
  const [isAlumni, setIsAlumni] = useState(false);
  const [cnpj, setCNPJ] = useState("");
  const [cargo, setCargo] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const onChangePerfil = (e) => {
    const { name } = e.target;
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

  const onChangeAlumni = (e) => {
    const { name } = e.target;
    if (name === 'isAlumni') {
      setIsAlumni(true);
    }
    if (name === 'isNotAlumni' ) {
      setIsAlumni(false);
    }
  }

  let payloadToCreateUser = perfil.aluno ? 
  {
    nome: nome,
    email: email,
    senha: senha,
    perfil: 'ALUNO',
    ra: ra,
    isAlumni: isAlumni
  } : perfil.empresa ? 
  {
    nome: nome,
    email: email,
    senha: senha,
    perfil: 'EMPRESA',
    cnpj: cnpj
  } : {
    nome: nome,
    email: email,
    senha: senha,
    perfil: 'COLABORADOR',
    cargo: cargo
  }
  
  

  const handleSignup = () => {

    if (perfil.aluno) {
      if (!email | !emailConf | !senha | !ra ) {
        setError("Preencha todos os campos");
        return;
      } 
    } else if (perfil.empresa) {
      if (!email | !emailConf | !senha | !cnpj ) {
        setError("Preencha todos os campos");
        return;
      } 
    } else if (perfil.colaborador) { 

    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    (async () => {
      if (payloadToCreateUser.perfil === 'ALUNO') {
        const response  = await api.post('/aluno/cadastrar', payloadToCreateUser);
        if (response.status === 201) {
          alert("Perfil de aluno cadastrado com sucesso!");
          navigate("/signin");
        }
      } else if (payloadToCreateUser.perfil === 'EMPRESA') {
        const response = await api.post('/empresa/cadastrar', payloadToCreateUser);
        if (response.status === 201) {
          alert("Perfil de empresa cadastrado com sucesso!");
          navigate("/signin");
        }
      } else { 
        const response = await api.post('/colaborador/cadastrar', payloadToCreateUser);
        if (response.status === 201) {
          alert("Perfil de colaborador cadastrado com sucesso!");
          navigate("/signin");
        }
      }
    })().catch((err) => { 
      console.log(err) 
      setError("Falha ao cadastrar usuário");
      return;
    });
  }



  return (
    <C.Container>
      <C.Label>Faça seu registro no LinQProject</C.Label>
      <C.Label>Comece a criar o seu portfólio agora mesmo!</C.Label>
     {
         perfil.aluno ? 
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
           <RequiredInput 
             type="text"
             placeholder="Digite seu Nome"
             value={nome}
             onChange={(e) => [setNome(e.target.value), setError("")]}
           />
           <RequiredInput 
             type="email"
             placeholder="Digite seu e-mail"
             value={email}
             onChange={(e) => [setEmail(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="email"
             placeholder="Confirme seu e-mail"
             value={emailConf}
             onChange={(e) => [setEmailConf(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="password"
             placeholder="Digite a senha"
             value={senha}
             onChange={(e) => [setSenha(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="number"
             placeholder="Digite o RA"
             value={ra}
             onChange={(e) => [setRa(e.target.value), setError("")]}
             
           />
           <div>
            <p style={{ textAlign: "center" }}>É Alumni?</p>
              <RadioButton
                name="isAlumni"
                id="isAlumni"
                value="true"
                text="Sim"
                onChange={onChangeAlumni}
                checked={isAlumni}
              />
              <RadioButton
                name="isNotAlumni"
                id="isNotAlumni"
                value="false"
                text="Não"
                onChange={onChangeAlumni}
                checked={!isAlumni}
             />
           </div>
           <C.LabelError>{error}</C.LabelError>
           <Button Text="Inscrever-se" onClick={handleSignup} />
           <C.LabelSignin>
             Já tem uma conta?
             <C.Strong>
               <Link to="/signin">&nbsp;Entre</Link>
             </C.Strong>
           </C.LabelSignin>
         </C.Content> 
         : perfil.empresa ?
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
           <RequiredInput 
             type="text"
             placeholder="Digite seu Nome"
             value={nome}
             onChange={(e) => [setNome(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="email"
             placeholder="Digite seu e-mail"
             value={email}
             onChange={(e) => [setEmail(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="email"
             placeholder="Confirme seu e-mail"
             value={emailConf}
             onChange={(e) => [setEmailConf(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="password"
             placeholder="Digite a senha"
             value={senha}
             onChange={(e) => [setSenha(e.target.value), setError("")]}
             
           />
           <RequiredInput 
             type="text"
             placeholder="Digite seu CNPJ"
             value={cnpj}
             onChange={(e) => [setCNPJ(e.target.value), setError("")]}
             
           />
           <C.LabelError>{error}</C.LabelError>
           <Button Text="Inscrever-se" onClick={handleSignup} />
           <C.LabelSignin>
             Já tem uma conta?
             <C.Strong>
               <Link to="/signin">&nbsp;Entre</Link>
             </C.Strong>
           </C.LabelSignin>
         </C.Content> :
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
         <RequiredInput 
           type="text"
           placeholder="Digite seu Nome"
           value={nome}
           onChange={(e) => [setNome(e.target.value), setError("")]}
           
         />
         <RequiredInput 
           type="email"
           placeholder="Digite seu e-mail"
           value={email}
           onChange={(e) => [setEmail(e.target.value), setError("")]}
           
         />
         <RequiredInput 
           type="email"
           placeholder="Confirme seu e-mail"
           value={emailConf}
           onChange={(e) => [setEmailConf(e.target.value), setError("")]}
           
         />
         <RequiredInput 
           type="password"
           placeholder="Digite a senha"
           value={senha}
           onChange={(e) => [setSenha(e.target.value), setError("")]}
           
         />
         <RequiredInput 
           type="text"
           placeholder="Digite o seu cargo"
           value={cargo}
           onChange={(e) => [setCargo(e.target.value), setError("")]}
           
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
     }
    </C.Container>
  )
};

export default Signup;
