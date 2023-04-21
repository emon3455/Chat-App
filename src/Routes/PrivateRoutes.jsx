import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const PrivateRoutes = ({children}) => {

    const {currentUser} = UserAuth();

    if(!currentUser){
        return <Navigate to="/" replace={true}></Navigate>
    }

    return children;
};

export default PrivateRoutes;