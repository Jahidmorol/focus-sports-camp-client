import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sheared/Footer/Footer';
import Header from '../pages/Sheared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;