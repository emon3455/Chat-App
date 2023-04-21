import { UserAuth } from '../Context/AuthContext';

const Login = () => {

    const {currentUser} = UserAuth();
    console.log(currentUser);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there Please Login !!!</h1>
                        <p className="py-6">
                            Join the conversation meet new people and make connections in one shared room.
                        </p>
                        <button className="btn">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;