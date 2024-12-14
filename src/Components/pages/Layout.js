import { Link, Outlet } from 'react-router-dom';
import Menu from '../../Components/Menu'
import Footer from '../Footer';


const Layout = () => {
    return <div>
        <Menu/>
        <Outlet/>
        <Footer />
    </div>
}

export default Layout;