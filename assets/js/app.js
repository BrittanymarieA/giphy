
//create loop that appends array of topics into buttons

buttons();

function buttons() {

    var topics = [
        "Ironman", "Black Panther", "Black Widow", "Captain America", "Starlord", "Thor"
    ]
    for (var i = 0; i < topics.length; i++) {

        var topicsBtn = $("<button>" + topics[i] + "</button>");

        topicsBtn.attr("data", topics[i]);

        topicsBtn.prependTo("#button-view");

    };



    //ajax call to retrieve giphy's when buttons are clicked 

    $("button").on("click", function (_buttons) {

        var heros = $(this).attr("data");

        var herosURL = "https://api.giphy.com/v1/gifs/search?q=" + heros + "&api_key=tXoS3y8r6IYVSzWFhGpelQGM06REAOAz&limit=10";

        $.ajax({
            url: herosURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var giphyDiv = $("<div>");

                    var p = $("<p>").text("Rating" + results[i].rating);

                    var giphyImage = $("<img>");

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    giphyImage.attr("src", still);

                    giphyImage.attr("data-still", still);

                    giphyImage.attr("data-animate", animated);

                    giphyImage.attr("data-state", "still");

                    giphyImage.attr("class", "image");

                    giphyImage.addClass("image");

                    giphyDiv.append(p);

                    giphyDiv.append(giphyImage);

                    $("#giphy-view").prepend(giphyDiv);
                }
            });
    });

      
    //giphy search bar
    $("#add-giphy").on("click", function (event) {
        event.preventDefault();
        
        var input = $("#giphy-input").val();
        
        var inputURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=tXoS3y8r6IYVSzWFhGpelQGM06REAOAz&limit=10";
        
        $.ajax({
            url: inputURL,
            method: "GET"
        }).then(function (response) {
            
            console.log(response);
            
            var results = response.data;
            
            for (var i = 0; i < results.length; i++) {
                var giphyDiv = $("<div>");
                
                var p = $("<p>").text("Rating" + results[i].rating);
                
                var giphyImage = $("<img>");
                
                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
                
                giphyImage.attr("src", still);
                
                giphyImage.attr("data-still", still);
                
                giphyImage.attr("data-animate", animated);
                
                giphyImage.attr("data-state", "still");
                
                giphyImage.attr("class", "image");
                
                giphyImage.addClass("image");
                
                giphyDiv.append(p);
                
                giphyDiv.append(giphyImage);
                
                $("#giphy-view").prepend(giphyDiv);
            }
            
        });
    });
    
    
    //play/pause function

    $(document).on("click", ".image", function () {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
};
    
    
    
    
    
    
    