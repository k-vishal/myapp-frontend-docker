
FROM httpd

COPY ./dist/app1/* /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND