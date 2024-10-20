# Planos de Testes de Software

Para montar um plano de testes para os requisitos funcionais (RF) listados anteriormente na seção de Especificação do Projeto, estruturamos os casos de teste de forma que cada funcionalidade seja verificada quanto ao comportamento esperado. Para fazer isso, dividimos o plano em seções de acordo com a prioridade de cada funcionalidade (ALTA, MÉDIA, BAIXA) e descrevemos os casos de teste com os passos necessários para validar cada requisito.

**Testes para Requisitos Funcionais de Alta Prioridade**

**RF-01 - Cadastrar conta de administrador**

**Objetivo:** Verificar se o administrador pode cadastrar sua conta.

**Cenário de Teste:**
Acessar o formulário de cadastro.
Preencher todos os campos obrigatórios (nome, e-mail, senha).
Submeter o formulário.

**Resultado Esperado:** A conta deve ser criada e o administrador redirecionado para a página principal.

**Evidência do Teste**

https://github.com/user-attachments/assets/bae8cede-9169-4d0a-bdf4-793b502cb386


**RF-02 - Cadastrar contas de alunos**

**Objetivo:** Verificar se o administrador pode cadastrar contas de alunos.

**Cenário de Teste:**
Acessar o sistema como administrador.
Ir à seção de cadastro de alunos.
Preencher os dados do aluno e submeter.

**Resultado Esperado:** Conta do aluno criada com sucesso.


**RF-03 - Excluir usuários cadastrados**

**Objetivo:** Verificar se o administrador pode excluir usuários.

**Cenário de Teste:**
Acessar a lista de usuários cadastrados.
Selecionar um usuário e clicar em "Excluir".

**Resultado Esperado:** O usuário deve ser removido do sistema.


**RF-04 - Visualizar e pesquisar alunos cadastrados**

**Objetivo:** Verificar se o administrador pode visualizar e pesquisar os alunos cadastrados.

**Cenário de Teste:**
Acessar a lista de alunos.
Usar a barra de pesquisa para buscar por nome, e-mail ou outro dado relevante.

**Resultado Esperado:** O aluno buscado deve aparecer na lista ou mensagem de “não encontrado”.


**RF-05 - Realizar login com e-mail e senha (admin e usuário)**

**Objetivo:** Verificar se tanto o administrador quanto o usuário conseguem realizar login.

**Cenário de Teste:**
Tentar fazer login com e-mail e senha corretos.
Tentar fazer login com e-mail ou senha incorretos.

**Resultado Esperado:** Login bem-sucedido redireciona o usuário à página correta. Login mal-sucedido deve mostrar mensagem de erro.


**RF-06 - Cadastro de treinos pelo administrador**

**Objetivo:** Verificar se o administrador pode cadastrar treinos.

**Cenário de Teste:**
Acessar o sistema como administrador.
Navegar até a seção de cadastro de treinos.
Preencher os campos de treino e salvar.

**Resultado Esperado:** O treino deve ser salvo e listado.


**RF-07 - Associar treino a um aluno**

**Objetivo:** Verificar se o administrador pode associar treinos aos alunos.

**Cenário de Teste:**
Selecionar um treino cadastrado.
Associar o treino a um aluno específico.

**Resultado Esperado:** O treino deve ser associado ao aluno.


**Testes para Requisitos Funcionais de Média Prioridade**

**RF-08 - Visualizar treinos cadastrados (admin e aluno)**

**Objetivo:** Verificar se o administrador e o aluno conseguem visualizar os treinos cadastrados.

**Cenário de Teste:**
Acessar a seção de treinos.
Verificar a lista de treinos disponíveis.

**Resultado Esperado:** A lista de treinos cadastrados deve ser exibida corretamente.


**RF-09 - Visualizar execução do exercício**

**Objetivo:** Verificar se o usuário pode visualizar a execução dos exercícios cadastrados.

**Cenário de Teste:**
Acessar um treino específico.
Visualizar a descrição ou vídeo de execução dos exercícios.

**Resultado Esperado:** A execução do exercício deve ser visualizada.


**RF-10 - Alterar ou excluir um treino**

**Objetivo:** Verificar se o administrador pode alterar ou excluir treinos.

**Cenário de Teste:**
Acessar um treino já cadastrado.
Editar ou excluir o treino.

**Resultado Esperado:** Treino deve ser atualizado ou excluído com sucesso.


