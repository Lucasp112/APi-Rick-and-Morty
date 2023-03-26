import React, { Component } from "react";
import axios from "axios";
import * as S from "./component/Style.js";

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

export default class App extends React.Component {
  state = {
    info: []
  };

  pegarPersonagens = async () => {
    const resposta = await API.get();
    console.log(resposta);

    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      info: itensApi
    });
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  render() {
    return (
      <>
        <S.GlobalStyle />
        <S.title>
          <h1>RiCk And MoRtY ApI</h1>
        </S.title>
        <S.main>
          {this.state.info.map((item) => (
            <>
              <S.Card>
                <h1>{item.name}</h1>
                <img src={item.image} alt="" />
                <p>{item.species}</p>
                <p>{item.status}</p>
              </S.Card>
            </>
          ))}
        </S.main>
      </>
    );
  }
}

//criar estilo de card com o portal da serie
