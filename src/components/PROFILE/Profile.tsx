import { Menu } from "../MENUS/menu";
import { Form, Button, Alert } from "react-bootstrap";
import * as C from "./style";
import { Col, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";

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
    if(state.name !== '' && state.phone.length === 15 && state.date.length === 10 && parseInt(inputYear[0])> 1910 && parseInt(inputYear[0]) <= currentlyYear && state.cpf.length === 14 && emailRegex.test(state.email)){
          dispatch({
            type: 'menuCurrent',
            payload: 2
          })
          dispatch({
            type: 'menuStatus',
            payload: 2
          })
          navigate('/Address')
    }else{
      setAlert(true)
    }
  };
  console.log(state.phone.length)
  return (
    <div>
      <C.Container>
        <Menu />

        <C.ContainerForm>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome Completo:*</Form.Label>
              <Form.Control
                type="text"
                value={state.name}
                onChange={(e) => {
                  dispatch({
                    type: "name",
                    payload: e.target.value,
                  });
                }}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Ex: André Bottentuit de Macedo
              </Form.Text>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Telefone:*</Form.Label>
                  <Form.Control
                    type="text"
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
                  <Form.Text id="passwordHelpBlock" muted>
                    Seu CPF deve ter 9 números mais o DDD. Ex: (00) 00000-0000.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Data de Nascimento:*</Form.Label>
                  <Form.Control
                    type="date"
                    value={state.date}
                    onChange={(e) => {
                      dispatch({
                        type: "date",
                        payload: e.target.value,
                      });
                    }}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                     Ex: 12/12/2000.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>CPF:*</Form.Label>
              <Form.Control
                type="text"
                value={state.cpf}
                onChange={(e) =>
                  dispatch({
                    type: "cpf",
                    payload: e.target.value
                      .replace(/\D/g, "")
                      .replace(/(\d{3})(\d)/, "$1.$2")
                      .replace(/(\d{3})(\d)/, "$1.$2")
                      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                      .replace(/(-\d{2})\d+?$/, "$1"),
                  })
                }
              />
              <Form.Text id="passwordHelpBlock" muted>
                Seu CPF deve ter 11 números. Ex: 000.000.000-00.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:*</Form.Label>
              <Form.Control
                value={state.email}
                type="email"
                onChange={(e) => {
                  dispatch({
                    type: "email",
                    payload: e.target.value,
                  });
                }}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Ex: andre.bottentuit@gmail.com
              </Form.Text>
            </Form.Group>
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
          </Form>
        </C.ContainerForm>
      </C.Container>
    </div>
  );
};
