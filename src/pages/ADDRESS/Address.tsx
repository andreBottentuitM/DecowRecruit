import { Menu } from "../../components/MENUS/menu";
import * as C from "./style";
import { Form, Button, Alert } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../context/context";
import { BiError } from "react-icons/bi";

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
      <C.Container>
        <Menu />
        <C.ContainerForm>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>CEP:*</Form.Label>
              <Form.Control
                type="text"
                value={state.cep}
                onChange={(e) => cepInput(e)}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Seu CEP deve ter 8 dígitos.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Rua:*</Form.Label>
              <Form.Control
                type="text"
                value={state.street}
                onChange={(e) => {
                  dispatch({ type: "street", payload: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Número da Residência:</Form.Label>
              <Form.Control type="text" value={state.number} onChange={(e) => {
                  dispatch({ type: "number", payload: e.target.value });
                }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control type="text" value={state.complement} onChange={(e) => {
                  dispatch({ type: "complement", payload: e.target.value });
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bairro:*</Form.Label>
              <Form.Control
                type="text"
                value={state.neighbourhood}
                onChange={(e) => {
                  dispatch({ type: "neighbourhood", payload: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cidade:*</Form.Label>
              <Form.Control
                type="text"
                value={state.city}
                onChange={(e) => {
                  dispatch({ type: "city", payload: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Estado:*</Form.Label>
              <Form.Control
                readOnly
                type="text"
                value={state.state}
                
              />
            </Form.Group>
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
          </Form>
        </C.ContainerForm>
      </C.Container>
    </div>
  );
};
