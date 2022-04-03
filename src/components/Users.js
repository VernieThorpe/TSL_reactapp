import React, { useState } from 'react';

const Users = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className='row'>
      <div className='col-md-4'>
        <form onSubmit={handleSubmit} className='card card-body'>
          <div className='form-group'>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='form-control'
              placeholder='Name'
              autoFocus
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='form-control'
              placeholder='Email'
              autoFocus
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='form-control'
              placeholder='Password'
              autoFocus
            />
          </div>
          <button className='btn btn-primary btn-block'>Create</button>
        </form>
      </div>
      <div className='col md-8'></div>
    </div>
  );
};

export default Users;
