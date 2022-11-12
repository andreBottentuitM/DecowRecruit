import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'



export const Container = styled.div<{menuStatus:number}>`
    width:30rem;
    margin: 3rem auto;
    .line{
        height:3px;
        margin: -25px auto;
        width: 18rem;
        z-index:-1;
        background-color:#bbdefb;
       
    }
    
    .line-loading{
        width:${props => props.menuStatus === 1 ?'.5rem' : props.menuStatus === 2 ? '5rem': props.menuStatus === 3 ? '12rem' : '20rem'};
        height:3px;
        margin: 22px 95px;
        background-color:#0d6efd;
        transition: width 2s ease-in-out;
    }

   
    p{
        font-size:1.5rem;
        text-align: center
    } 
`;

export const Icons = styled.div<{menuStatus:number, menuCurrent:number}>`
    display: flex;
    justify-content: space-evenly;
   
    
    .icon-profile{
        color:white;
        font-size: 3rem;
        padding:8px;
        border-radius: 50%;
        background-color:#0d6efd;
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
        animation: ${props => props.menuCurrent === 1 ? 'pulse-blue 2s infinite': 'none'};
    }
    @keyframes pulse-blue {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
        }
        
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
        }
        
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
        }
      }
    .icon-address{
        color:white;
        font-size: 3rem;
        padding:8px;
        border-radius: 50%;
        background-color:${props => props.menuStatus < 2 ? '#c6c6c5' : '#0d6efd'};
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
        animation: ${props => props.menuCurrent === 2? 'pulse-blue 2s infinite': 'none'};
    }
    .icon-experience{
        color:white;
        font-size: 3rem;
        padding:8px;
        border-radius: 50%;
        background-color:${props => props.menuStatus < 3 ? '#c6c6c5' : '#0d6efd'};
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
        animation: ${props => props.menuCurrent === 3? 'pulse-blue 2s infinite': 'none'};
    }
    .icon-formation{
        color:white;
        font-size: 3rem;
        padding:8px;
        border-radius: 50%;
        background-color:${props => props.menuStatus < 4 ? '#c6c6c5' : '#0d6efd'};
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
        animation: ${props => props.menuCurrent === 4? 'pulse-blue 2s infinite': 'none'};
        
    }

    
    
`
