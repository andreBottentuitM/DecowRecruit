import { Form, Button, Container, Stack, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

type Props = {
  item: string;
  number: number;
  onClick: (deleteItem: string, type: string) => void;
  setInputFormation: any;
  inputFormation: any;
};

export const InputsFormation = ({
  item,
  number,
  onClick,
  setInputFormation,
  inputFormation,
}: Props) => {
  const [instituition, setInstituition] = useState<string>();
  const [finishDate, setFinishDate] = useState<string>();
  const [initialDate, setInitialDate] = useState<string>();
  const [course, setCourse] = useState<string>();
  const [level, setLevel] = useState<string>();

  useEffect(() => {
    let inputFormationClone = [...inputFormation];
    inputFormationClone[number].instituition = instituition;
    inputFormationClone[number].finishDate = finishDate;
    inputFormationClone[number].initialDate = initialDate;
    inputFormationClone[number].course = course;
    inputFormationClone[number].level = level;
    setInputFormation(inputFormationClone);
  }, [instituition, finishDate, initialDate, course, level]);

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
        <Container>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Instituição:*</Form.Label>
            <Form.Control
              type="text"
              value={instituition}
              onChange={(e) => {
                setInstituition(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome do curso:</Form.Label>
            <Form.Control
              type="text"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          >
            <option>Selecione o nível de formação</option>
            <option value="Ensino fundamental Incompleto">
              Ensino Fundamental Incompleto
            </option>
            <option value="Ensino fundamental">Ensino Fundamental</option>
            <option value="Ensino Médio Imcompleto">
              Ensino Médio Imcompleto
            </option>
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Ensino Superior Imcompleto">
              Ensino Superior Imcompleto
            </option>
            <option value="Ensino Superior Completo">
              Ensino Superior Completo
            </option>
          </Form.Select>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Data de Entrada:*</Form.Label>
                <Form.Control
                  type="date"
                  value={initialDate}
                  onChange={(e) => {
                    setInitialDate(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Data de Término:*</Form.Label>
                <Form.Control
                  type="date"
                  value={finishDate}
                  onChange={(e) => {
                    setFinishDate(e.target.value);
                  }}
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Caso não tenha terminado, coloque a data prevista de término.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
