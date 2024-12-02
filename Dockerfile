# Используем Node.js в качестве базового образа
FROM node:20.17.0

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install --save-dev ts-node

# Копирование исходного кода приложения
COPY . .

# Сборка приложения
RUN npm run build

EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]
