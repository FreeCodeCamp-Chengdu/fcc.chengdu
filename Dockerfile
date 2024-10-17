FROM node:20-slim as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# set workdir
COPY . /app
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml（如果存在）
COPY package.json pnpm-lock.yaml* ./

# install dependencies
RUN pnpm install --frozen-lockfile


# build file to dist dir
RUN pnpm run build

# 运行阶段
FROM caddy

# copy build file to caddy
COPY --from=build /app/dist /usr/share/caddy

# expose port
EXPOSE 80 443