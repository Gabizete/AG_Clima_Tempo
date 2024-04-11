# *Clima_Tempo_AG*

## Sobre o projeto

O **Clima_Tempo_AG** é um projeto que utiliza a Weather API para fornecer informações climáticas da cidade definida pelo usuário. Antes de começar, é necessário obter uma chave de API no site OpenWeatherMap.

### Como obter a chave da API:

1. Crie uma conta no site OpenWeatherMap.
2. Vá para a página "API" e inscreva-se na API de previsão climática.
3. Na sua conta, encontre a chave gerada pelo site.

## Como usar

### 1. Instalação das dependências:

- Clone os arquivos do projeto.
- No terminal, execute o comando `npm i` ou `npm install` para instalar todas as dependências necessárias.

### 2. Configuração da chave da API:

- Crie um arquivo chamado `config.json`.
- Dentro do arquivo `config.json`, insira o seguinte conteúdo:
  
  ```json
  {
    "apikey": "sua_api_do_wheatherapi"
  }
  ```
  
### 3. Execução do programa::

- Para iniciar o uso do programa, execute o comando `node app.js` ou simplesmente `node app` no terminal.
- Faça sua pesquisa inserindo o nome da cidade desejada quando solicitado.
