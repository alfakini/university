FROM ubuntu:18.04

LABEL maintainer="Marvin <contato@magrathealabs.com>"

ENV DEBIAN_FRONTEND noninteractive
ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8

RUN apt-get update --fix-missing && apt-get upgrade -y && apt-get autoremove && apt-get autoclean \
    && apt-get install -y \
        python3-pip \
        python3-dev \
        gfortran \
    && pip3 install --upgrade --quiet pip pipenv \
    && update-alternatives --install /usr/bin/python python /usr/bin/python3 1

WORKDIR /app
ADD . /app

RUN pip install -r requirements.txt

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD [ "/bin/bash" ]
