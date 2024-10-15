# Documentação do Projeto - Ebix

## Visão Geral
Este projeto Ionic é uma aplicação para capturar fotos utilizando filtros personalizados. A interface permite a escolha de diferentes filtros, visualização ao vivo via vídeo, e captura de fotos que são armazenadas para visualização posterior.

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de que as seguintes ferramentas estão instaladas no seu ambiente de desenvolvimento:

- **Node.js** (versão 14 ou superior)
  - Você pode verificar se o Node.js está instalado rodando o comando:
    ```bash
    node -v
    ```
  - Caso não esteja, instale a partir do [site oficial do Node.js](https://nodejs.org/).

- **Ionic CLI**
  - Para instalar o Ionic CLI globalmente, use o comando:
    ```bash
    npm install -g @ionic/cli
    ```
  - Verifique a instalação com:
    ```bash
    ionic -v
    ```

- **Git** (para versionamento de código e clonagem do projeto, caso necessário)
  - Você pode verificar a instalação com:
    ```bash
    git --version
    ```

## Instalação do Projeto

### 1. Clone o repositório

Se você está clonando o repositório de um controle de versão (por exemplo, GitHub), use o seguinte comando no terminal:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Navegue até o diretório do projeto

Entre no diretório do projeto usando o terminal:

```bash
cd seu-repositorio
```

### 3. Instale as dependências

Para instalar as dependências do projeto, execute o comando:

```bash
npm install
```

Este comando irá instalar todas as bibliotecas e pacotes especificados no arquivo `package.json`.

### 4. Executando o Projeto

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do Ionic com o comando:

```bash
ionic serve
```

Este comando abrirá o projeto em seu navegador padrão no endereço `http://localhost:8100/`. A cada alteração no código, a aplicação será recarregada automaticamente.

### 5. Estrutura do Projeto

Aqui está uma visão geral dos diretórios mais importantes do projeto:

```
|-- src/
|   |-- app/
|   |-- assets/
|   |   |-- icon/
|   |       |-- filter1.png
|   |       |-- filter2.png
|   |       |-- filter3.png
|   |-- pages/
|   |-- theme/
|-- package.json
```

- **src/assets/icon/**: Diretório onde estão localizadas as imagens dos filtros usados nos botões.
- **src/app/**: Contém a lógica principal da aplicação Ionic.
- **src/pages/**: Contém as páginas individuais da aplicação.
- **src/theme/**: Estilos globais do projeto.

### 6. Comandos Importantes

- **Construir a aplicação** para produção:
  ```bash
  ionic build
  ```
  Isso criará a versão otimizada do projeto na pasta `www/`.

- **Executar o projeto em dispositivos móveis**:
  ```bash
  ionic capacitor run android
  ```
  ou
  ```bash
  ionic capacitor run ios
  ```
  Certifique-se de ter o Android Studio ou Xcode corretamente configurados para rodar em dispositivos móveis.

- **Testes** (se aplicável):
  Caso o projeto tenha testes implementados, você pode rodá-los com:
  ```bash
  npm test
  ```

### 7. Solução de Problemas

- **Erros de dependências**:
  Se você encontrar erros durante a instalação das dependências, tente rodar:
  ```bash
  npm audit fix
  ```
  Ou apague a pasta `node_modules` e o arquivo `package-lock.json`, depois reinstale as dependências:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

- **Problemas de build**:
  Certifique-se de que todas as dependências estão corretamente instaladas. Se houver algum erro, cheque o arquivo `ionic.config.json` e as configurações no `angular.json` (caso esteja usando Angular).

