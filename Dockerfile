# Usa imagem leve do Node
FROM node:20-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta do Vite (pode ser diferente do frontend principal)
EXPOSE 4000

# Comando para rodar com hot reload e acesso externo
CMD ["npm", "run", "dev", "--", "--port=4000", "--host"]
