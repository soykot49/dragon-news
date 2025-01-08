import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex bg-base-200 py-2 px-4 gap-2 items-center">
            <p className="bg-red-600 p-2 rounded-md">Latest</p>
            <Marquee className="gap-4">
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed rem nisi modi deserunt? Voluptatum, esse!</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed rem nisi modi deserunt? Voluptatum, esse!</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed rem nisi modi deserunt? Voluptatum, esse!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;