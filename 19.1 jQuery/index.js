//selecting all the h1 elements
$("h1");

//selecting all the button elements
$("button");

//selecting the element with the "header" class
$(".header");

//Using jQuery to change the CSS, changing the h1's color to red
$("h1").css("color", "red");

//console logging the value of h1's color
console.log($("h1").css("color"));

//adding the class "background-white" to the h1 using jQuery
$("h1").addClass("background-white");

//Changing the text of the h1 to say Bye
$("h1").text("Bye");

//Changing the html of the h1 to say Hello again and also adding an "<em>" tag.
$("h1").html("<em>Hello again</em>");

//Changing the src attribute of an img
$("img").attr("src", "different-drum.png");

//changing the href of an anchor tag
$("a").attr("href", "https://www.yahoo.com");

//Adding event listener to our h1 that turns it purple when clicked
$("h1").click(function(){
$("h1").css("color", "purple");
});

//Detecting a keystroke, inside of an input. Basically event listener for keydown. And logging what each key press is, using the event.key
$("input").keypress(function(event){
    console.log(event.key);
});

//Making it so whatever is typed into the input, becomes the new h1
$("input").keypress(function(event){
    $("h1").text(event.key);
});

//Using on, instead of a specific event listener
$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
});

//Creating a button, that appears before wherever the h1 element is.
$("h1").before("<button>New</button>");

//Creating a button, that appears AFTER wherever the h1 element is.
$("h1").after("<button>Old</button");

//Creating a hide animation. If we click a button, the h1 will dissappear.
// $("button").on("click", function (){
//     $("h1").hide();
// });

//Creating a toggle that hides the h1, whenever a button is pressed, but because it's toggle, the h1 can come back on button press
// $("button").on("click", function (){
    // $("h1").toggle();
// });

//Creating a fadout (reduces opacity to 0)
 // $("button").on("click", function (){
   //  $("h1").fadeOut();
// });

//Sliding the h1 up
 // $("button").on("click", function (){
//  $("h1").slideUp();
 // });

//Sliding the h1 down, looks cool with conjuction of the slide up one.
// $("button").on("click", function (){
 //    $("h1").slideDown();
 //});

 // Using animate
 $("button").on("click", function (){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});