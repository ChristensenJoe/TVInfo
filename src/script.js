let currentShow = 0;

document.addEventListener("DOMContentLoaded", onStart);

function onStart() {
    searchFormListener();
    commentFormListener();
    headerListener();
    ratingListener();
}

//Get search value
//Fetch search data
//Create card for search data


//Content Rendering


function renderSearchCard(searchData) {

    document.querySelector("#cardContainer").style.height = "100%";
    const cardList = document.querySelector("#cardList");
    let card = document.createElement("li");
    card.style.margin = "auto";

    let div1 = document.createElement("div");
    div1.className = "card mb-3 border-0";
    div1.style.maxWidth = "600px";
    div1.style.margin = 'auto';


    let div2 = document.createElement("div");
    div2.className = "row g-0 border-0";

    let div3 = document.createElement("div");
    div3.className = "col-md-4";

    let image = document.createElement("img");
    image.className = "img-fluid rounded-start";
    image.alt = "searchCardImage";
    if (searchData.image !== null) {
        image.src = searchData.image.original;
    }
    else {
        image.src = "../images/placeholder.png";
    }

    div3.appendChild(image);

    let div4 = document.createElement("div");
    div4.className = "col-md-8";

    let div5 = document.createElement("div");
    div5.className = "card-body";

    let title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = searchData.name;

    let info = document.createElement("p");
    info.className = "card-text";

    let infoList = document.createElement("ul");
    infoList.id = "infoList";

    let language = document.createElement("li");
    language.textContent = `Language: ${searchData.language}`;

    let genre = document.createElement("li");
    genre.textContent = `Genre: ${searchData.genres.join(", ")}`;

    let runtime = document.createElement("li");
    runtime.textContent = `Runtime: ${searchData.runtime} minutes`

    let status = document.createElement("li");
    status.textContent = `Status: ${searchData.status}`;

    infoList.append(language, genre, runtime, status);

    info.append(infoList);

    div5.append(title, info);
    div4.append(div5);
    div2.append(div3, div4);
    div1.append(div2);

    card.append(div1);

    card.addEventListener("click", function () { renderDetailsListener(searchData.id) });

    cardList.append(card);
}

function renderActorSearchCard(searchData) {

    document.querySelector("#cardContainer").style.height = "100%";
    const cardList = document.querySelector("#cardList");
    let card = document.createElement("li");
    card.style.margin = "auto";

    let div1 = document.createElement("div");
    div1.className = "card mb-3 border-0";
    div1.style.maxWidth = "600px";
    div1.style.margin = 'auto';


    let div2 = document.createElement("div");
    div2.className = "row g-0 border-0";

    let div3 = document.createElement("div");
    div3.className = "col-md-4";

    let image = document.createElement("img");
    image.className = "img-fluid rounded-start";
    image.alt = "searchCardImage";
    if (searchData.image !== null) {
        image.src = searchData.image.original;
    }
    else {
        image.src = "../images/placeholder.png";
    }

    div3.appendChild(image);

    let div4 = document.createElement("div");
    div4.className = "col-md-8";

    let div5 = document.createElement("div");
    div5.className = "card-body";

    let title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = searchData.name;

    let info = document.createElement("p");
    info.className = "card-text";

    let infoList = document.createElement("ul");
    infoList.id = "infoList";

    let language = document.createElement("li");
    language.textContent = '';

    let genre = document.createElement("li");
    genre.textContent = '';

    let runtime = document.createElement("li");
    runtime.textContent = ''

    let status = document.createElement("li");
    status.textContent = '';

    infoList.append(language, genre, runtime, status);

    info.append(infoList);

    div5.append(title, info);
    div4.append(div5);
    div2.append(div3, div4);
    div1.append(div2);

    card.append(div1);

    card.addEventListener("click", function () { renderActorDetailsListener(searchData.id) });

    cardList.append(card);
}


