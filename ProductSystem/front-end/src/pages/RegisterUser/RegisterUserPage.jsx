// import './style.css'
import '../../Styles/site.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

export const RegisterUserPage = () => {
    const [showPass, setShowPass] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const handleRegister = async () => {

        try {
            if (!name || !email || !password || !confirmPassword) {
                return Swal.fire({
                    title: "Atenção!",
                    text: "Todos os campos devem sem preenchidos.",
                    icon: "warning"
                })
            }

            if (password != confirmPassword) {
                return Swal.fire({
                    title: "Erro!",
                    text: "As senhas não coincidem!",
                    icon: "warning"
                })
            }

            await axios.post('http://localhost:8080/auth/register', { name, email, password })

            Swal.fire({
                title: "Sucesso!",
                text: "Usuário registrado com sucesso!",
                icon: "success"
            })
        }
        catch (e) {
            console.log(e)
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
                <div className='container'>
                    <h1>Cadastrar Usuário</h1>
                    <div className='inputs'>
                        <input value={name} type="text" placeholder='Nome completo' onChange={(e) => setName(e.target.value)} />
                        <input value={email} type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        <input value={password} type={showPass ? "text" : "password"} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                        <input value={confirmPassword} type={showPass ? "text" : "password"} placeholder='Confirmar senha' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className='showPass'>
                        <input type='checkbox' checked={showPass} onChange={(e) => setShowPass(e.target.checked)}></input>
                        <label>Mostrar senha</label>
                    </div>
                    <button id="btn_cadastrar" onClick={handleRegister}>Cadastrar</button>
                    <a onClick={() => navigate('/login')}>Já tenho uma conta</a>
                </div>
            </div>
        </>
    )
}