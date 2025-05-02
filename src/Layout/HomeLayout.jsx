import React from 'react';
import Header from '../components/Header/Header';
import LatesNews from '../components/LatesNews/LatesNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
           <header>
           
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatesNews></LatesNews>
            </section>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 '>
            <aside className='col-span-3 top-0 sticky h-fit'>
                <LeftAside></LeftAside>
            </aside>
            <section className='col-span-6 '>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default HomeLayout;