// import './style.css'
import '../../Styles/site.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const LoginPage = () => {
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
       
        try {
            if (!email || !password) {        
                return Swal.fire({
                    title: "Atenção!",
                    text: "Todos os campos devem sem preenchidos.",
                    icon: "warning"
                })
            }
            else {
                const response = await axios.post('http://localhost:8080/auth/login', { email, password })
                
                sessionStorage.setItem('token', response.data.token)

                navigate('/products')
            }
        }
        catch (e) {
            console.log(e)
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível concluir o login.",
                icon: "error"
            })
        }
    }

    return (
        <>
            <div className='page'>
                <div className='container'>
                    <h1>Login</h1>
                    <div className='inputs'>
                        <input id="inp_email" type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input id="inp_senha" type={showPass ? "text" : "password"} placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='showPass'>
                        <input type='checkbox' checked={showPass} onChange={(e) => setShowPass(e.target.checked)}></input>
                        <label>Mostrar senha</label>
                    </div>
                    <button id="btn_login" onClick={handleLogin}>Login</button>
                    <a onClick={() => navigate('/register')}>Não tenho uma conta</a>
                </div>
            </div>
        </>
    )
}