import { useEffect, useState } from 'react'
import  {
    Stock,
    StockDetails,
    SearchApiResponse,
    QuoteApiResponse
} from '../types'
import axios from 'axios'
import { debounce } from 'lodash'

const apiKey = 'RQFL2BNS7BVM7V1L'

interface UseStocksProps {
    selectedStock: Stock|null|undefined
}

const useStocks = ({ selectedStock }: UseStocksProps) => {
    const [stocks, setStocks] = useState<Stock[]>([])
    const [details, setDetails] = useState<StockDetails|null>(null)
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
      getStockDetails()
    }, [selectedStock])

    useEffect(() => {
        if (!searchTerm && stocks) {
            // reset stock data if search input is cleared
            setStocks([])
            setDetails(null)
        } else {
            getStocksBySymbol()
        }
    }, [searchTerm])

    const getStocksBySymbol = debounce(async () => {
        try {
            const { data }: SearchApiResponse = await axios(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ searchTerm }&apikey=${ apiKey }`)

            setStocks(data.bestMatches)
        } catch (error) {
            console.log('ERROR SEARCHING STOCKS', error)
        }
      }, 500)

    const getStockDetails = debounce(async () => {
        if (selectedStock) {
            try {
                const { data }: QuoteApiResponse = await axios(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ selectedStock['1. symbol'] }&apikey=${ apiKey }`)
                setDetails(data['Global Quote'])
            } catch(error) {
                console.log('ERROR FETCHING QUOTE', error)
            }
        }

    }, 500)

    return {
        stocks,
        setSearchTerm,
        details,
        getStockDetails,
        searchTerm
    }
}

export default useStocks
