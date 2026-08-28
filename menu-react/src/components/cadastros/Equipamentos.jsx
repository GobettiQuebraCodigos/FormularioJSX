import { useState } from 'react'

function Equipamentos() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [setor, setSetor] = useState('')

  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()

    const novosErros = {}

    if (nome.trim() === '') {
      novosErros.nome = 'Informe o nome'
    }

    if (email.trim() === '') {
      novosErros.email = 'Informe o e-mail'
    }

    if (telefone.trim() === '') {
      novosErros.telefone = 'Informe o telefone'
    }

    if (setor === '') {
      novosErros.setor = 'Selecione o setor'
    }

    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setMensagem('')
      return
    }

    setMensagem('Equipamento cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <h2 className="h4">Cadastro de Equipamento</h2>

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
          <label className="form-label">E-mail</label>

          <input
            type="email"
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
          <label className="form-label">Telefone</label>

          <input
            type="text"
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

        <div className="mb-3">
          <label className="form-label">Unidade</label>

          <select
            className={`form-select ${
              erros.setor ? 'is-invalid' : ''
            }`}
            value={setor}
            onChange={(event) => setSetor(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Produção">Produção</option>
            <option value="Manutenção">Manutenção</option>
            <option value="TI">TI</option>
          </select>

          {erros.setor && (
            <div className="invalid-feedback">
              {erros.setor}
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

export default Equipamentos