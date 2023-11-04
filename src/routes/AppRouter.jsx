
import {  Route, Routes } from "react-router"
import { Navegacion } from "../Components/Navegacion"
import { Home } from "../Pages/Home"
import {Contacto} from "../Pages/Contacto"
import { List } from "../Pages/List"
import { Login } from "../Pages/Login"
export const AppRouter = () => {

return(
<>


<Navegacion/>
       
           
            <Routes>
                <Route path='/home' element={<Home />}/>
                 <Route path='/contacto' element={< Contacto />} />
                 <Route path='/list' element={<List/>} />
                 <Route path='/login' element={<Login/>} />
            </Routes>
           
        
</>
);
}
export default AppRouter