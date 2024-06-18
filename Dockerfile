# Use uma imagem base do PHP com Apache
FROM php:7.4-apache

# Copie os arquivos do projeto para o diretório raiz do servidor web
COPY . /var/www/html/

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80
