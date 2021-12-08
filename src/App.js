import "./App.css";
import React from "react";
import MySkills from "./MySkills";

function Header() {
  return <header className="App-header">Ceci est mon Header</header>;
}

function Content() {
  return (
    <section className="App-content">
      <div>Quelles compétences penses-tu pouvoir apporter?</div>
      <MySkills />
    </section>
  );
}

function Footer() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState();
  function HandleChange(event) {
    setEmail(event.target.value);
    setError(
      event.target.value.includes("@") ? null : "L'email n'est pas valide"
    );
  }
  function HandleSubmit(event) {
    event.preventDefault();
    window.alert(`Nous te recontacterons à l'adresse${email} Merci à toi!`);
  }
  return (
    <footer className="App-footer">
      <form className="form" onSubmit={HandleSubmit}>
        <label>
          Votre adresse mail
          <input type="text" value={email} onChange={HandleChange}></input>
        </label>
        <input type="submit"></input>
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </footer>
  );
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
