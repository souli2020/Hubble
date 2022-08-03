import React from 'react'
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Container } from './styles/Container'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'
export default function Header() {

  return (



    <StyledHeader>

      <Container>

        <Nav>
          <Logo src="./logo.svg" alt="" />
          <Button  >Try it for free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">Get strated for free</Button>

          </div>
          <Image src="./illustration-mockups.svg" alt=""/>

         

        </Flex>

      </Container>



    </StyledHeader>



  )
}
