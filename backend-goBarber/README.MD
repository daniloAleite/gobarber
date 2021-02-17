# Recuperação de senha

  **RN(Requisitos funcionais)**
  --> O usuário deve poder recuperar sua senha informando o seu email;
  --> O usuário deve receber um email com instruções de recuperação de senha;
  --> O usuário deve poder resetar sua senha;


  **RF(Requisitos não funcionais)**
  --> Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
  --> Utilizar o Amazon SES para envios em produção;
  --> O Envio de email deve acontecer em segundo plano (background job);

  **RN(Regra de negócios)**
  --> O link enviado por email para resetar, deve expirar em 2H;
  --> O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualização de usuário

  **RN(Requisitos funcionais)**
  --> O usuário deve poder atualizar seu nome, email e senha;

  **RF(Requisitos não funcionais)**
  --> S/ Requisito não funcional

  **RN(Regra de negócios)**
  --> O usuário não pode alterar seu email para um email ja utilizado;
  --> Para atualizar seu senha, o usuário deve informar a senha antiga;
  --> Para atualizar a senh, o susuá precisa confirmar a nova senha;


# Painel do prestador

  **RN(Requisitos funcionais)**
  --> O Usuário deve poder listar seus agendamentos de um dia específico;
  --> O usuário deve receber uma notificação sem pre que houver um novo agendmento;
  --> O prestador deve poder visualizar as notificações não lidas;

  **RF(Requisitos não funcionais)**
  --> Os Agendamentos do prestador no dia devem ser armazenados em cache;
  --> As notificações do prestador devem ser armazenadas no MongoDB;
  --> As notificações do prestador devem ser enviadas em tempo-real utilizando Soket.io;

  **RN(Regra de negócios)**
  --> A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;


# Agendamento de serviços

  **RN(Requisitos funcionais)**
  --> O usuário deve poder listar todos prestadores de serviço cadastrados;
  --> O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
  --> O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
  --> O usuário deve poder realizar um novo agendamento com um prestador;

  **RF(Requisitos não funcionais)**
  --> A listagem de prestadores deve ser armazenado em cache;

  **RN(Regra de negócios)**
  --> Cada agendamento deve durar 1H exatamente;
  --> Os agendamentos devem estar dispoínveis entre 8H às 18H (Primeiro às 8H, último às 17H);
  --> O usuário não pode agendar em um horário ocupado;
  --> O usuário não pode agendar em um horário que já passou;
  --> O usuário não pode agendar serviços consigo mesmo;
