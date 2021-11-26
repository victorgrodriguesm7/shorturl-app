import type { NextPage } from 'next'
import Content from '../components/Content'
import Header from '../components/Header'
import { Main, Container } from '../styles/index'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Container>
          <Header/>
          <Content/>
        </Container>
      </Main>
      <footer>

      </footer>
    </>
  )
}

export default Home
