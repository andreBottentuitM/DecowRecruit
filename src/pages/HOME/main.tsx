import Grid from '@mui/material/Grid'
import mainImage from '../../images/image_main.jpg'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

export function Main() {

    return(
        <div>
          <Grid container  alignItems="center" justifyContent="center" sx={{width:'100%',maxWidth:"1600px", margin:'0 auto'}}>
  <Grid xs={6} sx={{mt:8}}>
 <img style={{width:"100%", maxWidth:'700px'}} src={mainImage} alt="" />
  </Grid>
   <Grid xs={6} sx={{mt:8}}>
   <Box sx={{width:'100%', maxWidth:700, backgroundColor:'#F5FFFA', fontSize:30, textAlign:'center', borderRadius:40}}><p>Mais de 70.000 profissionais desenvolveram suas carreiras com a gente! Junte-se a nós e tenha uma <strong style={{color:'blue'}}>carreira de sucesso!</strong></p></Box>
   <Link to="/cadastro" style={{display:'flex', justifyContent:"center",width:'100%',maxWidth:700, fontSize:"25px"}}>Cadastre seu currículo aqui!</Link>
   </Grid>

</Grid>
      </div>
    )
}