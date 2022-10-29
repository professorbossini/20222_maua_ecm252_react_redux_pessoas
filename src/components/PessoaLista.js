// rafce
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'primereact/button'
import { selecionarPessoa } from '../actions'

const PessoaLista = (props) => {
  return (
    props.pessoas.map(pessoa => (
      <div key={pessoa.nome} className='flex flex-row mb-2 border border-round border-1 border-400 justify-content-center'>
        
        <div className="p-2 w-6">
          <p className="text-center">
            {pessoa.nome}
          </p> 
        </div>

        <div className="flex flex-row justify-content-center align-items-center">
          <Button 
            icon="pi pi-info-circle"
            className="p-button-rounded"
            onClick={() => props.selecionarPessoa(pessoa)}
          />
        </div>
      </div>
    ))    
  )
}

const mapStateToProps = (state) => {
  return { pessoas: state.pessoas }
}

export default connect(mapStateToProps, {selecionarPessoa})(PessoaLista)

