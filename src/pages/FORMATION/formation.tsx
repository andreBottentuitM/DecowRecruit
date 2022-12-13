import { Menu } from "../../components/MENUS/menu";
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
import {Navbar} from '../HOME/navbar'
import {Footer} from '../../components/FOOTER/footer'


export const Formation = () => {
  const [inputCourse, setInputCourse] = useState<any>([{ id: uuidv4() }]);
  const [alert, setAlert] = useState(false);
  const { state, dispatch } = useContext(MenuContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.menuStatus === 1) {
      navigate("/cadastro");
    }
  }, []);

  const handleAddFormation = (formation: string) => {
    if (state.formation.length < 5 && formation === "formation") {
      let inputClone = [...state.experience, {id: uuidv4(), instituition:'', course:'', level:'', initialDate:'', finishDate:''}]

      return dispatch({
        type: "formation",
        payload: inputClone,
      })
    }
    if (state.course.length < 5 && formation === "course") {
      let inputClone = [...state.course, {id: uuidv4(), instituition:'', course:'', initialDate:'', finishDate:''}];
      return dispatch({
        type: "course",
        payload: inputClone,
      })
    }
  };

  const deleteItem = (deleteItem: any, type: string) => {
    if (type === "information") {
      let inputUpdated = state.formation.filter((item: any) => {
        return item.id !== deleteItem.id;
      });
      return dispatch({
        type: "formation",
        payload: inputUpdated,
      });
    } else if (type === "course") {
      let inputUpdatedCourse = state.course.filter((item: any) => {
        return item.id !== deleteItem.id;
      });
      return dispatch({
        type: "course",
        payload: inputUpdatedCourse,
      });
    }
  };
 
  const validation = () => {
    try {
      let formationValidation = state.formation.every((item:any) => {
        return (
          item.instituition !== "" &&
          item.finishDate.length === 10 &&
          item.initialDate.length === 10 &&
          (item.level !== "Selecione o nível de formação" || item.level !== undefined)
        );
      });
      let coursesValidation = state.course.every((item: any) => {
        return (
          item.instituition !== "" &&
          item.finishDate.length === 10 &&
          item.initialDate.length === 10
        );
      });
      if (formationValidation && coursesValidation) {
        dispatch({
          type: "menuCurrent",
          payload: 4,
        });
        dispatch({
          type: "menuStatus",
          payload: 4,
        });
        navigate("/");
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
            {state.formation.map((item: any, index: any) => {
              return (
                <InputsFormation
                  key={index}
                  onClick={deleteItem}
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

            {state.course.map((item: any, index: any) => {
              return (
                <InputsCourse
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
      </main>
      <Footer/>
    </div>
  );
};
