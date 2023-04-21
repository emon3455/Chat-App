import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { useEffect } from 'react';

const Login = () => {

    const navigate = useNavigate();

    const {currentUser , loginWithGoogle} = UserAuth();
    console.log(currentUser);

    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(res=>{
            const logedUser = res.user;
        })
        .catch(er=>{
            console.log(er.message);
        })

    }

    useEffect(()=>{

        if(currentUser){
            navigate("/chat");
        }

    },[currentUser])

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there Please Login !!!</h1>
                        <p className="py-6">
                            Join the conversation meet new people and make connections in one shared room.
                        </p>
                        <button onClick={handleGoogleLogin} className="btn">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;