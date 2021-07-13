document.addEventListener("DOMContentLoaded", onStart);

function onStart() {
    searchFormListener();
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
    div1.className = "card mb-3";
    div1.style.maxWidth = "600px";
    div1.style.margin = 'auto';


    let div2 = document.createElement("div");
    div2.className = "row g-0";

    let div3 = document.createElement("div");
    div3.className = "col-md-4";

    let image = document.createElement("img");
    image.className = "img-fluid rounded-start";
    image.alt = "searchCardImage";
    if(searchData.image !== null) {
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
    status.textContent = searchData.status;

    infoList.append(language, genre, runtime, status);

    info.append(infoList);

    div5.append(title, info);
    div4.append(div5);
    div2.append(div3, div4);
    div1.append(div2);

    card.append(div1);
  


    cardList.append(card);
}


//Event Listeners


/**
 * Event Listener for the Search Form
 */
function searchFormListener() {
    document.querySelector("#searchForm").addEventListener("submit", (event) => {
        event.preventDefault();
        fetchSearchData(event.target.showSearch.value.split(" ").join("+"));
    })
}


//Data Fetches


/**
 * Fetching search data
 * @param searchInput - data gathered from the search form
 * 
 */
 function fetchSearchData(searchInput) {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then(res => res.json())
    .then(json => {
        
        document.querySelector("#cardList").innerHTML = "";
        json.forEach((element) => {
            console.log(element.show);
            renderSearchCard(element.show);
        });
    });
}