import React from 'react'
import { useStore } from './store'
import { setName } from './store/actions'

function App() {
    const [state, actions] = useStore({ setName })
    return (
        <main>
            <h1>Hook Playground</h1>
            <p>Name: {state.name}</p>
            <button onClick={() => actions.setName('Anne')}>Change name</button>
        </main>
    )
}

export default App
