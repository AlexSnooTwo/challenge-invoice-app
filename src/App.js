import "./App.css";
import React from "react";
import MySkills from "./MySkills";

function Header() {
  return (
    <header className="App-header">
      <div>Salut à toi! Bienvenue sur la page de recrutement pour mon jeu.</div>
    </header>
  );
}

function Content() {
  return <MySkills />;
}

function Contact() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState();
  function HandleChange(event) {
    setEmail(event.target.value);
    setError(
      event.target.value.includes("@") ? null : "!L'email n'est pas valide!"
    );
  }
  function HandleSubmit(event) {
    event.preventDefault();
    window.alert(`Nous te recontacterons à l'adresse${email} Merci à toi!`);
  }
  return (
    <section className="App-contact">
      <form className="form" onSubmit={HandleSubmit}>
        <div>
          <label>Ton adresse mail</label>
        </div>
        <input type="text" value={email} onChange={HandleChange}></input>
        <input type="submit"></input>
        <div style={{ color: "white" }}>{error}</div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>© Created for Alex practice</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
