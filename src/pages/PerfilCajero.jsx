import React, { useState } from 'react';
import '../css/admin.css'; 

function PerfilCajero() {
  const [perfil, setPerfil] = useState({
    nombre: 'Andrés',
    apellido: 'Panchi',
    ciudad: 'Ecuador',
    email: 'andrespanchichavez@gmail.com',
    rol: 'cajero',
    telefono: '0995406523',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Perfil actualizado correctamente');
  };

  return (
    <div className="perfil-admin">
      <h2>Perfil del Cajero</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={perfil.nombre} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" name="apellido" value={perfil.apellido} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Ciudad:</label>
          <input type="text" name="ciudad" value={perfil.ciudad} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={perfil.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={perfil.telefono} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Rol:</label>
          <input type="text" name="rol" value={perfil.rol} readOnly />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="contrasena" value={perfil.contrasena} onChange={handleChange} required />
        </div>

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default PerfilCajero;
