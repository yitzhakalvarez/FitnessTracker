import fetch, { User } from "./fetch";

export let AddedExercise = [];

export async function getExercise() {
    const exercise = await fetch('/exercise/getExercise');
    return AddedExercise = exercise;
}

export async function addExercise(exerciseList) {
    const addExercise = await fetch('/exercise/newExercise', { exerciseList });

    return AddedExercise = addExercise;
}