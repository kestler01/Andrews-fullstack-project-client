### ScreenShots of deployed app
```md
landing view
![DeployedAppHomePage](./lib/public/Andrews-Deployed%20Art-Gallery-App.jpg)
sign up form 
![SignUpForm](./lib/public/Screen%20Shot%202021-08-20%20at%206.21.39%20PM.png)
sign in form 
![SignInForm](./lib/public/Screen%20Shot%202021-08-20%20at%206.21.56%20PM.png)
create piece form
![CreatePieceForm](./lib/public/Screen%20Shot%202021-08-20%20at%206.22.12%20PM.png)
user view of their created pieces, 'gallery' view
![GalleryView](./lib/public/Screen%20Shot%202021-08-20%20at%206.24.41%20PM.png)
```

## Links:
```md
- my backend github repository (https://github.com/kestler01/Andrews-fullstack-project)
- my frontend github repository (https://github.com/kestler01/Andrews-fullstack-project-client)
- my deployed application (https://kestler01.github.io/Andrews-fullstack-project-client/)
```

## Andrew's Art Blog:
```md
I wrote this application as a project for the General Assembly Software Engineering Immersive in Aug of 2021. The Objective is to develope a fullstack application to demonstrate how to use our class lessons and bring them together to create a SPA. This Art gallery app demonstrates a strong understanding of these idea's by allowing a user to create and edit art pieces which they upload after signing up, establishing a 1 to many relationship. These pieces are not visible to other users via authenticated routes and you must be signed in to use the app. A stretch goal, which currently is unfinished is to add another 'show' resource, which a user could create, and add pieces to, and then share, edit and delete. With the implementation of 'show's the home view would require added functionality to be populated by other user's shared shows. Will implement a a later time now that proof of concept has been met. 
a Note: the Star Wars visual theme in place is a placeholder.
```

## Project Idea/Story
```md
Original Concept and Inspiration:
I want to make an app to keep track of current members to an art association, and their submitted art for shows, sales, member fees etc. (financial data will NOT be stored in db)
My fiance just became a gallery manager at a non-profit art organization based in Portsmouth NH.
The intended users are the artist members, the gallery manager of the association, the book keeper, board members and the 2 other employees. artist members are intended to have permissions over their own pieces and be able to submit them to upcoming shows the organization is putting on so it can be virtually juried. gallery employs are intended to be able to search the database for members, view piece and member extensive meta-data and update the database.  
```
As I was flushing out the project, it quickly became apparent that the entirety of the app was far beyond the scope of the class project I had 4 days to complete. So I boiled it down to version 1 
```md
v1: allows a user to sign up, sign in, change password, and sign out.
a User can also generate a resource in a 1 to many relationship (art pieces) which can be viewed, updated, and destroyed. 
At the time of writing and presentation this app is currently v1.5.
with some modal and css in a vague Star Wars esc theme 
```

## V1 user stories
```md
- a user wants to be able to sign up
- a user wants to be able to sign in 
- a user wants to be able to change their password and display name 
- a user wants to be able to sign out
- a user wants to create a piece resource with a description, medium, and an image
- a user wants to be able to view, edit, and delete their pieces
- a user wants to have many pieces
- a user should only be able to edit and view their own pieces
```

### Technology Used:
```md
- Express
- MongoDb
- Mongoose
- Passport
- JavaScript
- JQuery
- HTML/CSS
- Bootstrap
```

## Wire-frames

```md
original wire-frames from initial project vision (pre V1)
[landing page and sign in](./public/wireframe%201.jpg)
[layout of user and piece resource views](./public/wireframe%202.jpg) 
[idea for search bar to sort user meta data from a auth. employee view](./public/wireframe%203.jpg)
```