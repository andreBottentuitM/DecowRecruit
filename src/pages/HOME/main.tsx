import * as C from "../HOME/style-home"
import mainImage from "../../images/image_main.jpg";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'



export function Main() {
  const [timeProfessionals, setTimeProfessional] = useState(0)
  const [timeTurnover, setTimeTurnover] = useState(0)
  const [timeBusiness, settimeBusiness] = useState(0)

  useEffect(() => {
      if(timeProfessionals < 70000){
        let cloneTime = timeProfessionals
        
        setTimeProfessional(cloneTime+25)
      }
      if(timeTurnover < 54){
       let cloneTime = timeTurnover + 0.020
       
       setTimeTurnover(cloneTime)
      }
      if(timeBusiness < 567){
        let cloneTime = timeBusiness + 0.25
        
        settimeBusiness(cloneTime)
       }
  
    }, [timeProfessionals,timeTurnover]);


  return (
    <main>
    <C.Container>
      <Stack>
          <img width={600} src={mainImage} alt="" />
          </Stack>
          <Stack className="text" direction="column" alignItems="center" spacing={4}>
              <p>
                Mais de 70.000 profissionais desenvolveram suas carreiras com a
                gente! Junte-se a nós e tenha uma{" "}
                <strong style={{ color: "blue" }}>carreira de sucesso!</strong>
              </p>
            <Link
              to="/cadastro"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
              }}
            >
              Cadastre seu currículo aqui!
            </Link>
            <Stack alignItems="center" className="statistics" direction="row" spacing={5} sx={{mt:'20px', gap:'10px'}}>
              <div >
      <h3>+{timeProfessionals}</h3>
      <p>PROFISSIONAIS</p>
      </div>
      <div>
      <h3>-{timeTurnover.toFixed()}%</h3>
      <p>TURNOVER</p>
      </div>
      <div>
      <h3>{timeBusiness.toFixed()}</h3>
      <p>EMPRESAS</p>
      </div>
      </Stack>
      </Stack>
      </C.Container>
  </main>
  );
}
