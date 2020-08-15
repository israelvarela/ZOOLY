$(document).ready(function () {

    // Grab our search elements
    var searchInput = $("#search");
    var searchButton = $("#search-button");

    // Array of animals
    var animalsArray = [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bird",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Bunny",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Coyote",
        "Crab",
        "Crocodile",
        "Crow",
        "Curlew",
        "Deer",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Finch",
        "Fish",
        "Flamingo",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gerbil",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grey wolf",
        "Gray wolf",
        "Grouse",
        "Guanaco",
        "Gull",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Ibex",
        "Jackal",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kingfisher",
        "Koala",
        "Kookabura",
        "Kouprey",
        "Kudu",
        "Lapwing",
        "Lark",
        "Lemur",
        "Leopard",
        "Lion",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lyrebird",
        "Magpie",
        "Mallard",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marten",
        "Meerkat",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Mouse",
        "Mule",
        "Narwhal",
        "Newt",
        "Nightingale",
        "Octopus",
        "Okapi",
        "Opossum",
        "Oryx",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panda", 
        "Panther",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Quail",
        "Quetzal",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Rabbit",
        "Raven",
        "Red deer",
        "Red panda",
        "Reindeer",
        "Rhinoceros",
        "Rhino",
        "Rook",
        "Salmon",
        "Sand Dollar",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Snail",
        "Snake",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Starfish",
        "Stingray",
        "Stinkbug",
        "Stork",
        "Swallow",
        "Swan",
        "Tapir",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Trout",
        "Turkey",
        "Turtle",
        "Viper",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Wasp",
        "Weasel",
        "Whale",
        "Wildcat",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Yak",
        "Zebra"
    ]

    var myImage = document.getElementById("mainImage");
    var imageArray =
        [
            "bear@4x.png",
            "bird@4x.png",
            "buffalo@4x.png",
            "Cat@4x.png",
            "cow@4x.png",
            "deer@4x.png",
            "dog@4x.png",
            "elephant@4x.png",
            "fox@4x.png",
            "giraffe@4x.png",
            "goat@4x.png",
            "gorilla@4x.png",
            "horse@4x.png",
            "huskydog@4x.png",
            "koala@4x.png",
            "Lion@4x.png",
            "monkey@4x.png",
            "panda@4x.png",
            "pig@4x.png",
            "rabbit@4x.png",
            "rhino@4x.png",
            "snake@4x.png",
            "tiger@4x.png",
            "walrus@4x.png"
        ]

    setInterval(changeImage, 1000);

    function changeImage() {
        var randomNumber = Math.floor(Math.random() * imageArray.length)
        myImage.setAttribute("src", "Assets/AnimalIconsPNG/" + imageArray[randomNumber]);
    }


    // When the search button is clicked...
    searchButton.on("click", function () {

        // Search for books and gifs
        search(searchInput.val());

    });

    // Search if we hit the enter button
    $('.click_on_enterkey').on('keyup', function (event) {
        if (event.keyCode == 13) {

            $(this).click();
            console.log("enter clicked");

            // Search for books and gifs
            search(searchInput.val());
        }
    });

    //Search for animal displayed on animal buttons
    $('.animal-btn').on('click', function (event) {
        var animalName = $(this).data('animal');
        console.log(animalName);

        // rendersearchForBooks(animalToSearchFor);
        search(animalName);
    });

    function search(animalName) {

        // Grab the search term from the search input
        var searchTerm = animalName;

        // If the search term is in the animals array...
        if (animalsArray.includes(formatSearch(searchTerm))) {

            // TODO: Display GIFS

            var apiKey = "PWIpROSgJrTHpSVunJ87DDRAXNIAqSwF";
            var searchValue = animalName;
            var urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&offset=2&limit=4&rating=g&lang=en&q=${searchValue}`;
            // console.log(urlGiphy);

            $("#giphy-here").empty();

            $.ajax({
                url: urlGiphy,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                var data = response.data

                for (var i = 0; i < data.length; i++) {

                    var newDiv = $("<div>");
                    var giphyImageUrl = data[i].images.downsized.url;
                    var imageTag = $("<img>");

                    var imageGiphySrc = imageTag.attr("src", giphyImageUrl);

                    newDiv.attr("class" , "col s6 m3 animalGIF");


                    newDiv.append(imageGiphySrc);
                    $("#giphy-here").append(newDiv);


                };
            });
            //Then search for books using the search term
            searchForBooks(searchTerm);

            searchInput.val("");

        } else {
            //TODO: If the search Term is not in the animals array, alert the user that the animal was not found
            M.toast({html: 'Animal not found! Please try again.'})
        }

    }




    // Function to search for books
    function searchForBooks(animalToSearchFor) {

        // Call the GoogleBooks API
        var googleBooksAPIKey = "AIzaSyDoXQRvul2VBim0JWnXoVL4LakB9oIBfmU";
        var googleBooksURL = "https://www.googleapis.com/books/v1/volumes?printType=books&maxAllowedMaturityRating=not-mature&q=" + animalToSearchFor + "&key=" + googleBooksAPIKey;

        $.ajax({
            url: googleBooksURL,
            method: 'GET'
        }).then(function (response) {

            var booksArea = $("#books-here");

            booksArea.empty();

            // Log the response
            console.log(response);

            // store the response in an array
            var booksArray = response.items;

            var booksHeader = $("<h3>")
            booksHeader.text("Suggested Books");

            booksArea.append(booksHeader);


            // For each element in the books array...
            booksArray.forEach(element => {

                // Declare variables we want to collect
                var title = "";
                var author = "";
                var description = "";
                var imageURL = "";
                var infoLink = "#";

                // Get the title
                title = element.volumeInfo.title;

                // If there is an author, get the author
                if (element.volumeInfo.authors) {
                    author = element.volumeInfo.authors[0];
                }

                // If there is a description, get the description
                if (element.searchInfo) {
                    description = element.searchInfo.textSnippet;
                }

                // Get the thumbnail if there is one
                if (element.volumeInfo.imageLinks) {
                    imageURL = element.volumeInfo.imageLinks.smallThumbnail;
                }

                // Get the info link
                infoLink = element.volumeInfo.infoLink;

                // TODO: Render the information in HTML and append to our search results section
                var bookDiv = $("<div>");

                bookDiv.html("<div class='card horizontal'> <div class='card-image'><img src='" + imageURL + "'></div> <div class='card-stacked'><div class='card-content'> <h5>" + title + " by " + author + "</h5><p>" + description + "</p> <br> <a href = " + infoLink +" class='waves-effect waves-light btn'><i class='material-icons left'>book</i>Read More</a></div> </div> </div>");

                booksArea.append(bookDiv);

            });



        });



    }

    // This is a function to format our search to match the Animals array formatting (Uppercase only the  first letter)
    function formatSearch(searchText) {

        // convert to lowercase and trim any spaces off the edges
        var search = searchText.toLowerCase().trim();

        // Return the string with an uppercase first letter
        return search.charAt(0).toUpperCase() + search.slice(1);

    }
















});