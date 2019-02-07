import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.section`
  text-align: center;
  height: 100vh;
`
const AppHeader = styled.header`
  background-color: #222;
  height: auto;
  padding: 20px;
  color: white;
`
const AppDiv = styled.div`
  background-color: #FFF;
  border: 2px solid #222;
  height: 150px;
  padding: 20px;
  justify-content: center;
 `
const AppTitle = styled.h1`
  font-size: 1.3em;
`
const AppIntro = styled.p`
  font-size: large;
`
const AppInput = styled.input`
  font-size: large;
  
`
const AppButton = styled.button`
  font-size: large;
  margin: 0px 10px;
  padding: 5px;
  background-color: #000;
  color: #FFF;
  border-style: none;
  border-radius: 5px;
`

class App1 extends Component {
  state = {
    login : "",
    password : ""
  }

  onChange = e => {
    this.state(
      { [ e.target.name ] : e.target.value }
    );
  }

  onClick = e => {
    console.log( this.state.login, this.state.password );
  }

  render() {
    return(
      <AppWrapper>
        <AppHeader>
          <AppTitle>Welcome to Marvellous app!</AppTitle>
        </AppHeader>

        <AppDiv>
          <AppInput 
            label="Login"
            name="login"
            onChange={ this.onChange }
            placeholder="Votre login"
          />

          <AppInput 
            label="Login"
            name="login"
            onChange={ this.onChange }
            placeholder="Votre login"
          />

          <AppButton onClick={ this.onClick }>S'authentifier</AppButton>
        </AppDiv>
      </AppWrapper>
    )
  }
}

export default App1;
