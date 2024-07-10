import React, { useState } from 'react'
import{FaBars,FaTimes} from 'react-icons/fa'
const NavBar = () => {
    const[nav,setNav]=useState(false);
    const links = [
        {
            id:1,
            link:'home'

        },
         {
            id:2,
            link:'about'

        }, {
            id:3,
            link:'skills'

        }, {
            id:4,
            link:'contact'

        },
    ]
  return (
    <div className='flex  justify-between items-center w-full h-20 px-4 bg-black text-white fixed'>
      <div>
<h1 className='text-5xl font-signature ml-2'>aditya</h1>
</div>
    <ul className="w-full text-xl   justify-end hidden md:flex  ">
        {links.map(({id,link}) =>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
{link}</li>
       ) )}

</ul>
<div onClick={()=>setNav(!nav)} className='cursor-pointers pr-4 z-10 text-gray-500 md:hidden'>
{nav ? <FaTimes size={30}/>:<FaBars size={30}/>
 }
</div>

{nav&&(<ul className=' flex flex-col items-center justify-center absolute top-0 w-full left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 py-5  text-5xl'>
{links.map(({id,link}) =>(
<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '>
{link}</li>
))}
</ul>)}


</div>

    
)
}

export default NavBar