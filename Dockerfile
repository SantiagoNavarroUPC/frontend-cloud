FROM node:18-alpine as build

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Verificar el contenido después del build
RUN ls -la

# Instalar serve
RUN npm install -g serve

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar la aplicación con configuración SPA
CMD ["serve", "-s", "build", "--single", "-l", "80"]