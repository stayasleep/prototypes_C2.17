//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var movieOne = global_result.feed.entry[0]["im:image"][2].label;
                console.log(movieOne);
                for (var i=0;i<global_result.feed.entry.length;i++){
                    var third_movie = global_result.feed.entry[i]["im:image"][2].label;
                    var new_div = $('<div>',{
                        class: "img_container"
                    });
                    var img_tags = $('<img>',{
                        src: third_movie
                    });
                    new_div.append(img_tags);
                    $('#main').append(new_div);
                    console.log(third_movie);
                    var title= $('<h3>',{
                        text: global_result.feed.entry[i].title.label
                    });
                    new_div.append(title);
                }
            }
        });
        console.log('End of click function');
    });
});