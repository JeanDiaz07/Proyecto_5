import { Routes, Route } from "react-router"
import Navegacion from "../Components/Navegacion"
import { Home } from "../Pages/Home"
import { List } from "../Pages/List"
import { Contacto } from "../Pages/Contacto"
import { ShoppingCartProvider } from "../Context/CarritoContext"


export const AppRouter = () => {

return(
<>
<ShoppingCartProvider>
<nav>
<Routes>

<Route path='/' element={<Navegacion/>} >
    <Route path='Home' element={<Home/>}/>
    <Route path='List' element={<List/>}/>
    <Route path='Contacto' element={<Contacto/>}/>
</Route>
</Routes>
</nav>
</ShoppingCartProvider>

</>
)
}
