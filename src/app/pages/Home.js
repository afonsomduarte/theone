import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router';

// Import Button component
import Button from './../components/Button'

// Import Container component
import Container from './../components/Container'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading } from './../components/Typography'

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

const HomeWrapper = styled(Section)`
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
    font-family: 'Roboto', sans-serif; 
    }
`
const IconList = styled.ul`
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

// Using Button component but changing the element to 'a'
const HomeButton = styled(Button.withComponent('a'))`
  &:hover {
    color: #4286f4;
  }

  margin-right: 3%;
`

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper centered>
        <Container>
          <Heading>Afonso Duarte</Heading>

          <Subheading>Engineering Student</Subheading>

          <HomeButton href="/Curriculum">My path</HomeButton>

            <IconList>
                <li><AwesomeIcon icon="fab fa-react fa-lg"/></li>
                <li><AwesomeIcon icon="fab fa-js fa-lg"/></li>
                <li><AwesomeIcon icon="fab fa-html5 fa-lg"/></li>
                <li><AwesomeIcon icon="fab fa-css3-alt fa-lg"/></li>
            </IconList> 

        </Container>
      </HomeWrapper>
    )
  }
}