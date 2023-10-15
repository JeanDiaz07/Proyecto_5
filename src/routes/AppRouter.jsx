import { Routes, Route } from "react-router"

import { BrowserRouter } from "react-router-dom"
import Navegacion from "../Components/Navegacion"
import { Home } from "../Pages/Home"
import { List } from "../Pages/List"
import { Contacto } from "../Pages/Contacto"


export const AppRouter = () => {

return(
<>

<nav>
<Routes>

<Route path='/' element={<Navegacion/>} >
    <Route path='Home' element={<Home/>}/>
    <Route path='List' element={<List/>}/>
    <Route path='Contacto' element={<Contacto/>}/>
</Route>
</Routes>
</nav>


</>
)
}
