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

//git fetch -a   - você é atualizado de todos os branches e tags

//COMPATILHAMENTO E ATUALIZAÇAO

//git remote  - podemos adicionar um repo para tracker ou remover
//git remote -v    -ver as origin (fetch e push)
//git remote rm origin - remove os links  do repositório

//git submodule -verifica os submodules
//git submodule add <repo> -add um submódulo ao repositório 
//git submodule add <repo> <pasta pai> -add um submódulo ao segundo parâmetro
//ATUALIZANDO SUBMODULO
//primeiro devemos commitar as mudanças
//e para enviar para o  repo do submodulo  utilizaremos (dentro do submodulo)
// git push --recurse-submodules=on-demand

//ANALISE E INSPEÇÃO DE REPOSITÓRIOS 
//git show  - dar informação sobre o branch atual e tambem seus commits
//git show <tag>
//git diff -serve para exibir as diferenças de um branch 
//git diff <arquivo> <arquivo_b>  -verifica a diferença entre arquivos

//git shortlog -dar um log resumido do das mensagem dos commits do repositório 

//ADMINISTRAÇÃO DE REPOSITÓRIO 

//git clean  - verifica o limpar arquivos não estão sendo trackeados  (ou seja, todos que não utilizou git add)
//git clean -f - força a limpesa
//git clone <link> <nome da pasta que será criada, aonde o repositório será jogado>
//git gc - ele identifica arquivos que não são mais necessários e os excluir (otimiza o repositório )
//git fsck - é uma abreviação de File System Chesk (verifica a integridade de arquivos e sua conectividade)

//git reflog - vai mapear todos os seus passos no repositório, até uma mudança de branch é inserida neste log (o git log, apenas armazena os commits de um branch) (os reflogs ficam salvos até expirar, o tempo de expiração padrão é 30 dias)

//git archive -podemos transformar o repo em um arquivo compactado (--format zip --output master_files.zip main)

//exemplo git archive --format zip --output master_files.zip main

//MELHORANDO OS COMMITS DO PROJETO
//branchs com commits ruins
//private branches
//Onde criamos branches que não serão compartilhados no repositório, então podemos colocar qualquer commit;
//Ao fim da solução do problema podemos fazer um rebase;
 
//git rebase <branch atual> <funcionalidade> -i
//Escolhemos os branches para excluir (squash) e renomear com (reword);
