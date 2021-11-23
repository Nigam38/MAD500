import {Content} from "./content_interface";

export const CONTENT_LIST: Content[]  = [
  {
    id: 1,
    author: "William Craig",
    type: "History",
    title: "Enemy at the Gates",
    body: "He Battle for Stalingrad is a book written by William Craig and published in 1973 by Reader's Digest.",
    tags: []
  },{
    id: 2,
    author: " Brian Michael Bendis",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Avengers_vs._X-Men.jpg/250px-Avengers_vs._X-Men.jpg",
    type: "Comics",
    title: "Avengers",
    body: "Avengers vs. X-Men is a 2012 crossover event by Marvel Comics",
    tags: ['Avengers','X-Men']
  }, {
    id: 4,
    author: "John Hersey",
    imageUrl: "",
    type: "Non-fiction",
    title: "Hiroshima",
    body: "",
    tags: ['Bombing','Nuclear']
  }, {
    id: 5,
    author: "James Clear",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL.jpg",
    type: "",
    title: "Atomic Habits",
    body: "Atomic Habits offers a proven framework for improving-every day",
    tags: ['Good Habits']
  }];
