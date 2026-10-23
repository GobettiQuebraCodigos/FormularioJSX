import { useState, useEffect } from 'react'
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
import Usuarios from './components/cadastros/Usuarios'
import Login from './components/Login'
import VisualizarIndicador from './components/VisualizarIndicador'
import { indicadorService } from './services/indicadorService'
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('inicio')
  const [indicadores, setIndicadores] = useState([])
  const [indicadorSelecionado, setIndicadorSelecionado] = useState(null)

  async function atualizarMenu() {
    const dados = await indicadorService.listar()
    setIndicadores(Array.isArray(dados) ? dados : [])
  }

  useEffect(() => {
    atualizarMenu().catch(console.error)
  }, [])

  function selecionarIndicador(item) {
    setIndicadorSelecionado(item)
    setTela('visualizarIndicador')
  }

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
          indicadores={indicadores}
          selecionarIndicador={selecionarIndicador}
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

          {tela === 'inicio' && <Conteudo />}
          {tela === 'unidades' && <Unidades />}
          {tela === 'safras' && <Safras />}
          {tela === 'equipamentos' && <Equipamentos />}
          {tela === 'unidadesMedidas' && <UnidadesMedidas />}
          {tela === 'tipoInformacao' && <TipoInformacao />}
          {tela === 'indicadores' && <Indicadores atualizarMenu={atualizarMenu} />}
          {tela === 'visualizarIndicador' && (
            <VisualizarIndicador indicador={indicadorSelecionado} />
          )}
          {tela === 'medicao' && <Medicao />}
          {tela === 'usuarios' && <Usuarios />}
          {tela === 'login' && <Login setTela={setTela} />}
        </main>
      </div>
    </>
  )
}

export default App