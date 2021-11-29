import type { NextPage } from 'next'
import { Content, Header, UrlShorter, Details, GetStarted, Footer } from '../components'
import { Main, Container, DetailsContainer} from '../styles/index'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Container>
          <Header/>
          <Content/>
          <DetailsContainer>
            <UrlShorter/>
            <Details/>
            <GetStarted/>
          </DetailsContainer>
        </Container>
      </Main>
      <Footer/>
    </>
  )
}

export default Home
