import { Profile } from './pages/PROFILE/Profile';//Importando component Router
import  MenuContextProvider  from './context/context';//Importando component FormProvider
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Experience } from './pages/EXPERIENCE/Experience';
import { Address } from './pages/ADDRESS/Address';
import { Formation } from './pages/FORMATION/formation';
import {Home} from './pages/HOME/home'


const App = () => {

  return (
    <MenuContextProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cadastro" element={<Profile/>}/>
      <Route path="address" element={<Address/>} />
      <Route path="experience" element={<Experience/>} />
      <Route path="formation" element={<Formation/>} />
      </Routes>
      </BrowserRouter>
      </MenuContextProvider>
  );
}

export default App;