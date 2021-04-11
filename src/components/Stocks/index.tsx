import { Dispatch, SetStateAction } from 'react' 
import './Stocks.scss';
import { Stock } from '../../types'

interface StocksProps {
   stocks: Stock[]
   selectStock: Dispatch<SetStateAction<Stock | null | undefined>>
}

const Stocks = ({ stocks, selectStock }: StocksProps) => {
    return (<div>
       {
        stocks.map((stock, i) => {
           return (<div
              onClick={ () => selectStock(stock) }
              key={ 'stock' + i }
              className='stockItem'
           >
            { stock['2. name'] }
           </div>)
        })
       }
    </div>)
}

export default Stocks
