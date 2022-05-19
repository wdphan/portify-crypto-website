import React from 'react'

const CoinData = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
  }) => {
    return (
      // design of all coin list with data 
            <div className='coin-row flex flex-row p-10 m-0 space-x-24 border-2 rounded-lg w-10/12 text-xl items-center'>
            <div className='flex flex-row space-x-20'>
                </div>
                <div className='flex pr-24'>
                <img src={image} alt='crypto' className='h-10 mr-5 flex flex-col'/>
                <h1 className='text-center h-10 mr-10 w-60'>{name}</h1>
                <p className='uppercase'>{symbol}</p>
                </div>

            <div className='flex flex-row space-x-24 items-center'>
                <p className='w-[110px] text-center'>${price}</p>
                <p className='coin-volume'>${volume.toLocaleString()}</p>
                </div>
        
        {/* % change in coin data */}
            {priceChange < 0 ? (
              <p className='coin-percent red w-[100px]'>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green w-[100px]'>{priceChange.toFixed(2)}%</p>
            )}
        {/* //market cap */}
            <p className='coin-marketcap w-[230px]'>
              ${marketcap.toLocaleString()}
            </p>
            <button className='border-2 pl-10 pr-10 pt-3 pb-3 rounded-lg bg-[#010180] text-white w-[300px]'>
                Add to List
            </button>
    </div>

    );
  };

export default CoinData