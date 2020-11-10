import fetch from "./fetch";

export let AddedFood = [];

export async function getFood() {
    const food = await fetch('/food/getFood');
    return AddedFood = food;
}

export async function addFood(foodList) {
    const addFood = await fetch('/food/newFood', { foodList });

    return AddedFood = addFood;
}