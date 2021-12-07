# HTML 1 Rappel DOM

# HTML 2 DOM avec React
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
React.createElement('div', {className : "rootContainer", children})
ReactDOM.render(element, rootElement)

# HTML 3 JSX
<script src="https://unpkg.com/@babel/standalone@7.15.1/babel.js"></script>
<script type="text/babel"></script>
const exemple = <div>Exemple de compilation babel</div>
Utilisation des props et spreads
const props = {className, children}
const exempleProps = <div {...props}></div>
Utilisation des fragments
const children =
<React.Fragment>
    {element}
    {element2}
</React.Fragment>

# HTML 4 Composants et props
Toujours une maj au début d'un composant React
Fonction simple de retour
Ex:
paragraphe({children}){
    return <p>{children}</p>
}
Puis 
{paragraphe({children: "Text qu'on veut"})}

Composant React
Paragraphe({children}){
    return <p>{children}</p>
}
puis
<Paragraphe>Text qu'on veut</Paragraphe>
NB: On peut ajouter la className en argument et jouer avec.
Les props types
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> dans Head
la suite se place juste après la fonction Paragraphe
Paragraphe.propTypes = {
    children : PropTypes.string.isRequired
}

# HTML 5 CSS React
Inline, les propriétés perdent leur tirets et deviennent camelCase
syntaxe react: style={{backgroundColor : "red"}}
Création d'un composant React exemple
function Container({className="", children, style, size, color}){
    const sizeClass = `container--${size}`
    return 
    <div className={`${sizeClass} ${className}`} style={{border: '1px solid', color, ...style}}>
        {children}
    </div>
}
définir la const sizeClass permet dans notre cas de récupérer les classes du fichier CSS et modifier la partie au besoin
className comportera ainsi soit directement le nom de la class, soit le nom de la size
color n'a pas besoin d'être plus renseigné que ça dans la fonction
le spread de ...style permet de récupérer les valeurs renseignées plus tard pour écraser les valeurs par défaut en dernier lieu

# HTML 6 Affichage conditionnel !!
1ère étape définir son composant
function ButtonActions({isAdmin})
2ème étape, l'appeler
return (
    <ButtonActions isAdmin={false}></ButtonActions>
  )
On peut aussi jouer avec le hidden

# HTML 7 Rendus de tableaux
Bien penser à ajouter une key à nos éléments ex:
const skils = []
skills.push(<li key = "1">Test</li>)
On peut en créer plusieurs de cette façon et les mapper dans une autre fonction
function MySkills(){
    return <ul>{skills.map(skill => skill)}</ul>
}
Pour ajouter une clé dynamiquement, penser à utiliser l'index de map ou bien directement sa clé si c'est un objet key={skill.id}

# HTML 8 Les states !!
Ne jamais modifier les propTypes
Deux façons de rendre notre composant statefull: classe ou hook
Pour classe, voir Doc et YT
Déclaration d'un hook:
const [skills, setSkills] = React.useState(initialSkills) dans la fonction MySkills
les paramètres de la constance correspondent à 1 : le nom qu'on veut utiliser pour pas modifier l'objet original
2: la méthode setter
Le paramètre de userState() est l'objet qu'on récupère.
la fonction addSkillPython viendra s'imbriquer dans la fonction mySkills à la suite de note
Voir le fichier pour comprendre
on y mettra setSkills([...skills, {id: `${Math.random()}`, value: "Python"}])

# HTML 9 Les formulaires !!
-En JS standard
Fonction onSubmit
La fonction handleSubmit doit prendre 'event' en paramètre
gerer le event.preventDefault et savoir récupérer l'input grâce à event.target.elements.emailInput.value
-En React non contrôlé
Créer un hook const inputRef = React.useRef() dans la fonction principale
donner une ref="inputRef" à la balise input
appeler cette ref dans la window alert avec inputRef.current.value
-En React contrôlé
Un state à la place de inputRef const [email, setEmail] = React.useState('')
la fonction handleChange() qu'on passe dans le onChange de l'input
function handleChange(event){
    setEmail(event.target.value)
  }
On récupère "email" dans la window alert et on renomme la value de l'input comme étant "email"
-Validation du formulaire
créer le state const [email, setEmail] = React.useState()
setError(event.target.value.includes('@') ? null : "L'email n'est pas valide.") dans handleChange()
<div style={{color: 'red'}}>{error}</div> à la suite de input connexion