**Testes para Requisitos Funcionais de Baixa Prioridade**

**RF-11 - Marcar treinos como realizados**

**Objetivo:** Verificar se o aluno pode marcar um treino como realizado.

**Cenário de Teste:**
Acessar a lista de treinos.
Marcar um treino como realizado.

**Resultado Esperado:** O treino deve ser marcado como realizado e atualizado.


**RF-12 - Registrar treino realizado no histórico**

**Objetivo:** Verificar se o treino marcado como realizado é registrado no histórico do aluno.

**Cenário de Teste:**
Após marcar um treino como realizado, verificar se ele aparece no histórico do aluno.

**Resultado Esperado:** O treino deve aparecer no histórico do aluno.


**RF-13 - Acessar histórico de sessões de treino**

**Objetivo:** Verificar se o usuário pode acessar o histórico de suas sessões de treino.

**Cenário de Teste:**
Acessar a seção de histórico de treinos.

**Resultado Esperado:** O histórico de sessões deve ser exibido.


**RF-14 - Acessar histórico de treinos de alunos**

**Objetivo:** Verificar se o administrador pode acessar o histórico de treinos dos alunos.

**Cenário de Teste:**
Acessar o perfil de um aluno.
Verificar o histórico de treinos.

**Resultado Esperado:** O histórico de treinos do aluno deve ser exibido corretamente.


**RF-15 - Atualizar informações pessoais**

**Objetivo:** Verificar se o usuário pode atualizar suas informações pessoais.

**Cenário de Teste:**
Acessar o perfil do usuário.
Atualizar informações como nome, foto, senha, etc.

**Resultado Esperado:** As informações pessoais devem ser atualizadas com sucesso.


**RF-16 - Logout da conta (admin e usuário)**

**Objetivo:** Verificar se o administrador e o usuário conseguem realizar logout.

**Cenário de Teste:**
Realizar logout após o uso do sistema.

**Resultado Esperado:** O usuário deve ser redirecionado para a página de login após o logout.

Este plano de testes cobre os requisitos funcionais propostos, com cenários que visam garantir que cada funcionalidade atenda ao seu propósito dentro do sistema.


# Testes por pares


Este documento tem como objetivo apresentar uma estratégia detalhada para a realização de testes que assegurem não apenas a funcionalidade, mas também a confiabilidade, desempenho e usabilidade do software desenvolvido.  

  
## Tipo de Teste

__Sucesso:__ Tem o objetivo de verificar se as funcionalidades funcionam corretamente.   

__Erro:__ Tem o objetivo de verificar se o sistema trata erros de maneira correta.  


<p align="center">
      
   <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%2005.PNG" width="1000" height="300">

</p>

<p align="center">
      
   <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/rf%20117.PNG" width="1000" height="300">

</p>
 




 
# Evidências de Testes de Software

Abaixo estão as evidências dos testes propostos no Plano de Testes, os registros foram registrados da aplicação em funcionamento nos dispositivos dos desenvolvedores do projeto.

## Status	

<p align="center">
  
 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/STATUS.PNG" height="200">
 
 
 </p>

  
<p align="center">
  
 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/TESTE%20RF%2005.PNG" height="300">
 
 </p>


<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/EVIDENCIA%20TELA.jpeg" width="350">
</p>


  <p align="center">
  
 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/EVID%C3%8ANCIA%201.PNG" height="350">
 
 </p>

<p align="center">
      
   <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/rf17%202.PNG" width="1000" height="300">

</p>

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%2011117.png" width="350">
</p>

 <p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%201117.png" width="350">
</p>

 **Cadastro Login testes**
- [Vídeo Teste de Cadastro e Login](https://github.com/user-attachments/assets/42f501f0-37cf-479e-8856-d47e3a2f57cc).
- [Campos vazios](https://github.com/user-attachments/assets/0a2efb91-4520-405a-b772-0d037def5c25)
- [Usuário não encontrado](https://github.com/user-attachments/assets/5729fe8b-d8b8-419b-b4bc-71d9e72f6148)
- [Senha ou usuário incorreto](https://github.com/user-attachments/assets/ce8a9d34-2dc8-4244-b42b-80fd4a9678a5)
  # LOG ERROS/SUCESSO
- [Erros ccadastrais](https://github.com/user-attachments/assets/5c20c4e8-f8d4-4951-86cf-69fd04797461)


  
