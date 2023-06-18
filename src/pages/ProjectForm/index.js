import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Input from "../../components/Input";
import Button from "../../components/Button";
import RadioButton from '../../components/RadioButton';
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from '../../Api/api';
import RequiredInput from '../../components/RequiredInput';

const ProjectForm = () => {

  const navigate = useNavigate();
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [documentacao, setDocumentacao] = useState("");
  const [imagem, setImagem] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [status, setStatus] = useState({ iniciado: true, progresso: false, concluido: false })

  const userToken = localStorage.getItem("user_token");

  useEffect(() => {
    
    const userEmail = localStorage.getItem("user_email");
      (async () => {
        const { data } = await api.get(`/auth/${userEmail}`)
        setUser(data);
      })();
  }, []);

  const buildPayload = () => {
    if (status.iniciado) {
      const projectPayload = {
        data: {
          nome: nomeProjeto,
          descricao: descricao,
          foto: imagem,
          documentacao: documentacao,
          telefone: telefone,
          linkedin: linkedin,
          github: github,
          status: "INICIADO",
          alunoId: user.id
        }
      }
      return projectPayload;
    } else if (status.progresso) {
      const projectPayload = {
        data: {
          nome: nomeProjeto,
          descricao: descricao,
          foto: imagem,
          documentacao: documentacao,
          telefone: telefone,
          linkedin: linkedin,
          github: github,
          status: "EM_ANDAMENTO",
          alunoId: user.id
        }
      }
      return projectPayload;
    } else {
      const projectPayload = {
        data: {
          nome: nomeProjeto,
          descricao: descricao,
          foto: imagem,
          documentacao: documentacao,
          telefone: telefone,
          linkedin: linkedin,
          github: github,
          status: "CONCLUIDO",
          alunoId: user.id
        }
      }
      return projectPayload;
    }
  }

  const buildFilePayload = (file) => {
    return {
      'file': file
    }
  }

  const handleCadastro = () => {
    if (!nomeProjeto | !descricao ) {
      setError("Preencha todos os campos");
      return;
    }

    (async () => {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + userToken
          }
        }

        const configFile = {
          headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'multipart/form-data'
          }
        }

        const projectPayload = buildPayload();

        console.log(projectPayload);

        const response = await api.post('/projeto/cadastrar', projectPayload.data, config);
        if (response.status === 201) {
          alert("Projeto criado com sucesso!");
          navigate("/home");
        }

        let formData = new FormData();
        let fileImagePayload = buildFilePayload(projectPayload.data.foto);
        formData.append('fileImagePayload', new Blob([JSON.stringify(fileImagePayload)], {
          type: 'application/json'
        }));

        // if (projectPayload.data.imagem) {
        //   const response = await api.post('/file/upload', projectPayload.data.foto, configFile);
        //   console.log(response);
        // }

        // if (projectPayload.data.documentacao) {
        //   const response = await api.post('/file/upload', { 'file': projectPayload.data.documentacao }, configFile);
        //   console.log(response);
        // }

        
    })().catch((err) => {
      setError("Falha ao criar projeto!");
      console.log(err);
    });
  };
    
  const onChangeStatus = (e) => {
    const { name } = e.target
    console.log('clicked', name)
    if (name === 'iniciado') {
      setStatus({ iniciado: true, progresso: false, concluido: false })
    }
    if (name === 'progresso') {
      setStatus({ iniciado: false, progresso: true, concluido: false })
    }
    if (name === 'concluido') {
      setStatus({ iniciado: false, progresso: false, concluido: true })
    }
  }

  return (
    <>
    <Navbar />
    <C.Container>
      <C.Label>Cadastre seu Projeto</C.Label>
      <C.Content>
        <RequiredInput 
          type="Text"
          placeholder="Nome do Projeto..."
          value={nomeProjeto}
          onChange={(e) => [setNomeProjeto(e.target.value), setError("")]}
        />
        <RequiredInput 
          type="Text"
          placeholder="Descrição..."
          value={descricao}
          onChange={(e) => [setDescricao(e.target.value), setError("")]}
        />
        <p style={{ textAlign: "center" }}>Contatos</p>
        <Input 
          type="Text"
          placeholder="Telefone/Whatsapp..."
          value={telefone}
          onChange={(e) => [setTelefone(e.target.value), setError("")]}
        />
        <Input 
          type="Text"
          placeholder="Link do Perfil no LinkedIn..."
          value={linkedin}
          onChange={(e) => [setLinkedin(e.target.value), setError("")]}
        />
        <Input 
          type="Text"
          placeholder="Link do Perfil no Github..."
          value={github}
          onChange={(e) => [setGithub(e.target.value), setError("")]}
        />
        <div>
        <p style={{ textAlign: "center" }}>Selecionar Imagem:</p>
        <Input 
        
          type="file"
          multiple
          accept="image/png"
          value={imagem}
          onChange={(e) => [setImagem(e.target.value), setError("")]}
        />
        </div>
        <div>
        <p style={{ textAlign: "center" }}>Selecionar Documento:</p>
        <Input 
        
          type="file"
          accept="application/pdf"
          value={documentacao}
          onChange={(e) => [setDocumentacao(e.target.value), setError("")]}
        />
        </div>
        <div>
          <p style={{ textAlign: "center"}}>Status do Projeto</p>
          <RadioButton
            name="iniciado"
            id="iniciado"
            value="iniciado"
            text="Iniciado"
            onChange={onChangeStatus}
            checked={status.iniciado}
          />
          <RadioButton
            name="progresso"
            id="progresso"
            value="progresso"
            text="Progresso"
            onChange={onChangeStatus}
            checked={status.progresso}
          />
          <RadioButton
            name="concluido"
            id="concluido"
            value="concluido"
            text="Concluido"
            onChange={onChangeStatus}
            checked={status.concluido}
          />
        </div>
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Cadastrar" onClick={handleCadastro} />
        <C.LabelSignup>
         
          <C.Strong>
            <Link to="/myprojects">&nbsp;Meus Projetos</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
    <Footer />
    </>
  )
};


export default ProjectForm;