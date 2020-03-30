FROM node:13-stretch AS builder

ARG branch=master

ARG repo_url="https://github.com/WirVsVirus-SoliD/SoliD-app"

ARG rootdir=/app

RUN \
    npm install -g @angular/cli && \
    npm install -g @ionic/cli

RUN \
    git clone ${repo_url} ${rootdir} && \
    cd ${rootdir} && \
    git checkout ${branch} && \
    npm install && \
    ng add @angular/pwa && \
    ionic build

FROM nginx

ARG rootdir=/app

COPY --from=builder ${rootdir}/www /usr/share/nginx/html
