import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

const AboutWrapper = styled(Section)`
  background-image: url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  }

  @media (min-width: 768px) {
    background-image: url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  }

  @media (min-width: 1280px) {
    background-image: url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  }

  @media (min-width: 1600px) {
    background-image: url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  ${Container} {
    color: #fff;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }

  ${Text} {
    font-family: 'Open Sans', sans-serif;
  }
`

export default class About extends React.Component {
  render () {
    return (
        <AboutWrapper centered>
            <Section>
                <Container>
                <Subheading>Afonso Duarte</Subheading>

                <Heading>About Me</Heading>

                <Text>I am an Electrotechnical and Computer Engineering Student at Instituto Superior Técnico based in Lisbon, Portugal. 
                  I am a passionate creative that always leads by example and likes to get his hands dirty. 
                  I believe that design is only as powerful as the message it is able to carry. 
                  I constantly seek to improve myself and inspire others. I am a critical thinker and problem 
                  solver that pursues a holistic approach.</Text>

                <Text>Currently I am studying for my Master's Degree in Telecommunications. I occasionally indulge in some freelance work 
                in Web Development, building interactive digital products. If you are interested in a new project, collaboration, or just to chat, feel free to contact me:</Text>

                <Section centered><Link href="mailto:afonso.martins.duarte@gmail.com">afonso.martins.duarte@gmail.com</Link></Section>
                
                </Container>
            </Section>
        </AboutWrapper>
    )
  }
}