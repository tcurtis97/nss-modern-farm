const harvest = []

export const harvestPlants = (plantSeeds) => { 
for (let plant of plantSeeds) {
if (plant == "Corn") {
    const cornOutput = plant.Output / 2
    for(let i=0; i < cornOutput ; i++) {
    harvest.push(plant)
}
}
else {
    for (let i=0; i < plant.output; i++){
        harvest.push(plant)
    }
}
return harvest
}
}