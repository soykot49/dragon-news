import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between item-center">
            <div></div>
            <div className="space-x-3">
                <Link>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>

            </div>
            <div className="login flex gap-2 item-center">
                <div>
                    <img src={userIcon} alt="" />
                    
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>

            </div>
        </div>
    );
};

export default Navbar;