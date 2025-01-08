import { FaFacebook, FaInstagram, FaTwitter,  } from "react-icons/fa6";

const Findus = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 ">Login with</h2>
            <div className="join flex join-vertical">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook>Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter>Twitter
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram>Instagram
                </button>
            </div>
        </div>
    );
};

export default Findus;