import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCatagories(data.data.news_category))

    }, [])


    return (
        <div>
            <h2 className="font-semibold mb-3">All Catagory({catagories.length})</h2>
            <div className="flex flex-col gap-2">
                {catagories.map(category => (<NavLink to={`/category/${category.category_id}`} className="btn btn-base-100 border-none" key={category.category_id}>{category.category_name}</NavLink>))}
            </div>
        </div>
    );
};

export default LeftNavbar;