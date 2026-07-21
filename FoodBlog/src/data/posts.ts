import type { Post } from '../types';
import { authors } from './authors';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'classic-eggs-benedict',
    title: 'Classic Eggs Benedict with Hollandaise Sauce',
    excerpt:
      'Master the brunch staple that never goes out of style — perfectly poached eggs on a toasted English muffin, draped in silky hollandaise.',
    content: `
## The Ultimate Weekend Brunch

There's something magical about a well-executed Eggs Benedict. The contrast between the crispy muffin, the savory Canadian bacon, the silky egg and that bright, buttery hollandaise is simply unbeatable.

### Ingredients (serves 2)

**For the Hollandaise:**
- 3 egg yolks
- 1 tbsp lemon juice
- 120 g unsalted butter, melted
- Pinch of cayenne pepper
- Salt to taste

**For the Benedict:**
- 4 large eggs
- 2 English muffins, split and toasted
- 4 slices Canadian bacon
- 1 tbsp white vinegar
- Fresh chives, to garnish

### Method

**1. Make the Hollandaise**
Whisk egg yolks and lemon juice in a heatproof bowl over a saucepan of barely simmering water. Whisk constantly until the mixture thickens and doubles in volume — about 3–4 minutes. Remove from heat and very slowly drizzle in the melted butter, whisking all the while. Season with cayenne and salt.

**2. Poach the Eggs**
Fill a wide saucepan with water, add vinegar and bring to a gentle simmer. Crack each egg into a small cup. Swirl the water and gently slide the egg in. Cook for 3 minutes for a runny yolk. Lift out with a slotted spoon and drain on a paper towel.

**3. Assemble**
Place a slice of warm Canadian bacon on each muffin half. Top with a poached egg, then spoon over a generous amount of hollandaise. Garnish with chives and a crack of black pepper.

### Tips & Tricks
- Keep your hollandaise warm in a thermos if making ahead.
- Use very fresh eggs for the neatest poach.
- A splash of white wine vinegar in the poaching water helps the whites set quickly.
    `,
    category: 'breakfast',
    tags: ['eggs', 'brunch', 'classic', 'hollandaise'],
    author: authors.sofia,
    publishedAt: '2024-03-15',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    slug: 'spaghetti-carbonara',
    title: 'Authentic Roman Spaghetti Carbonara',
    excerpt:
      'No cream, no shortcuts — just eggs, guanciale, Pecorino Romano, and a technique perfected over generations in the heart of Rome.',
    content: `
## The Real Carbonara

Carbonara is one of Italy's most misunderstood dishes. Forget the cream — the real magic is in tempering eggs with the pasta's residual heat to create a sauce that is glossy, rich and utterly decadent.

### Ingredients (serves 4)

- 400 g spaghetti or rigatoni
- 200 g guanciale (or pancetta), cut into lardons
- 4 large egg yolks + 1 whole egg
- 80 g Pecorino Romano, finely grated
- 40 g Parmigiano-Reggiano, finely grated
- Freshly ground black pepper
- Salt for pasta water

### Method

**1. Render the Guanciale**
Cook guanciale in a wide frying pan over medium heat, stirring occasionally, until crispy and golden. Remove from heat and reserve the fat.

**2. Prepare the Sauce**
Whisk egg yolks, whole egg, and most of the cheese together in a bowl. Season generously with black pepper. The mix should be thick and pale.

**3. Cook the Pasta**
Boil spaghetti in well-salted water until al dente. Reserve at least 200 ml of pasta water before draining.

**4. Combine**
Add the hot drained pasta directly to the pan with the guanciale (off the heat). Pour the egg mixture over and toss rapidly, adding pasta water a splash at a time to loosen. The goal is a creamy, coating sauce — not scrambled eggs.

**5. Serve Immediately**
Plate and finish with the remaining cheese and plenty of black pepper.

### Key Notes
- Temperature is everything — too hot and you'll scramble the eggs.
- Guanciale is the traditional choice; its fat is sweeter and less salty than pancetta.
- Use pasta water generously — starch is your emulsifier.
    `,
    category: 'dinner',
    tags: ['pasta', 'italian', 'classic', 'quick'],
    author: authors.marco,
    publishedAt: '2024-03-20',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    slug: 'mango-lassi',
    title: 'Creamy Mango Lassi',
    excerpt:
      'This cooling Indian yoghurt drink is the perfect antidote to a spicy meal — sweet, tangy, and ready in just 5 minutes.',
    content: `
## India's Favourite Cooler

A mango lassi is one of those drinks that transcends seasons. Creamy, slightly tangy from the yoghurt, and fragrant with cardamom — it's as good at breakfast as it is alongside a fiery curry.

### Ingredients (serves 2)

- 2 ripe Alphonso mangoes (or 300 g frozen mango)
- 250 ml full-fat plain yoghurt
- 150 ml cold whole milk
- 2 tbsp sugar or honey (adjust to taste)
- ¼ tsp ground cardamom
- Pinch of saffron (optional)
- Ice cubes

### Method

**1. Blend**
Peel and chop the mangoes (or use frozen chunks). Place all ingredients in a blender and blend on high until completely smooth.

**2. Taste and Adjust**
Taste the lassi — add more sugar if the mango is tart, or a squeeze of lime for extra brightness.

**3. Serve**
Pour over ice in tall glasses. Garnish with a pinch of cardamom, a strand of saffron, or a small piece of dried mango.

### Variations
- **Rose Lassi:** Omit mango and add 2 tbsp rose water and a handful of dried rose petals.
- **Salted Lassi:** Skip the sugar, add a pinch of cumin powder and black salt (kala namak).
- **Protein Boost:** Add a tablespoon of chia seeds or a scoop of vanilla protein powder.
    `,
    category: 'drinks',
    tags: ['drinks', 'indian', 'mango', 'summer', 'vegetarian'],
    author: authors.javeed,
    publishedAt: '2024-04-02',
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '4',
    slug: 'avocado-toast-variations',
    title: '5 Avocado Toast Variations You Need to Try',
    excerpt:
      'Elevate your avocado toast game with five creative, flavour-packed toppings — from Japanese-inspired to Mediterranean and beyond.',
    content: `
## Beyond the Basic Smash

Avocado toast became a cultural phenomenon for good reason — it's fast, nutritious, and endlessly versatile. Here are five combinations that take it to the next level.

### Base Recipe
- 2 slices sourdough, thickly sliced and toasted
- 1 ripe avocado
- Juice of ½ lemon
- Flaky sea salt and black pepper

Mash the avocado with lemon juice, season and spread generously on toast.

---

### Variation 1 — Japanese Inspired
Top with: **soy sauce, sesame oil drizzle, pickled ginger, sesame seeds, sliced cucumber, nori strips**

The umami-forward combination turns avocado toast into something completely new.

---

### Variation 2 — Mediterranean
Top with: **crumbled feta, halved cherry tomatoes, kalamata olives, fresh oregano, drizzle of olive oil**

Bright, tangy and satisfying — lunch in under 10 minutes.

---

### Variation 3 — Smoked Salmon
Top with: **thin slices of smoked salmon, capers, red onion, dill, cream cheese swirl**

Brunch-worthy and loaded with omega-3s.

---

### Variation 4 — Spicy Mexican
Top with: **pico de gallo, jalapeño slices, cotija cheese, coriander, hot sauce**

Use slightly chunky guacamole-style mash for this one.

---

### Variation 5 — Egg & Everything Bagel
Top with: **soft-boiled egg (halved), everything bagel seasoning, chilli flakes**

The seasoning blend does all the heavy lifting here.
    `,
    category: 'breakfast',
    tags: ['avocado', 'toast', 'quick', 'vegetarian', 'brunch'],
    author: authors.sofia,
    publishedAt: '2024-04-10',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '5',
    slug: 'butter-chicken',
    title: 'Restaurant-Style Butter Chicken at Home',
    excerpt:
      'A rich, fragrant tomato-cream sauce with tender chicken — this North Indian classic is easier to make at home than you think.',
    content: `
## Murgh Makhani — The King of Curries

Butter Chicken (Murgh Makhani) was invented in the 1950s at a Delhi restaurant and has since become one of the world's most loved dishes. Here's how to make it taste like a five-star restaurant in your own kitchen.

### Ingredients (serves 4)

**Marinade:**
- 700 g boneless chicken thighs, cut into chunks
- 150 ml whole-milk yoghurt
- 1 tbsp lemon juice
- 1 tsp turmeric
- 1 tsp garam masala
- 1 tsp chilli powder
- 1 tsp cumin
- 1 tsp garlic paste
- 1 tsp ginger paste

**Sauce:**
- 3 tbsp butter
- 1 tbsp oil
- 2 onions, finely chopped
- 6 garlic cloves, minced
- 2 tsp fresh ginger, grated
- 400 g canned crushed tomatoes
- 150 ml heavy cream
- 1 tsp garam masala
- 1 tsp coriander powder
- 1 tsp kashmiri chilli powder (for colour)
- 1 tsp sugar
- Salt to taste
- Fresh coriander, to garnish

### Method

**1. Marinate**
Combine all marinade ingredients with the chicken, cover and refrigerate for at least 4 hours (overnight is best).

**2. Cook the Chicken**
Grill or pan-fry marinated chicken over high heat until charred and cooked through. Set aside.

**3. Build the Sauce**
Melt butter with oil in a heavy-bottomed pan. Sauté onions until golden (about 12 minutes). Add garlic and ginger; cook 2 minutes. Add all the spices and stir for 1 minute. Add crushed tomatoes and simmer 20 minutes. Blend smooth with an immersion blender. Return to low heat and stir in cream and sugar.

**4. Combine**
Add the grilled chicken to the sauce. Simmer for 10 minutes until everything melds. Garnish with coriander and a swirl of cream.

**Serve with:** basmati rice, garlic naan, or roti.
    `,
    category: 'dinner',
    tags: ['indian', 'chicken', 'curry', 'comfort food'],
    author: authors.javeed,
    publishedAt: '2024-04-18',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '6',
    slug: 'chocolate-lava-cake',
    title: 'Perfect Chocolate Lava Cake',
    excerpt:
      'A crisp chocolate shell that gives way to a river of molten fudge — this restaurant dessert is surprisingly easy to make at home.',
    content: `
## The Ultimate Chocolate Dessert

Chocolate fondant, molten cake, lava cake — whatever you call it, this dessert is pure theatre. The key is getting the baking time exactly right so you have a set exterior with a gloriously liquid interior.

### Ingredients (makes 4)

- 150 g dark chocolate (70%), chopped
- 150 g unsalted butter, plus extra for greasing
- 3 whole eggs
- 3 egg yolks
- 150 g caster sugar
- 50 g plain flour
- Cocoa powder for dusting
- Pinch of salt
- Vanilla ice cream, to serve

### Method

**1. Prep the Ramekins**
Butter four 200 ml ramekins generously. Dust with cocoa powder, tapping out any excess. This ensures clean unmoulding.

**2. Melt Chocolate**
Melt chocolate and butter together in a bowl over simmering water (or in a microwave in 30-second bursts). Stir until smooth and let cool slightly.

**3. Make the Batter**
Whisk together eggs, egg yolks and sugar until pale and doubled in volume (about 5 minutes with an electric mixer). Fold in the chocolate mixture, then sift in the flour and fold gently until just combined.

**4. Fill and Chill**
Divide the batter between the four ramekins. Refrigerate for at least 30 minutes (or up to 24 hours — great for dinner parties!).

**5. Bake**
Preheat oven to 200°C (fan 180°C). Bake straight from the fridge for exactly 12 minutes. The edges should be set but the middle should still wobble.

**6. Unmould and Serve**
Run a knife around the edge, place a plate on top, and flip confidently. Serve immediately with a scoop of vanilla ice cream.

### Timing is Everything
- 12 min = molten centre ✓
- 14 min = fudgy but no flow
- 16 min = fully set (still delicious but not a lava cake)
    `,
    category: 'desserts',
    tags: ['chocolate', 'dessert', 'baking', 'dinner party'],
    author: authors.marco,
    publishedAt: '2024-05-01',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '7',
    slug: 'greek-salad',
    title: 'Authentic Greek Salad (Horiatiki)',
    excerpt:
      'No lettuce, no dressing — just the freshest vegetables, Kalamata olives, and a hefty slab of feta. The way they make it in Greece.',
    content: `
## How Greeks Actually Eat Salad

In Greece, salad (horiatiki — "village salad") is never chopped small and never dressed with vinaigrette. It's hearty, chunky, and relies entirely on the quality of its ingredients.

### Ingredients (serves 4)

- 4 large ripe tomatoes, cut into wedges
- 1 English cucumber, halved and thickly sliced
- 1 green bell pepper, sliced into rings
- 1 small red onion, thinly sliced
- 200 g block feta cheese
- 100 g Kalamata olives
- 6 tbsp extra-virgin olive oil
- 1 tsp dried oregano
- Salt and black pepper
- Optional: 1 tbsp red wine vinegar

### Method

**1. Layer the Vegetables**
In a wide shallow bowl, arrange the tomatoes, cucumber, pepper, and red onion. Don't toss — keep the layers visible.

**2. Add the Olives**
Scatter Kalamata olives over the vegetables.

**3. Crown with Feta**
Place the block of feta (do not crumble it) directly on top of the salad.

**4. Dress**
Drizzle the olive oil generously over everything, especially over the feta. Season with oregano, salt and pepper. Add a splash of red wine vinegar if desired.

**5. Serve**
Take to the table as-is and let everyone break into the feta as they serve themselves. Eat with crusty bread to mop up the juices.

### The Golden Rules
- Use the ripest tomatoes you can find — this is non-negotiable.
- Never skimp on the olive oil.
- The feta must be a solid block, not crumbled.
    `,
    category: 'lunch',
    tags: ['greek', 'salad', 'vegetarian', 'mediterranean', 'healthy'],
    author: authors.sofia,
    publishedAt: '2024-05-08',
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '8',
    slug: 'homemade-hummus',
    title: 'Silky Smooth Homemade Hummus',
    excerpt:
      'The secret to restaurant-quality hummus is one simple step most people skip. Learn how to make the creamiest, most flavourful hummus at home.',
    content: `
## Better Than Store-Bought, Every Time

The difference between good hummus and great hummus comes down to one thing: removing the skins from your chickpeas. It's a bit tedious but transforms the texture completely.

### Ingredients

- 2 × 400 g cans chickpeas, drained (reserve liquid)
- 4 tbsp good-quality tahini
- Juice of 1½ lemons
- 2 garlic cloves, minced
- ½ tsp ground cumin
- ½ tsp salt (more to taste)
- 4–6 tbsp ice-cold water
- 2 tbsp extra-virgin olive oil (for blending + drizzling)

**To serve:** paprika, olive oil, toasted pine nuts, fresh parsley

### Method

**1. Peel the Chickpeas**
This is the secret step. Rub the drained chickpeas between two clean tea towels — the skins will slip right off. Discard the skins.

**2. Blend the Tahini First**
In a food processor, blend the tahini with lemon juice for 1 full minute. It will look thick and pale. This aerates it and creates a creamy base.

**3. Add Garlic and Seasoning**
Add garlic, cumin, and salt to the tahini. Process for another 30 seconds.

**4. Add Chickpeas Gradually**
Add the skinless chickpeas in two batches, processing between each addition. Drizzle in olive oil.

**5. Adjust Consistency**
With the processor running, add ice-cold water one tablespoon at a time until you reach a smooth, silky consistency.

**6. Taste and Serve**
Taste for seasoning. Spread into a shallow bowl, swirl with the back of a spoon, drizzle with olive oil and dust with paprika.
    `,
    category: 'snacks',
    tags: ['hummus', 'middle eastern', 'vegan', 'dip', 'snack'],
    author: authors.javeed,
    publishedAt: '2024-05-15',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop',
    featured: true,
  },
];
