import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data : news} = useLoaderData()
    console.log(news);
    
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-sm text-grey-400">{news.length} In this category</p>
            <div>
                {news.map(SingleNews => <NewsCard key={SingleNews._id} news={SingleNews}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;