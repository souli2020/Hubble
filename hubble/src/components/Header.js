import React from 'react'
import {StyledHeader, Nav, Logo} from "./styles/Header.styled"
 import { Container } from './styles/Container'
 
import {Button} from './styles/Button.styled'
export default function Header() {
    
  return (

    

    <StyledHeader>

        <Container>

        <Nav>
  <Logo src="./logo.svg" alt="" />
    <Button  >Try it for free</Button>
        </Nav>

        </Container>

       
      
    </StyledHeader>



  )
}
