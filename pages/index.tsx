import type { NextPage } from 'next'
import { Content, Header, UrlShorter } from '../components'
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
          </DetailsContainer>
        </Container>
      </Main>
      <footer>

      </footer>
    </>
  )
}

export default Home
