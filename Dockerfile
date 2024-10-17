FROM node:20-slim as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

COPY . /app
RUN pnpm run build

# run caddy
FROM caddy

# copy build file to caddy
COPY --from=build /app/dist /usr/share/caddy

# expose port
EXPOSE 80 443