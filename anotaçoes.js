// pode colocar mais de uma frag na mesma mensagem
// -a   == todos
// exemplo: git commit

//git pull - sincronizar com o repositório remoto 
//git log  - log de todas as alterações (estão em ordem decrescente )

//git rv - podemos temover um arquivo


//git mv - podemos mover/remomenar um arquivo

//git checkout <nome ou caminho do arquivo> - desfaz a alteraçao do arquivo (antes do commit)

//git reset --hard <nome do branch>  (resetar tudo em um branch) - (desfaz todas as mudanças local)

//branch - ramificação (é a forma do gir de separa as versões dos projetos)

//git branch -lista os branch
//git branch <cria um branch > -cria um branch
//git branch -d  <nome do branch> - deletar o branch
//git checkout  <nome do branch>  - mudar de branch
//git checkout -b <nome do branch>  - mudar e criar um branch

//unindo branchs

//git merge <nome da branch> -- uni a branch nomeada com a atual

//git stash  - salvar as modificações atuais para prosseguir com um outra abordagem de solução e não perder o código (joga numa lixeira para recuperar depois)

//git stash list - verifica as stash criadas
//git stash apply <numero> - recuperar a stash (o stash vai ser revertido ao branch atual)
//git stash show -p 0 - mostrar as alterações
//git stash clear  -limpar totalmente as stash de um branch
//git stash drop <nome> - limpar uma stash especifica

//TAGS

//git tag -a <nome> -m '<msg>'   - podemos criar tags nos branches (serve como um checkpoint de um branch)
//git tag - lista as tags
//git show <nome> - verifica uma tag
//git checkout <nome> - troca de tag
//git push origin <nome> - enviar tags para o  repositório
//git push origin --tags  -enviar mais de uma tags