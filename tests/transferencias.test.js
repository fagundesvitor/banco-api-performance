import http from 'k6/http' //Importação de módulo
import { sleep, check } from 'k6' //Importação de função
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { obterToken } from '../helpers/autenticacao.js';
import { pegarBaseURL } from '../utils/variaveis.js';

export const options = {
  iterations: 1,
  duration: '30s',
};

export default function () {
  const token = obterToken()

  const url = pegarBaseURL() + '/transferencias';

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    value: 11,
    token: ""
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  }

  const res = http.post(url, payload, params);

  check(res, {
    'status is 201': (res) => res.status == 201
  })

  sleep(1)
}