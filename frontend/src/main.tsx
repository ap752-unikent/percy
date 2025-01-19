import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider as ChakraProvider } from "../src/components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider
        client={queryClient}>
        <Router>
          <Routes>
            <Route path='/welcome/:userId' element={<App />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
