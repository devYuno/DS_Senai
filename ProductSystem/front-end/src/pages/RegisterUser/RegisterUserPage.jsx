import './style.css'
import { useNavigate } from 'react-router-dom'

export const RegisterUserPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='page'>
                <div id='container'>
                    <h1>Cadastrar Usuário</h1>
                    <div className='inputs'>
                        <input id="" type="text" placeholder='Nome completo' />
                        <input id="" type="text" placeholder='E-mail'/>
                        <input id="" type="text" placeholder='Senha'/>
                        <input id="" type="text" placeholder='Confirmar senha'/>
                    </div>
                    <button id="btn_cadastrar">Cadastrar</button>
                    <a onClick={() => navigate('/login')}>Já tenho uma conta</a>
                </div>
            </div>
        </>
    )
}