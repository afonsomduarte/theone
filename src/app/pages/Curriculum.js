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

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

const HomeWrapper = styled(Section)`
  background-image: url(https://www.imgbase.info/images/safe-wallpapers/photography/landscape/42798_landscape.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url(https://www.imgbase.info/images/safe-wallpapers/photography/landscape/42798_landscape.jpg);
  }

  @media (min-width: 768px) {
    background-image: url(https://www.imgbase.info/images/safe-wallpapers/photography/landscape/42798_landscape.jpg);
  }

  @media (min-width: 1280px) {
    background-image: url(https://www.imgbase.info/images/safe-wallpapers/photography/landscape/42798_landscape.jpg);
  }

  @media (min-width: 1600px) {
    background-image: url(https://www.imgbase.info/images/safe-wallpapers/photography/landscape/42798_landscape.jpg);
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

  ${Heading} {
    margin-bottom: 32px;
  }

  ${Subheading} {
    margin-bottom: 32px;
    font-family: 'Roboto', sans-serif; 
    font-size: 25px;
    }
`

// const CurriculumWrapper = styled(Section)`
//   padding-top: 120px;
//   padding-bottom: 80px;

// `



  // a {
  //   font-size: 18px;

  //   @media (min-width: 480px) {
  //     font-size: 24px;
      
  //   }
  // }

  const CVgrid = styled(Container)`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    color: white;


  }
  `

export default class Curriculum extends React.Component {
  render () {
    return (
     <HomeWrapper centered> 
      {/* <CurriculumWrapper> */}
        <Container>

          <Heading>My path</Heading>
        
          </Container>
          
          <CVgrid>
            <Container><Subheading>Experience <AwesomeIcon icon="fas fa-briefcase"/></Subheading></Container>
            <Container><Subheading>Education <AwesomeIcon icon="fas fa-book-open"/></Subheading></Container>
            <Container><Text><AwesomeIcon icon="fas fa-circle-notch"/> Frontend Development Intern at Thales Portugal</Text></Container>
            <Container><Text><AwesomeIcon icon="fas fa-circle-notch"/> Electrotechnical and Computer Engineering at Instituto Superior Técnico (2015 - 2020)</Text></Container>
            <Container><Text><AwesomeIcon icon="fas fa-circle-notch"/> Vice President Education at Toastmasters International</Text></Container>
            <Container><Text><AwesomeIcon icon="fas fa-circle-notch"/> Telecommunications and Informatics Engineering at Instituto Superior Técnico (2014 - 2015)</Text></Container>
            <Container><Text><AwesomeIcon icon="fas fa-circle-notch"/> Collaborator at GEFE - IST</Text></Container>
          </CVgrid>
      
  
          
          <Container>
          <Text>Let's get in touch:</Text>

          <Link href="mailto:afonso.martins.duarte@gmail.com">afonso.martins.duarte@gmail.com</Link>
        </Container>
      {/* </CurriculumWrapper> */}
    </HomeWrapper>
    )
  }
}