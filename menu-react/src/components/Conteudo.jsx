import React, { useState, useRef } from 'react'

function Conteudo() {
  const [previewFoto, setPreviewFoto] = useState(null)
  const [erroCamera, setErroCamera] = useState('')
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const selecionarFoto = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPreviewFoto(URL.createObjectURL(file))
    }
  }

  const abrirCamera = async () => {
    try {
      setErroCamera('')
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (erro) {
      setErroCamera('Não foi possível acessar a câmera.')
    }
  }

  const capturarFoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (video && canvas) {
      const context = canvas.getContext('2d')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      setPreviewFoto(canvas.toDataURL('image/png'))
    }
  }

  return (
    <section className="p-4">
      <h2 className="mb-3">Bem-vindo</h2>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h3 className="h5">Projeto React</h3>
          <p className="mb-0">
            Esta área representa o conteúdo principal da aplicação.
          </p>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Foto do funcionário</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={selecionarFoto}
        />
      </div>

      {previewFoto && (
        <div className="mb-3">
          <img
            src={previewFoto}
            alt="Pré-visualização"
            className="img-thumbnail"
            style={{ width: '220px', height: '220px', objectFit: 'cover' }}
          />
        </div>
      )}

      {erroCamera && <div className="alert alert-danger">{erroCamera}</div>}

      <div className="mb-3">
        <button
          type="button"
          className="btn btn-success me-2"
          onClick={abrirCamera}
        >
          Usar câmera
        </button>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={capturarFoto}
        >
          Capturar foto
        </button>
      </div>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="img-thumbnail mb-3"
        style={{ width: '320px', display: 'block' }}
      />

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </section>
  )
}

export default Conteudo