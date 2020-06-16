ARG ELK_VERSION

# https://github.com/elastic/logstash-docker
FROM docker.elastic.co/logstash/logstash:${ELK_VERSION}

# Add your logstash plugins setup here
# Example: RUN logstash-plugin install logstash-filter-json
# make directory for output files
USER root
RUN rm -f /usr/share/logstash/config/logstash-sample.conf
RUN mkdir /usr/share/logstash/output-files
RUN chown -R root /usr/share/logstash
RUN chmod -R go-w /usr/share/logstash