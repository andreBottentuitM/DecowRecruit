import { Form, Button, Container, Stack, FloatingLabel,Col,Row } from "react-bootstrap"
import {useState, useEffect} from 'react'

type Props = {
  item: string,
  number: number,
  onClick: (deleteItem:string) => void,
  setInputExperience: any,
  inputExperience:any
}


export const InputsExperience = ({item,number, onClick, setInputExperience,inputExperience }: Props) => {

       const [company, setCompany] = useState('')
       const [post, setPost] = useState('')
       const [salary, setSalary] = useState('')
       const [initialDate, setInitialDate] = useState('')
       const [finishDate, setFinishDate] = useState('')
       const [achievements, setAchievements] = useState('')
    
       useEffect(()=> {
        let inputExperienceClone = [...inputExperience]
        inputExperienceClone[number].company = company
        inputExperienceClone[number].post = post
        inputExperienceClone[number].salary = salary
        inputExperienceClone[number].finishDate = finishDate
        inputExperienceClone[number].initialDate = initialDate
        inputExperienceClone[number].achievements = achievements
        setInputExperience(inputExperienceClone)
       },[company,finishDate,initialDate,post,salary,achievements])


    return(
        <div>
            <Stack direction="horizontal" className='justify-content-between'>
            <p className="mt-4 ms-3 text-sm">Experiência Profissional {number + 1}</p>
           
            {number+1 !== 1 && <Button onClick={() => {onClick(item)}} variant="link">Deletar</Button>}
            </Stack>
            <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Empresa:*</Form.Label>
        <Form.Control type="text" value={company} onChange={(e)=> {setCompany(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Cargo:*</Form.Label>
        <Form.Control type="text" value={post} onChange={(e)=> {setPost(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salário Final:*</Form.Label>
        <Form.Control type="text"  value={salary} onChange={(e)=> {setSalary(e.target.value)}}/>
        </Form.Group>
        <Row>
        <Col><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Data de Admissão:*</Form.Label>
        <Form.Control type="date" value={initialDate} onChange={(e)=> {setInitialDate(e.target.value)}} />
        </Form.Group></Col>
        <Col><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Data de Saída:*</Form.Label>
        <Form.Control type="date" value={finishDate} onChange={(e)=> {setFinishDate(e.target.value)}} />
        </Form.Group></Col>
        </Row>
      <FloatingLabel controlId="floatingTextarea2" label="Atribuições / Realizações*">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '170px' }}
          value={achievements}
          onChange={(e)=>{setAchievements(e.target.value)}}
        />
      </FloatingLabel>
        </Container>
        </div>
    )
}