FROM node:16

RUN npm i -g @angular/cli@14

WORKDIR /fend
RUN cd /fend

RUN apt update && apt install git vim acl -y
RUN echo "alias ll='ls -alh'" > ~/.bashrc

CMD yarn \
    && chmod -R 777 . \
    && setfacl -Rdm o::rwx /fend \
    && yarn run start --host 0.0.0.0
