import "./App.css";
import React from "react";



function Header() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState();
  function HandleChange(event) {
    setEmail(event.target.value);
    setError(event.target.value.includes('@') ? null : "L'email n'est pas valide")
  }
  function HandleSubmit(event) {

    event.preventDefault();
    window.alert(`Bonjour ${email}`)
  }
  return (
    <header className="App-header">
      <form className="form" onSubmit={HandleSubmit}>
        <label>
          Votre adresse mail
          <input type="text" value={email} onChange={HandleChange}></input>
        </label>
        <input type="submit"></input>
        <div style={{color: 'red'}}>{error}</div>
      </form>
    </header>
  );
}

function Content() {
  return <section className="App-content">Ceci est mon contenu</section>;
}

function Footer() {
  return <footer className="App-footer">Ceci est mon footer</footer>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
