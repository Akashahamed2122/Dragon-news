import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const [news, setNews] = useState({});


    
    const data = useLoaderData()
    console.log(data)
    const {id}= useParams()

    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id==id);
        setNews(newsDetails)
    },[data,id])
    console.log(news)



    return (
        <>
        <div>
        <Header></Header>
        </div>
           
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
            <section className='col-span-9'>
                <h1 className='font-bold text-xl'>News details</h1>
                <NewsDetailsCard key={news.id} news={news} ></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
        </>

    );
};

export default NewsDetails;