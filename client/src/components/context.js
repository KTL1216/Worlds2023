import React, { useState, createContext } from "react"

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState(['off', 'off'])

  return (
    <Context.Provider value={{
      gameState,
      setGameState
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context