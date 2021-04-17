import React from 'react';

function InputEx(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div>
      <input type="number" className="input" value={Number(amount).toPrecision()} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option.substring('USD'.length)}</option>
        ))}
      </select>
    </div>
  )
}

export default InputEx 