import { Menu } from "../MENUS/menu";
import { InputsExperience } from "./inputsComponent";
import { Form, Button, Alert } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import * as C from "./style";
import { useState, useContext, useEffect } from "react";
import { MenuContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const Experience = () => {
  const { state, dispatch } = useContext(MenuContext);
  const navigate = useNavigate();
  const [inputExperience, setInputExperience] = useState<any>([
    { id: uuidv4() },
  ]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (state.menuStatus === 1) {
      navigate("/");
    }
  }, []);

  const handleAdd = () => {
    if (inputExperience.length < 5) {
      console.log("test");
      let inputClone = [...inputExperience];
      inputClone.push({ id: uuidv4() });
      return setInputExperience(inputClone);
    }
  };

  const deleteItem = (deleteItem: any) => {
    let inputUpdated = inputExperience.filter((item: any) => {
      return item.id !== deleteItem.id;
    });
    setInputExperience(inputUpdated);
  };

  const validation = () => {
    try {
      let experienceValidation = inputExperience.every((item: any) => {
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
          type: "experience",
          payload: inputExperience,
        });
        dispatch({
          type: "menuCurrent",
          payload: 3,
        });
        dispatch({
          type: "menuStatus",
          payload: 3,
        });
        navigate("/Formation");
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
          <Form>
            {inputExperience.map((item: any, index: any) => {
              return (
                <InputsExperience
                  key={index}
                  onClick={deleteItem}
                  inputExperience={inputExperience}
                  setInputExperience={setInputExperience}
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
          </Form>
        </C.ContainerForm>
      </C.Container>
    </div>
  );
};
