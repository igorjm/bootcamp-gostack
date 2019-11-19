##Comandos Sequelize

Cria Migration
$ yarn sequelize migration:create --name=name

Inicia Migration
$ yarn sequelize db:migrate

Desfaz ultima Migration
$ yarn sequelize db:migrate:undo

Desfaz todas as Migration
$ yarn sequelize db:migrate:undo:all
