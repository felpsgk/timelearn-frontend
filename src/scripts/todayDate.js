
export function getToday() {
    const dataDeHoje = new Date();
    const dia = dataDeHoje.getDate();
    const mes = dataDeHoje.getMonth() + 1; 
    const ano = dataDeHoje.getFullYear();
  
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
  