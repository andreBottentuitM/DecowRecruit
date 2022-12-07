import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Logo from '../../images/decowrecruit.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import * as C from './style'


export const Footer = () => {

    return (
        <footer className="sticky bottom-0">
        <C.Container>
          <Grid container sx={{backgroundColor: 'white'}} alignItems='center'>
            <Grid xs={4} container>
                <Box sx={{marginLeft:'30px', fontSize:'13px'}}>
                <Grid xs={12}>
                 <p>TRABALHE CONOSCO</p>
                 </Grid>
                 <Grid xs={12}>
                 <p>TERMOS DE USO</p>
                 </Grid>
                 <Grid xs={12}>
                 <p>POLÍTICA DE PRIVACIDADE</p>
                 </Grid>
                 <Grid xs={12}>
                 <p>CENTRAL DE AJUDA AO RECRUTADOR</p>
                 </Grid>
                 </Box>
            </Grid>
            <Grid xs={4} container justifyContent="center">
                <img src={Logo} width={200} alt="" />
            </Grid>
            <Grid container xs={4} justifyContent="flex-end">
                <Grid sx={{width:'60%'}} container alignItems={'center'} justifyContent="center">
                <Grid xs={12} textAlign="center">
                 <p style={{margin:0}}>Siga nossas redes sociais</p>
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