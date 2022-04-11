const getCompany = (company) => {
  return fetch(`https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${company}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

export default getCompany;
