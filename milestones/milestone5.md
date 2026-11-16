# Milestone 5

This document should be completed and submitted during **Unit 9** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

- [x] Deploy your project on Render
  - [x] In `readme.md`, add the link to your deployed project
- [x] Update the status of issues in your project board as you complete them
- [x] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of their title
  - [x] Under each feature you have completed, **include a GIF** showing feature functionality
- [x] In this document, complete the **Reflection** section below
- [x] 🚩🚩🚩**Complete the Final Project Feature Checklist section below**, detailing each feature you completed in the project (ONLY include features you implemented, not features you planned)
- [x] 🚩🚩🚩**Record a GIF showing a complete run-through of your app** that displays all the components included in the **Final Project Feature Checklist** below
  - [x] Include this GIF in the **Final Demo GIF** section below

## Final Project Feature Checklist

Complete the checklist below detailing each baseline, custom, and stretch feature you completed in your project. This checklist will help graders look for each feature in the GIF you submit.

### Baseline Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] The project includes an Express backend app and a React frontend app
- [x] The project includes these backend-specific features:
  - [x] At least one of each of the following database relationships in Postgres
    - [x] one-to-many
    - [x] many-to-many with a join table
  - [x] A well-designed RESTful API that:
    - [x] supports all four main request types for a single entity (ex. tasks in a to-do list app): GET, POST, PATCH, and DELETE
      - [x] the user can **view** items, such as tasks
      - [x] the user can **create** a new item, such as a task
      - [x] the user can **update** an existing item by changing some or all of its values, such as changing the title of task
      - [x] the user can **delete** an existing item, such as a task
    - [x] Routes follow proper naming conventions
  - [x] The web app includes the ability to reset the database to its default state
- [x] The project includes these frontend-specific features:
  - [x] At least one redirection, where users are able to navigate to a new page with a new URL within the app
  - [x] At least one interaction that the user can initiate and complete on the same page without navigating to a new page
  - [x] Dynamic frontend routes created with React Router
  - [x] Hierarchically designed React components
    - [x] Components broken down into categories, including Page and Component types
    - [x] Corresponding container components and presenter components as appropriate
- [x] The project includes dynamic routes for both frontend and backend apps
- [x] The project is deployed on Render with all pages and features that are visible to the user are working as intended

### Custom Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] The project gracefully handles errors
- [ ] The project includes a one-to-one database relationship
- [x] The project includes a slide-out pane or modal as appropriate for your use case that pops up and covers the page content without navigating away from the current page
- [x] The project includes a unique field within the join table
- [x] The project includes a custom non-RESTful route with corresponding controller actions
- [x] The user can filter or sort items based on particular criteria as appropriate for your use case
- [x] Data is automatically generated in response to a certain event or user action. Examples include generating a default inventory for a new user starting a game or creating a starter set of tasks for a user creating a new task app account
- [x] Data submitted via a POST or PATCH request is validated before the database is updated (e.g. validating that an event is in the future before allowing a new event to be created)
  - [x] *To receive full credit, please be sure to demonstrate in your walkthrough that for certain inputs, the item will NOT be successfully created or updated.*

### Stretch Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [ ] A subset of pages require the user to log in before accessing the content
  - [ ] Users can log in and log out via GitHub OAuth with Passport.js
- [ ] Restrict available user options dynamically, such as restricting available purchases based on a user's currency
- [ ] Show a spinner while a page or page element is loading
- [x] Disable buttons and inputs during the form submission process
- [ ] Disable buttons after they have been clicked
  - *At least 75% of buttons in your app must exhibit this behavior to receive full credit*
- [ ] Users can upload images to the app and have them be stored on a cloud service
  - *A user profile picture does **NOT** count for this rubric item **only if** the app also includes "Login via GitHub" functionality.*
  - *Adding a photo via a URL does **NOT** count for this rubric item (for example, if the user provides a URL with an image to attach it to the post).*
  - *Selecting a photo from a list of provided photos does **NOT** count for this rubric item.*
- [ ] 🍞 [Toast messages](https://www.patternfly.org/v3/pattern-library/communication/toast-notifications/index.html) deliver simple feedback in response to user events

## Final Demo GIF

🔗 [Here's a GIF walkthrough of the final project](../planning/assets/final-demo.gif)

![PrepWise walkthrough: dashboard, pantry add (with a rejected duplicate), edit and delete, recipe filters and sorting, recipe modal, /recipes/:id page, meal planner, shopping list generated from the meal plan, move to pantry, saved recipes, and a not-found error](../planning/assets/final-demo.gif)

## Reflection

### 1. What went well during this unit?

This unit, the project picked up a lot of momentum. We finished every Milestone 5 task before the deadline, which gave us extra time to polish features and fix small issues instead of rushing at the end. We split up the remaining work clearly, reviewed each other's pull requests, and resolved merge conflicts quickly. That teamwork let us wrap up the core features and add final touches, like the README demo GIFs and the meal planner improvements.

### 2. What were some challenges your group faced in this unit?

One challenge this unit was overlapping work. Sometimes two of us changed the same files at the same time, which caused merge conflicts. These never turned into major problems, because we each built features in our own branches and merged them through pull requests. That way we caught conflicts during review and fixed them before anything reached `main`. 

### 3. What were some of the highlights or achievements that you are most proud of in this project?

The achievements we're most proud of are the AI assistant and the grocery barcode scanner. The AI assistant runs on Google Gemini, and we used function calling to connect it to each user's real data: their pantry, recipes, and meal plans. Because of that, it does more than chat. It can suggest meals based on what's in your pantry, flag ingredients that are about to expire, and generate a full seven-day dinner plan that keeps meals you've already planned. The barcode scanner uses your device's camera to detect a product's barcode and pull its name, image, and nutrition info from Open Food Facts, which makes adding groceries to your pantry quick and easy.

### 4. Reflecting on your web development journey so far, how have you grown since the beginning of the course?

We've grown a lot since the beginning of the course. Each unit taught us one piece of what a full application needs, like building the frontend, creating the backend, or designing a relational database, and we practiced each piece in smaller projects. This capstone project was the first time we brought all of those pieces together into one full-stack app. Beyond the technical skills, we also learned how to work as a development team: planning tasks, using branches and pull requests, reviewing each other's code, and resolving merge conflicts. 

### 5. Looking ahead, what are your goals related to web development, and what steps do you plan to take to achieve them?

Our goal is to keep building on what we learned in this course and keep growing as full-stack developers. To get there, we plan to keep working on personal and team projects, which could include continuing to improve PrepWise. We also want to learn new tools and frameworks, and get more practice with deployment, testing, and integrating APIs, including AI tools like the Gemini API we used here. Finally, we want to add our best projects to our portfolios and GitHub profiles so we're ready to apply for internships and developer roles. 
