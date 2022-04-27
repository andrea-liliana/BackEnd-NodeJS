const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


console.log("Ejercicio 1: Imprimir el nombre de cada explorer en la lista")
explorers.forEach(explorer => console.log(explorer.name))

console.log("\nEjercicio 2: Imprimir el stack de cada explorer")
explorers.forEach(explorer => console.log(explorer.name + " stack: " + explorer.stack))

console.log("\nEjercicio 3: Crear una nueva lista con las listas de stacks de cada explorer")
const stacks = explorers.map(explorers => explorers.stack)
console.log(stacks)

console.log("\nEjercicio 4: Obtener la lista de explorers que tengan en su stack 'js' ")
//Para validar un elemento en un lista se usa el método includes
const stackJS = explorers.filter((explorers) => explorers.stack.includes("js"))
stackJS.forEach(stackJS => console.log(stackJS.name))

console.log("\nEjercicio 5: Buscar el primer explorer que sea de la CDMX")
const explorerCDMX = explorers.find( (explorers) => explorers.city == 'CDMX')
console.log(explorerCDMX.name)

console.log("\nEjercicio 6: Obtener la suma de todos los exercises_completed")
const exercisesCompleted = explorers.map(explorers => explorers.exercises_completed)
const result_of_reduce = exercisesCompleted.reduce((acc, element) => acc + element, 0)
console.log(result_of_reduce)

console.log("\nEjercicio 7: Obtener la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true")
const frontEnd = explorers.map(explorers => explorers.missions.frontend.exercisesFinished)
const frontEndBool = frontEnd.some((explorer) => explorer == true)
console.log(frontEndBool)

console.log("\nEjercicio 8: Obtener la validación si todos los explorers tienen la propiedad isFinished del onboarding como true")
const onBoarding = explorers.map(explorers => explorers.missions.onboarding.isFinished)
const onBoardingBool = onBoarding.every((explorer) => explorer == 'true')
console.log(onBoardingBool)