import { Menu } from "../../components/MENUS/menu";
import {Navbar} from '../HOME/navbar'
import * as C from "./style";
import { Form, Button, Alert } from "react-bootstrap";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../context/context";
import { BiError } from "react-icons/bi";
import {Footer} from '../../components/FOOTER/footer'

export const Address = () => {
  const { state, dispatch } = useContext(MenuContext);
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.menuStatus === 1) {
      navigate("/cadastro");
    }
  }, []);

  const cepInput = async (value: any) => {
    let cepClone = value.target.value;
    dispatch({
      type: "cep",
      payload: cepClone
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?/, "$1"),
    });
    if (cepClone.length === 9) {
      const apiUrl = `https://viacep.com.br/ws/${cepClone}/json/`;

      const response = await fetch(apiUrl);

      const data = await response.json();

      dispatch({ type: "street", payload: data.logradouro });
      dispatch({ type: "neighbourhood", payload: data.bairro });
      dispatch({ type: "city", payload: data.localidade });
      dispatch({ type: "state", payload: data.uf });
    }
  };

  const validation = () => {
        if(state.cep.length === 9 && state.street !== '' && state.numero !== '' && state.complement !== '' && state.neighbourhood !== '' && state.city !== '' && state.state !== ''){
          navigate('/experience')
          dispatch({
            type: 'menuCurrent',
            payload: 3
          })
          dispatch({
            type: 'menuStatus',
            payload: 3
          })
        }else{
          setAlert(true)
        }
      }

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
        autoComplete="off"
        >
         
          <FormControl fullWidth variant="outlined">
          <TextField
          required
          id="outlined-required"
          label="CEP"
          value={state.cep}
          onChange={(e) => cepInput(e)}
        />
        </FormControl>
         <TextField
          required
          id="outlined-required"
          label="Rua"
          value={state.street}
          onChange={(e) => {
            dispatch({ type: "street", payload: e.target.value });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Número"
          value={state.number}
          onChange={(e) => {
            dispatch({ type: "number", payload: e.target.value });
          }}
        />
         <TextField
          required
          id="outlined-required"
          label="Complemento"
          value={state.complement}
          onChange={(e) => {
            dispatch({ type: "complement", payload: e.target.value });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Bairro"
          value={state.neighbourhood}
          onChange={(e) => {
            dispatch({ type: "neighbourhood", payload: e.target.value });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Cidade"
          value={state.city}
          onChange={(e) => {
            dispatch({ type: "city", payload: e.target.value });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Estado"
          value={state.state}
          onChange={(e) => {
            dispatch({ type: "state", payload: e.target.value });
          }}
        />
          
            {alert && (
              <Alert
                variant="danger"
                onClose={() => setAlert(false)}
                dismissible
              >
                <BiError className="icon-danger" />
                Opss, algo deu errado! Verifique se todos os campos foram
                preenchidos corretamente!
              </Alert>
            )}
            <div className="d-grid gap-2 mt-5">
              <Button onClick={validation} variant="primary">Continuar</Button>
            </div>
          </Box>
        </C.ContainerForm>
      </C.Container>
      </main>
      <Footer/>
    </div>
  );
};
