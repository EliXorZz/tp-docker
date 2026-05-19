```bash
docker inspect 0360df5e0083 --format '{{range .Config.Env}}{{println .}}{{end}}'
PORT=3000
APP_SECRET=MaSuperCleSecrete
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
NODE_VERSION=26.1.0
```

```bash
docker exec 0360df5e008 env

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=0360df5e0083
PORT=3000
APP_SECRET=MaSuperCleSecrete
NODE_VERSION=26.1.0
HOME=/root
```

```bash
~/MyDigitalSchool/DevSecOps/TP-Docker git:[master]
echo "super_password_secret" | docker secret create db_password -
owtqf5od1l7ac0yk7q8sdb339

~/MyDigitalSchool/DevSecOps/TP-Docker git:[master]
docker secret ls
ID                          NAME          DRIVER    CREATED         UPDATED
owtqf5od1l7ac0yk7q8sdb339   db_password             4 seconds ago   4 seconds ago

~/MyDigitalSchool/DevSecOps/TP-Docker git:[master]
docker secret inspect db_password
[
    {
        "ID": "owtqf5od1l7ac0yk7q8sdb339",
        "Version": {
            "Index": 554
        },
        "CreatedAt": "2026-05-19T11:01:50.187781498Z",
        "UpdatedAt": "2026-05-19T11:01:50.187781498Z",
        "Spec": {
            "Name": "db_password",
            "Labels": {}
        }
    }
]
```

Une CVE récente : https://www.sophos.com/fr-fr/blog/proof-of-concept-exploit-available-for-linux-copy-fail-cve-2026-31431

Une CVE est un identifiant unique qui sert à nommer et référencer une faille de sécurité connue dans un logiciel.

La différence entre `trivy fs .` et `trivy image`, l'un scan le code et l'autre les images docker.

Limiter les copies : Ne copiez que le nécessaire (et pas des .env ou .git).
J'ai déplacé les données dans /data, mais on aurait pu faire un .dockerignore pour ignorer des fichiers au COPY/build de l'image.

_Pourquoi est-il dangereux de laisser un conteneur tourner en tant que root ? Quel est l'impact du passage de node:latest à node:alpine sur le nombre de vulnérabilités détectées par Trivy ?_

Beaucoup moins de CVE, alpine étant beaucoup plus léger, il embarque moins de package qui peuvent inclure des failles.
Laisser un container en tant que ROOT, permettrait à un attaquant d'avoir les pleins pouvoirs sur le container, exécuter des commandes, et même dans le pire des cas, sortir du container et attaquer la machine hote.

```bash
docker compose top
SERVICE  #   PID    USER  TIME  COMMAND
app      1   22328  root  0:01  {node-MainThread} node app.js
```