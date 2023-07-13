# Documentação do Aplicativo

Este documento fornece informações sobre como instalar e executar o projeto em sua máquina local.

## Instalação

Antes de prosseguir com a instalação, certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

Siga as etapas abaixo para instalar o projeto:

1. Abra o terminal.
2. Navegue até a pasta raiz do projeto.
3. Execute o seguinte comando para instalar as dependências do projeto utilizando o Yarn:

```bash
yarn
```
## Executando o Aplicativo

Após concluir a instalação, você pode executar o aplicativo com os seguintes passos:

1. No terminal, ainda na pasta raiz do projeto, execute o seguinte comando:

```bash
yarn run dev
```

2. Aguarde até que o aplicativo seja compilado e abra no seu navegador

Agora você pode explorar o aplicativo e utilizar suas funcionalidades.

## Ferramentas Utilizadas

O aplicativo foi desenvolvido utilizando as seguintes ferramentas e bibliotecas:

- React: Para criação das interfaces.
- React-Router-DOM: Para gerenciamento de rotas no React.
- Axios: Para fazer requisições HTTP.
- Styled-Components: Para estilização de componentes utilizando CSS-in-JS.
- ESLint: Ferramenta de linting para manter um código JavaScript limpo e consistente.

## Responsividade

A aplicação é responsiva, adaptando-se a diferentes tamanhos de tela. Ela foi projetada para ser utilizada em dispositivos móveis, tablets e desktops, proporcionando uma experiência consistente em todos os dispositivos.

## Documentação de Páginas

### Página de Login

A página de login permite que os usuários acessem o sistema fornecendo suas credenciais. Ela pode ser acessada através da rota /login. Após fazer o login com sucesso, o usuário será redirecionado para a lista de cursos.

### Listagem de Cursos

A listagem de cursos exibe uma lista de cursos disponíveis. A lista é paginada, permitindo que o usuário navegue por várias páginas de cursos. Cada curso é exibido como um "card" contendo informações básicas sobre o curso. Ao clicar em um card, um modal será exibido com mais informações sobre o curso. O componente de paginação permite ao usuário navegar entre as diferentes páginas de cursos.
