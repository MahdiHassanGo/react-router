import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
const handleShowDetail = () =>{
navigate(`/user/${id}`);
}
    const {id,name,email,phone}=user;
    const  navigate = useNavigate();

    const userStyle = {
        border:'2px solid black',
        padding:'5px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowDetail}> Click to see details</button>
        </div>
    );
};

export default User;