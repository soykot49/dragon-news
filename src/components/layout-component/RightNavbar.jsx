import Findus from "../Findus";
import SocialLogin from "../SocialLogin";


const RightNavbar = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <Findus></Findus>
        </div>
    );
};

export default RightNavbar;