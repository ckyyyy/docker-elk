ARG ELK_VERSION

FROM docker.elastic.co/beats/filebeat:${ELK_VERSION}

USER root
# Create a directory to map volume with all docker log files
RUN echo hello world

#RUN rm -rf /usr/share/filebeat/dockerlogs
RUN mkdir /usr/share/filebeat/dockerlogs
RUN chown -R root /usr/share/filebeat/
RUN chmod -R go-w /usr/share/filebeat/