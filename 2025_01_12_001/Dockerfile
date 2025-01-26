# Base stage
FROM node:22-slim AS base
WORKDIR /workdir

# Development stage
FROM base AS development
RUN apt-get update && \
    apt-get clean 

COPY package*.json ./
RUN npm install

COPY tsconfig.json package*.json vite.config.ts eslint.config.js setupTest.ts ./
COPY src ./src
COPY tests ./tests

EXPOSE 3000
CMD ["npm", "run", "dev"]

