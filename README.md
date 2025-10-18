# 🚀 Testes de Performance da API do Banco com K6

Repositório com testes de performance automatizados desenvolvidos com a ferramenta [Grafana K6](https://k6.io/) e escritos em JavaScript, voltados para a API do sistema bancário.

🔗 **Repositório:** [github.com/juliodelimas/banco-api-performance](https://github.com/juliodelimas/banco-api-performance)

---

## 📌 Introdução

Este projeto tem como objetivo simular diferentes cargas e cenários de uso para a API do banco, avaliando seu desempenho e identificando possíveis gargalos. Os testes são escritos com foco em modularidade, organização por contexto e reutilização de modelos de dados.

---

## ⚙️ Tecnologias Utilizadas

- [K6](https://k6.io/) – Ferramenta open source de testes de carga e performance
- JavaScript (ES6)
- [GJSON](https://github.com/tidwall/gjson) – Para extração de dados em respostas JSON
- Variáveis de ambiente para configuração dinâmica (ex: `BASE_URL`)

---

## 📁 Estrutura do Repositório

```text
banco-api-performance/
├── fixtures/     # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/      # Funções utilitárias para interação com a API
├── tests/        # Casos de teste organizados por módulo da API
├── utils/        # Funções utilitárias reutilizáveis
├── config/       # Arquivos de configuração de variáveis de ambiente
└── README.md     # Este documento
