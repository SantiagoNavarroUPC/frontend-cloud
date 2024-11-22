import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [typeUser, setTipoUsuario] = useState('vendedores');
  const [users, setUsers] = useState([]); // Simulación de usuarios almacenados
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  // Manejo de login
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      alert(`Bienvenido, ${foundUser.name} ${foundUser.lastname}!`);
      navigate('/menu'); // Navegar al menú principal
    } else {
      alert('Correo o contraseña incorrectos. Por favor, intente nuevamente.');
    }
  };

  // Manejo de registro
  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1, // Generar un ID basado en el tamaño del array
      name,
      lastname,
      email,
      phone,
      password,
      typeUser,
    };

    setUsers([...users, newUser]);
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    setIsActive(false); // Cerrar el formulario de registro
    clearForm();
  };

  // Limpiar formulario
  const clearForm = () => {
    setName('');
    setLastname('');
    setEmail('');
    setPhone('');
    setPassword('');
    setTipoUsuario('vendedores');
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="menu-body">
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <span>Ingresa tus datos personales</span>
            <input
              type="text"
              placeholder="Nombre(s)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Apellido(s)"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <select
              value={typeUser}
              onChange={(e) => setTipoUsuario(e.target.value)}
              required
            >
              <option value="vendedores">Vendedores</option>
            </select>

            <button type="submit">Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <h1>Iniciar sesión</h1>
            <span>Ingresar sus credenciales</span>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenido!</h1>
              <p>
                Ingrese sus datos personales para crear tu cuenta en el módulo
                de encuestas
              </p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hola, Querido Upecista!</h1>
              <p>
                Regístrese con sus datos personales para acceder al modulo de gestion
              </p>
              <button className="hidden" id="register" onClick={handleRegisterClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
