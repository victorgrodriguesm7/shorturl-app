import type { NextPage } from 'next'
import { Content, Header, UrlShorter, Details } from '../components'
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
          </DetailsContainer>
        </Container>
      </Main>
      <footer>

      </footer>
    </>
  )
}

export default Home
