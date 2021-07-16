## About This Project
TVInfo is a single-page application that allows a user to search and see information about TV shows and actors, and provide comments and ratings. This project uses data from the [TV Maze API](https://www.tvmaze.com/api). 

<br />

## Contributors
**Joe Christensen**
<br />
github: [ChristensenJoe](https://github.com/ChristensenJoe)
<br />
email: joechristensenwork@gmail.com

**Claire Logan**
<br />
github: [clogan1](https://github.com/clogan1)
<br />
email: clairelogan16@gmail.com



<br />

## Built With
This project was built with the following:
- Javascript, HTML, CSS
- [Bootstrap](https://getbootstrap.com/)
- JSON-server

<br />

## Getting Started
In order to set up this project locally, you will need to install and launch JSON-server. When you launch JSON-server, watch the db.json file in the data folder.

<br />


## Usage
TVInfo can be used to search for TV shows or actors. Each search query returns a list of results. A user can click on the desired result to see a page with more details on either the TV show or Actor.

<br />

### TV Show Functionality
On a TV show's detail page, a user can:
- See information on the show (summary, episode count, runtime, cover image)
- See the cast, and click on a cast member's card to see the actor details
- See overall rating based on user reviews
- See previous comments left by other users
- Like or dislike previous comments
- Add a new comment and rating
*Note that all comments and ratings are unique to TVInfo's database.

### Actor Functionality
On an actor's detail page, a user can:
- See the actor's name and headshot
- See the casting credits of that actor and click on the TV show card to see the show's detail page
