import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from './store/context'
import { useLogger } from './hooks/useLogger'

ReactDOM.render(
    <Provider middleware={[useLogger]}>
        <App />
    </Provider>,
    document.getElementById('root')
)
