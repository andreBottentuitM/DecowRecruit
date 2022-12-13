import {
  Button,
  Stack
} from "react-bootstrap";
import { useContext } from "react";
import { MenuContext } from "../../context/context";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

type Props = {
  item: string;
  number: number;
  onClick: (deleteItem: string) => void;
};

export const InputsExperience = ({ item, number, onClick }: Props) => {
  const { state, dispatch } = useContext(MenuContext);

 
  return (
    <div>
      <Stack direction="horizontal" className="justify-content-between">
        <p className="mt-4 ms-3 text-sm">
          Experiência Profissional {number + 1}
        </p>

        {number + 1 !== 1 && (
          <Button
            onClick={() => {
              onClick(item);
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
        <FormControl fullWidth>
      <TextField
          required
          id="outlined-required"
          label="Empresa"
          value={state.experience[number].company}
          onChange={(e) => {
            let cloneExperience = state.experience;
            cloneExperience[number].company = e.target.value;
            dispatch({
              type: "experience",
              payload: cloneExperience,
            });
          }}
        />
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Cargo"
          value={state.experience[number].post}
          onChange={(e) => {
            let cloneExperience = state.experience;
            cloneExperience[number].company = e.target.value;
            dispatch({
              type: "experience",
              payload: cloneExperience,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Salário Final"
          value={state.experience[number].salary}
          onChange={(e) => {
            let cloneExperience = state.experience;
            cloneExperience[number].salary = e.target.value;
            dispatch({
              type: "experience",
              payload: cloneExperience,
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Data de Admissão"
          value={state.experience[number].initialDate}
          onChange={(e) => {
            let cloneExperience = state.experience;
            cloneExperience[number].initialDate = e.target.value;
            dispatch({
              type: "experience",
              payload: cloneExperience,
            });
          }}
        />
         <TextField
          required
          id="outlined-required"
          label="Data de Saída"
          value={state.experience[number].finishDate}
          onChange={(e) => {
            let cloneExperience = state.experience;
            cloneExperience[number].finishDate = e.target.value;
            dispatch({
              type: "experience",
              payload: cloneExperience,
            });
          }}
        />
        <FormControl fullWidth>
       <TextField
          id="outlined-multiline-static"
          label="Atribuições"
          multiline
          rows={5}
        />
        </FormControl>
      </Box>
    </div>
  );
};
