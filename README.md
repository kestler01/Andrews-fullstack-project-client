
## Andrew's Art Blog:
```md
I wrote this application as a project for the General Assembly Software Engineering Immersive in Aug of 2021. The Objective is to develope a fullstack application to demonstrate how to use our class lessons and bring them together to create a SPA. This Art gallery app demonstrates a strong understanding of these idea's by allowing a user to create and edit art pieces which they upload after signing up, establishing a 1 to many relationship. These pieces are not visible to other users via authenticated routes and you must be signed in to use the app. A stretch goal, which currently is unfinished is to add another 'show' resource, which a user could create, and add pieces to, and then share, edit and delete. With the implementation of 'show's the home view would require added functionality to be populated by other user's shared shows, which would complete the initial vision.
```

## Project Idea/Story
```md
Original Concept and Inspiration:
I want to make an app to keep track of current members to an art association, and their submitted art for shows, sales, member fees etc. (financial data will NOT be stored in db)
My fiance just became a gallery manager at the New Hampshire Art Association (a non-profit art organization based in Portsmouth NH) and they currently use a poorly maintained excel spreadsheet, which no longer has a steward (the member in-charge of data entry just quit). The board doesn't want to spend/ can't spend/ doesn't have money on a subscription to an existing framework / software. 
The intended users are the artist members, the gallery manager of the association, the book keeper, board members and the 2 other employees. artist members are intended to have permissions over their own pieces... I could go on But:

As I was flushing out the project, it quickly became apparent that the entirety of the app was far beyond the scope of the class project I had 4 days to complete. So I boiled it down to version 1 v1: allows a user to sign up, sign in, change password, and sign out.
a User can also generate a resource in a 1 to many relationship (art pieces) which can be viewed, updated, and destroyed. 
At the time of writing and presentation this app is currently v1.5.
with some modal and css in a vague Star Wars esc theme 
```

## User Stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.

```md
A user wants to upload new art they've made so that they can submit it to a show, and should be able to do that.

A user wants to be able to sign up, sign in, and change their password safely

A user is starting a new show! other users should be able to see the show and submit works to participate if it's a collaborative show as opposed to a body of work/ retrospective. 

A user wants to see if a member has paid their due to the organization this year before accepting art into the new show and should be able to quickly look that up.

Upon accepting a new piece of art into the show, the user should be able to update the database so that a  proper record of 'who's art is where' can be maintained

A user wants to know how many members are currently in the organization while having a meeting, and should be able to look that up.

A user just accepted payment for dues, instead of hand writing a receipt, which is then stored to be entered later by a 3rd party into a spreadsheet, the user should be able to update the status in the app right away. 

a user wants to see how many shows a member has participated in and how many pieces they have sold, instead of diving through YEARS of spreadsheets to view this data they would like to accomplish this by doing a quick search in the app. 

A user wants to look up the guests who have made purchases at the current show to maintain CRM(customer relationship management ) so that a member can reach out and thank them for their support, and should be able to look up the contact information gathered at payment in the app. 

A member doesn't remember when they last paid their dues, and should get an automated email reminder 1 month before they have a lapse of membership.
```

## Wireframes

Please create a wireframe of your planned front end.

```md
'./public/IMG_2289.HEIC' './public/IMG_2290.HEIC' './public/IMG_2291.HEIC'
```

## Plan your resources

What resources will you need? What will the attributes and relationships be?

```md
resources:
members (1 to many pieces, many to many shows)
pieces ( many to 1 member & buyer, many to many shows)
shows ( many to many everything)
buyers (one to many pieces / shows)
```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your resources are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
'./public/IMG_2292.HEIC '
```

## Routing

What routes will you need to make the proper request to your API?

```md
I will need user/sign-up sing-in sign-out /art/add /remove /art
/show /add(submit?) /remove /join
```

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
Day 1- get models built, have dependencies installed, have assembly framework established and begin routes.
Day2- finish routes and test crud, ownership and authetication etc. 
Day3- begin building out front end of app, bootstrap the hell out of it, don't use modals.
Day4- finish the front end to meet requirements 
```
