
-- PrepWise Sample Data

-- Demo user
INSERT INTO users (name, email)
VALUES ('Demo User', 'demo@prepwise.com');

-- Ingredients
INSERT INTO ingredients (name, category)
VALUES
('Chicken Breast', 'Protein'),
('Rice', 'Grains'),
('Eggs', 'Protein'),
('Broccoli', 'Vegetables'),
('Olive Oil', 'Oils');

-- Recipes
INSERT INTO recipes
(title, description, instructions, prep_minutes, cook_minutes, servings, meal_type)
VALUES
('Chicken Rice Bowl', 'Simple chicken and rice meal',
 'Cook rice, prepare chicken, and combine.', 10, 25, 2, 'Dinner'),
('Scrambled Eggs', 'Quick breakfast',
 'Whisk eggs and cook in a pan.', 5, 5, 1, 'Breakfast');

-- Connect recipes with ingredients
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit)
VALUES
(1, 1, 200, 'g'),
(1, 2, 150, 'g'),
(2, 3, 2, 'pieces');

-- Demo pantry
INSERT INTO pantry_items (user_id, ingredient_id, quantity, unit)
VALUES
(1, 2, 500, 'g'),
(1, 3, 6, 'pieces');

-- Weekly meal plan
INSERT INTO meal_plan_entries (user_id, recipe_id, planned_date, meal_type)
VALUES (1, 1, CURRENT_DATE, 'Dinner');

-- Saved recipe
INSERT INTO saved_recipes (user_id, recipe_id)
VALUES (1, 2);

-- Shopping list
INSERT INTO shopping_list_items (user_id, ingredient_id, quantity, unit)
VALUES (1, 1, 200, 'g');
