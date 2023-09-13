import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para verificar las credenciales del usuario.
    // Por ejemplo, puedes hacer una solicitud a un servidor o comprobar en localstorage.
    const { username, password } = this.state;
    
    if (username === 'usuario' && password === 'contraseña') {
      this.setState({
        loggedIn: true,
      });
    } else {
      alert('Credenciales incorrectas');
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <div>¡Has iniciado sesión con éxito!</div>;
    }

    return (
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn">Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}

export default Login;
