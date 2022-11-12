import {
  Form,
  Button,
  Container,
  Stack,
  FloatingLabel,
  Col,
  Row,
} from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { MenuContext } from "../../context/context";

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
      <Container>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Empresa:*</Form.Label>
          <Form.Control
            type="text"
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cargo:*</Form.Label>
          <Form.Control
            type="text"
            value={state.experience[number].post}
            onChange={(e) => {
              let cloneExperience = state.experience;
              cloneExperience[number].post = e.target.value;
              dispatch({
                type: "experience",
                payload: cloneExperience,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salário Final:*</Form.Label>
          <Form.Control
            type="text"
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
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Data de Admissão:*</Form.Label>
              <Form.Control
                type="date"
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
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Data de Saída:*</Form.Label>
              <Form.Control
                type="date"
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
            </Form.Group>
          </Col>
        </Row>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Atribuições / Realizações*"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "170px" }}
            value={state.experience[number].achievements}
            onChange={(e) => {
              let cloneExperience = state.experience;
              cloneExperience[number].achievements = e.target.value;
              dispatch({
                type: "experience",
                payload: cloneExperience,
              });
            }}
          />
        </FloatingLabel>
      </Container>
    </div>
  );
};
