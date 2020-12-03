import { skeletonSchedule, exampleRoutine } from "./DailyRoutines.js";

export const users = [
  {
    id: 1,
    email: "test1@gmail.com",
    name: "Yitzhak Alvarez",
    handle: "alvarezy3",
    password: "newpaltz",
    admin: true,
    loggedIn: false,
    friends: [],
    routine: exampleRoutine
  },
  {
    id: 2,
    email: "test2@gmail.com",
    name: "Zach Silver",
    handle: "zachs1",
    password: "test",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
  {
    id: 3,
    email: "test3@gmail.com",
    name: "Brad Thomas",
    handle: "thomas1",
    password: "test",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
  {
    id: 4,
    email: "test4@gmail.com",
    name: "Moshe Plotkin",
    handle: "moshe1",
    password: "test",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
  {
    id: 5,
    email: "test5@gmail.com",
    name: "Kenan Huckleberry",
    handle: "kenaberry",
    password: "test",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  }
];

import { myFetch } from "./myfetch";

export function getList() {
  return myFetch("users");
}
