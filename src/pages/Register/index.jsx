import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logomulh.png';
import { LayoutComponents } from '../../components/layoutComponents';


export const Register = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    return (
        <LayoutComponents>
            <form className="login-form">
              <span className="login-form-title">Cadastre-se!</span>
              <span className="login-form-title">
                <img src={logo} alt="Logo da imobiliária" />
               </span>
  
              <div className="wrap-input">
                <input className={name !== '' ? 'has-val input' : 'input'} type="text" value={name}
                onChange={e => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome:"></span>
              </div>

              <div className="wrap-input">
                <input className={email !== '' ? 'has-val input' : 'input'} type="text" value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="E-mail:"></span>
              </div>
  
              <div className="wrap-input">
                <input className={password !== '' ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha:"></span>
              </div>
              
              <div className="container-login-form-btn">
                <button className="login-form-btn">Criar conta</button>
              </div>
  
              <div className="text-center">
                <span className="txt1">Já possui uma conta?</span>
                <Link className="txt2" to="/login">Fazer login.</Link>
              </div>
  
            </form>
        </LayoutComponents>
    )
}