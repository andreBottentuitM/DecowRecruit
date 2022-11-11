import { Menu } from "../MENUS/menu";
import { InputsFormation } from "./inputsFormation";
import { InputsCourse } from "./inputsCourse";
import { Form, Button, Alert } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import * as C from "./style";
import { useState, useContext,useEffect } from "react";
import { MenuContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BiError } from "react-icons/bi";

type FormationType = {
  id: string | undefined;
  instituition: string | undefined;
  courseName: string | undefined;
  level: string | undefined;
  initialDate: string | undefined;
  finishDate: string | undefined;
}[];

export const Formation = () => {
  const [inputFormation, setInputFormation] = useState<FormationType>([
    {
      id: uuidv4(),
      instituition: "",
      courseName: "",
      level: "",
      initialDate: "",
      finishDate: "",
    },
  ]);
  const [inputCourse, setInputCourse] = useState<any>([{ id: uuidv4() }]);
  const [alert, setAlert] = useState(false);
  const { state, dispatch } = useContext(MenuContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.menuStatus === 1) {
      navigate("/");
    }
  }, []);

  const handleAddFormation = (formation: string) => {
    if (inputFormation.length < 5 && formation === "formation") {
      let inputClone = [...inputFormation];

      inputClone.push({
        id: uuidv4(),
        instituition: "",
        courseName: "",
        level: "",
        initialDate: "",
        finishDate: "",
      });
      return setInputFormation(inputClone);
    }
    if (inputCourse.length < 5 && formation === "course") {
      let inputClone = [...inputCourse];
      inputClone.push({ id: uuidv4() });
      return setInputCourse(inputClone);
    }
  };

  const deleteItem = (deleteItem: any, type: string) => {
    if (type === "information") {
      let inputUpdated = inputFormation.filter((item: any) => {
        return item.id !== deleteItem.id;
      });
      setInputFormation(inputUpdated);
    } else if (type === "course") {
      let inputUpdatedCourse = inputCourse.filter((item: any) => {
        return item.id !== deleteItem.id;
      });
      setInputCourse(inputUpdatedCourse);
    }
  };
 
  const validation = () => {
    try {
      let formationValidation = inputFormation.every((item:any) => {
        return (
          item.instituition !== "" &&
          item.finishDate.length === 10 &&
          item.initialDate.length === 10 &&
          (item.level !== "Selecione o nível de formação" || item.level !== undefined)
        );
      });
      let coursesValidation = inputCourse.every((item: any) => {
        return (
          item.instituition !== "" &&
          item.finishDate.length === 10 &&
          item.initialDate.length === 10
        );
      });
      if (formationValidation && coursesValidation) {
        dispatch({
          type: "course",
          payload: inputCourse,
        });
        dispatch({
          type: "formation",
          payload: inputFormation,
        });
        dispatch({
          type: 'menuCurrent',
          payload: 4
        })
        dispatch({
          type: 'menuStatus',
          payload: 4
        })
        navigate("/Experience");
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
      <Menu />
      <C.Container>
        <C.ContainerForm>
          <Button
            onClick={() => {
              handleAddFormation("formation");
            }}
            className="align-items-center d-flex gap-2 mx-auto"
            variant="primary"
          >
            <BsFillPlusCircleFill /> <span>Add Formação Escolar</span>
          </Button>
          <Form>
            {inputFormation.map((item: any, index: any) => {
              return (
                <InputsFormation
                  key={index}
                  onClick={deleteItem}
                  inputFormation={inputFormation}
                  setInputFormation={setInputFormation}
                  item={item}
                  number={index}
                />
              );
            })}

            <Button
              onClick={() => {
                handleAddFormation("course");
              }}
              className="align-items-center d-flex gap-2 mx-auto"
              variant="primary"
            >
              <BsFillPlusCircleFill /> <span>Add Curso</span>
            </Button>

            {inputCourse.map((item: any, index: any) => {
              return (
                <InputsCourse
                  key={index}
                  onClick={deleteItem}
                  inputCourse={inputCourse}
                  setInputCourse={setInputCourse}
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
              >
                <BiError className="icon-danger" />
                Opss, algo deu errado! Verifique se todos os campos foram
                preenchidos corretamente!
              </Alert>
            )}
            <div className="d-grid gap-2 mt-5">
              <Button onClick={validation} variant="primary">
                Enviar
              </Button>
            </div>
          </Form>
        </C.ContainerForm>
      </C.Container>
    </div>
  );
};
