import { useState } from 'react'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Conteudo from './components/Conteudo'
import Unidades from './components/cadastros/Unidades'
import Safras from './components/cadastros/Safras'
import Equipamentos from './components/cadastros/Equipamentos'
import UnidadesMedidas from './components/cadastros/UnidadesMedidas'
import TipoInformacao from './components/cadastros/TipoInformacao'
import Indicadores from './components/cadastros/Indicadores'
import Medicao from './components/cadastros/Medicao'
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('início')

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <>
      <Header />

      <div className="layout">
        <MenuLateral
          aberto={menuAberto}
          setTela={setTela}
        />

        <main className="area-conteudo">
          <div className="p-3 border-bottom bg-white">
            <button
              className="btn btn-primary"
              onClick={alternarMenu}
            >
              ☰ Menu
            </button>
          </div>

          {tela === 'início' && <Conteudo />}
          {tela === 'unidades' && <Unidades />}
          {tela == 'safras' && <Safras />}
          {tela === 'equipamentos' && <Equipamentos />}
          {tela === 'unidadesMedidas' && <UnidadesMedidas />}
          {tela === 'tipoInformacao' && <TipoInformacao />}
          {tela === 'indicadores' && <Indicadores />}
          {tela === 'medicao' && <Medicao />}
        </main>
      </div>
    </>
  )
}

export default App