function renderCastCard(castMember) {
    let card = document.createElement('div')
    card.className = "card"
    card.style.width = "250px"
    card.style.marginRight = "10px";
    card.style.flex = "0 0 auto"

    let img = document.createElement('img')
    img.src = castMember.person.image.original
    img.className = "card-img-top rounded-circle"
    img.style.width = "200px"
    img.style.height = "200px"
    img.style.objectFit = "cover"
    img.style.margin = "auto"
    img.style.paddingTop = "3px"
    img.style.marginTop = "10px";
    img.alt = "cast-picture"

    let span = document.createElement("span");
    span.style.marginTop = "20px";
    span.style.width = "84%";
    span.style.marginRight = "auto";
    span.style.marginLeft = "auto";
    span.className = "border-bottom border-3 rounded-3";

    let cardBody = document.createElement('div')
    cardBody.className = "card-body"

    let h4 = document.createElement('h4')
    h4.className = 'card-title'
    h4.style.font = "bold";
    h4.textContent = castMember.person.name

    let pAs = document.createElement('p')
    pAs.className = 'card-text'
    pAs.style.fontSize = "15px";
    pAs.textContent = "as"
    pAs.style.marginTop = "15px";

    let pChar = document.createElement('p')
    pChar.className = 'card-text'
    pChar.textContent = castMember.character.name
    pChar.style.fontSize = "19px";

    cardBody.append(h4, pAs, pChar)

    card.append(img, span, cardBody)

    document.querySelector('#castContainer').append(card)
}

function renderShowCard(show) {
    let card = document.createElement('div')
    card.className = "card"
    card.style.width = "250px"
    card.style.marginRight = "10px";
    card.style.flex = "0 0 auto"

    let img = document.createElement('img')
    if(show.image !== null) {
        img.src = show.image.original;
    }
    else {
        img.src = "../images/placeholder";
    }
    img.className = "card-img-top rounded-circle"
    img.style.width = "200px"
    img.style.height = "200px"
    img.style.objectFit = "cover"
    img.style.margin = "auto"
    img.style.paddingTop = "3px"
    img.style.marginTop = "10px";
    img.alt = "show-picture"

    let span = document.createElement("span");
    span.style.marginTop = "20px";
    span.style.width = "84%";
    span.style.marginRight = "auto";
    span.style.marginLeft = "auto";
    span.className = "border-bottom border-3 rounded-3";

    let cardBody = document.createElement('div')
    cardBody.className = "card-body"

    let h4 = document.createElement('h4')
    h4.className = 'card-title'
    h4.style.font = "bold";
    h4.textContent = show.name;

    let pAs = document.createElement('p')
    pAs.className = 'card-text'
    pAs.style.fontSize = "14px";
    if(show.genres !== null) {
    pAs.textContent = `Genre: ${show.genres.join(", ")}`;
    }
    else {
        pAs.textContent = ``;
    }
    pAs.style.marginTop = "15px";

    let pChar = document.createElement('p')
    pChar.className = 'card-text'
    if(show.language !== null) {
    pChar.textContent = `Language: ${show.language}`;
    }
    else {
        pChar.textContent = "";
    }
    pChar.style.fontSize = "14px";

    cardBody.append(h4, pAs, pChar)

    card.append(img, span, cardBody)

    document.querySelector('#castingCreditsContainer').append(card)
}

function renderComment(comment) {
    let li = document.createElement("li");


    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "80%";
    cardDiv.style.marginRight = "auto";
    cardDiv.style.marginLeft = "auto";
    cardDiv.style.marginTop = "10px";
    cardDiv.style.marginBottom = "10px";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let figure = document.createElement("figure");
    figure.className = "text-start";

    let blockquote = document.createElement("blockquote");
    blockquote.className = "blockquote";

    let commentP = document.createElement("p");
    commentP.textContent = comment.content;

    blockquote.append(commentP);

    let figCaption = document.createElement("figcaption");
    figCaption.className = "blockquote-footer";
    figCaption.textContent = comment.author;

    figure.append(blockquote, figCaption);

    cardBody.append(renderRating(comment), figure);
    cardDiv.append(cardBody);
    li.append(cardDiv);
    document.querySelector("#commentList").append(li);

}

function renderRating(comment) {
    let count = 1;
    let rating = document.createElement("div");

    let star1 = document.createElement("span");
    star1.className = "bi bi-star-fill";
    star1.style.padding = "2px";
    let star2 = document.createElement("span");
    star2.className = "bi bi-star";
    star2.style.padding = "2px";
    let star3 = document.createElement("span");
    star3.className = "bi bi-star";
    star3.style.padding = "2px";
    let star4 = document.createElement("span");
    star4.className = "bi bi-star";
    star4.style.padding = "2px";
    let star5 = document.createElement("span");
    star5.className = "bi bi-star";
    star5.style.padding = "2px";

    rating.append(star1, star2, star3, star4, star5);

    let starContainer = Array.prototype.slice.call(rating.children);

    starContainer.forEach((element) => {
        if (count <= comment.rating) {
            element.className = "bi bi-star-fill";
            count++;
        }
    });

    return rating;

}

