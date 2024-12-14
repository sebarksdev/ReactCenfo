import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../Context/User'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()

  const [loginError, setLoginError] = useState('')
  const { user, setUser, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    username:"",
    password: "",
  });

  const handleInputChange = (e) => {
    const {name,value} = e.target;

    setValores({
        ...valores,
        [name]: value
    })
}

  const onSubmit = (data) => {
    setLoginError("");
    login();
  };

  const onButtonClick = () => {
    login();
  }

  useEffect(()=>{
    if (user) {
      navigate('/')
    };
  },[user]) 


  const login = async () => {
    fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: valores.username,
        password: valores.password,
      }),
    })
      .then(response => {
        // if (!response.ok) {
        //   throw new Error('Server returned ' + response.status);
        // }
        return response.json();
      })
      .then(json => {
        if (json.id > 0) {
          setLoginError("");
          setUser(true);
          getUser(json.id);
        }
        else {
          setLoginError(json.message);
          setUser(false);
          setUserData(null);
        }
      })
      .catch(error => {
        console.log('There was a problem with the Fetch operation:', error);
      });
  }

  const getUser = (id) => {
    fetch('https://dummyjson.com/users/' + id)
    .then(response => {
      // if (!response.ok) {
      //   throw new Error('Server returned ' + response.status);
      // }
      return response.json();
    })
    .then(json => {
      if (json.id > 0) {
        setLoginError("");
        setUserData(json);
      }
      else {
        setLoginError(json.message);
        setUser(false);
        setUserData(null);
      }
    })
    .catch(error => {
      console.log('There was a problem with the Fetch operation:', error);
    });
  }

  return (
    <div className={'mainContainer'}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container" style={{ width: '450px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '30px' }}>
        <div className={'titleContainer'} style={{ marginBottom: '30px' }}>
          <div><h2>Login</h2></div>
        </div>
        <div className={'inputContainer'}>
          <b>Usuario</b>
          <input className={'inputBox'} type="text" name="username" style={{ borderRadius: '5px' }} autoComplete='on'
            value={valores.username} {...register("username", { required: true, maxLength: 20, onChange: handleInputChange })} />
        </div>

        <div className={'inputContainer'}>
          <b>Password</b>
          <input className={'inputBox'} type="password" name="password" style={{ borderRadius: '5px' }}
            value={valores.password} {...register("password", { required: true, maxLength: 20, onChange: handleInputChange })} />
        </div>

        <div className={'inputContainer'}>
          <input className='loginButton' type="submit" value={'Log in'} />

          <div className={'errorSummary'}>
            {loginError !== "" && (
                <p className="errorMsg">{loginError}</p>
            )}
            {errors.username && errors.username.type === "required" && (
                <p className="errorMsg">El 'Usuario' es requerido.</p>
            )}
            {errors.username && errors.username.type === "maxLength" && (
                <p className="errorMsg">El 'Usuario' no puede contener mas de {errors.username.maxLength} caracteres.</p>
            )}
            {errors.password && errors.password.type === "required" && (
                <p className="errorMsg">El 'Password' es requerido.</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
                <p className="errorMsg">El 'Password' no puede contener mas de {errors.password.maxLength} caracteres.</p>
            )}
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login