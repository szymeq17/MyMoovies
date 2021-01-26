# MyMoovies
## Idea
Movie search engine using OMDb API (http://www.omdbapi.com).

User can search for any movie available on imdb.com, see details of the film and rate, create his own account and add movies to "Favourites".

Searching is implemented by sending request to OMDb API and parsing them. Unfortunately, OMDb API returns only up to 10 results.

Data Base stores users' data: username, password and favourite movies' IDs.

**Search result**

![](https://i.imgur.com/P0EKNZz.jpg)

**Movie details**

![](https://i.imgur.com/UKjF6VH.jpg)

**Movie not added to favourites**

![](https://i.imgur.com/0d5kWNM.jpg)

**Movie added to favourites**

![](https://i.imgur.com/wyw6Bsa.jpg)

**Login page**

![](https://i.imgur.com/QZRcjaA.jpg)

**Register page**

![](https://i.imgur.com/LA6x5ZE.jpg)


**Project is not finished yet!**

In the future user will be able to browse his and other users' favourite movies and rate every movie. 

I'm also going to create "You may also like" section which will suggest movies for user to watch (based on user's favourite movies).

User's security will also be taken care of.

## Technologies
* Node.js,
* Express.js,
* MongoDB (Mongoose),
* HTML (Mustache render engine),
* CSS,
* JavaScript (with JQuery)
