import React from 'react'
import styled from 'styled-components'

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Text } from './../components/Typography'

const ContactWrapper = styled(Section)`
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    color: #fff;
    
  }
`

const ContactLink = styled(Link)`
  margin-bottom: 32px;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const SocialMediaList = styled.ul`
display: inline;
padding: 0;
margin: 0;

li {
  display: inline-block;
  list-style-type: none; 
  

  &:not(:last-child) {
    margin-right: 3%;
    
  }
}


a {
  font-size: 18px;

  @media (min-width: 480px) {
    font-size: 24px;
    
  }
}
`

export default class Contact extends React.Component {
  render () {
    return (
      <ContactWrapper centered>
      <Section centered>
        <Container>
          <Heading>Say hello</Heading>

          <Text>If you are interested in a new project or collaboration feel free to contact me.</Text>

          <ContactLink href="mailto:afonso.martins.duarte@gmail.com">afonso.martins.duarte@gmail.com</ContactLink>

          <Text>Follow me across the web:</Text>

          <SocialMediaList>

            <li>

              <Link href="https://www.linkedin.com/in/afonsomduarte" target="_blank">
                <AwesomeIcon icon="fab fa-linkedin-in fa-lg"/>
              </Link>
              </li>
            
            <li>

              <Link href="https://www.instagram.com/afonsomduarte" target="_blank">
                <AwesomeIcon icon="fab fa-instagram fa-lg"/>
              </Link>
              </li>

            
          </SocialMediaList>
        </Container>
      </Section>
      </ContactWrapper>
    )
  }
}