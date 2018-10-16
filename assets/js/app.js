
            //create loop that appends array of topics into buttons

            buttons()

            function buttons() {

                var topics = [
                    "Ironman", "Black Panther", "Black Widow", "Captain America", "Starlord", "Thor"
                ]
                for (var i = 0; i < topics.length; i++) {

                    var topicsBtn = $("<button>" + topics[i] + "</button>");

                    topicsBtn.attr("data-character", topics[i]);

                    topicsBtn.prependTo("#button-view");

                };

                //adding giphy buttons
                $("#add-giphy").on("click", function (event) {
                    form().reset
                    event.preventDefault();

                    var giph = $("#giphy-input").val().trim();

                    topics.push(giph);

                    buttons()

                    return;
                })



                //ajax call to retrieve giphy's when buttons are clicked 

                $("button").on("click", function (buttons) {

                    var heros = $(this).attr("data-character")

                    var herosURL = "https://api.giphy.com/v1/gifs/search?q=" + heros + "&api_key=tXoS3y8r6IYVSzWFhGpelQGM06REAOAz&limit=10";

                    $.ajax({
                        url: herosURL,
                        method: "GET"
                    }).then(function (response) {
                        console.log(response);

                        var results = response.data;

                        for (var i = 0; i < results.length; i++) {
                            var giphyDiv = $("<div>");

                            var p = $("<p>").text("Rating" + results[i].rating);

                            var giphyImage = $("<img>");

                            giphyImage.attr("src", results[i].images.fixed_height_still.url);

                            giphyImage.attr("data-state", "still");

                            giphyImage.attr("data-animate", results[i].images.fixed_height.url);

                            giphyImage.attr("class", "image");

                            giphyDiv.append(p);

                            giphyDiv.append(giphyImage);

                            $("#giphy-view").prepend(giphyDiv);

                        }
                    })
                })
            };

            //play/pause function
            $(".image").on("click", function () {
                var state = $(this).attr("data-state");
                var animate = $(this).attr("data-animate");
                var still = $(this).attr("data-still");

                if (state === "still") {
                    $(this).attr("src", animate);
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", still);
                    $(this).attr("data-state", "still")
                }
            });