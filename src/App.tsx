import { Profile } from './components/PROFILE/Profile';//Importando component Router
import  MenuContextProvider  from './context/context';//Importando component FormProvider
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Experience } from './components/EXPERIENCE/Experience';
import { Address } from './components/ADDRESS/Address';
import { Formation } from './components/FORMATION/formation';


const App = () => {

  return (
    <MenuContextProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="Address" element={<Address/>} />
      <Route path="Experience" element={<Experience/>} />
      <Route path="Formation" element={<Formation/>} />
      </Routes>
      </BrowserRouter>
      </MenuContextProvider>
  );
}

export default App;