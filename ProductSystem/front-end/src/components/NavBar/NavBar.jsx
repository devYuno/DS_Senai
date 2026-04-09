import { useState } from 'react'
import './style.css'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'

export const NavBar = ({ home }) => {
    const navigate = useNavigate()

    const [hideNav, setHideNav] = useState(!home)
    const [showLogin, setShowLogin] = useState(home)

    return (
        <>
            <div className='container-nav'>
                <Link className='title' to='/'>IProdutos</Link>
                {hideNav && <nav className='links'>
                    <Link className='link' to='/products'>Produtos</Link>
                    <Link className='link' >Registrar</Link>
                </nav>}
                <div className='config'>
                    {hideNav &&
                        <button onClick={() => navigate('/')}>Logout</button>
                    }
                    {showLogin &&
                        <button onClick={() => navigate('/login')}>Login</button>
                    }
                </div>
            </div>
        </>
    )
}