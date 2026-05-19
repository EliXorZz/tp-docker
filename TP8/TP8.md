```bash
ID                            HOSTNAME         STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
goku2mgfd1gwvl6tizu2ebw3z     docker-desktop   Down      Active                          28.4.0
sxjgnht6k6vqwwra80o6czbny     docker-desktop   Down      Active                          29.4.3
yvhr1wyniv357rn3rq9dbd0ol     docker-desktop   Ready     Active                          28.4.0
pgu2ot9avglxohpuj8ua46zib *   orbstack         Ready     Active         Leader           29.4.0
```

```bash
docker service ps tp8stack_web
ID             NAME             IMAGE                                                     NODE             DESIRED STATE   CURRENT STATE                     ERROR     PORTS
j5iqpvp6yct7   tp8stack_web.1   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   docker-desktop   Running         Starting less than a second ago             
vaw2n1zifjip   tp8stack_web.2   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   orbstack         Running         Running 9 seconds ago                       
kles9mliu6p0   tp8stack_web.3   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   docker-desktop   Running         Starting 1 second ago                       
ebb0di348llm   tp8stack_web.4   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   docker-desktop   Running         Starting 1 second ago                       
vgulzpg4j3ta   tp8stack_web.5   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   orbstack         Running         Running 9 seconds ago 
```

```bash
docker service ps tp8stack_web
ID             NAME                 IMAGE                                                     NODE             DESIRED STATE   CURRENT STATE             ERROR     PORTS
ze3rsqdkty83   tp8stack_web.1       harbor.server.dylanbattig.fr/mydigitalschool/nginx:pong   docker-desktop   Running         Running 10 seconds ago              
j5iqpvp6yct7    \_ tp8stack_web.1   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   docker-desktop   Shutdown        Shutdown 11 seconds ago             
kd4tokmx86l1   tp8stack_web.2       harbor.server.dylanbattig.fr/mydigitalschool/nginx:pong   orbstack         Running         Running 2 seconds ago               
vaw2n1zifjip    \_ tp8stack_web.2   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   orbstack         Shutdown        Shutdown 2 seconds ago              
m8kww08750rj   tp8stack_web.3       harbor.server.dylanbattig.fr/mydigitalschool/nginx:pong   docker-desktop   Running         Running 5 seconds ago               
kles9mliu6p0    \_ tp8stack_web.3   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   docker-desktop   Shutdown        Shutdown 6 seconds ago              
vuw8wngre6k5   tp8stack_web.4       harbor.server.dylanbattig.fr/mydigitalschool/nginx:pong   orbstack         Running         Running 15 seconds ago              
ebb0di348llm    \_ tp8stack_web.4   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   docker-desktop   Shutdown        Shutdown 15 seconds ago             
ghz1uof1c1zk   tp8stack_web.5       harbor.server.dylanbattig.fr/mydigitalschool/nginx:pong   orbstack         Running         Running 19 seconds ago              
vgulzpg4j3ta    \_ tp8stack_web.5   harbor.server.dylanbattig.fr/mydigitalschool/nginx:ping   orbstack         Shutdown        Shutdown 20 seconds ago  
```