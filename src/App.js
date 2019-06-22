import React from 'react'
import { useStore } from './store'
import { setName } from './store/actions'

const mapState = state => ({
    userName: state.name
})

const mapDispatch = {
    setName
}

function App() {
    const [store] = useStore(mapState, mapDispatch)
    return (
        <main>
            <h1>Hook Playground</h1>
            <p>Name: {store.userName}</p>
            <button onClick={() => store.setName('Anne')}>Change name</button>
        </main>
    )
}

export default App
