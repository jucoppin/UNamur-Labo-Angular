Create project

Bibliothèque graphique (Angular material / primeng)

Vérifier que l'application se lance

Créer votre premier module
    Architecture module 
        mkdir components pages services models interfaces
    Page de listing (<resource>-list => manager-list)
        Call HTTP => Service ? 
        Une fois les données récupérées, se concentrer sur la vue 
    Page de création (resource-create ? resource ? resource-edit ? )
        Call HTTP => Service ? 
        Une fois le formulaire créée, se concentrer la vue (FormGroup)
    => Page d'édition (N'oubliez pas de récupérer l'ID dans l'URL) => ActivatedRoute
    (Delete ? Visuel ?)
    Page de visualisation ? (resource-view ? )

constructor services
    httpClient: HttpClient => Permet de faire les call APIS

constructor pages
    fb: FormBuilder => Permet de construire le formulaire
    router: Router => Redirection d'URLS (après succèss)
    service: ManagerService => Permet de faire les calls API 
    activatedRoute => L'URL actuelle (this.activatedRoute.snapshot) 
        .paramMap => Paramètres de l'URL (:XX)
        .queryMap => Query params ?a=b&c=d

pages de listing
    constructor => Permet de récupérer les services injectables
    ngOnInit => Récupérer les données de l'API
        - Call via le service 
        this.managerService.getAll().subscribe(resultat => this.managers = resultat)

pages de création / édition
    submit() => Réagir au submit du formulaire (nbSubmit), permet de valider, permet d'envoyer à l'API
    ngOnInit() => Permet d'initialiser le composant (après le constructeur mais avant le premier rendu)
        - Calculs de valeurs par défaults
        - Récupération des données eventuelles
        - Création du formulaire / formGroup et de ses validators
            this.form = this.fb.group({
                firstName: [null, [Validators.required]],
            })


Routing
  Le routing se fait dans le app-routing.module.ts
  Ce fichier contient une variable routes qui est l'ensemble des routes applicatives
  const routes = [
  ]

  Dans les cas standards, une route est composée des propriétés suivantes :
    - path
    - children ou component
  
  Si path et children, alors le path est le préfix des routes qui seront définies dans children
  Children est lui même un tableau de routes qui répond aux règles ici présentes
  
  Si path et component, alors le chemin réel est "le path du parent / le path de l'enfant"
  Le component est la classe <Resource>Component qui sera utilisée pour faire le rendu visuel
    lorsque l'URL en question sera utilisée

  Il ne faut pas oublier de charger le fichier app-routing.module dans les imports du app.module
  De plus, il faut importer les différents modules fait à la main pour s'assurer du bon
    chargement des composants et autres éléments déclarés
