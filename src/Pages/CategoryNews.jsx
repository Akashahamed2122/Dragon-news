import React, { use, useEffect, useState } from 'react';
import {  data, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';



const newsPromise = fetch('news.json').then(res=> res.json())

const CategoryNews = () => {
const data = use(newsPromise)
// console.log(data)

    const {id}= useParams()


    // hook 
    const [categoryNews, setCategoryNews]= useState([])

    
    // filter
    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data)
            console.log(data)

        }  else if(id=="1"){
            const filterNews = data.filter(news=> news.others.is_today_pick==true)
            setCategoryNews(filterNews)

        }else{
            const filterNews = data.filter(news=> news.category_id==id);
            console.log(filterNews)
            setCategoryNews(filterNews)
        }
        

     
        
        
    },[data, id])


    
    return (
        <div>
            
            <div className='grid grid-cols-1 gap-5 px-10'>
                {
                    categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)

                }
            </div>
            
        </div>
    );
};

export default CategoryNews;