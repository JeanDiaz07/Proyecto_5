import React from 'react'
import {Header} from './src/Header'
import { Footer } from './src/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './src/routes/AppRouter'



export const App = () => {
  return (
    <div>

<Header/>
<BrowserRouter>
<AppRouter/>

</BrowserRouter>




<Footer/>

    </div>
  )
}
export default App