import React,{useEffect,useState} from 'react';
import HeaderEx from './headerEx';
import {URL_API,doApiGet} from './apiSer';
import InputEx from './inputEx';
import SwapEx from './swapEX';
import ScoreEx from './scoreEx';


function ExchangeApp() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState('USDUSD')
  const [toCurrency, setToCurrency] = useState('USDILS')
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    doApi();
  }, [])
  

  let doApi = async()=> {
    let url = URL_API;
    let data = await doApiGet(url);
    let currency = Object.keys(data.quotes)
    let firstCurrency = currency[1]
    setCurrencyOptions([...currency])
    setFromCurrency(currency[0])
    setToCurrency(firstCurrency)
    setExchangeRate(data.quotes[firstCurrency])
  }

  useEffect(() => {


    if (fromCurrency != null && toCurrency != null) {
      updateApp();
    }
  }, [fromCurrency, toCurrency])

  let updateApp = async() => {
    let url = URL_API;
    let data = await doApiGet(url);
    setExchangeRate(data.quotes[toCurrency] / data.quotes[fromCurrency]); 
    console.log(exchangeRate);
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  function handleSwap(){
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
}

  return (
    <>
      <h1>Convert</h1>
      <InputEx
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <InputEx
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
        <div className="col-sm d-flex justify-content-center">
                <SwapEx
                    swapOptions = {handleSwap}
                />
            </div>
            <div>
                <ScoreEx
                selectedFromCurrency = {fromCurrency}
                selectedToCurrency = {toCurrency}
                fromFieldAmount = {fromAmount}
                toFieldAmount = {toAmount}
                />
            </div>
    </>
  );
}


export default ExchangeApp