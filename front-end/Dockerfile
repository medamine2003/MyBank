FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 3000
EXPOSE 80

# Étape 2: Configurer Nginx pour servir l'application
# Exemple d'utilisation de Nginx ou d'un autre serveur pour servir le build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
