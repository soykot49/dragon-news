import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";

const Navbar = () => {
    const {user , logOut} = useContext(Authcontext)
    return (
        <div className="flex justify-between item-center">
            <div>{user && user.name}</div>
            <div className="space-x-3">
                <Link>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>

            </div>
            <div className="login flex gap-2 item-center">
                <div>
                    <img src={userIcon} alt="" />
                    
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button> :  <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
               

            </div>
        </div>
    );
};

export default Navbar;