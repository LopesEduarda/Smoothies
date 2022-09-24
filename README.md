# Projeto: Funcional Smoothies
<br>

### Documentação:
https://documenter.getpostman.com/view/20352466/2s83KXdhSg

<br>

### Sobre a Functional Smoothies:

A Functional Smooothies Inc. está lançando uma nova máquina de smoothies que fará o melhor sorvete
bebidas de frutas de todos os tempos. Segundo a Wikipédia:
Um smoothie (ocasionalmente soletrado smoothie ou smoothy) é uma bebida espessa e fria feita de
purê de frutas cruas misturadas com sorvete ou iogurte congelado junto com outros ingredientes, como
gelo picado, suco de frutas, adoçantes, laticínios, nozes, sementes, etc.
Para vender a máquina para vendedores de smoothies em todo o mundo, Functional Smooothies
precisa garantir que a máquina leve em consideração todas as preferências alimentares e alergias.
Eles contrataram você para escrever o software para a máquina.
O software possui um menu de opções padrão de smoothie, incluindo os ingredientes para cada
beber. Quando um cliente faz seu pedido, ele fornece uma lista de zero ou mais
restrições que devem ser respeitadas. Seu software imprimirá uma lista dos ingredientes que
o operador de smoothie precisa colocar na máquina.
<br>
<br>

## Adicionar itens ao cardápio
Criei um endpoint para adicionar os itens ao menu (que são 4, fornecidos por vocês) com seus respectivos ingredientes.
<br>
## Visualizar cardápio
Nesse endpoint é possível visualizar todos os smoothies disponíveis no cardápio.
<br>
## Realizar um pedido
Nesse endpoint, o cliente deverá preencher o seu nome, o nome do smoothie que deseja e, caso seja alérgico à algum ingrediente, preencher o campo 'allergicIngredient' com o nome do ingrediente do qual ele é alérgico, e esse ingrediente será removido de seu smoothie. Caso não seja alérgico à nenhum ingrediente, deverá deixar o campo vazio.
<br>
<br>

## Testes com Jest
- Foram realizados alguns testes simples com o jest. Estão explicados no próprio arquivo seus respectivos objetivos, e para testá-los, basta rodar o script test.
<br>

## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- Programação Orientada à Objetos
- Postman
- Git
- Jest
<br>
<br>

### Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
```

- Por fim, execute a aplicação rodando o comando npm start, ou npm run start para deixar o projeto rodando o tempo todo.
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço https://smoothie-project.herokuapp.com/ como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto estão no arquivo 'table.mysql' dentro do projeto.

