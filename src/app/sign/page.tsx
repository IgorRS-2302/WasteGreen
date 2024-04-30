"use client";

import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
} from "@mui/material";
import Logo from "../components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { sign } from "../services/sign";
import { useRouter } from "next/router";


export default function Sign() {
  const [typeSign, setTypeSign] = useState<number>(0);

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCEP, setUserCEP] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userEstate, setUserEstate] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [userHouseNumber, setUserHouseNumber] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => setEstados(res.data));
  }, []);

  function setUf(value: any) {
    setUserEstate(value);
    let codeState;
    estados.map((estado: any) =>
      estado.nome == value ? (codeState = estado.id) : null
    );

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${codeState}/municipios`
      )
      .then((res) => setCidades(res.data));
  }

  const handleCity = (value: any) => {
    setUserCity(value);
  };

  const handleSign = (event: React.SyntheticEvent, id: number) => {
    setTypeSign(id);
  };

  async function autocompleteAdress(value: any) {
    setUserCEP(value); 
    if (value.length == 8) {
      let addressData: any = await axios
        .get(`http://viacep.com.br/ws/${value}/json/`)
        .then((res) => res.data);
      if (addressData) {
        setUserCity(addressData.localidade);
        setUserAdress(addressData.logradouro);
        setUserEstate(addressData.sigla);
        estados.map((estado: any) =>
          estado.sigla == addressData.uf ? setUserEstate(estado.nome) : null
        );
      }
    }
  }

  const handleSignEmail = (email: string) => {
    setLoginEmail(email);
  };

  const handleSignPassword = (password: string) => {
    setLoginPassword(password);
  };

  function register() {
    axios.post(`http://localhost:3000/register`, {
      name: userName,
      email: userEmail,
      password: userPassword,
      state: userEstate,
      city: userCity,
      street: userAdress,
      number: userHouseNumber,
      zipcode: userCEP,
    });
  }

  function login() {
    if (loginEmail && loginPassword) {
      sign({
        email: loginEmail,
        password: loginPassword,
      });
    }
  }

  return (
    <div className="flex h-lvh bg-slate-50">
      <div className="bg-white flex flex-wrap m-auto gap-5 border w-4/5 max-w-xl shadow rounded-md p-10">
        <Link href="/" className="w-full">
          <div className="m-auto h-10">
            <Logo />
          </div>
        </Link>
        <div className="flex flex-wrap w-full ">
          <Tabs
            value={typeSign}
            onChange={handleSign}
            className="w-full border "
          >
            <Tab label="Entrar" tabIndex={0} className="w-1/2" />
            <Tab label="Cadastro" tabIndex={1} className="w-1/2" />
          </Tabs>
          <div className="w-full mt-3 ">
            {typeSign == 0 ? (
              <div>
                <TextField
                  id="userInEmail"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className="mb-3"
                  value={loginEmail}
                  onChange={(e) => handleSignEmail(e.target.value)}
                />
                <TextField
                  id="userInPassword"
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={loginPassword}
                  onChange={(e) => handleSignPassword(e.target.value)}
                />
                <div className="w-full">
                  <fieldset className="my-3">
                    <Checkbox color="success" />
                    <span>Lembrar senha</span>
                  </fieldset>
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    className="m-auto flex bg-green-700 w-full"
                    onClick={()=>login()}
                  >
                    <span className="text-white font-bold">Entrar</span>
                  </Button>
                </div>
              </div>
            ) : (
              typeSign == 1 && (
                <div>
                  <TextField
                    id="userUpNome"
                    label="Nome Fantasia"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                  <TextField
                    id="userUpEmail"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                  />
                  <TextField
                    id="userUpPassword"
                    label="Senha"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="password"
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                  />
                  <TextField
                    id="userUpCEP"
                    label="CEP (Apenas números)"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="number"
                    onChange={(e) => autocompleteAdress(e.target.value)}
                  />
                  <FormControl fullWidth className="mb-3">
                    <InputLabel>Estado</InputLabel>
                    <Select
                      className="w-full"
                      onChange={(e) => setUf(e.target.value)}
                      label="Estado"
                      value={userEstate}
                    >
                      {userEstate && (
                        <MenuItem value={userEstate}>{userEstate}</MenuItem>
                      )}
                      {estados &&
                        estados.map((estado: any) => (
                          <MenuItem
                            className="w-full"
                            key={estado.id}
                            value={estado.nome}
                          >
                            <span>{estado.nome}</span>
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth disabled={!estados} className="mb-3">
                    <InputLabel>Cidade</InputLabel>
                    <Select
                      label="Cidade"
                      disabled={!estados}
                      onChange={(e) => {
                        handleCity(e.target.value);
                      }}
                      value={userCity}
                    >
                      {userCity && (
                        <MenuItem value={userCity}>{userCity}</MenuItem>
                      )}
                      {cidades &&
                        cidades.map((cidade: any) => (
                          <MenuItem
                            className="w-full"
                            key={cidade.id}
                            value={cidade.nome}
                          >
                            <span>{cidade.nome}</span>
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="Enderço"
                    value={userAdress}
                    onChange={(e) => {
                      setUserAdress(e.target.value);
                    }}
                    className="mb-3"
                  />
                  <TextField
                    fullWidth
                    type="number"
                    label="Número"
                    value={userHouseNumber}
                    onChange={(e) => {
                      setUserHouseNumber(e.target.value);
                    }}
                    className="mb-3"
                  />

                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    className="m-auto flex bg-green-700 w-full mt-7 "
                    onClick={()=>register()}
                  >
                    <span className="text-white font-bold">Cadastrar-se</span>
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
