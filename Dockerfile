# Etapa 1 — Build da aplicação
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração e instala dependências
COPY package*.json ./
RUN npm install

# Copia o código fonte e compila TypeScript
COPY tsconfig.json ./
COPY src ./src
RUN npm run build


# Etapa 2 — Imagem final de produção
FROM node:20-alpine AS runner
WORKDIR /app

# Copia apenas o código compilado e dependências necessárias
COPY package*.json ./
RUN npm install --only=production

# Copia o build da etapa anterior
COPY --from=builder /app/dist ./dist

# Define a porta exposta
EXPOSE 3000

# Variável de ambiente padrão (pode ser sobrescrita no deploy)
ENV PORT=3000

# Comando de inicialização
CMD ["node", "dist/index.ts"]
