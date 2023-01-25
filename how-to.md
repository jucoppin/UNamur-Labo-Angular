Create project

Bibliothèque graphique (Angular material / primeng)

Vérifier que l'application se lance

Créer votre premier module
    Architecture module 
        mkdir components pages services models interfaces
    Page de listing
        Call HTTP => Service ? 
        Une fois les données récupérées, se concentrer sur la vue 
    Page de création
        Call HTTP => Service ? 
        Une fois le formulaire créée, se concentrer la vue (FormGroup)
    => Page d'édition (N'oubliez pas de récupérer l'ID dans l'URL) => ActivatedRoute
    (Delete ? Visuel ?)

constructor services
    httpClient: HttpClient => Permet de faire les call APIS

constructor pages
    fb: FormBuilder => Permet de construire le formulaire
    router: Router => Redirection d'URLS (après succèss)
    service: ManagerService => Permet de faire les calls API 
    activatedRoute => L'URL actuelle (this.activatedRoute.snapshot) 
        .paramMap => Paramètres de l'URL (:XX)
        .queryMap => Query params ?a=b&c=d

pages de création / édition
    submit() => Réagir au submit du formulaire (nbSubmit), permet de valider, permet d'envoyer à l'API
    ngOnInit() => Permet d'initialiser le composant (après le constructeur mais avant le premier rendu)
        - Calculs de valeurs par défaults
        - Récupération des données eventuelles
        - Création du formulaire / formGroup et de ses validators
            this.form = this.fb.group({
                firstName: [null, [Validators.required]],
            })