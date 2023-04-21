import { UserAuth } from "../Context/AuthContext";

const NavigationBar = () => {

    const {currentUser,  logOut} = UserAuth();

    const handleLogOut = ()=>{
        logOut()
        .then(res=>{
            alert("log out done!!");
        })
        .catch(er=>{
            console.log(er.message);
        })
    } 

    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className="conatinerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Instant Chat</a>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    );
};

export default NavigationBar;