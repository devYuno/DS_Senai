import { NavBar } from '../../components/NavBar/NavBar'
import './style.css'

export const HomePage = () => {
    return (
        <>
            <NavBar home={true}/>
            <div className="on-page">
            </div>
        </>
    )
}