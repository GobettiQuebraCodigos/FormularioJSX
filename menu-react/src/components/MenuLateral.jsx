import { useState } from "react";

function MenuLateral({ aberto, setTela, indicadores = [], selecionarIndicador }) {
  const [cadastroAberto, setCadastroAberto] = useState(false);

  function alterarCadastro() {
    setCadastroAberto(!cadastroAberto);
  }

  return (
    <aside
      className={`menu-lateral bg-dark text-white ${
        aberto ? "aberto" : "fechado"
      }`}
    >
      <h2 className="h6 text-uppercase mb-3">Menu</h2>

      <div className="d-grid gap-2">
        <button
          className="btn btn-outline-light text-start"
          onClick={() => setTela("inicio")}
        >
          Inicio
        </button>

        <button
          className="btn btn-outline-info text-start"
          onClick={() => setTela("login")}
        >
          Login
        </button>

        {/* Botão para alternar exibição do Cadastro */}
        <button
          className="btn btn-outline-light text-start"
          onClick={alterarCadastro}
        >
          Cadastro {cadastroAberto ? "▲" : "▼"}
        </button>

        {/* Submenu estático de Cadastro */}
        {cadastroAberto && (
          <div className="ms-3 d-grid gap-2">
            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("usuarios")}
            >
              Usuários
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("medicao")}
            >
              Medição
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("safras")}
            >
              Safras
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("unidadesMedidas")}
            >
              Unidades Medidas
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("tipoInformacao")}
            >
              Tipo de Informação
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("indicadores")}
            >
              Indicadores
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("unidades")}
            >
              Unidades
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("equipamentos")}
            >
              Equipamentos
            </button>
          </div>
        )}

        {/* Submenu dinâmico de Indicadores (separado) */}
        {indicadores.length > 0 && (
          <div className="mt-3">
            <h6 className="text-uppercase text-muted small mb-2">Indicadores</h6>
            <div className="d-grid gap-2">
              {indicadores.map((item) => (
                <button
                  key={item.Id}
                  className="btn btn-outline-light btn-sm text-start"
                  onClick={() => selecionarIndicador(item)}
                >
                  {item.Nome}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default MenuLateral;