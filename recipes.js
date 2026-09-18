const RECIPES = [
  {
    id: "berry-yogurt-cup",
    name: "Berry Yogurt Cup",
    category: "breakfast",
    time: "5 min",
    servings: "1",
    helper: "A grown-up can help wash the berries.",
    why: "Creamy, sweet, and full of fruit.",
    photo: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A cup of yogurt topped with mixed berries",
    ingredients: [
      "1/2 cup plain Greek yogurt",
      "1/2 cup mixed berries",
      "1 spoon rolled oats"
    ],
    steps: [
      "Spoon the yogurt into a cup.",
      "Add the berries on top.",
      "Sprinkle oats over the fruit and eat."
    ]
  },
  {
    id: "warm-apple-oats",
    name: "Warm Apple Oats",
    category: "breakfast",
    time: "8 min",
    servings: "1",
    helper: "A grown-up should use the stove or microwave.",
    why: "Soft apples and cinnamon taste like a hug.",
    photo: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A warm bowl of oatmeal",
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk or water",
      "1/2 apple, chopped small",
      "A pinch of cinnamon"
    ],
    steps: [
      "Ask a grown-up to warm the oats and milk until soft.",
      "Stir in the chopped apple and cinnamon.",
      "Let it cool a little, then eat."
    ]
  },
  {
    id: "sunshine-eggs",
    name: "Sunshine Eggs",
    category: "breakfast",
    time: "10 min",
    servings: "2",
    helper: "A grown-up should cook the eggs.",
    why: "Fluffy eggs with tiny greens that almost hide.",
    photo: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Scrambled eggs on toast",
    ingredients: [
      "2 eggs",
      "A small handful of baby spinach",
      "4 cherry tomatoes, halved",
      "1 teaspoon olive oil"
    ],
    steps: [
      "Wash the spinach and tomatoes.",
      "Ask a grown-up to scramble the eggs in a little oil.",
      "Stir in spinach and tomatoes until the greens wilt.",
      "Cool slightly and share."
    ]
  },
  {
    id: "rainbow-smoothie",
    name: "Rainbow Smoothie",
    category: "breakfast",
    time: "5 min",
    servings: "2",
    helper: "A grown-up should run the blender.",
    why: "It looks purple-pink and tastes like berries.",
    photo: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A berry smoothie in a glass",
    ingredients: [
      "1 banana",
      "1/2 cup berries",
      "A small handful of spinach",
      "1/2 cup milk"
    ],
    steps: [
      "Put banana, berries, spinach, and milk in the blender.",
      "Ask a grown-up to blend until smooth.",
      "Pour into cups and sip."
    ]
  },
  {
    id: "rainbow-wrap",
    name: "Rainbow Wrap",
    category: "lunch",
    time: "8 min",
    servings: "1",
    helper: "A grown-up can help slice the veggies.",
    why: "Crunchy colors in every bite.",
    photo: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A vegetable wrap cut in half",
    ingredients: [
      "1 whole-wheat tortilla",
      "2 spoons hummus",
      "Shredded carrot",
      "Cucumber sticks",
      "Lettuce leaves"
    ],
    steps: [
      "Spread hummus on the tortilla.",
      "Lay carrot, cucumber, and lettuce in a line.",
      "Roll it up tight, then ask a grown-up to cut it in half."
    ]
  },
  {
    id: "cucumber-boats",
    name: "Cucumber Boats",
    category: "lunch",
    time: "7 min",
    servings: "2",
    helper: "A grown-up should scoop the cucumber.",
    why: "Dip-able boats you can pick up with your fingers.",
    photo: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Hummus with fresh vegetables",
    ingredients: [
      "1 cucumber",
      "1/3 cup hummus",
      "6 cherry tomatoes",
      "A pinch of paprika (optional)"
    ],
    steps: [
      "Ask a grown-up to cut the cucumber in half and scoop a little middle out.",
      "Spoon hummus into the boats.",
      "Add tomato pieces on top and eat."
    ]
  },
  {
    id: "mini-pita-pizzas",
    name: "Mini Pita Pizzas",
    category: "lunch",
    time: "12 min",
    servings: "2",
    helper: "A grown-up should use the oven or toaster oven.",
    why: "Crispy, cheesy, and you choose the toppings.",
    photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Small pizzas with vegetables",
    ingredients: [
      "2 whole-wheat pitas",
      "3 spoons tomato sauce",
      "1/3 cup shredded mozzarella",
      "Chopped bell pepper"
    ],
    steps: [
      "Spread sauce on each pita.",
      "Sprinkle cheese and pepper on top.",
      "Ask a grown-up to bake until the cheese melts.",
      "Cool for a minute, then eat."
    ]
  },
  {
    id: "turkey-apple-rolls",
    name: "Turkey Apple Rolls",
    category: "lunch",
    time: "6 min",
    servings: "1",
    helper: "A grown-up can slice the apple into thin sticks.",
    why: "Sweet apple and savory turkey in one roll.",
    photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A fresh plate with healthy lunch foods",
    ingredients: [
      "2 slices turkey",
      "1/2 apple, cut into thin sticks",
      "2 lettuce leaves"
    ],
    steps: [
      "Lay a turkey slice on a lettuce leaf.",
      "Add a few apple sticks.",
      "Roll it up and eat like a wrap."
    ]
  },
  {
    id: "rainbow-chicken-tray",
    name: "Rainbow Chicken Tray",
    category: "dinner",
    time: "30 min",
    servings: "4",
    helper: "A grown-up should use the oven and cut the food.",
    why: "Chicken with colorful veggies, all on one pan.",
    photo: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Roasted chicken and vegetables on a tray",
    ingredients: [
      "2 chicken breasts, cut into strips",
      "1 cup broccoli",
      "1 cup carrot coins",
      "1 small sweet potato, cubes",
      "1 tablespoon olive oil"
    ],
    steps: [
      "Ask a grown-up to put chicken and veggies on a tray.",
      "Drizzle oil and mix with clean hands or a spoon.",
      "Bake until the chicken is cooked through.",
      "Cool a little, then serve."
    ]
  },
  {
    id: "hidden-garden-pasta",
    name: "Hidden Garden Pasta",
    category: "dinner",
    time: "20 min",
    servings: "3",
    helper: "A grown-up should boil the pasta and blend the sauce.",
    why: "The sauce hides carrot. It still tastes like pasta night.",
    photo: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A bowl of pasta with tomato sauce",
    ingredients: [
      "2 cups whole-wheat pasta",
      "1 cup tomato sauce",
      "1 small carrot, cooked and blended",
      "A spoon of grated cheese"
    ],
    steps: [
      "Ask a grown-up to cook the pasta.",
      "Stir blended carrot into the tomato sauce.",
      "Mix sauce with pasta and add a little cheese."
    ]
  },
  {
    id: "salmon-sweet-potato",
    name: "Salmon & Sweet Potato",
    category: "dinner",
    time: "25 min",
    servings: "2",
    helper: "A grown-up should cook the fish and potatoes.",
    why: "Soft, sweet, and good for growing bodies.",
    photo: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Cooked salmon with vegetables",
    ingredients: [
      "1 salmon fillet",
      "1 sweet potato",
      "1/2 cup peas",
      "A squeeze of lemon"
    ],
    steps: [
      "Ask a grown-up to bake or pan-cook the salmon.",
      "Cook the sweet potato until soft, then mash.",
      "Warm the peas and put everything on a plate.",
      "Add a tiny lemon squeeze if you like."
    ]
  },
  {
    id: "bean-quesadillas",
    name: "Bean Quesadillas",
    category: "dinner",
    time: "12 min",
    servings: "2",
    helper: "A grown-up should use the pan.",
    why: "Crispy outside, warm beans and cheese inside.",
    photo: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A sliced quesadilla on a plate",
    ingredients: [
      "2 whole-wheat tortillas",
      "1/2 cup black beans, rinsed",
      "1/3 cup shredded cheese",
      "Mild salsa for dipping"
    ],
    steps: [
      "Mash the beans a little and spread them on a tortilla.",
      "Add cheese and cover with the second tortilla.",
      "Ask a grown-up to cook it in a pan until golden.",
      "Cool, cut into triangles, and dip."
    ]
  },
  {
    id: "frozen-banana-pops",
    name: "Frozen Banana Pops",
    category: "dessert",
    time: "10 min + freeze",
    servings: "4",
    helper: "A grown-up can help with sticks and the freezer.",
    why: "Cold, creamy, and sweet like a treat.",
    photo: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Bananas ready to be made into frozen pops",
    ingredients: [
      "2 bananas",
      "1/3 cup plain yogurt",
      "A few chopped berries"
    ],
    steps: [
      "Ask a grown-up to cut bananas in half and add sticks.",
      "Dip each banana in yogurt.",
      "Roll in berries, freeze until firm, then eat."
    ]
  },
  {
    id: "berry-chia-cups",
    name: "Berry Chia Cups",
    category: "dessert",
    time: "5 min + chill",
    servings: "2",
    helper: "A grown-up can help measure and stir.",
    why: "It turns into pudding. Top with berries.",
    photo: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Chia pudding topped with fruit",
    ingredients: [
      "3 spoons chia seeds",
      "1 cup milk",
      "1/2 cup berries"
    ],
    steps: [
      "Stir chia seeds into the milk.",
      "Wait 10 minutes, stir again, then chill.",
      "Spoon into cups and add berries."
    ]
  },
  {
    id: "cinnamon-apples",
    name: "Cinnamon Baked Apples",
    category: "dessert",
    time: "20 min",
    servings: "2",
    helper: "A grown-up should use the oven.",
    why: "Warm apple with cinnamon smells like dessert.",
    photo: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Fresh apples",
    ingredients: [
      "2 apples",
      "A pinch of cinnamon",
      "1 spoon raisins",
      "A tiny spoon of water"
    ],
    steps: [
      "Ask a grown-up to core the apples.",
      "Fill with raisins, cinnamon, and a splash of water.",
      "Bake until soft, cool a little, then eat with a spoon."
    ]
  },
  {
    id: "yogurt-berry-bark",
    name: "Yogurt Berry Bark",
    category: "dessert",
    time: "8 min + freeze",
    servings: "4",
    helper: "A grown-up can help with the freezer tray.",
    why: "Snap it into pieces. It tastes like frozen berries and cream.",
    photo: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Yogurt with berries spread out like bark",
    ingredients: [
      "1 cup plain Greek yogurt",
      "1/2 cup mixed berries",
      "A tiny drizzle of honey (optional)"
    ],
    steps: [
      "Spread yogurt on a parchment-lined tray.",
      "Press berries on top.",
      "Freeze until firm, then break into pieces."
    ]
  },
  {
    id: "simple-chocolate-cake",
    name: "Simple Chocolate Cake",
    category: "dessert",
    time: "30 min",
    servings: "8",
    helper: "A grown-up should use the oven and mix the batter.",
    why: "Soft chocolate cake you can share. One bowl, few steps.",
    photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A chocolate cake on a stand",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1/2 cup sugar",
      "1 teaspoon baking soda",
      "1 cup milk",
      "1/3 cup oil",
      "1 teaspoon vanilla"
    ],
    steps: [
      "Stir flour, cocoa, sugar, and baking soda in a bowl.",
      "Add milk, oil, and vanilla. Mix until smooth.",
      "Ask a grown-up to bake in a greased pan until a toothpick comes out clean.",
      "Cool, then cut squares and eat."
    ]
  },
  {
    id: "dads-dessert",
    name: "Dad's Dessert",
    category: "dessert",
    time: "8 min",
    servings: "2",
    helper: "A grown-up can warm the brownie and fudge. Use edible cookie dough only, not raw dough.",
    why: "Warm brownie, cold ice cream, cookie dough, and hot fudge. Dad's favorite pile-up.",
    photo: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
    photoAlt: "A sundae with chocolate sauce",
    ingredients: [
      "2 brownies",
      "2 scoops vanilla ice cream",
      "2 spoons edible cookie dough",
      "Hot fudge sauce, warmed"
    ],
    steps: [
      "Ask a grown-up to warm the brownies until they are soft.",
      "Put each brownie in a bowl and add a scoop of ice cream.",
      "Add little pieces of edible cookie dough.",
      "Spoon hot fudge over the top and eat right away."
    ]
  }
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "dessert", label: "Dessert" }
];
