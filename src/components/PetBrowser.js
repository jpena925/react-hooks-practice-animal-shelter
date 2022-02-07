import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  console.log(pets)
  const petList = pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>)
  console.log(petList)
  return <div className="ui cards">{petList}</div>;
}

export default PetBrowser;
