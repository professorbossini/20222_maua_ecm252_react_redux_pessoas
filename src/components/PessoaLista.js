// rafce
import React from 'react'
import { connect } from 'react-redux'

const PessoaLista = (props) => {
  console.log(props.pessoas)
  return (
    <div>Pessoas</div>
  )
}

const mapStateToProps = (state) => {
  return {pessoas: state.pessoas}
}

export default connect(mapStateToProps)(PessoaLista)

