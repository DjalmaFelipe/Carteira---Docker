# CarteiraDocker
Aplicação de carteira com as funções de saldo, saque, depósito e histórico. Utilizando a tecnologia de containers Docker, nas linguagens PostgreSQL, Node.js e JavaScript.


## INSTRUÇÕES DE USO:

### PASSO 1: INSTALAR O DOCKER

Desinstale versões anteriores

''' for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done '''

configure o ambiente

''' sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
'''

''' echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
'''

instale o docker

''' sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin ''' 

verificando o funcionamento:

''' sudo docker run hello-world '''

para desinstalar use:

''' sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras '''

 ''' sudo rm -rf /var/lib/docker
 sudo rm -rf /var/lib/containerd 
'''

### PASSO 2: IMPLEMENTAR O POSTGRES

baixe a imagem do postgres:

''' docker pull postgres '''

crie um volume:

''' docker volume create *meu-volume* '''

execute o container do banco com suas configurações:

''' docker run --name *projeto* -e POSTGRES_PASSWORD=*1234* -p 5432:5432 -v *meu_volume*:/var/lib/postgresql/data -d postgres '''

*** Os valores cercados por asteriscos devem ser modificados conforme a necessidade.

após isso executar o script no banco, para esta aplicação será necessário apenas este código:

''' CREATE TABLE transactions (
      id SERIAL PRIMARY KEY,
      amount NUMERIC NOT NULL,
      type VARCHAR(10) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ); '''

### PASSO 3 - IMPLEMENTAR O BACKEND EM NODE.JS

navegue até o diretório BackEnd e aplique os seguintes comandos:

-para construir a imagem

''' docker build -t backend . '''

- executar o container
''' docker run --name container-node -p 5000:5000 -d backend '''

### PASSO 4 - IMPLEMENTAR O FRONTEND JAVASCRIPT COM NGINX

navegue até o diretório FrontEnd e execute os seguintes comandos:

- para construir a imagem

''' docker build -t frontend . '''

-para executar o container

''' docker run --name container-frontend -p 8080:80 -d meu-frontend '''
