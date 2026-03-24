import './style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const SignIn = () => {
        if (!email || !senha) {
            alert("Todos os campos devem ser preenchidos.")
        }
        else {
            if (senha != "123" || email != "aaa@gmail.com") {
                alert("Login Inválido")
            }
            else {
                navigate('/home')
            }
        }
        
    }

    return (
        <>
            <div className='page'>
                <div className='container'>
                    <h1>Login</h1>
                    <div className='inputs'>
                        <input id="inp_email" type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input id="inp_senha" type="text" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <button id="btn_login" onClick={SignIn}>Login</button>
                    <a onClick={() => navigate('/register')}>Não tenho uma conta</a>
                </div>
            </div>
        </>
    )
}