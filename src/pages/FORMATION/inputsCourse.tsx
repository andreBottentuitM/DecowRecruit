import { Form, Button, Container, Stack,Col,Row } from "react-bootstrap"
import {useState, useEffect} from 'react'

type Props = {
    item: string,
    number: number,
    onClick: (deleteItem:string, type: string) => void,
    inputCourse: any,
    setInputCourse:any
  }

export const InputsCourse = ({item, number, onClick, inputCourse,setInputCourse}: Props) => {
     const [instituition, setInstituition] = useState<string>()
     const [finishDate, setFinishDate] = useState<string>()
     const [initialDate, setInitialDate] = useState<string>()
     const [course, setCourse] = useState<string>()

    
    useEffect(()=> {
      let inputCourseClone = [...inputCourse]
      inputCourseClone[number].instituition = instituition
      inputCourseClone[number].finishDate = finishDate
      inputCourseClone[number].initialDate = initialDate
      inputCourseClone[number].course = course
      setInputCourse(inputCourseClone)
     },[instituition,finishDate,initialDate,course])

    return(
        <div>
 <div>
            <Stack direction="horizontal" className='justify-content-between'>
            <p className="mt-4 ms-3 text-sm">Curso {number + 1}</p>
           
            {number+1 !== 1 && <Button onClick={() => {onClick(item, 'course')}} variant="link">Deletar</Button>}
            </Stack>
            <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Instituição:*</Form.Label>
        <Form.Control type="text" value={instituition} onChange={(e)=> {setInstituition(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome do curso:</Form.Label>
        <Form.Control type="text" value={course} onChange={(e)=> {setCourse(e.target.value)}}/>
        </Form.Group>
        <Row>
        <Col><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Data de Entrada:*</Form.Label>
        <Form.Control type="date" value={initialDate} onChange={(e)=> {setInitialDate(e.target.value)}} />
        </Form.Group></Col>
        <Col><Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Data de Término:*</Form.Label>
        <Form.Control type="date" value={finishDate} onChange={(e)=> {setFinishDate(e.target.value)}}/>
        <Form.Text id="passwordHelpBlock" muted>
        Caso não tenha terminado, coloque a data prevista de término.
      </Form.Text>
        </Form.Group></Col>
        </Row>
        </Container>
        </div>
        </div>
    )
}