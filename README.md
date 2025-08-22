# 🚀 Cobertura de teste unitários utilizando recursos nativos do Node.js

Bem vindo(a)! 😄

Aqui você o código associado ao vídeo "Cobertura de teste unitários utilizando recursos nativos do Node.js" publicado no canal do YouTube [Codificando com Pedro](https://www.youtube.com/@CodificandoComPedro)!

## Sobre o projeto

Projeto de exemplo para demonstrar como gerar cobertura de testes usando o Node.js nativo (`--experimental-test-coverage`) e a ferramenta [c8](https://github.com/bcoe/c8).

## Estrutura

- `src/math.js`: Funções matemáticas simples.
- `test/math.test.js`: Testes usando o módulo nativo `node:test`.
- `coverage/`: Pasta onde os relatórios de cobertura são gerados.
- `package.json`: Scripts para rodar testes e gerar cobertura.

## Scripts

- `npm test`: Executa os testes com Node.js nativo.
- `npm run coverage`: Gera cobertura usando o Node.js nativo (`--experimental-test-coverage`). Os relatórios são salvos em `coverage/`.
- `npm run coverage:c8`: Gera cobertura usando a ferramenta c8, com relatórios em texto e HTML.

## Requisitos

- Node.js >= 20.0.0

## Como usar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Execute os testes:
   ```sh
   npm test
   ```

3. Gere o relatório de cobertura nativo:
   ```sh
   npm run coverage
   ```

4. Gere o relatório de cobertura com c8:
   ```sh
   npm run coverage:c8
   ```

## Integração a Pipelines CI/CD (Exemplos)

### GitHub Actions

```
name: Node Test & Coverage
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run coverage
      - run: npx c8 check-coverage --lines 85 --functions 85 --branches 80
```

O workflow falha se a cobertura mínima não for atingida, bloqueando merges.

### GitLab CI

```
stages: [test]

coverage_job:
  image: node:22
  script:
    - npm ci
    - npm run coverage
  coverage: '/all files\s+\|\s+(\d+\.\d+)\s+/'  # regex captura line %
```

O GitLab exibe badge de cobertura automático.

## Observações

- A função `multiply` em [`src/math.js`](src/math.js) está ignorada na cobertura usando a diretiva `/* node:coverage ignore next 3 */`.
- Os testes estão em [`test/math.test.js`](test/math.test.js) e cobrem as funções `add`

Sinta-se à vontade para sugerir novos desafios ou dar ideias de melhorias! 💡

---

Acompanhe a playlist e fique por dentro das novidades no canal: [Codificando com Pedro](https://www.youtube.com/@CodificandoComPedro) 🎥