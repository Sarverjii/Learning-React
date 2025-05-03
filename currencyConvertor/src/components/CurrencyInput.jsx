import React, { useEffect, useState } from 'react';
import styles from "./CurrencyInput.module.css"

export default function CurrencyInput({
    amount,
    onAmountChange,
    inputDisabled = false,
    fromorto,
    currencyList,
    currencytype,
    onCurrencyTypeChangne
}) {


    

  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelRow}>
        <span>{fromorto}</span>
        <span>Currency Type</span>
      </div>
      <div className={styles.inputs}>
            <input type="number" value={amount} onChange={(e) => onAmountChange(e.target.value)}/>
            <select value={currencytype} onChange={(e) => onCurrencyTypeChangne(e.target.value)}>
                 {Object.keys(currencyList).map((code) => (
                 <option key={code} value={code}>
                   {code.toUpperCase()}
                 </option>
                 ))}
            </select>
      </div>
    </div>
  )
}
