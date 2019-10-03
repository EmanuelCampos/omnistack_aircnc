import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {

  const [email, setEmail] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });
    const { _id } = response.data;

    localStorage.setItem('user', _id);
    
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      <div className="content">
        <p>
          Ofereça <strong>spots para programadores e encontre 
              <strong>talentos</strong> para sua empresa</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
