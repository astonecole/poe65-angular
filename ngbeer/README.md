# Ngbeer

## Installer l'API Beer

### Installer les dépendences

```sh
npm i
```

### Générer la documentation de l'API

```sh
./node_modules/.bin/apidoc -e node_modules
```

### Créer la base de données

```sh
./node_modules/.bin/sequelize db:create
```

```sh
npm run migrate
```

### Démarrer le serveur

```sh
npm run devstart
```

## Generer un componsant angular material

### Ajouter une navigation
```
ng generate @angular/material:material-nav components/sidenav
```

### Ajouter un dashboard

```
ng generate @angular/material:dashboard components/dashboard
```
