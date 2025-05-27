# Usa imagem base do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package.json package-lock.json ./

# Instala dependências no ambiente Linux do container
RUN npm ci

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Comando para rodar com hot reload e permitir acesso externo
CMD ["npm", "run", "dev", "--", "--host"]
