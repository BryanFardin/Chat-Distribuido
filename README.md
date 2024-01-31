# Chat em Tempo Real com Sistemas Distribuídos e Threads

## Descrição

Esta aplicação web implementa um sistema de chat em tempo real, utilizando uma arquitetura cliente-servidor baseada em sistemas distribuídos. A comunicação assíncrona entre clientes e servidor é gerenciada por meio do uso eficiente de threads, proporcionando uma experiência de chat rápida e eficiente.

Esse projeto é um Chat utilizando, node, firebase, vercel, worker, express e socket.io o intuito é criar um chat online onde todos podem acessar e conversar tendo acesso ao historico das conversas e sendo capaz de conversar em tempo real. E esse é o Projeto

O Chat teve seu deploy feito atravez da Vercel e esta disponivel para teste atraves do link: "https://chat-distribuidos-vercel.vercel.app"

## Funcionalidades

- **Chat em Tempo Real:** Mensagens são enviadas e recebidas instantaneamente, proporcionando uma comunicação em tempo real.
  
- **Arquitetura Cliente-Servidor:** A aplicação segue uma abordagem cliente-servidor para gerenciar a comunicação, permitindo escalabilidade e flexibilidade.

- **Threads para Eficiência:** Utiliza threads para processar simultaneamente múltiplas conexões, garantindo uma experiência de chat suave mesmo com um grande número de usuários.

## Tecnologias Utilizadas

- **Linguagem de Programação:** Javascript
  
- **Framework Web:** Node, WebScoket.io, Express
## Como Executar

1. **Pré-requisitos:**
    - Node deve estar instalado
    - Banco de dados Firebase

2. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/BryanFardin/Chat-Distribuido.git
   cd nome-do-repositorio
   ```

3. **Configurar e Iniciar o Servidor:**
   -Vale ressaltar que nas partes onde ficam informações sensiveis do servidor, estão vazias pois são dados sensiveis, caso queiram executar o projeto na maquina de vcs, será   necessario criar o proprio database no firebase e adicionar as informações do database de voces no codigo.

   - npm install
     
   - npm start

4. **Acessar o Chat:**
   - Abra o navegador e acesse http://localhost:3000

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests, relatar problemas ou sugerir melhorias. Certifique-se de seguir as diretrizes de contribuição.

---

Esperamos que desfrute usando nosso chat em tempo real! Se tiver alguma dúvida ou feedback, não hesite em entrar em contato.


