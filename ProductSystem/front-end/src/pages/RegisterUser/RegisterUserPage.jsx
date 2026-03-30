import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

export const RegisterUserPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const handleRegister = async () => {

        try {
            if (password != confirmPassword) {
                return Swal.fire({
                    title: "Erro!",
                    text: "As senhas não coincidem!",
                    icon: "error"
                })
            }

            await axios.post('http://localhost:8080/auth/register', { name, email, password })
            
            Swal.fire({
                title: "Sucesso!",
                text: "Usuário registrado com sucesso!",
                icon: "success"
            })
        }
        catch{
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível registrar o usuário",
                icon: "error"
            })
        }

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <>
            <div className='page'>
                <div id='container'>
                    <h1>Cadastrar Usuário</h1>
                    <div className='inputs'>
                        <input value={name} id="" type="text" placeholder='Nome completo' onChange={(e) => setName(e.target.value)} />
                        <input value={email} id="" type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                        <input value={password} id="" type="text" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                        <input value={confirmPassword} id="" type="text" placeholder='Confirmar senha' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button id="btn_cadastrar" onClick={handleRegister}>Cadastrar</button>
                    <a onClick={() => navigate('/login')}>Já tenho uma conta</a>
                </div>
            </div>
        </>
    )
}