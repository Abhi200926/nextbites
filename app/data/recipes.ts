export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  time: string;
  emoji: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    cuisine: "Indian",
    time: "40 min",
    emoji: "🥞",
    ingredients: [
      "2 cups dosa batter",
      "3 medium potatoes, boiled and mashed",
      "1 onion, sliced",
      "1 tsp mustard seeds",
      "1/2 tsp turmeric",
      "Curry leaves and salt to taste",
      "Oil or ghee for cooking",
    ],
    steps: [
      "Heat a little oil, add mustard seeds and curry leaves, then the onion.",
      "Stir in turmeric, salt and the mashed potatoes to make the filling.",
      "Heat a flat pan and spread a ladle of batter into a thin circle.",
      "Drizzle oil around the edge and cook until crisp and golden.",
      "Add the potato filling, fold the dosa and serve with chutney.",
    ],
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    cuisine: "Indian",
    time: "35 min",
    emoji: "🍛",
    ingredients: [
      "250 g paneer, cubed",
      "3 ripe tomatoes, pureed",
      "2 tbsp butter",
      "1 tsp ginger-garlic paste",
      "1 tsp garam masala",
      "1/4 cup cream",
      "Salt and red chilli powder to taste",
    ],
    steps: [
      "Melt the butter in a pan and cook the ginger-garlic paste for a minute.",
      "Add the tomato puree, chilli powder and salt, and simmer until thick.",
      "Stir in garam masala and the cream.",
      "Add the paneer cubes and simmer for 5 minutes.",
      "Serve hot with naan or rice.",
    ],
  },
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    time: "30 min",
    emoji: "🍕",
    ingredients: [
      "1 pizza base",
      "1/2 cup tomato sauce",
      "150 g fresh mozzarella, sliced",
      "A handful of fresh basil leaves",
      "1 tbsp olive oil",
      "Salt to taste",
    ],
    steps: [
      "Preheat the oven to its highest setting, around 250°C.",
      "Spread the tomato sauce over the base, leaving a border for the crust.",
      "Arrange the mozzarella slices on top.",
      "Bake for 8 to 10 minutes until the cheese bubbles and the crust browns.",
      "Top with basil and a drizzle of olive oil.",
    ],
  },
  {
    id: "veg-tacos",
    title: "Veggie Tacos",
    cuisine: "Mexican",
    time: "25 min",
    emoji: "🌮",
    ingredients: [
      "6 small corn tortillas",
      "1 can black beans, drained",
      "1 bell pepper, diced",
      "1 avocado, sliced",
      "1 tsp cumin",
      "Lime wedges and chopped coriander",
    ],
    steps: [
      "Saute the bell pepper in a little oil until soft.",
      "Add the beans and cumin and cook for 5 minutes, mashing slightly.",
      "Warm the tortillas on a dry pan for 30 seconds per side.",
      "Fill each tortilla with the bean mix and avocado.",
      "Finish with coriander and a squeeze of lime.",
    ],
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    cuisine: "Thai",
    time: "30 min",
    emoji: "🍜",
    ingredients: [
      "200 g flat rice noodles",
      "2 eggs",
      "100 g tofu, cubed",
      "2 tbsp tamarind paste",
      "2 tbsp soy sauce",
      "1 tbsp sugar",
      "A handful of bean sprouts and crushed peanuts",
    ],
    steps: [
      "Soak the rice noodles in warm water until just tender, then drain.",
      "Mix the tamarind paste, soy sauce and sugar to make the sauce.",
      "Fry the tofu in a hot wok until golden, then push it to the side.",
      "Scramble the eggs in the wok, then add the noodles and sauce.",
      "Toss in the bean sprouts and serve topped with peanuts.",
    ],
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    cuisine: "Indian",
    time: "75 min",
    emoji: "🍚",
    ingredients: [
      "500 g chicken pieces",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions, thinly sliced and fried",
      "2 tbsp biryani masala",
      "Saffron milk, mint and coriander",
      "Ghee and salt to taste",
    ],
    steps: [
      "Marinate the chicken with yogurt, biryani masala and salt for 30 minutes.",
      "Parboil the rice with whole spices until 70 percent cooked, then drain.",
      "Cook the marinated chicken in a heavy pot until half done.",
      "Layer the rice over the chicken with fried onions, mint, coriander and saffron milk.",
      "Seal the pot and cook on low heat for 25 minutes.",
      "Rest for 10 minutes, then gently mix and serve.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}
