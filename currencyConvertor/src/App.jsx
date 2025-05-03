import React, { useState } from 'react'
import CurrencyInput from './components/CurrencyInput'
import styles from './App.module.css'
import useCurrecyInfo from './hooks/useCurrencyInfo'
import getCurrencyList from './API/getCurrencyList'
import { useEffect } from 'react'

export default function App() {
  const [from, setFrom] = useState("usd")
  const [amount,setAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const[convertedamount, setConvertedAmount] = useState(0)


  const currencyList = getCurrencyList()
  const data = useCurrecyInfo(from)

 

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedamount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * data[to])
  }


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.row}>
          <CurrencyInput 
            amount={amount} 
            currencyList={currencyList} 
            currencytype={from} 
            fromorto="From" 
            onAmountChange={setAmount} 
            onCurrencyTypeChangne={setFrom} 
            inputDisabled={false}
          />


          <div className={styles.buttonGroup}>
            <button onClick={swap}>Swap</button>
            <button onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>


          <CurrencyInput 
            amount={convertedamount} 
            currencyList={currencyList} 
            currencytype={to} 
            fromorto="To" 
            onAmountChange={setConvertedAmount} 
            onCurrencyTypeChangne={setTo} 
            inputDisabled={true}
          />        
        </div>
      </div>
    </div>
  )
}
