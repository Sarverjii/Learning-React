// App.jsx
import React, { useState, useCallback, useEffect } from 'react'
import styles from './App.module.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(true)
  const [characters, setCharacters] = useState(true)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (number) str += '0123456789'
    if (characters) str += '!@#$%^&*-_+=[]{}~`'

    for (let i = 0; i < parseInt(length); i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, number, characters])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, characters])

  const copytoClipBoard = () => {
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Password Generator</h1>

      <div className={styles.passwordRow}>
        <input
          id="password-output"
          type="text"
          placeholder="Generated password"
          value={password}
          readOnly
          className={styles.output}
        />
        <button onClick={copytoClipBoard} className={styles.copyBtn}>
          Copy
        </button>
      </div>

      <div className={styles.controlGroup}>
        <label htmlFor="length-slider">Length: {length}</label>
        <input
          id="length-slider"
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className={styles.slider}
        />
      </div>

      <div className={styles.controlGroup}>
        <input
          id="include-numbers"
          type="checkbox"
          checked={number}
          onChange={(e) => setNumber(e.target.checked)}
        />
        <label htmlFor="include-numbers">Include Numbers</label>
      </div>

      <div className={styles.controlGroup}>
        <input
          id="include-symbols"
          type="checkbox"
          checked={characters}
          onChange={(e) => setCharacters(e.target.checked)}
        />
        <label htmlFor="include-symbols">Include Special Characters</label>
      </div>

      <button id="generate-button" onClick={passwordGenerator} className={styles.button}>
        Create Password
      </button>
    </div>
  )
}

export default App
