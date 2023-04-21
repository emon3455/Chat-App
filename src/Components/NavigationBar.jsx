import { UserAuth } from "../Context/AuthContext";

const NavigationBar = () => {

    const {currentUser,  logOut} = UserAuth();

    const handleLogOut = ()=>{
        if(currentUser){
            logOut()
            .then(res=>{
                alert("log out done!!");
            })
            .catch(er=>{
                console.log(er.message);
            })
        }
        else{
            alert("please log in first");
        }
        
    } 

    return (
        <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
            <div className="conatinerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-2xl font-semibold">Let's Chat</a>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    );
};

export default NavigationBar;