function renderTopStars(rating) {
    let starContainer = Array.prototype.slice.call(document.querySelector("#overallRating").children);

    if (rating > 4.75) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star-fill";
        starContainer[4].className = "bi bi-star-fill";
    }
    else if (rating > 4.25) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star-fill";
        starContainer[4].className = "bi bi-star-half";
    }
    else if (rating > 3.75) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star-fill";
        starContainer[4].className = "bi bi-star";
    }
    else if (rating > 3.25) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star-half";
        starContainer[4].className = "bi bi-star";
    }
    else if (rating > 2.75) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star";
        starContainer[4].className = "bi bi-star";
    }
    else if (rating > 2.25) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-half";
        starContainer[3].className = "bi bi-star";
        starContainer[4].className = "bi bi-star";
    }
    else if (rating > 1.75) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star";
        starContainer[3].className = "bi bi-star";
        starContainer[4].className = "bi bi-star";
    }
    else if (rating > 1.25) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-half";
        starContainer[2].className = "bi bi-star";
        starContainer[3].className = "bi bi-star";
        starContainer[4].className = "bi bi-star";
    }
    else if (rating >= 1) {
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star";
        starContainer[2].className = "bi bi-star";
        starContainer[3].className = "bi bi-star";
        starContainer[4].className = "bi bi-star";
    }
    else {
        starContainer[0].className = "bi bi-star";
        starContainer[1].className = "bi bi-star";
        starContainer[2].className = "bi bi-star";
        starContainer[3].className = "bi bi-star";
        starContainer[4].className = "bi bi-star";
        let errorMessage = document.createElement("span");
        errorMessage.textContent = "No Rating Data";
        errorMessage.id = "ratingError";
        errorMessage.className = "h5";
        document.querySelector("#overallRating").prepend(errorMessage);
    }
}

//Event Listeners


/**
 * Event Listener for the Search Form
 */

function renderDetailsListener(showID) {
    document.querySelector("#cardContainer").style.display = "none";
    document.querySelector("#detailsContainer").style.display = "block";
    currentShow = showID;
    fetchShowByID(showID)
        .then(json => {
            let image = document.querySelector("#detailsImageFile");
            if (json.image !== null) {
                image.src = json.image.original;
            }
            else {
                image.src = "../images/placeholder.png";
            }

            if (json.name !== null) {
                document.querySelector("#detailsTitle").textContent = json.name;
            }
            else {
                document.querySelector("#detailsTitle").textContent = "Title Not Available";
            }

            if (json.summary !== null && json.summary.length >= 1) {
                let testElement = document.createElement("div");
                testElement.innerHTML = json.summary;
                document.querySelector("#detailsP").textContent = testElement.innerText;

            }
            else {
                document.querySelector("#detailsP").textContent = "Summary not available";
            }

            if (json["_embedded"].episodes.length > 1) {
                document.querySelector("#episodes").textContent = `Episodes: ${json["_embedded"].episodes.length}`;
            }
            else {
                document.querySelector("#episodes").textContent = "Episodes Information Unavailable"
            }

            if (json.runtime !== null) {
                document.querySelector("#runTime").textContent = `Runtime: ${json.runtime} minutes`;
            }
            else {
                document.querySelector("#runTime").textContent = "Runtime Information Unavailable";
            }

            if (json.genres !== null && json.genres.length >= 1) {
                document.querySelector("#genre").textContent = `Genres: ${json.genres.join(", ")}`;
            }
            else {
                document.querySelector("#genre").textContent = "Genre Information Unavailable";
            }

            if (json["_embedded"].episodes.length > 1) {
                document.querySelector("#years").textContent = `${json["_embedded"].episodes[0].airdate.slice(0, 4)} - ${json["_embedded"].episodes[json["_embedded"].episodes.length - 1].airdate.slice(0, 4)}`;
            }
            else {
                document.querySelector("#years").textContent = "Year Information Unavailable"
            }


            if (json["_embedded"].cast !== null && json["_embedded"].cast.length >= 1) {
                document.querySelector("#castContainer").innerHTML = ''
                json["_embedded"].cast.forEach((member) => renderCastCard(member))

            } else {
                document.querySelector('#castContainer').textContent = "Cast Information Unavailable"
            }

            if (document.querySelector("#ratingError") !== null) {
                document.querySelector("#ratingError").remove();
            }

            let overallRating = 0;
            fetchCommentsByID(showID)
                .then(commentArray => {
                    commentArray.forEach((comment) => {
                        renderComment(comment);
                        overallRating += comment.rating;
                    });
                    overallRating = overallRating / commentArray.length;
                    renderTopStars(overallRating);
                })

        });
}

