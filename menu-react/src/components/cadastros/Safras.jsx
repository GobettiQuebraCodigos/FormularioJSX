import { useState } from 'react'

function Safras() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [setor, setSetor] = useState('')

  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')
//Acima: Constantes
//Abaixo: Função de erro e cadastro de sucesso
  function salvar(event) {
    event.preventDefault()

    const novosErros = {}

    if (nome.trim() === '') {
      novosErros.nome = 'Informe o nome'
    }

    if (email.trim() === '') {
      novosErros.email = 'Informe o primeiro dia da safra'
    }

    if (telefone.trim() === '') {
      novosErros.telefone = 'Informe o último dia da safra'
    }
//remova o if do setor
    if (setor === '') {
      novosErros.setor = 'Selecione o setor'
    }
//remova o if do setor
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setMensagem('')
      return
    }

    setMensagem('Safra cadastrada com sucesso!')
  }
//Acima: Função de erro e cadastro bem sucedido
//Abaixo: "Html"
  return (
    <section className="p-4">
      <h2 className="h4">Cadastro de Safra</h2>

      {mensagem && (
        <div className="alert alert-success">
          {mensagem}
        </div>
      )}

      <form onSubmit={salvar}>
        <div className="mb-3">
          <label className="form-label">Nome</label>

          <input
            type="text"
            className={`form-control ${
              erros.nome ? 'is-invalid' : ''
            }`}
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          {erros.nome && (
            <div className="invalid-feedback">
              {erros.nome}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Data inicial</label>

          <input
            type="date"
            className={`form-control ${
              erros.email ? 'is-invalid' : ''
            }`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {erros.email && (
            <div className="invalid-feedback">
              {erros.email}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Data final</label>

          <input
            type="date"
            className={`form-control ${
              erros.telefone ? 'is-invalid' : ''
            }`}
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />

          {erros.telefone && (
            <div className="invalid-feedback">
              {erros.telefone}
            </div>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </section>
  )
}

export default Safras