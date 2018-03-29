FROM nginx:latest
RUN sed 's/root   \/usr\/share\/nginx\/html;/root   \/usr\/share\/nginx\/html;\n\ttry_files $uri \/usr\/share\/nginx\/html\/index.html;\n/g' /etc/nginx/conf.d/default.conf
COPY ./build/ /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]