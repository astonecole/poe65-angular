# Ngbeer

## Installer l'API Beer

### Installer les dépendences

```sh
npm i
```

### Ajouter la clé du JWT dans les variables d'environnement

Créer un fichier **.env** à la racine du projet :

```sh
JWT_KEY="6JD7@HrtHD7&7!ZNbcd@hdnUSnc45sDB7y7cn9@kd$!8"
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
