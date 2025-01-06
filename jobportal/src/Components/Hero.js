import React, { useContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Assets/google.png';
import img2 from '../Assets/samsumg.png';
import img3 from '../Assets/samsung2.png';
import { AppContext } from '../Context/AppContext';
const Hero = () => {
  const{setSearch,setSearchFilter}=useContext(AppContext);
  const titleRef=useRef(null);
  const locationRef=useRef(null);
  const onSearch=()=>{
    setSearchFilter({
      title:titleRef.current.value,
      location:locationRef.current.value
    });
    setSearch(true);
    console.log({
      title:titleRef.current.value,
      location:locationRef.current.value
    })
  }
  return (
    <>
    <div className='flex flex-col mx-auto items-center my-8 w-[1600px] bg-gradient-to-r from-blue-400 to-purple-800'>
        <h2 className='text-4xl text-white pt-8'>Over 10,000+ Jobs to apply</h2>
        <p className='text-white text-center py-6'> job this is new job this is new job
        this is new job this is new job<br/> this is new job this is new job </p>    
        <div className='flex items-center bg-white rounded-md px-3 py-2 mb-8'>   
        <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2'/>
        <input placeholder='Search for jobs'ref={titleRef} className='outline-none'></input>
        <div className='bg-slate-400 h-8 w-[1.5px] mr-4'></div>
        <FontAwesomeIcon icon={faLocationDot} className='mr-2'/>
        <input placeholder='Location' className='outline-none' ref={locationRef}></input>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Search</button>
        </div>  
    </div>
    <div className='flex items-center gap-32 bg-white shadow-md border-2 border-gray-300 px-4 py-8 mx-auto w-[1600px]'>
     <h3 className='text-2xl'>Trusted By</h3>
     <div className='flex gap-40'>
      <img src={img1} className='w-24 h-14'/>
      <img src={img2} className='w-24 h-14'/>
      <img src={img3} className='w-24 h-14'/>
     </div>
    </div>
    </>
  )
}

export default Hero
