FROM node:20-slim as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

COPY . /app
RUN pnpm build

# run HTTP server container
FROM caddy

# copy distribution files from build container
COPY --from=build /app/dist /usr/share/caddy

# expose ports
EXPOSE 80 443