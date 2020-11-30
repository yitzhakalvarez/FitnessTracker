const ROOT = process.env.API_ROOT || "http://localhost:3000/";

export const fetch = (url, data = null) => {
  if (data) {
    return fetch(ROOT + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(results => results.json());
  } else {
    return fetch(ROOT + url).then(results => results.json());
  }
};

/*
    /////////////////////////////////Daily Tracking Methods////////////////////////////////////////
*/
/*                                      Meal Managment                                          */
export function insertDailyTracking_Meal(date, orderID, mealName) {
  var UsersID = Users.ID;
  return myfetch(api_root + "/app/insertDailyTracking_Meal", {
    UsersID,
    date,
    orderID,
    mealName
  });
}
export function getDailyTracking_Meal(date) {
  var userID = user.ID;
  return myfetch(api_root + "/app/getDailyTracking_Meal", { userID, date });
}
export function editDailyTracking_Meal(ID, orderID, mealName) {
  return myfetch(api_root + "/app/editDailyTracking_Meal", {
    ID,
    orderID,
    mealName
  });
}
export function removeDailyTracking_Meal(ID) {
  return myfetch(api_root + "/app/removeDailyTracking_Meal", { ID });
}
/*                                      Food Managment                                          */
export function insertDailyTracking_Food(
  date,
  mealID,
  orderID,
  foodName,
  amount,
  calories,
  fat,
  carbs,
  protein
) {
  var userID = user.ID;
  return myfetch(api_root + "/app/insertDailyTracking_Food", {
    userID,
    date,
    mealID,
    orderID,
    foodName,
    amount,
    calories,
    fat,
    carbs,
    protein
  });
}
export function getDailyTracking_Food(date) {
  var userID = user.ID;
  return myfetch(api_root + "/app/getDailyTracking_Food", { userID, date });
}
export function removeDailyTracking_Food(ID) {
  return myfetch(api_root + "/app/removeDailyTracking_Food", { ID });
}

/*
  /////////////////////////////////Meal Planning Methods////////////////////////////////////////
*/
/*                                      Plan Managment                                          */
export function insertMealPlanner_Plan(orderID, planName) {
  var userID = user.ID;
  return myfetch(api_root + "/app/insertMealPlanner_Plan", {
    userID,
    orderID,
    planName
  });
}
export function getMealPlanner_Plan() {
  var userID = user.ID;
  return myfetch(api_root + "/app/getMealPlanner_Plan", { userID });
}
export function editMealPlanner_Plan(ID, orderID, planName) {
  return myfetch(api_root + "/app/editMealPlanner_Plan", {
    ID,
    orderID,
    planName
  });
}
export function removeMealPlanner_Plan(ID) {
  return myfetch(api_root + "/app/removeMealPlanner_Plan", { ID });
}
/*                                      Meal Managment                                          */
export function insertMealPlanner_Meal(planID, orderID, mealName) {
  var userID = user.ID;
  return myfetch(api_root + "/app/insertMealPlanner_Meal", {
    userID,
    planID,
    orderID,
    mealName
  });
}
export function getMealPlanner_Meal() {
  var userID = user.ID;
  return myfetch(api_root + "/app/getMealPlanner_Meal", { userID });
}
export function editMealPlanner_Meal(ID, orderID, mealName) {
  return myfetch(api_root + "/app/editMealPlanner_Meal", {
    ID,
    orderID,
    mealName
  });
}
export function removeMealPlanner_Meal(ID) {
  return myfetch(api_root + "/app/removeMealPlanner_Meal", { ID });
}
/*                                      Food Managment                                          */
export function insertMealPlanner_Food(
  mealID,
  orderID,
  foodName,
  amount,
  calories,
  fat,
  carbs,
  protein
) {
  var userID = user.ID;
  return myfetch(api_root + "/app/insertMealPlanner_Food", {
    userID,
    mealID,
    orderID,
    foodName,
    amount,
    calories,
    fat,
    carbs,
    protein
  });
}
export function getMealPlanner_Food() {
  var userID = user.ID;
  return myfetch(api_root + "/app/getMealPlanner_Food", { userID });
}
export function removeMealPlanner_Food(ID) {
  return myfetch(api_root + "/app/removeMealPlanner_Food", { ID });
}

/*
  myfetch Function - Used often to use server side methods
*/
function myfetch(url = ``, data = null) {
  let options = {
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin" // include, same-origin, *omit
  };
  if (data) {
    options = {
      ...options,
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    };
  }
  return fetch(url, options).then(response => {
    return response.json();
  }); // parses response to JSON
}
