import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'primereact/card'

const PessoaDetalhe = (props) => {
  return (
    <Card title="Detalhes">
      <h3 className="text-center">
        {props.x.nome}
      </h3>
      <p className="text-center">{props.x.endereco}</p>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    x: state.pessoaSelecionada  
  }
}

export default connect(mapStateToProps)(PessoaDetalhe)