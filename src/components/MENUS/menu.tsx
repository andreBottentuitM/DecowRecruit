import { BsFillPersonLinesFill,  } from "react-icons/bs"
import { FaGraduationCap  } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import { MdWork } from "react-icons/md"
import { Link } from "react-router-dom"
import {useContext} from 'react'
import {MenuContext} from '../../context/context'
import * as C from './style'


export const Menu = () => {
   
    const { state, dispatch } = useContext(MenuContext);
  
    return (
<div>
     <C.Container>
       <p>Cadastre-se </p>
       <C.Icons  >
       <Link to="/"><BsFillPersonLinesFill className="icon-profile"  /></Link> 
       <Link to={state.menuStatus > 1 ? '/Address': ''}><ImLocation className="icon-address"/></Link>
       <Link to={state.menuStatus > 2 ? '/Experience': ''}><MdWork className="icon-experience"/></Link>
       <Link to={state.menuStatus > 3 ? '/Formation': ''}><FaGraduationCap className="icon-formation"/></Link>
       </C.Icons>
       <div className="line"></div>
       </C.Container>
</div>
    )
}