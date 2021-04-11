import './App.scss';
import Stocks from './Stocks'
import Search from './Search'
import StockDetail from './StockDetail'
import useStocks from '../hooks/useStocks'
import { useState } from 'react';
import { Stock } from '../types'

const App = () => {
  const [selectedStock, setSelectedStock] = useState<Stock|null|undefined>(null)
  const {
    stocks,
    setSearchTerm,
    searchTerm,
    details
   } = useStocks({ selectedStock })

  const onSearchClick = () => {
    const selected = stocks.find((item) => {
      return item['1. symbol'].toLowerCase() === searchTerm.toLowerCase()
    })
    setSelectedStock(selected)
  }

  return (
    <div className='app'>
      <header className='appHeader'>
        Stock Search
      </header>
      <div className='contentWrapper'>
        <div className='searchContainer'>
          <div className='search'>
            <Search setSearchTerm={ setSearchTerm }></Search>
            <div onClick={ onSearchClick } className='button'>Search</div>
          </div>
          { stocks &&
            <Stocks
              selectStock={ setSelectedStock }
              stocks={ stocks }
            />
          }
        </div>
        {
          selectedStock &&
          details &&
            <StockDetail
              details={ details }
              stock={ selectedStock }
            />
        }
      </div>
    </div>
  )
}

export default App
