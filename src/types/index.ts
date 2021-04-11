import { Dispatch, SetStateAction } from 'react'

export interface Stock {
    "1. symbol": string,
    "2. name": string,
    "3. type": string,
    "4. region": string,
    "5. marketOpen": string,
    "6. marketClose": string,
    "7. timezone": string,
    "8. currency": string,
    "9. matchScore": string
}

export interface StockDetails {
    "01. symbol": string,
    "02. open": string,
    "03. high": string,
    "04. low": string,
    "05. price": string,
    "06. volume": string,
    "07. latest trading day": string,
    "08. previous close": string,
    "09. change": string,
    "10. change percent": string
}

export interface SearchApiResponse {
    data: {
       bestMatches: Stock[]
    }
}

export interface QuoteApiResponse {
    data: {
        "Global Quote": StockDetails
    }
}
