# Water My Plants App

## ☝️ **Pitch**

Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, **Water My Plants** will remind users when it's time to feed that foliage and quench your plants' thirst.

## What the Application Does

1. A `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 
2. A `user` can login to an authenticated session using the credentials provided at account creation / signup.
3. An authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
4. An authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 
5. Authenticated `user` can update their `phoneNumber` and `password`.
6. Authenticated `user` can update their `phoneNumber` and `password`.


## Technologies Used

-The app was built using React and is a single page application
-Styling is done using CSS and styled components
-Global application state management utilizes Redux; state confined to individual components uses React useState hooks
-This version of the app supports a backend built using Node.js
-API calls are made using the axios library
