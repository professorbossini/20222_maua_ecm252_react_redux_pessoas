//essa função cria uma ação
export const selecionarPessoa = (pessoa) => {
  return {
    type: "PESSOA_SELECIONADA",
    payload: pessoa
  }
}