import styled from "styled-components"


export const Container = styled.div`
display:flex;
align-items:center;
margin:50px auto 0 auto;
justify-content:center;
max-width: 1600px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
background-color:white;

.container-img{
    width:55%
}

.text{
    text-align:center;
    width: 70%;
    font-size: 25px;
    padding:10px;
    border-radius:4px;
    
}

.link{
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
  
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

@media (max-width: 1200px) {
    .text{
       font-size: 20px
    }

    .link{
        font-size: 22px;
    }
  }

  @media (max-width: 900px) {
    flex-direction:column;
    .container-img{
        width:55%
    }
  }
  @media (max-width: 600px) {
    .container-img{
        width:75%
    }
    .text{
        font-size: 16px
     }
     .link{
        font-size: 16px
    }
    .statistics h3{
        font-size: 17px
    }
    
    .statistics p{
        font-size: 10px
    }
  }
`