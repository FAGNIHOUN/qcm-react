import { Question } from '../types';

export const allQuestions: Question[] = [
  // React Questions
  {
    id: 1,
    technology: "React",
    question: "Quelle méthode utilise-t-on pour gérer l'état local dans un composant fonctionnel React ?",
    options: ["setState()", "useState()", "this.state", "useLocal()"],
    correctAnswer: 1
  },
  {
    id: 2,
    technology: "React",
    question: "Quel hook permet de gérer les effets de bord dans React ?",
    options: ["useSide()", "useEffect()", "useLayout()", "useCallback()"],
    correctAnswer: 1
  },
  {
    id: 3,
    technology: "React",
    question: "Comment passe-t-on des données d'un composant parent à un composant enfant ?",
    options: ["via context", "via props", "via state", "via refs"],
    correctAnswer: 1
  },
  {
    id: 4,
    technology: "React",
    question: "Quelle méthode de cycle de vie est déclenchée après le premier rendu d'un composant de classe ?",
    options: ["componentWillMount", "componentDidMount", "componentWillUpdate", "componentDidUpdate"],
    correctAnswer: 1
  },
  {
    id: 5,
    technology: "React",
    question: "Que retourne la méthode `render()` dans un composant de classe React ?",
    options: ["Un élément DOM", "Une chaîne de caractères", "Un élément React", "Une fonction"],
    correctAnswer: 2
  },
  {
    id: 6,
    technology: "React",
    question: "Quel hook permet de mémoriser une valeur entre les rendus ?",
    options: ["useMemo()", "useCallback()", "useRef()", "useState()"],
    correctAnswer: 2
  },
  {
    id: 7,
    technology: "React",
    question: "Quelle méthode est utilisée pour créer un portail React ?",
    options: ["React.createPortal()", "ReactDOM.createPortal()", "React.portal()", "ReactDOM.portal()"],
    correctAnswer: 1
  },
  {
    id: 8,
    technology: "React",
    question: "Quel package est couramment utilisé pour la gestion d'état global dans React ?",
    options: ["React-State", "MobX", "Redux", "React-Global"],
    correctAnswer: 2
  },
  {
    id: 9,
    technology: "React",
    question: "Quelle est la différence principale entre un composant fonctionnel et un composant de classe ?",
    options: ["La performance", "La syntaxe", "L'utilisation des hooks", "La gestion du state"],
    correctAnswer: 2
  },
  {
    id: 10,
    technology: "React",
    question: "Quel hook permet d'optimiser les performances en mémorisant une fonction ?",
    options: ["useMemo()", "useCallback()", "useEffect()", "useFunction()"],
    correctAnswer: 1
  },

  // Vue.js Questions
  {
    id: 41,
    technology: "Vue.js",
    question: "Quelle directive Vue.js permet de lier des données bidirectionnellement ?",
    options: ["v-model", "v-bind", "v-on", "v-two-way"],
    correctAnswer: 0
  },
  {
    id: 42,
    technology: "Vue.js",
    question: "Comment déclare-t-on une propriété calculée dans Vue.js ?",
    options: ["methods", "computed", "watchers", "props"],
    correctAnswer: 1
  },
  {
    id: 43,
    technology: "Vue.js",
    question: "Quel mot-clé est utilisé pour déclarer une directive personnalisée dans Vue.js ?",
    options: ["custom", "directive", "v-", "v-custom"],
    correctAnswer: 1
  },
  {
    id: 44,
    technology: "Vue.js",
    question: "Quel fichier contient la configuration principale d'une application Vue.js créée avec Vue CLI ?",
    options: ["vue.config.js", "main.js", "App.vue", "package.json"],
    correctAnswer: 0
  },
  {
    id: 45,
    technology: "Vue.js",
    question: "Quel hook de cycle de vie est déclenché avant le montage du composant ?",
    options: ["created", "beforeMount", "mounted", "beforeCreate"],
    correctAnswer: 1
  },
  {
    id: 46,
    technology: "Vue.js",
    question: "Quelle est la méthode recommandée pour gérer l'état global dans une grande application Vue.js ?",
    options: ["Vuex", "Vue-State", "Vue-Global", "Vue-Store"],
    correctAnswer: 0
  },
  {
    id: 47,
    technology: "Vue.js",
    question: "Quelle directive est utilisée pour le rendu conditionnel dans Vue.js ?",
    options: ["v-if", "v-show", "v-render", "v-condition"],
    correctAnswer: 0
  },
  {
    id: 48,
    technology: "Vue.js",
    question: "Comment appelle-t-on un composant à usage unique dans Vue.js ?",
    options: ["Single-use component", "One-time component", "Functional component", "Stateless component"],
    correctAnswer: 2
  },
  {
    id: 49,
    technology: "Vue.js",
    question: "Quelle méthode de cycle de vie est appelée après que le composant a été monté ?",
    options: ["created", "mounted", "updated", "destroyed"],
    correctAnswer: 1
  },
  {
    id: 50,
    technology: "Vue.js",
    question: "Quelle est la syntaxe correcte pour déclarer une prop dans Vue.js 3 ?",
    options: [
      "props: ['message']",
      "props: { message: String }",
      "defineProps(['message'])",
      "defineProps({ message: String })"
    ],
    correctAnswer: 3
  },

  // Angular Questions
  {
    id: 81,
    technology: "Angular",
    question: "Quel décorateur est utilisé pour définir un composant dans Angular ?",
    options: ["@Injectable", "@Directive", "@Component", "@Module"],
    correctAnswer: 2
  },
  {
    id: 82,
    technology: "Angular",
    question: "Quel module est utilisé pour la gestion des formulaires dans Angular ?",
    options: ["FormsModule", "ReactiveForms", "HttpModule", "NgFormModule"],
    correctAnswer: 0
  },
  {
    id: 83,
    technology: "Angular",
    question: "Quelle commande CLI est utilisée pour générer un nouveau composant ?",
    options: ["ng new component", "ng add component", "ng generate component", "ng create component"],
    correctAnswer: 2
  },
  {
    id: 84,
    technology: "Angular",
    question: "Quel service Angular est utilisé pour effectuer des requêtes HTTP ?",
    options: ["HttpClient", "Http", "HttpRequest", "HttpModule"],
    correctAnswer: 0
  },
  {
    id: 85,
    technology: "Angular",
    question: "Quel opérateur RxJS est couramment utilisé pour transformer des flux de données ?",
    options: ["map", "reduce", "filter", "scan"],
    correctAnswer: 0
  },
  {
    id: 86,
    technology: "Angular",
    question: "Quel décorateur est utilisé pour injecter un service dans un composant Angular ?",
    options: ["@Inject", "@Service", "@Provide", "@Injectable"],
    correctAnswer: 0
  },
  {
    id: 87,
    technology: "Angular",
    question: "Quelle est la commande pour créer un nouveau projet Angular avec Angular CLI ?",
    options: ["ng new", "ng create", "ng start", "ng init"],
    correctAnswer: 0
  },
  {
    id: 88,
    technology: "Angular",
    question: "Quel est le but principal des pipes dans Angular ?",
    options: ["Routing", "Data transformation", "State management", "Component communication"],
    correctAnswer: 1
  },
  {
    id: 89,
    technology: "Angular",
    question: "Quelle est la différence entre ngOnInit et le constructeur dans un composant Angular ?",
    options: [
      "Il n'y a pas de différence",
      "ngOnInit est appelé après la liaison des données",
      "Le constructeur est appelé après ngOnInit",
      "ngOnInit n'existe pas"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    technology: "Angular",
    question: "Quel module Angular est utilisé pour la création de formulaires réactifs ?",
    options: ["FormsModule", "ReactiveFormsModule", "FormBuilderModule", "DynamicFormsModule"],
    correctAnswer: 1
  },

  // Node.js Questions
  {
    id: 121,
    technology: "Node.js",
    question: "Quelle méthode utilise-t-on pour lire un fichier de manière asynchrone ?",
    options: ["fs.readFile()", "fs.read()", "fs.open()", "fs.get()"],
    correctAnswer: 0
  },
  {
    id: 122,
    technology: "Node.js",
    question: "Quel module permet de créer un serveur HTTP en Node.js ?",
    options: ["server", "http", "express", "web"],
    correctAnswer: 1
  },
  {
    id: 123,
    technology: "Node.js",
    question: "Quelle commande est utilisée pour initialiser un projet Node.js ?",
    options: ["npm init", "node init", "npm start", "node start"],
    correctAnswer: 0
  },
  {
    id: 124,
    technology: "Node.js",
    question: "Quel objet global est utilisé pour gérer les chemins de fichiers dans Node.js ?",
    options: ["fs", "os", "path", "process"],
    correctAnswer: 2
  },
  {
    id: 125,
    technology: "Node.js",
    question: "Quel mot-clé est utilisé pour importer des modules dans Node.js ?",
    options: ["import", "use", "require", "include"],
    correctAnswer: 2
  },
  {
    id: 126,
    technology: "Node.js",
    question: "Quelle méthode est utilisée pour créer un nouveau processus dans Node.js ?",
    options: ["process.new()", "child_process.spawn()", "os.createProcess()", "process.fork()"],
    correctAnswer: 1
  },
  {
    id: 127,
    technology: "Node.js",
    question: "Quel module est utilisé pour la gestion des événements dans Node.js ?",
    options: ["EventEmitter", "EventHandler", "EventManager", "EventListener"],
    correctAnswer: 0
  },
  {
    id: 128,
    technology: "Node.js",
    question: "Quelle méthode est utilisée pour terminer une réponse HTTP dans Node.js ?",
    options: ["response.send()", "response.end()", "response.finish()", "response.close()"],
    correctAnswer: 1
  },
  {
    id: 129,
    technology: "Node.js",
    question: "Quel outil est couramment utilisé pour redémarrer automatiquement une application Node.js lors des modifications de fichiers ?",
    options: ["forever", "pm2", "nodemon", "supervisor"],
    correctAnswer: 2
  },
  {
    id: 130,
    technology: "Node.js",
    question: "Quelle méthode est utilisée pour parser les données JSON dans Node.js ?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.deserialize()"],
    correctAnswer: 0
  },

  // TypeScript Questions
  {
    id: 161,
    technology: "TypeScript",
    question: "Quel mot-clé est utilisé pour déclarer une interface en TypeScript ?",
    options: ["type", "interface", "class", "struct"],
    correctAnswer: 1
  },
  {
    id: 162,
    technology: "TypeScript",
    question: "Comment déclare-t-on un type union en TypeScript ?",
    options: ["type A & B", "type A | B", "type A + B", "type A || B"],
    correctAnswer: 1
  },
  {
    id: 163,
    technology: "TypeScript",
    question: "Quel est le but du mot-clé 'readonly' en TypeScript ?",
    options: [
      "Rendre une propriété non modifiable",
      "Créer une propriété en lecture seule",
      "Empêcher l'héritage",
      "Définir une constante"
    ],
    correctAnswer: 1
  },
  {
    id: 164,
    technology: "TypeScript",
    question: "Quelle est la différence entre 'any' et 'unknown' en TypeScript ?",
    options: [
      "Il n'y a pas de différence",
      "'unknown' est plus strict que 'any'",
      "'any' est plus strict que 'unknown'",
      "'unknown' n'existe pas en TypeScript"
    ],
    correctAnswer: 1
  },
  {
    id: 165,
    technology: "TypeScript",
    question: "Comment déclare-t-on un type générique en TypeScript ?",
    options: ["<T>", "[T]", "{T}", "(T)"],
    correctAnswer: 0
  },

  // Python Questions
  {
    id: 201,
    technology: "Python",
    question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'une liste en Python ?",
    options: ["list.add()", "list.append()", "list.insert()", "list.extend()"],
    correctAnswer: 1
  },
  {
    id: 202,
    technology: "Python",
    question: "Comment déclare-t-on une fonction lambda en Python ?",
    options: ["def lambda:", "lambda:", "function lambda:", "lambda x:"],
    correctAnswer: 3
  },
  {
    id: 203,
    technology: "Python",
    question: "Quel mot-clé est utilisé pour définir une classe en Python ?",
    options: ["class", "def", "struct", "type"],
    correctAnswer: 0
  },
  {
    id: 204,
    technology: "Python",
    question: "Quelle méthode est utilisée pour formater une chaîne de caractères en Python 3 ?",
    options: ["%", ".format()", "f-string", "Toutes ces réponses"],
    correctAnswer: 3
  },
  {
    id: 205,
    technology: "Python",
    question: "Quel est le but du décorateur @property en Python ?",
    options: ["Définir une méthode statique", "Créer un getter", "Créer un setter", "Définir une méthode de classe"],
    correctAnswer: 1
  },

  // Java Questions
  {
    id: 241,
    technology: "Java",
    question: "Quel mot-clé est utilisé pour créer une instance d'une classe en Java ?",
    options: ["new", "create", "instance", "init"],
    correctAnswer: 0
  },
  {
    id: 242,
    technology: "Java",
    question: "Quelle est la différence entre '==' et '.equals()' en Java ?",
    options: [
      "Il n'y a pas de différence",
      "'==' compare les références, '.equals()' compare le contenu",
      "'==' compare le contenu, '.equals()' compare les références",
      "'.equals()' n'existe pas en Java"
    ],
    correctAnswer: 1
  },
  {
    id: 243,
    technology: "Java",
    question: "Quel mot-clé est utilisé pour définir une interface en Java ?",
    options: ["class", "interface", "abstract", "implement"],
    correctAnswer: 1
  },
  {
    id: 244,
    technology: "Java",
    question: "Quelle collection Java garantit l'unicité des éléments ?",
    options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
    correctAnswer: 2
  },
  {
    id: 245,
    technology: "Java",
    question: "Quel est le but de l'annotation @Override en Java ?",
    options: ["Surcharger une méthode", "Redéfinir une méthode", "Créer une nouvelle méthode", "Supprimer une méthode"],
    correctAnswer: 1
  },

  // Docker Questions
  {
    id: 281,
    technology: "Docker",
    question: "Quelle commande est utilisée pour créer et démarrer un conteneur Docker ?",
    options: ["docker build", "docker run", "docker start", "docker create"],
    correctAnswer: 1
  },
  {
    id: 282,
    technology: "Docker",
    question: "Quel fichier est utilisé pour définir la configuration d'un conteneur Docker ?",
    options: ["Dockerfile", "docker-compose.yml", "Containerfile", "Docker.config"],
    correctAnswer: 0
  },
  {
    id: 283,
    technology: "Docker",
    question: "Quelle commande est utilisée pour lister tous les conteneurs Docker en cours d'exécution ?",
    options: ["docker list", "docker ps", "docker containers", "docker show"],
    correctAnswer: 1
  },
  {
    id: 284,
    technology: "Docker",
    question: "Quel est le but de l'instruction EXPOSE dans un Dockerfile ?",
    options: [
      "Ouvrir un port sur l'hôte",
      "Définir une variable d'environnement",
      "Spécifier les ports sur lesquels le conteneur écoute",
      "Exposer le contenu du conteneur"
    ],
    correctAnswer: 2
  },
  {
    id: 285,
    technology: "Docker",
    question: "Quelle commande est utilisée pour construire une image Docker à partir d'un Dockerfile ?",
    options: ["docker create", "docker build", "docker run", "docker image"],
    correctAnswer: 1
  },

  // Kubernetes Questions
  {
    id: 321,
    technology: "Kubernetes",
    question: "Quel objet Kubernetes est utilisé pour gérer un ensemble de pods identiques ?",
    options: ["Deployment", "Service", "ConfigMap", "Ingress"],
    correctAnswer: 0
  },
  {
    id: 322,
    technology: "Kubernetes",
    question: "Quelle commande est utilisée pour obtenir des informations sur les pods dans un cluster Kubernetes ?",
    options: ["kubectl get pods", "kubectl describe pods", "kubectl info pods", "kubectl list pods"],
    correctAnswer: 0
  },
  {
    id: 323,
    technology: "Kubernetes",
    question: "Quel objet Kubernetes est utilisé pour exposer un ensemble de pods comme un service réseau ?",
    options: ["Ingress", "Service", "Endpoint", "NetworkPolicy"],
    correctAnswer: 1
  },
  {
    id: 324,
    technology: "Kubernetes",
    question: "Quelle est la fonction principale d'un Ingress dans Kubernetes ?",
    options: [
      "Gérer le stockage persistant",
      "Exposer des services HTTP et HTTPS à l'extérieur du cluster",
      "Gérer les mises à jour des applications",
      "Surveiller l'état des pods"
    ],
    correctAnswer: 1
  },
  {
    id: 325,
    technology: "Kubernetes",
    question: "Quel outil est couramment utilisé pour gérer les packages Kubernetes ?",
    options: ["kubectl", "kubeadm", "Helm", "kops"],
    correctAnswer: 2
  },

  // AWS Questions
  {
    id: 361,
    technology: "AWS",
    question: "Quel service AWS est utilisé pour héberger des applications web statiques ?",
    options: ["EC2", "S3", "EBS", "RDS"],
    correctAnswer: 1
  },
  {
    id: 362,
    technology: "AWS",
    question: "Quel service AWS fournit des instances de calcul redimensionnables dans le cloud ?",
    options: ["EC2", "Lambda", "ECS", "Lightsail"],
    correctAnswer: 0
  },
  {
    id: 363,
    technology: "AWS",
    question: "Quel service AWS est utilisé pour la gestion des bases de données relationnelles ?",
    options: ["DynamoDB", "RDS", "Aurora", "Redshift"],
    correctAnswer: 1
  },
  {
    id: 364,
    technology: "AWS",
    question: "Quel service AWS est utilisé pour la mise en cache en mémoire distribuée ?",
    options: ["ElastiCache", "CloudFront", "MemoryDB", "DAX"],
    correctAnswer: 0
  },
  {
    id: 365,
    technology: "AWS",
    question: "Quel service AWS fournit un réseau de diffusion de contenu (CDN) ?",
    options: ["S3", "CloudFront", "Route 53", "ELB"],
    correctAnswer: 1
  },

  // GraphQL Questions
  {
    id: 401,
    technology: "GraphQL",
    question: "Quel type de requête est utilisé pour récupérer des données dans GraphQL ?",
    options: ["GET", "POST", "Query", "Mutation"],
    correctAnswer: 2
  },
  {
    id: 402,
    technology: "GraphQL",
    question: "Quelle directive GraphQL est utilisée pour inclure un champ conditionnellement ?",
    options: ["@include", "@skip", "@deprecated", "@conditional"],
    correctAnswer: 0
  },
  {
    id: 403,
    technology: "GraphQL",
    question: "Quel type de requête est utilisé pour modifier des données dans GraphQL ?",
    options: ["PUT", "PATCH", "Mutation", "Update"],
    correctAnswer: 2
  },
  {
    id: 404,
    technology: "GraphQL",
    question: "Quelle fonctionnalité GraphQL permet de combiner plusieurs champs en un seul ?",
    options: ["Fragments", "Unions", "Interfaces", "Aliases"],
    correctAnswer: 0
  },
  {
    id: 405,
    technology: "GraphQL",
    question: "Quel outil est couramment utilisé pour tester les requêtes GraphQL dans le navigateur ?",
    options: ["Postman", "GraphiQL", "Insomnia", "cURL"],
    correctAnswer: 1
  },

  // MongoDB Questions
  {
    id: 441,
    technology: "MongoDB",
    question: "Quelle commande est utilisée pour insérer un document dans une collection MongoDB ?",
    options: ["db.collection.insert()", "db.collection.add()", "db.collection.create()", "db.collection.new()"],
    correctAnswer: 0
  },
  {
    id: 442,
    technology: "MongoDB",
    question: "Quel opérateur est utilisé pour effectuer une recherche par égalité dans MongoDB ?",
    options: ["$eq", "$match", "$find", "$search"],
    correctAnswer: 0
  },
  {
    id: 443,
    technology: "MongoDB",
    question: "Quelle méthode est utilisée pour mettre à jour un document existant dans MongoDB ?",
    options: ["update()", "modify()", "change()", "set()"],
    correctAnswer: 0
  },
  {
    id: 444,
    technology: "MongoDB",
    question: "Quel type d'index est utilisé par défaut dans MongoDB ?",
    options: ["B-tree", "Hash", "Text", "Geospatial"],
    correctAnswer: 0
  },
  {
    id: 445,
    technology: "MongoDB",
    question: "Quelle commande est utilisée pour créer une nouvelle base de données dans MongoDB ?",
    options: ["createDatabase()", "newDatabase()", "use", "db.createDatabase()"],
    correctAnswer: 2
  },

  // PostgreSQL Questions
  {
    id: 481,
    technology: "PostgreSQL",
    question: "Quelle commande SQL est utilisée pour créer une nouvelle table dans PostgreSQL ?",
    options: ["CREATE TABLE", "NEW TABLE", "ADD TABLE", "MAKE TABLE"],
    correctAnswer: 0
  },
  {
    id: 482,
    technology: "PostgreSQL",
    question: "Quel type de données PostgreSQL est utilisé pour stocker des chaînes de caractères de longueur variable ?",
    options: ["char", "text", "varchar", "string"],
    correctAnswer: 2
  },
  {
    id: 483,
    technology: "PostgreSQL",
    question: "Quelle commande est utilisée pour ajouter une nouvelle colonne à une table existante ?",
    options: ["ADD COLUMN", "ALTER TABLE", "MODIFY TABLE", "UPDATE TABLE"],
    correctAnswer: 1
  },
  {
    id: 484,
    technology: "PostgreSQL",
    question: "Quel type d'index est le plus couramment utilisé dans PostgreSQL ?",
    options: ["B-tree", "Hash", "GiST", "GIN"],
    correctAnswer: 0
  },
  {
    id: 485,
    technology: "PostgreSQL",
    question: "Quelle fonction PostgreSQL est utilisée pour obtenir la date et l'heure actuelles ?",
    options: ["CURRENT_TIMESTAMP", "NOW()", "GETDATE()", "SYSDATE"],
    correctAnswer: 1
  },

  // Redis Questions
  {
    id: 521,
    technology: "Redis",
    question: "Quelle commande Redis est utilisée pour définir une valeur avec une clé ?",
    options: ["SET", "PUT", "ADD", "STORE"],
    correctAnswer: 0
  },
  {
    id: 522,
    technology: "Redis",
    question: "Quel type de structure de données Redis est utilisé pour stocker une liste ordonnée d'éléments ?",
    options: ["SET", "HASH", "LIST", "ZSET"],
    correctAnswer: 2
  },
  {
    id: 523,
    technology: "Redis",
    question: "Quelle commande Redis est utilisée pour obtenir toutes les clés correspondant à un motif ?",
    options: ["GETALL", "KEYS", "SCAN", "MATCH"],
    correctAnswer: 1
  },
  {
    id: 524,
    technology: "Redis",
    question: "Quelle fonctionnalité Redis permet d'exécuter plusieurs commandes en une seule opération ?",
    options: ["MULTI", "EXEC", "PIPELINE", "TRANSACTION"],
    correctAnswer: 2
  },
  {
    id: 525,
    technology: "Redis",
    question: "Quelle commande Redis est utilisée pour supprimer une clé ?",
    options: ["REMOVE", "DELETE", "DEL", "UNSET"],
    correctAnswer: 2
  },

  // Git Questions
  {
    id: 561,
    technology: "Git",
    question: "Quelle commande Git est utilisée pour créer une nouvelle branche ?",
    options: ["git branch", "git checkout", "git create", "git new"],
    correctAnswer: 0
  },
  {
    id: 562,
    technology: "Git",
    question: "Quelle commande Git est utilisée pour fusionner une branche dans la branche courante ?",
    options: ["git merge", "git combine", "git join", "git unite"],
    correctAnswer: 0
  },
  {
    id: 563,
    technology: "Git",
    question: "Quelle commande Git est utilisée pour voir l'historique des commits ?",
    options: ["git history", "git log", "git commits", "git show"],
    correctAnswer: 1
  },
  {
    id: 564,
    technology: "Git",
    question: "Quelle commande Git est utilisée pour annuler les modifications non commitées ?",
    options: ["git undo", "git revert", "git reset", "git checkout"],
    correctAnswer: 2
  },
  {
    id: 565,
    technology: "Git",
    question: "Quelle commande Git est utilisée pour ajouter des fichiers à l'index ?",
    options: ["git add", "git stage", "git commit", "git push"],
    correctAnswer: 0
  },

  // Next.js Questions
  {
    id: 601,
    technology: "Next.js",
    question: "Quelle fonction Next.js est utilisée pour le rendu côté serveur ?",
    options: ["getServerSideProps", "getStaticProps", "getInitialProps", "getServerRenderedProps"],
    correctAnswer: 0
  },
  {
    id: 602,
    technology: "Next.js",
    question: "Quel dossier est utilisé pour définir les routes dans Next.js ?",
    options: ["pages", "routes", "views", "components"],
    correctAnswer: 0
  },
  {
    id: 603,
    technology: "Next.js",
    question: "Quelle fonction Next.js est utilisée pour la génération de sites statiques ?",
    options: ["getStaticProps", "getServerSideProps", "getStaticPaths", "getInitialProps"],
    correctAnswer: 0
  },
  {
    id: 604,
    technology: "Next.js",
    question: "Quel fichier est utilisé pour configurer Next.js ?",
    options: ["next.config.js", "config.js", "nextjs.config.js", "app.config.js"],
    correctAnswer: 0
  },
  {
    id: 605,
    technology: "Next.js",
    question: "Quelle fonction Next.js est utilisée pour définir le composant racine de l'application ?",
    options: ["_app.js", "index.js", "main.js", "root.js"],
    correctAnswer: 0
  },

  // Rust Questions
  {
    id: 641,
    technology: "Rust",
    question: "Quel mot-clé est utilisé pour déclarer une variable immuable en Rust ?",
    options: ["let", "const", "var", "static"],
    correctAnswer: 0
  },
  {
    
    id: 642,
    technology: "Rust",
    question: "Quel type de données Rust est utilisé pour représenter une chaîne de caractères ?",
    options: ["String", "str", "char[]", "text"],
    correctAnswer: 0
  },
  {
    id: 643,
    technology: "Rust",
    question: "Quelle structure de contrôle est utilisée pour le pattern matching en Rust ?",
    options: ["match", "switch", "if-else", "when"],
    correctAnswer: 0
  },
  {
    id: 644,
    technology: "Rust",
    question: "Quel mot-clé est utilisé pour définir une fonction en Rust ?",
    options: ["fn", "func", "function", "def"],
    correctAnswer: 0
  },
  {
    id: 645,
    technology: "Rust",
    question: "Quel concept Rust garantit qu'une valeur n'a qu'un seul propriétaire à la fois ?",
    options: ["Ownership", "Borrowing", "Lifetime", "Reference"],
    correctAnswer: 0
  },

  // Go Questions
  {
    id: 681,
    technology: "Go",
    question: "Quelle est l'extension de fichier standard pour les fichiers Go ?",
    options: [".go", ".golang", ".g", ".gofile"],
    correctAnswer: 0
  },
  {
    id: 682,
    technology: "Go",
    question: "Quelle fonction est le point d'entrée d'un programme Go ?",
    options: ["start()", "init()", "main()", "run()"],
    correctAnswer: 2
  },
  {
    id: 683,
    technology: "Go",
    question: "Quel mot-clé est utilisé pour déclarer une variable en Go ?",
    options: ["var", "let", "const", "variable"],
    correctAnswer: 0
  },
  {
    id: 684,
    technology: "Go",
    question: "Quelle structure de données Go est utilisée pour stocker des paires clé-valeur ?",
    options: ["array", "slice", "map", "struct"],
    correctAnswer: 2
  },
  {
    id: 685,
    technology: "Go",
    question: "Quel package Go est utilisé pour les opérations d'entrée/sortie de base ?",
    options: ["io", "fmt", "os", "bufio"],
    correctAnswer: 1
  },

  // Flutter Questions
  {
    id: 721,
    technology: "Flutter",
    question: "Quel langage de programmation est principalement utilisé pour développer avec Flutter ?",
    options: ["Java", "Kotlin", "Dart", "Swift"],
    correctAnswer: 2
  },
  {
    id: 722,
    technology: "Flutter",
    question: "Quel widget Flutter est utilisé pour créer une liste déroulante ?",
    options: ["ListView", "Column", "Stack", "Row"],
    correctAnswer: 0
  },
  {
    id: 723,
    technology: "Flutter",
    question: "Quel widget Flutter est utilisé pour créer un bouton ?",
    options: ["Button", "Pressable", "TouchableOpacity", "ElevatedButton"],
    correctAnswer: 3
  },
  {
    id: 724,
    technology: "Flutter",
    question: "Quel package Flutter est couramment utilisé pour la gestion d'état ?",
    options: ["Redux", "MobX", "Provider", "GetX"],
    correctAnswer: 2
  },
  {
    id: 725,
    technology: "Flutter",
    question: "Quel widget Flutter est utilisé pour créer une grille d'éléments ?",
    options: ["GridView", "TableView", "CollectionView", "ListView"],
    correctAnswer: 0
  },

  // Svelte Questions
  {
    id: 761,
    technology: "Svelte",
    question: "Quelle syntaxe est utilisée pour déclarer une variable réactive dans Svelte ?",
    options: ["let variable = value", "$: variable = value", "reactive variable = value", "watch(variable, value)"],
    correctAnswer: 0
  },
  {
    id: 762,
    technology: "Svelte",
    question: "Quelle directive Svelte est utilisée pour lier une valeur à un élément de formulaire ?",
    options: ["v-model", "bind:value", "ng-model", "value={variable}"],
    correctAnswer: 1
  },
  {
    id: 763,
    technology: "Svelte",
    question: "Quelle méthode de cycle de vie Svelte est appelée lorsqu'un composant est monté dans le DOM ?",
    options: ["onMount", "mounted", "componentDidMount", "afterViewInit"],
    correctAnswer: 0
  },
  {
    id: 764,
    technology: "Svelte",
    question: "Quelle syntaxe est utilisée pour définir un prop dans un composant Svelte ?",
    options: ["export let propName", "prop propName", "@Input() propName", "props: ['propName']"],
    correctAnswer: 0
  },
  {
    id: 765,
    technology: "Svelte",
    question: "Quelle directive Svelte est utilisée pour le rendu conditionnel ?",
    options: ["v-if", "ng-if", "{#if}", "*ngIf"],
    correctAnswer: 2
  }
];