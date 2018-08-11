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

const CurriculumWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`
const CurriculumGrid = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`

const CurriculumItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  transition: opacity .25s ease-in-out;

  &:focus,
  &:hover {
    opacity: .5;
  }

  @media (max-width: 767px) {
    &:nth-child(n+2) {
      margin-top: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-child(even) {
      margin-left: 32px;
    }

    &:nth-child(n+3) {
      margin-top: 48px;
    }
  }

  @media (min-width: 992px) {
    width: calc(33.33333% - 32px);

    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      margin-right: 32px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8), {
      margin-left: 16px;
      margin-right: 16px;
    }

    &:nth-child(3),
    &:nth-child(6),
    &:last-child {
      margin-left: 32px;
    }

    &:nth-child(n+4) {
      margin-top: 24px;
    }
  }
`

const CurriculumItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: contain;
`

export default class Curriculum extends React.Component {
  render () {
    return (
      <CurriculumWrapper>
        <Container>
          <Subheading>Afonso Duarte</Subheading>

          <Heading>My path</Heading>

          <Text>If you want to know more, drop me an email.</Text>

          <CurriculumGrid>
            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/z4CAuzwaXrM/600x600" srcSet="https://source.unsplash.com/z4CAuzwaXrM/600x600 1x, https://source.unsplash.com/z4CAuzwaXrM/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/-aDl1z8_nGY/600x600" srcSet="https://source.unsplash.com/-aDl1z8_nGY/600x600 1x, https://source.unsplash.com/-aDl1z8_nGY/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/qvEwMfUX_DM/600x600" srcSet="https://source.unsplash.com/qvEwMfUX_DM/600x600 1x, https://source.unsplash.com/qvEwMfUX_DM/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/9QjbejABFn8/600x600" srcSet="https://source.unsplash.com/9QjbejABFn8/600x600 1x, https://source.unsplash.com/9QjbejABFn8/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/cDD83wV627U/600x600" srcSet="https://source.unsplash.com/cDD83wV627U/600x600 1x, https://source.unsplash.com/cDD83wV627U/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/KDYcgCEoFcY/600x600" srcSet="https://source.unsplash.com/KDYcgCEoFcY/600x600 1x, https://source.unsplash.com/KDYcgCEoFcY/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/oKfCxcKnCo8/600x600" srcSet="https://source.unsplash.com/oKfCxcKnCo8/600x600 1x, https://source.unsplash.com/oKfCxcKnCo8/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/dClHqW-EfS8/600x600" srcSet="https://source.unsplash.com/dClHqW-EfS8/600x600 1x, https://source.unsplash.com/dClHqW-EfS8/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>

            <CurriculumItem href="">
              <CurriculumItemThumbnail src="https://source.unsplash.com/74elF-XSsPg/600x600" srcSet="https://source.unsplash.com/74elF-XSsPg/600x600 1x, https://source.unsplash.com/74elF-XSsPg/1200x1200 2x" alt="Example of work" />
            </CurriculumItem>
          </CurriculumGrid>

          <Text>Let's get in touch:</Text>

          <Link href="mailto:afonso.martins.duarte@gmail.com">afonso.martins.duarte@gmail.com</Link>
        </Container>
      </CurriculumWrapper>
    )
  }
}