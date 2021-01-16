const fieldPlants = []

export const addPlant = (crop) => {
    const field = fieldPlants.push(crop)
}




export const usePlants = () => {
    return fieldPlants.slice()
  }