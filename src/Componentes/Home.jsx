import Navegador from './Navegador'
import Header from './Header'
import Destaques from './Destaques'
import Categorias from './Categorias'
import Motivos from './Motivos'
import Por_dentro from './Por_dentro'
import Footer from './Footer'

function Home() {

  return (
    <>
      <Header/>
      <Navegador/>
      <Destaques/>
      <Categorias/>
      <Motivos/>
      <Por_dentro/>
      <Footer/>
    </>
  )
}

export default Home