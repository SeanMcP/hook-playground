import React from 'react'
import { useStore } from './store/context'
import { incrementCount } from './store/actions'

const mapState = state => ({
    count: state.count
})

const mapDispatch = {
    incrementCount
}

function App() {
    const [store] = useStore(mapState, mapDispatch)
    return (
        <main>
            <h1>Hook Playground</h1>
            <p>Count: {store.count}</p>
            <button onClick={store.incrementCount}>+1</button>
        </main>
    )
}

export default App
