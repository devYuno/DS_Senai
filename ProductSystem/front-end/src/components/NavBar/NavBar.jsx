import './style.css'
import { useNavigate, Link } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='container-nav'>
                <Link className='title' to='/home'>IProdutos</Link>
                <nav className='links'>            
                    <Link className='link' to='/products'>Produtos</Link>
                    <Link className='link' >Registrar</Link>
                </nav>
                <div className='config'></div>
            </div>
        </>
    )
}