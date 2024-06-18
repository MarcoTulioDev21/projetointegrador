# Use uma imagem base do PHP com Apache
FROM php:7.4-apache

# Instale extensões PHP necessárias
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Defina o ServerName para evitar a mensagem de erro
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copie os arquivos do projeto para o diretório raiz do servidor web
COPY . /var/www/html/

# Ajuste as permissões, se necessário
RUN chown -R www-data:www-data /var/www/html

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando para iniciar o servidor Apache
CMD ["apache2-foreground"]

