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
  console.log(state.menuCurrent)
    return (
<div>
     <C.Container menuStatus={state.menuStatus} >
       <p>Cadastre-se </p>
       <C.Icons menuStatus={state.menuStatus} menuCurrent={state.menuCurrent} >
       <Link onClick={() => {dispatch({
          type: "menuCurrent",
          payload: 1,
        })}} to="/"><BsFillPersonLinesFill className="icon-profile"  /></Link> 
       <Link onClick={() => {if(state.menuStatus >1){dispatch({
          type: "menuCurrent",
          payload: 2,
        })}}} to={state.menuStatus > 1 ? '/Address': ''}><ImLocation className="icon-address"/></Link>
       <Link onClick={() => {if(state.menuStatus >2){dispatch({
          type: "menuCurrent",
          payload: 3,
        })}}} to={state.menuStatus > 2 ? '/Experience': ''}><MdWork className="icon-experience"/></Link>
       <Link onClick={() => {if(state.menuStatus >3){dispatch({
          type: "menuCurrent",
          payload: 4,
        })}}} to={state.menuStatus > 3 ? '/Formation': ''}><FaGraduationCap className="icon-formation"/></Link>
       </C.Icons>
       <div className="line"></div>
       <div className="line-loading"></div>
       </C.Container>
</div>
    )
}