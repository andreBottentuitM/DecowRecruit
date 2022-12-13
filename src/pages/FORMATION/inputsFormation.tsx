import { Form, Button, Stack, Col, Row } from "react-bootstrap";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../context/context";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

type Props = {
  item: string;
  number: number;
  onClick: (deleteItem: string, type: string) => void
};

export const InputsFormation = ({
  item,
  number,
  onClick
}: Props) => {

  const { state, dispatch } = useContext(MenuContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (state.menuStatus === 1) {
      navigate("/cadastro");
    }
  }, []);
  return (
    <div>
      <div>
        <Stack direction="horizontal" className="justify-content-between">
          <p className="mt-4 ms-3 text-sm">Formação acadêmica {number + 1}</p>

          {number + 1 !== 1 && (
            <Button
              onClick={() => {
                onClick(item, "information");
              }}
              variant="link"
            >
              Deletar
            </Button>
          )}
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
          value={state.formation[number].instituition}
          onChange={(e) => {
            let cloneInstituition = state.formation;
            cloneInstituition[number].instituition = e.target.value;
            dispatch({
              type: "formation",
              payload: cloneInstituition,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Nome do curso"
          value={state.formation[number].course}
          onChange={(e) => {
            let cloneCourse = state.formation;
            cloneCourse[number].course = e.target.value;
            dispatch({
              type: "formation",
              payload: cloneCourse,
            });
          }}
        />
      
        <FormControl sx={{ m: 1, width:'96.4%'}}>
        
         <Select
         onChange={(e) => {
          let cloneLevel = state.formation;
          cloneLevel[number].level = e.target.value;
            dispatch({
              type: "formation",
              payload: cloneLevel,
            });
         }}
          value={state.formation[number].level}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Selecione o nível de formação</em>
          </MenuItem>
          <MenuItem value={'Ensino Fundamental Incompleto'}>Ensino Fundamental Incompleto</MenuItem>
          <MenuItem value={'Ensino Fundamental'}>Ensino Fundamental</MenuItem>
          <MenuItem value={'Ensino Médio Incompleto'}>Ensino Médio Incompleto</MenuItem>
          <MenuItem value={'Ensino Médio Completo'}>Ensino Médio Completo</MenuItem>
          <MenuItem value={'Ensino Superior Incompleto'}>Ensino Superior Incompleto</MenuItem>
          <MenuItem value={'Ensino Superior Completo'}>Ensino Superior Completo</MenuItem>
        </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Data de entrada"
          value={state.formation[number].initialDate}
          onChange={(e) => {
            let cloneInitialDate = state.formation;
            cloneInitialDate[number].initialDate = e.target.value;
            dispatch({
              type: "formation",
              payload: cloneInitialDate,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Data de término"
          value={state.formation[number].finishDate}
          onChange={(e) => {
            let cloneFinishDate = state.formation;
            cloneFinishDate[number].finishDate = e.target.value;
            dispatch({
              type: "formation",
              payload: cloneFinishDate,
            });
          }}
        />
     </Box>
      </div>
    </div>
  );
};
