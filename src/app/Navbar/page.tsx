"use client"

import Theme from './_navbar/theme';
import Menu from './_navbar/menu';
import Smallscreen from './_navbar/smallscreen';
import Navbuttons from './_navbar/navbuttons';
import React, { createContext } from 'react';

const MyContext = createContext(null);

const Navbar = () => {
    return ( 
        <div className='border-b dark:bg-zinc-900 bg-white border-gray-500 '>
        <div className='flex py-2 justify-between items-center mx-2'>
            <Theme />
            <Menu />
            <Navbuttons />
            <Smallscreen />
        </div>
        </div>
     );
}
 
export default Navbar;