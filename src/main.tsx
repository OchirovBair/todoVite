import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { createRoot } from 'react-dom/client'

import App from './App'
import { store } from './app/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
