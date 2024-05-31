#!/bin/bash

# Baixar o binário do BusyBox
curl -Lo busybox https://busybox.net/downloads/binaries/1.33.1-i686-uclibc/busybox

# Tornar o binário executável
chmod +x busybox

# Mover o binário para /usr/local/bin
sudo mv busybox /usr/local/bin/

# Verificar a instalação
busybox
