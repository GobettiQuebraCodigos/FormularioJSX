function Header({ usuarioLogado, onLogout }) {
  return (
    <header className="bg-dark text-white p-3 d-flex justify-content-between align-items-center border-bottom">
      <h1 className="h4 m-0">Sistema React</h1>
      {usuarioLogado && (
        <div className="d-flex align-items-center gap-3">
          <span>Usuário: <strong>{usuarioLogado.nome || usuarioLogado.email}</strong></span>
          <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>
            Sair
          </button>
        </div>
      )}
    </header>
  )
}

export default Header