import React from 'react'
import {FaTwitter, FaGithub} from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'
function SocialIcons() {
  return (
    <StyledSocialIcons>

        <a href="https://github.com/souli2020" >
            <FaTwitter />
        </a>
        <a href="https://github.com/souli2020" >
            <FaGithub />
        </a>
    </StyledSocialIcons>
  )
}

export default SocialIcons