function renderActorDetailsListener(personID) {
    document.querySelector("#cardContainer").style.display = "none";
    document.querySelector("#actorDetailContainer").style.display = "block";
    fetchPersonByID(personID)
        .then(person => {
            let actorName = document.querySelector('#actorNameHeader')
            actorName.textContent = person.name

            let actorImg = document.querySelector('#actorDetailsImageFile')
            if (person.image !== null) {
                actorImg.src = person.image.original
            } else {
                actorImg.src = '../images/placeholder.png'
            }

        })

    fetchCastingCreditsByPersonID(personID)
        .then(shows => {
            document.querySelector("#castingCreditsContainer").innerHTML = ''
            shows.forEach((show) => renderShowCard(show["_embedded"].show))
        });

}

function searchFormListener() {
    document.querySelector("#searchForm").addEventListener("submit", (event) => {
        event.preventDefault();
        let fetchData;
        if (event.target.searchDropdown.value === "tvSeries") {
            fetchData = fetchSearchData(event.target.showSearch.value.split(" ").join("+"), "shows")
        }
        else {
            fetchData = fetchSearchData(event.target.showSearch.value.split(" ").join("+"), "people")
        }
        fetchData.then(json => {
            document.querySelector("#cardList").innerHTML = "";
            document.querySelector("#commentList").innerHTML = "";
            document.querySelector("#cardContainer").style.display = "block";
            document.querySelector("#detailsContainer").style.display = "none";
            document.querySelector("#actorDetailContainer").style.display = "none";
            json.forEach((element) => {
                if (event.target.searchDropdown.value === "tvSeries") {
                    renderSearchCard(element.show);
                } else {
                    renderActorSearchCard(element.person)
                }
            })
            if (document.querySelector("#searchMessage") === null) {
                let searchMessage = document.createElement("div");
                searchMessage.className = "h5";
                searchMessage.id = "searchMessage";
                searchMessage.textContent = "Didn't find what you were looking for? Try being more specific in your search."
                document.querySelector("#cardWrapper").append(searchMessage);
            }
        });
    })
}

function commentFormListener() {
    document.querySelector("#commentForm").addEventListener("submit", (event) => {
        event.preventDefault();

        let comment = {
            content: event.target.inputComment.value,
            author: event.target.commentAuthor.value,
            rating: rating(),
            showID: currentShow
        };

        renderComment(comment);

        fetch("http://localhost:3000/Comments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        })
            .then(res => res.json())
            .then();

        document.querySelector("#commentForm").reset();
        clearStars();
    })
}

function ratingListener() {
    let starContainer = Array.prototype.slice.call(document.querySelector("#rating").children);
    document.querySelector("#star1").addEventListener("click", () => {
        clearStars();
        starContainer[0].className = "bi bi-star-fill";
    });
    document.querySelector("#star2").addEventListener("click", () => {
        clearStars();
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
    });
    document.querySelector("#star3").addEventListener("click", () => {
        clearStars();
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
    });
    document.querySelector("#star4").addEventListener("click", () => {
        clearStars();
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star-fill";
    });
    document.querySelector("#star5").addEventListener("click", () => {
        clearStars();
        starContainer[0].className = "bi bi-star-fill";
        starContainer[1].className = "bi bi-star-fill";
        starContainer[2].className = "bi bi-star-fill";
        starContainer[3].className = "bi bi-star-fill";
        starContainer[4].className = "bi bi-star-fill";
    });
}

function headerListener() {
    document.querySelector("#websiteHeader").addEventListener("click", () => {
        location.reload();
    })
}

//Helper Functions

function clearStars() {
    let starContainer = Array.prototype.slice.call(document.querySelector("#rating").children);
    starContainer.shift();
    starContainer.forEach((star) => {
        star.className = "bi bi-star";
    })
}

function rating() {
    let starContainer = Array.prototype.slice.call(document.querySelector("#rating").children);
    let count = 0;
    starContainer.forEach((element) => {
        if (element.className === "bi bi-star-fill") {
            count++;
        }
    });

    return count;
}

//Data Fetches


/**
 * Fetching search data
 * @param searchInput - data gathered from the search form
 * 
 */
function fetchSearchData(searchInput, type) {
    return fetch(`https://api.tvmaze.com/search/${type}?q=${searchInput}`).then(res => res.json());
}

function fetchShowByID(id) {
    return fetch(`https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=episodes`).then(res => res.json());
}

function fetchCommentsByID(id) {
    return fetch(`http://localhost:3000/Comments?showID=${id}`)
        .then(res => res.json());
}

function fetchPersonByID(id) {
    return fetch(`https://api.tvmaze.com/people/${id}`).then(res => res.json());
}

function fetchCastingCreditsByPersonID(id) {
    return fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`).then(res => res.json());
}