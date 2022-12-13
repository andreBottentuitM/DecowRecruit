import {createContext, useReducer, useState} from 'react'
import { v4 as uuidv4 } from "uuid";


export const MenuContext = createContext<any>(undefined)

type State = {//Criando type
    menuCurrent: number,
        menuStatus: number,
        name: string,
        phone: string,
        date: string,
        cpf:string,
        email:string,
        cep:string,
        street: string,
        number:string,
        complement:string,
        neighbourhood:string,
        city:string,
        state:string,
        experience:any,
        formation:any,
        course:any
}

const MenuContextProvider  = (props: any) => {

        
    const initialData:State  = {//Criando type
        menuCurrent: 1,
        menuStatus: 1,
        name: '',
        phone: '',
        date: '',
        cpf:'',
        email:'',
        cep:'',
        street: '',
        number:'',
        complement:'',
        neighbourhood:'',
        city:'',
        state:'',
        experience:[{id: uuidv4(),company:'',post:"",salary:"", initialDate:'', finishDate:'',achievements:""}],
        formation:[{id: uuidv4(), instituition:'', course:'', level:'', initialDate:'', finishDate:''}],
        course:[{id: uuidv4(), instituition:'', course:'', initialDate:'', finishDate:''}]
    }

    
    
    const formReducer = (state:any, action:any) => {
        console.log(state)
          switch(action.type){
            case 'menuCurrent':
                return {...state, menuCurrent: action.payload}
            case 'menuStatus':
                return {...state, menuStatus: action.payload}    
            case 'name':
                return {...state, name: action.payload}  
            case 'phone':
                return {...state, phone:action.payload}
            case 'date':
                return {...state, date:action.payload}      
                case 'cpf':
                return {...state, cpf:action.payload}  
                case 'email':
                return {...state, email:action.payload}  
                case 'cep':
                return {...state, cep:action.payload}  
                case 'street':
                return {...state, street:action.payload}  
                case 'number':
                return {...state, number:action.payload} 
                case 'complement':
                return {...state, complement:action.payload} 
                case 'neighbourhood':
                return {...state, neighbourhood:action.payload}  
                case 'city':
                return {...state, city:action.payload} 
                case 'state':
                return {...state, state:action.payload}   
                case 'experience':
                return {...state, experience: action.payload}   
                case 'formation':
                return {...state, formation:action.payload}  
                case 'course':
                return {...state, course:action.payload}  
                default:
            return state;
          }
    }
    const [state, dispatch] = useReducer(formReducer, initialData)
 
    const value = { state, dispatch}
    return(
        <MenuContext.Provider value={value}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;