# Equipe-Azul-Residencia-De-Software  
# Estágios-FCI  

## Objetivo    
O objetivo do sistema de oferta de estágios reestruturado é apresentar à comunidade Mackenzista uma forma mais clara e objetiva de acompanhar as ofertas de estágio, mais condizente com a FCI em termos técnologicos, de visual e praticidade, além de aproximar aqueles que estão em busca de vagas de estágio em determinada empresa daqueles que já trabalharam ou trabalham atualmente nela.     

## Descrição  
Inicialmente realizamos um *brainstorming* para levantar os requisitos do projeto. Em seguida, preenchemos um modelo de [documento de requisitos](https://2346357364-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7u5Ie7aXnzkhZ3fwalBr%2Fuploads%2Fi6St9VeCaN9Dra16xxHM%2FEstagio%20FCI.pdf?alt=media&token=9912449b-690b-4587-ae25-2f2c681650aa), com os requisitos que elicitamos neste *brainstorming*, detalhando a prioridade, atores e a funcionalidade de cada um. A respeito do sistema, explicitamos seus objetivos, descrição e seus usuários.

Em seguida, com base nos requisitos, documentamos a API, necessária para a comunicação entre o *back-end* e o *front-end*, utilizando o [Swagger](https://app.swaggerhub.com/apis/10921519978_2/API_Estagios_FCI/1.0.0#/developers/searchInventory). Nele, foi-se feita a modelagem dos objetos e tipos de dados que serão trocados nas requisições.

Com estes objetos bem definidos, realizamos uma pesquisa para decidirmos qual *framework* utilizariamos para implementar o *back-end* na qual foram considerados o [ExpressJS](https://expressjs.com/pt-br/) e [NestJS](https://nestjs.com/). Este último foi escolhido, pois, entre suas vantagens, tem-se a codificação em TypeScript; uma arquitetura de *constrollers, modules e providers*; ideal para aplicações multidirecionais em tempo-real. 

No NestJS, prototipamos com auxílio de um banco de dados exemplo um filtro para a pesquisa de empresas que se baseava em determinadas categorias já definidas no Swagger, a fim de avaliar o uso do *framework* e se familiarizar com sua estrutura e sintaxe.

## Instruções  
Para rodar o projeto localmente(windows) precisamos baixar [NodeJS](https://nodejs.org/en/) versão 18.12.1 LTS, depois abrir o projeto na IDE de preferência e para baixar o [NestJS](https://nestjs.com/) abra um terminal e dê o seguinte comando: *npm install @nests/core* .Por fim para rodar o projeto é só executar o seguinte comando no terminal: *npm run start* e abrir uma aba no navegador como localhost.
Já no Linux, para instalar [NodeJS](https://nodejs.org/en/) dê o seguinte comando: *sudo apt install nodejs -y* e para instalar o [NestJS](https://nestjs.com/) dê: *sudo apt install npm -y* .Por fim para rodar o projeto são as mesmas instruções dada acima.
## Ferramentas  
- IDE: VsCode  
- Linguagem: TypeScript
- Frameworks: NestJS
- Documentador de API: Swagger
- Ambiente de execução: NodeJS

## Colaboradores  
- José Eduardo Bernardino Jorge  
- Joyce Cui  
- Kenny Tanaka  
- Ryan Marco De Andrade Dos Santos  
- Vinicius Leite Do Carmo Lima  

## Links para recursos:  
- [**Documento de requisitos**](https://2346357364-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7u5Ie7aXnzkhZ3fwalBr%2Fuploads%2Fi6St9VeCaN9Dra16xxHM%2FEstagio%20FCI.pdf?alt=media&token=9912449b-690b-4587-ae25-2f2c681650aa)
- [**Swagger**](https://app.swaggerhub.com/apis/10921519978_2/API_Estagios_FCI/1.0.0#/developers/searchInventory)
