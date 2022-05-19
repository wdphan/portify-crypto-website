import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinData from './components/CoinData';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function CoinPrices() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center border-2'>
      <div className='flex flex-row relative'>
        <div className='pt-10 pb-12'>
        <form className='flex text-center'>
        <FontAwesomeIcon icon={faSearch} className=' absolute mt-14 p-5 '></FontAwesomeIcon>
          <input
            className='mt-11 mb-10 pr-96 pl-20 pt-6 pb-6 border-2 rounded-md placeholder:text-xl'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
        </div>
      </div>

{/* coinlist labels */}
<div>
    <ul className='flex flex-row space-x-32 pr-40 text-xl text-gray-500 pb-0'>
      <li>Name</li>
      <li className='pr-20'>Symbol</li>
      <div className='flex flex-row space-x-32 text-xl text-gray-500 pb-10'>
      <li>Price</li>
      <li>Market Cap</li>
      <li>Change</li>
      <li>Volume (24h)</li>
      </div>
    </ul>
      </div>

      {filteredCoins.map(coin => {
        return (
          <CoinData
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default CoinPrices;