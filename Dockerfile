# dev stage
FROM node:14 AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# build stage
FROM dev AS build
RUN npm run build

# prod stage
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
