import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name ,website} =user;
    const goBack = () =>
    {
navigate(-1);
    }
    return (
        <div>
            <h2>Details about user :{name}</h2>
            <p>Website : {website}</p>
            <button onClick={goBack}> Go back</button>
        </div>
    );
};

export default UserDetails;