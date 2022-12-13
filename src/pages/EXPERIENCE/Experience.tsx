import { Menu } from "../../components/MENUS/menu";
import { InputsExperience } from "./inputsComponent";
import { Form, Button, Alert } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import * as C from "./style";
import { useState, useContext, useEffect } from "react";
import { MenuContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import {Navbar} from '../HOME/navbar'
import {Footer} from '../../components/FOOTER/footer'


export const Experience = () => {
  const {state, dispatch } = useContext(MenuContext);
  const navigate = useNavigate();
  
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (state.menuStatus === 1) {
      navigate("/cadastro");
    }
  }, []);

  const handleAdd = () => {
    if (state.experience.length < 5) {
      
      let inputClone = [...state.experience,  {id: uuidv4(),company:'',post:"",salary:"", initialDate:'', finishDate:'',achievements:""} ];
     
    return dispatch({
      type: "experience",
      payload: inputClone,
    });
    }
  };

  const deleteItem = (deleteItem: any) => {
    let inputUpdated = state.experience.filter((item: any) => {
      return item.id !== deleteItem.id;
    });
    return dispatch({
      type: "experience",
      payload: inputUpdated,
    });
  };

  const validation = () => {
    try {
      let experienceValidation = state.experience.every((item: any) => {
        return (
          item.company !== "" &&
          item.finishDate.length === 10 &&
          item.initialDate.length === 10 &&
          item.post !== "" &&
          item.salary !== "" &&
          item.achievements !== ""
        );
      });

      if (experienceValidation) {
        dispatch({
          type: "menuCurrent",
          payload: 4,
        });
        dispatch({
          type: "menuStatus",
          payload: 4,
        });
        navigate("/formation");
      } else {
        setAlert(true);
      }
    } catch (e) {
      if (e instanceof TypeError) {
        setAlert(true);
      }
    }
  };

  return (
    <div>
      <Navbar/>
      <main>
      <C.Container>
        <Menu />
        <C.ContainerForm>
          <Button
            onClick={handleAdd}
            className="align-items-center d-flex gap-2 mx-auto"
            variant="primary"
          >
            <BsFillPlusCircleFill /> <span>Add Experiência</span>
          </Button>
          
            {state.experience.map((item: any, index: any) => {
              return (
                <InputsExperience
                  key={index}
                  onClick={deleteItem}
                  item={item}
                  number={index}
                />
              );
            })}
            {alert && (
              <Alert
                variant="danger"
                onClose={() => setAlert(false)}
                dismissible
                className="alert"
              >
                <BiError className="icon-danger" />
                Opss, algo deu errado! Verifique se todos os campos foram
                preenchidos corretamente!
              </Alert>
            )}
            <div className="d-grid gap-2 mt-5">
              <Button variant="primary" onClick={validation}>
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
