import styled from "styled-components"

export const Container = styled.div`
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
  .grid-container{
    padding:15px 0;
  }
  p{
    margin-bottom:5px
  }

  .services{
    margin-left:40px;
    font-size:13px;
  }

  .social{
     display:grid;
    justify-content:flex-end
  }

  @media (max-width: 900px) {
    
    .social{
        justify-content:center
    }
    .grid-container{
        margin-top:60px;
        display:grid;
        flex-direction:column;
        justify-content:center;
        text-align:center;
        padding: 15px;
    }

    .services{
        margin: 0 auto;
    }
    
  }

`