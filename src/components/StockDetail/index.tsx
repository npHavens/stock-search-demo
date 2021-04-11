import './StockDetail.scss';
import { Stock , StockDetails} from '../../types'

interface StockDetailsProps {
    stock: Stock,
    details: StockDetails
}

const StockDetail = ({ stock, details }: StockDetailsProps) => {
    return (
        <div className='stockContainer'>
            <div>{ stock['1. symbol'] }</div>
            <div>{ stock['2. name'] }</div>
            <div>Type</div>
            <div>{ stock['3. type'] }</div>
            <div>Current Price</div>
            <div>{ details['05. price'] }</div>
            <div>Daily Volume</div>
            <div>{ details['06. volume'] }</div>
            <div>Change</div>
            <div>{ details['10. change percent'] }</div>
        </div>)
}

export default StockDetail
