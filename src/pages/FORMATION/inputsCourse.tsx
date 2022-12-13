import { Form, Button, Container, Stack,Col,Row } from "react-bootstrap"
import {useContext} from 'react'
import { MenuContext } from "../../context/context";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


type Props = {
    item: string,
    number: number,
    onClick: (deleteItem:string, type: string) => void
  }

export const InputsCourse = ({item, number, onClick}: Props) => {

  const {state, dispatch } = useContext(MenuContext);


    return(
        <div>
 <div>
            <Stack direction="horizontal" className='justify-content-between'>
            <p className="mt-4 ms-3 text-sm">Curso {number + 1}</p>
           
            {number+1 !== 1 && <Button onClick={() => {onClick(item, 'course')}} variant="link">Deletar</Button>}
            </Stack>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1},
      }}
      noValidate
      autoComplete="off"
      >
            <TextField
          required
          id="outlined-required"
          label="Instituição"
          value={state.course[number].instituition}
          onChange={(e) => {
            let cloneInstituition = state.course;
            cloneInstituition[number].instituition = e.target.value;
            dispatch({
              type: "course",
              payload: cloneInstituition,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Instituição"
          value={state.course[number].course}
          onChange={(e) => {
            let cloneInstituition = state.course;
            cloneInstituition[number].course = e.target.value;
            dispatch({
              type: "course",
              payload: cloneInstituition,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Data de Entrada"
          value={state.course[number].initialDate}
          onChange={(e) => {
            let cloneInstituition = state.course;
            cloneInstituition[number].initialDate = e.target.value;
            dispatch({
              type: "course",
              payload: cloneInstituition,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Data de Término"
          value={state.course[number].finishDate}
          onChange={(e) => {
            let cloneInstituition = state.course;
            cloneInstituition[number].finishDate = e.target.value;
            dispatch({
              type: "course",
              payload: cloneInstituition,
            });
          }}
        />
        <FormControl fullWidth>
        <TextField
          id="outlined-multiline-static"
          label="Resumo"
          multiline
          rows={5}
        />
        </FormControl>
            </Box>
     
        </div>
        </div>
    )
}