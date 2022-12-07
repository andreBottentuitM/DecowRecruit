import styled from "styled-components"


export const Container = styled.div`
display:flex;
align-items:center;
margin:80px auto;
justify-content:center;
width:'100%';
max-width: 1600px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
background-color:white;

.text{
    text-align:center;
    width: 50%;
    font-size: 25px;
    padding:10px;
    border-radius:4px;
    
}

.statistics div {
    align-items: center
}

.statistics h3{
    font-size: 25px
}

.statistics p{
    font-size: 15px
}

p{
    margin:0
}

h3{
    margin:0
}
`