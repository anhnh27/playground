FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV development
ENV PORT 8000

WORKDIR /app

RUN corepack enable

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm i

COPY . .

CMD ["pnpm", "dev"]
