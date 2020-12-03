import { exampleExercises } from "./Exercises";

export const skeletonSchedule = [
  {
    id: 1,
    name: "Monday",
    exercises: []
  },
  {
    id: 2,
    name: "Tuesday",
    exercises: []
  },
  {
    id: 3,
    name: "Wednesday",
    exercises: []
  },
  {
    id: 4,
    name: "Thursday",
    exercises: []
  },
  {
    id: 5,
    name: "Friday",
    exercises: []
  },
  {
    id: 6,
    name: "Saturday",
    exercises: []
  },
  {
    id: 7,
    name: "Sunday",
    exercises: []
  }
];

//make a deep copy with all new references
export const exampleRoutine = JSON.parse(JSON.stringify(skeletonSchedule));

exampleRoutine[0].exercises = [JSON.parse(JSON.stringify(exampleExercises[0]))];
exampleRoutine[1].exercises = [JSON.parse(JSON.stringify(exampleExercises[1]))];
