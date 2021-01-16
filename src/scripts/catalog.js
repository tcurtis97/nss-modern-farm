import {GrownPlants} from "./grownplants.js"
import {usePlants} from "./field.js"

export const Catalog = (harvestedFood) => {
    const contentElement = document.querySelector(".container")
    const allThePlants = usePlants()
  
    for (const plantObject of allThePlants) {
      const plantHTML = GrownPlants(plantObject)
      contentElement.innerHTML += plantHTML
    }
}
