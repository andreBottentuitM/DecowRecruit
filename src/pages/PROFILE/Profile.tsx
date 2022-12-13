import { Menu } from "../../components/MENUS/menu";
import { Button, Alert } from "react-bootstrap";
import * as C from "./style";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import {Navbar} from '../HOME/navbar'
import {Footer} from '../../components/FOOTER/footer'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export const Profile = () => {
  const { state, dispatch } = useContext(MenuContext);
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();
  

  const validation = () => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const currentlyDate = new Date()
            const currentlyYear = currentlyDate.getFullYear()
            const inputYear = state.date.split('-')
       
          
            console.log(state.date.length)
    if(state.name !== '' && state.phone.length === 15 && state.date.length === 10/* && parseInt(inputYear[0])> 1910 && parseInt(inputYear[0]) <= currentlyYear*/ && state.cpf.length === 14 && emailRegex.test(state.email)){
          dispatch({
            type: 'menuCurrent',
            payload: 2
          })
          dispatch({
            type: 'menuStatus',
            payload: 2
          })
          navigate('/address')
    }else{
      setAlert(true)
    }
  };
  console.log(state.phone.length)
  return (
    <div>
      <Navbar/>
      <main>
      <C.Container>
        <Menu />

        <C.ContainerForm>
        <Box 
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1},
        }}
        noValidate
        autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Nome Completo"
          value={state.name}
          onChange={(e) => {
            dispatch({
              type: "name",
              payload: e.target.value,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Telefone"
          value={state.phone}
          onChange={(e) => {
            dispatch({
              type: "phone",
              payload: e.target.value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2")
                .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
                .replace(/(-\d{4})\d+?$/, "$1"),
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Data de Nascimento"
          value={state.date}
          onChange={(e) => {
            dispatch({
              type: "date",
              payload: e.target.value,
            });
          }}
        />
        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="CPF"
          value={state.cpf}
          onChange={(e) => {
            dispatch({
              type: "cpf",
              payload: e.target.value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1"),
            })
          }}
        />
        </FormControl>
         <FormControl fullWidth>
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={state.email}
          onChange={(e) => {
            dispatch({
              type: "email",
              payload: e.target.value,
            });
          }}
        />
        </FormControl>
        </Box>
          
            {alert &&
            <Alert
                variant="danger"
                onClose={() => setAlert(false)}
                dismissible
              >
                <BiError className="icon-danger" />
                Opss, algo deu errado! Verifique se todos os campos foram
                preenchidos corretamente!
              </Alert>}
            <div className="d-grid gap-2 mt-5">
              <Button onClick={validation} variant="primary">
                Continuar
              </Button>
            </div>
          
        </C.ContainerForm>
      </C.Container>
      </main>
      <Footer/>
    </div>
  );
};
