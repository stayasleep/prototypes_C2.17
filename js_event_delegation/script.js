// Answer the questions here:

// - What do you think is going to happen? Nothing will happened.

// - What happened? Nothing happened.

// - Why? Because they are not in the same DOM window/this.innerHTML calls on a div that is not in the same available scope

//========== Write your code below ===========//
$(document).ready(function(){
    //Commenting out the first question in order to prevent duplicate console.logs for buttons 1-4
    // $('button').on("click",function(){
    //     console.log(this.innerHTML);
    // });
    var new_button = $("<button>", {
        html: "Delegated Button #5 Handler"
    });
    var new_li = $("<li>",{
        style: "margin-top: 10px"
    });
    $(new_li).append(new_button);
    $("#list").append(new_li);
    $("#list").on('click', 'button', function(){
        //Checks to see if the clicked button has a matching attribute
        if ($(this).hasClass("google")===true){
            window.open("https://www.google.com");
        };
        console.log(this.innerHTML);
    });
    //additional
    var button_g=$("<button>",{
        html: "Google Me",
        class: "google",
    });
    var li_g=$("<li>",{
        style: "margin-top: 10px"
    });
    $(li_g).append(button_g);
    $("#list").append(li_g);
});
