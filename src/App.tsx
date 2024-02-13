import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <Reset />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
