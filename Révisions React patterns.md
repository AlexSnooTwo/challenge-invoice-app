# 1 Proxy components

Permet d'éviter la répétition et de créer un composant réutilisable On crée un
composant Button par exemple qui retourne <button> et on appelle le composant
partout où l'on veut Input de type button : <input type="button" value="test"
style={{propriété : "value"}}></input>

# 2 Props functions

*Ex utilisation: function Welcome({sayHello, name}){ return
<div>{sayHello(name)}</div> }
<Welcome name="Alex" sayHello={sayHelloUpperCase}/> // On aura bien sûr définit
une fonction sayHelloToUpperCase au préalable Technique de function.name

*Technique utilisation d'un state const [resultat, setResultat] =
React.useState() function handleClick(){ setResultat(operation(nb1, nb2)) }
Comme ça le onClick peut appeler le resultat en ternaire et la fonction
handleClick

<div><input type="button"/>{resultat
        ? `L'opération ${opName} de ${nb1} et de ${nb2} donne ${resultat}`
        : null}</div>

*Astuce de la fonction fléchée pour faire marcher les paramètres dans un event 
Rappelle aussi de gérer l'objectObject avec un trick ex: 
if (a instanceof Object){
    a = nb1
} // Rappel react a un problème et prend les premiers paramètres comme des events

*Mettre à jour les props pour changer si utilisation du second bouton
Passer nb1 et nb2 en states ex : const [nombre1, setNombre1] = React.useState(nb1)
Et changer leur appel ${nb1} par ${nombre1}
Et set les deux nombres dans handle click setNombre1(a)

# 3 HOC !! A refaire absolument !!

# 4 Props drilling 
Si un prop est défini en dernière instance sous la forme d'une constance dans App 
Alors le prop doit être redonné pour tous les composants enfants ex:
function App(){
    const siteName = "mike.com"
    <Header/ siteName={siteName}>
}
function Header({siteName}){
    return <div>Le nom du site est {siteName}</div>
}
A ces conditions le props pourra fonctionner
Si un autre composant enfant est réutilisé, il faudra réappeler systématiquement les props.

# 5 State Hoising
De la même façon que pour les props, les states doivent êtres remontés au composant parent
Ex à placer dans le App():
  const todosFromAPI = fetchTodoAPI()
  const [todos] = React.useState(todosFromAPI)

# 6 Lifting states up
Il faudra retravailler cet exercice. Le concept est un peux comme state hoising
Il s'agit de ramener les states directement dans App()
