import * as React from "react";

const initialSkills = [{ id: "e313", value: "Bonne humeur" }];
let numberOfSkills = 0;

function MySkills() {
  const [skills, setSkills] = React.useState(initialSkills);
  if (numberOfSkills < 3) {
    function addSkillGraphisme(event) {
      setSkills([...skills, { id: `${Math.random()}`, value: "Graphisme" }]);
      numberOfSkills += 1;
      event.target.setAttribute("disabled", "disabled");
    }
    function addSkillRenpy(event) {
      setSkills([...skills, { id: `${Math.random()}`, value: "Codage" }]);
      numberOfSkills += 1;
      event.target.setAttribute("disabled", "disabled");
    }
    function addSkillScenario(event) {
      setSkills([...skills, { id: `${Math.random()}`, value: "Ecriture" }]);
      numberOfSkills += 1;
      event.target.setAttribute("disabled", "disabled");
    }
    function addSkillLinguiste(event) {
      setSkills([...skills, { id: `${Math.random()}`, value: "Traduction" }]);
      numberOfSkills += 1;
      event.target.setAttribute("disabled", "disabled");
    }
    function addSkillAnimation(event) {
      setSkills([...skills, { id: `${Math.random()}`, value: "Animation" }]);
      numberOfSkills += 1;
      event.target.setAttribute("disabled", "disabled");
    }
    function addSkillPromotion(event) {
      setSkills([...skills, { id: `${Math.random()}`, value: "Promotion" }]);
      numberOfSkills += 1;
      event.target.setAttribute("disabled", "disabled");
    }

    return (
      <section className="App-content">
        <div>Quelles compétences penses-tu pouvoir apporter?</div>
        <div className="buttons">
          <button onClick={addSkillGraphisme}>Ajouter Graphisme</button>
          <button onClick={addSkillAnimation}>Ajouter Animation</button>
          <button onClick={addSkillRenpy}>Ajouter Codage</button>
          <button onClick={addSkillScenario}>Ajouter Ecriture</button>
          <button onClick={addSkillLinguiste}>Ajouter Traduction</button>
          <button onClick={addSkillPromotion}>Ajouter Promotion</button>
        </div>
        <ul className="ul-content">
          {skills.map((skill) => (
            <li key={skill.id}>{skill.value}</li>
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="App-content">
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.value}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MySkills;
