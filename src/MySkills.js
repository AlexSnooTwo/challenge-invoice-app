import * as React from "react";

const initialSkills = [{ id: "e313", value: "Bonne humeur" }];
let numberOfSkills = 0;

function MySkills() {
  const [skills, setSkills] = React.useState(initialSkills);
  if (numberOfSkills < 3) {
    function addSkillGraphisme() {
      setSkills([...skills, { id: `${Math.random()}`, value: "Graphisme" }]);
      numberOfSkills += 1;
    }
    function addSkillRenpy() {
      setSkills([...skills, { id: `${Math.random()}`, value: "Codage" }]);
      numberOfSkills += 1;
    }
    function addSkillScenario() {
      setSkills([...skills, { id: `${Math.random()}`, value: "Ecriture" }]);
      numberOfSkills += 1;
    }
    function addSkillLinguiste() {
      setSkills([...skills, { id: `${Math.random()}`, value: "Traduction" }]);
      numberOfSkills += 1;
    }
    function addSkillAnimation() {
      setSkills([...skills, { id: `${Math.random()}`, value: "Animation" }]);
      numberOfSkills += 1;
    }
    function addSkillPromotion() {
      setSkills([...skills, { id: `${Math.random()}`, value: "Promotion" }]);
      numberOfSkills += 1;
    }

    return (
      <>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.value}</li>
          ))}
        </ul>
        <div className="buttons">
        <button onClick={addSkillGraphisme}>Ajouter Graphisme</button>
        <button onClick={addSkillAnimation}>Ajouter Animation</button>
        <button onClick={addSkillRenpy}>Ajouter Codage</button>
        <button onClick={addSkillScenario}>Ajouter Ecriture</button>
        <button onClick={addSkillLinguiste}>Ajouter Traduction</button>
        <button onClick={addSkillPromotion}>Ajouter Promotion</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.value}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default MySkills;
