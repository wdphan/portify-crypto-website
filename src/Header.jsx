import React from 'react'

const Header = () => {
  return (

    <div className='flex flex-row justify-center pt-8 pb-14 border-2 text-xl font-bold content-center relative'>
        <img src="/images/logo.png" className='h-20 w-30 m-0 absolute content-start left-14' alt="home"/>
        <div className='space-x-40 pt-5'>
            <a href="/CoinPrices">Prices</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/Aboutus">About Us</a>
            </div>
            <button className='border-2 absolute pl-10 pr-10 pt-3 pb-3 rounded-lg bg-[#010180] text-white right-20'>Sign In</button>
    </div>
  )
}

export default Header
