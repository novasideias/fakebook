# Novas Idéias

## Guia de instalação

###  Configurando o banco

 - Crie um banco de dados chamado "fakebook" (sem aspas)
 - Importe no novo banco o arquivo `fakebook.sql` contido na raiz do projeto
 
 ### Configurando API
  - Acesse a pasta da api  ( fakebook/api )
  - Crie um arquivo chamado `.env` dentro de api contendo a seguinte linha: `JWT_KEY = this_isnt_safe`. Salve o arquivo e feche.
  - Acesse a pasta pelo terminal e com o [yarn](https://yarnpkg.com/lang/en/)) instalado execute o comando `yarn install`
  - Quando a instação terminar inicie o serviço com o comando `node server.js` e espere pela mensagem `Listening on port 3003`
  
### Configurando o FRONT

 - Acesse a pasta do front ( fakebook/front )
 - Crie um arquivo chamado `.env` dentro de front contendo a seguinte linha: `REACT_APP_API = http://localhost:3003`. Salve o arquivo e feche.
 - Acesse a pasta pelo terminal e com o [yarn](https://yarnpkg.com/lang/en/)) instalado execute o comando `yarn install`
 - Quando a instalação terminar inicie o serviço com o comando `yarn start` e espere a aplicação iniciar no browser.

### Conta Administrador
 O sistema tem uma conta de administrador com permissão total de exclusão que pode ser acessada com as seguintes credenciais
    **admin / admin*

    
