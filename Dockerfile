#Especifica a imagem para servir de base
FROM typescript:latest

#quando o container finalizar terá um diretorio "raiz"
WORKDIR /app

#copia o arquivo para dentro do container
COPY . /app

#especifica uma url para realizar o download
#ADD

#executa algum comando dentro do container
RUN npm install

#criação de uma variavel de ambiente
#ENV

#expoe uma porta do container qdo for iniciado
EXPOSE 80

#Padronizar a execução de um container
#CMD 
RUN npm start
