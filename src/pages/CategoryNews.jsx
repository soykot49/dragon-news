import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data);

    return <div>
        <h2 className='font-semibold'>Dragon News</h2>
        <h1>{data.length} News To Available</h1>
    </div>

};

export default CategoryNews;
