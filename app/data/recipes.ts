export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    cuisine: "Indian",
    minutes: 40,
    difficulty: "Medium",
    description: "Soft paneer cubes simmered in a rich, creamy tomato gravy.",
  },
  {
    id: 2,
    title: "Spaghetti Aglio e Olio",
    cuisine: "Italian",
    minutes: 20,
    difficulty: "Easy",
    description: "Garlic, olive oil and chilli flakes tossed through al dente pasta.",
  },
  {
    id: 3,
    title: "Veg Hakka Noodles",
    cuisine: "Indo-Chinese",
    minutes: 25,
    difficulty: "Easy",
    description: "Wok-tossed noodles with crunchy vegetables and soy sauce.",
  },
  {
    id: 4,
    title: "Masala Dosa",
    cuisine: "South Indian",
    minutes: 45,
    difficulty: "Hard",
    description: "Crisp fermented rice crepe filled with spiced potato masala.",
  },
  {
    id: 5,
    title: "Greek Salad",
    cuisine: "Greek",
    minutes: 10,
    difficulty: "Easy",
    description: "Tomato, cucumber, olives and feta with oregano and olive oil.",
  },
  {
    id: 6,
    title: "Chocolate Brownies",
    cuisine: "American",
    minutes: 50,
    difficulty: "Medium",
    description: "Fudgy, crackly-topped brownies with deep cocoa flavour.",
  },
];
