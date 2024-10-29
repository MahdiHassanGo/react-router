import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>we are home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;