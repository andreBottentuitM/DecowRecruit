import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Logo from '../../images/decowrecruit.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import * as C from './style'


export const Footer = () => {

    return (
        <footer>
        <C.Container>
          <Grid className='grid-container' container alignItems='center'>
            <Grid  md={4} sm={12}  container>
                <Box className='services'>
                <Grid xs={12}>
                 <Link sx={{textDecoration:'none',cursor:'pointer'}}>TRABALHE CONOSCO</Link>
                 </Grid>
                 <Grid xs={12}>
                 <Link sx={{textDecoration:'none', cursor:'pointer'}}>TERMOS DE USO</Link>
                 </Grid>
                 <Grid xs={12}>
                 <Link sx={{textDecoration:'none', cursor:'pointer'}}>POLÍTICA DE PRIVACIDADE</Link>
                 </Grid>
                 <Grid xs={12}>
                 <Link sx={{textDecoration:'none', cursor:'pointer'}}>CENTRAL DE AJUDA AO RECRUTADOR</Link>
                 </Grid>
                 </Box>
            </Grid>
            <Grid md={4} sm={12} container justifyContent="center">
                <img src={Logo} width={200} alt="" />
            </Grid>
            <Grid className='social' container md={4} sm={12}>
                <Grid sx={{width:'100%'}} container alignItems={'center'} justifyContent="center">
                <Grid xs={12} textAlign="center">
                 <p>Siga nossas redes sociais</p>
                 </Grid>
                 <Box sx={{display:'flex', gap:2}}>
                <Link sx={{color:'black'}} href="https://github.com/andreBottentuitM" target="_blank"><GitHubIcon/></Link>
                <Link sx={{color:'black'}} href="https://www.linkedin.com/in/andr%C3%A9-bottentuit-de-macedo/" target="_blank"><LinkedInIcon/></Link>
                </Box>
                </Grid>
                </Grid>
          </Grid>
          </C.Container>
          </footer>
    )

}