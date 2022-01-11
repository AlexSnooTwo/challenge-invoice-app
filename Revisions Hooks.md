# 1 useState V
setError(!event.target.value.includes("@"))
style={error ? {color : "red"} : null}
{!error ? "valide" : "non valide"}

Le code qui suit permet de sauvegarder ce qu'on met dans la barre dans le localstorage pour si on raffraichit la page
window.localStorage.setItem('email', event.target.value)
const [email, setEmail] = React.useState(() => window.localStorage.getItem('email') ||  initialMail)

# 2 useEffect  V
Permet d'exécuter du code après le rendu.
S'utilise comme ça:
React.useEffect(()=> {
    console.log("quelqueChose")
})
On peut y stocker des variables, du code à exécuter en attendant le rendu
Dépendences déffet
React.useEffect(() => {
    window.localStorage.setItem('email', email)
    console.log('useEffect email a changé')
  }, [email])
  comme ça le code ne concerne pas les changements sur toute la page, mais sur [name]
Avec des props :: pareil que l'autre sans syntaxe particulière }, [email])

Autre exemple de son utilisation = imaginons que nous devions accéder à une large base de donnée sur un autre serveur
Au départ du rendu, les fruits ne sont peut être pas disponibles, il faut donc utiliser useEffect

# 3 lifting state V
Pour gérer le state dans app il suffit de faire comme ça :
const [computer, setComputer] = React.useState('MacBookPro') //Dans App
<MyBestComputer computer={computer} onComputerChange={setComputer}/> //Dans App
Et appeler la fonction onComputerChange dans le composant enfant : 
onChange={event => onComputerChange(event.target.value)} //Dans le composant enfant dans lequel on aura déclaré les props en paramètre
De cette façon on peut déclarer une fonction dans App qui peut set. Cette fonction peut être réutiliser dans l'enfant
Autre principe : si un composant n'est utiliser que en interne, il faut le remettre dans le composant enfant.
Par exemple si Username n'est plus affiché dans le composant content et qu'il agit seulement dans le composant userName,
Alors on le supprime de App et on le remet dans Username en ayant fait le ménage des props et des fonctions inutiles (remettre setUserName)

# 4 Application Emoji List X
Refaire l'exercice pour s'entrainer

# 5 useRef et useEffect : DOM X Regarder des vidéos pour comprendre useRef plus en profondeur
Sert à gérer le focus, faire des animations impératives...
Exemple d'utilisation:
On déclare une variable constanceDeReference = React.useRef() à la place de constanceDeReference = document.getElementById('canvas')
Plus tard on l'appelera dans notre composant return <canvas ref={constanceDeReference}/>
Cette référence permet d'être utilisé avec des librairies, de stocker des valuers ex:
const refConfig = React.useRef({height: 50, width: 100})
si on appelle avec refConfig.current.height, cela retournera 50, bien noter l'utilisation de current
useRef remplacerait l'utilisation d'un appel au dom dans js natif
Exemple de stockage de variable avec useRef:
const refSetting = React.useRef({clock : 200, animate : true})
on pourra ensuite ajouter refSetting à notre refConfig en spread opérator ...refSetting

# 6 Refactoring calculette IOS Classes=>Hooks X
Refaire l'exercice `pour s'entrainer

# 7 useEffect appel https X Relire les concepts

Deux manières de faire des appels : fetch et axios
avec Fetch dans useEffect, on fait comme suit :

il faut déclarer un prop (ici {query = "redux"}) dans le composant.
déclarer un useState const [data, setData] = React.useState([])
React.useEffect(
    () => {
      fetch(`https://hn.algolia.com/api/v1/search?query=${query}`) // Appeler le query : query=${query}
        .then(response => response.json()) 
        .then(json => setData(json.hits)) //setData ici pour que Data prenne tous les objets du json (hits est un tableau hits[objet...])
    },
    [
      /*dependances ici pour que l'appel concerne seulement le prop query*/
      query
    ],
  )
  ensuite on pourra map dans les data ex: <li key={item.objectID}><a href={item.url}>{item.title}</a></li>
  On fait venir le query du composant App

  function App() {
  const [searchText, setSearchText] = React.useState('')
  return (
    <div>
      <label>Recherher</label>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <ArticleList query={searchText}></ArticleList>
    </div>
  )
}

# 8 Appels avancés X 
Refaire l'exercice
Maitriser les ErrorBoundary
Ajouter une clé unique à notre ErrorBoundary
Utilisation du composant ErrorBoundary déjà existant en l'important