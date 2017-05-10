// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require bootstrap-sprockets
//= require_tree .


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})


// googleMap

function initialize() {
var myCenter = new google.maps.LatLng(37.7749, -122.4194);		
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});

marker.setMap(map);


google.maps.event.addDomListener(window, 'load', initialize);
}

// WOW 
new WOW().init();


// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89727720-1', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


jQuery(function($, undefined) {
    $('#st_terminal').terminal(function(command) {
          if (command == 'about') {
              this.echo("Name: Songtham Tungkitkancharoen\nAge: 25\nCity: San Francisco\nSchool: UC San Diego '14\nDegree: B.A. Sociology w/ High Honors\nOccupation: Software Engineer\nTech: C# .NET, AngularJS, Ruby on Rails, Python, SQL");
          }
          else if (command == 'who') {
              this.echo("Songtham Tungkitkancharoen");
          }
          else if (command == 'what') {
              this.echo("Full Stack Web Developer");
          }
          else if (command == 'where') {
              this.echo("San Francisco");
          }
          else if (command == 'when') {
              this.echo("2+ years experience");
          }
          else if (command == 'why') {
              this.echo("I like to create and solve problems. Oh and coding is really fun :)");
          }
          else if (command == 'how') {
              this.echo("Self Taught");
          }
          else if (command == 'books') {
              this.echo("Shantaram — Gregory David Roberts\nThe Four Agreements — Don Miguel Ruiz\nThe Alchemist — Paulo Coelho\nTao of Wu — RZA");
          }
          else if (command == 'quotes') {
              this.echo("'The journey of a thousand miles begins with a single step' — Lao Tzu");
          }
          else if (command == 'help') {
              this.echo("[[b;#1abc9c;<BACKGROUND>;]about] — summary\n[[b;#1abc9c;<BACKGROUND>;]who] — I am\n[[b;#1abc9c;<BACKGROUND>;]what] — I do\n[[b;#1abc9c;<BACKGROUND>;]where] — I live\n[[b;#1abc9c;<BACKGROUND>;]when] — I started\n[[b;#1abc9c;<BACKGROUND>;]why] — I code\n[[b;#1abc9c;<BACKGROUND>;]how] — I learned\n[[b;#1abc9c;<BACKGROUND>;]books] — a list of some of my favorite books\n[[b;#1abc9c;<BACKGROUND>;]quotes] — a list of some of my favorite quotes\n[[b;#1abc9c;<BACKGROUND>;]1+1] — built-in calculator\n[[b;#1abc9c;<BACKGROUND>;]clear] — clear terminal");
          }
           else if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
                this.echo(new String("Type [[b;#1abc9c;<BACKGROUND>;]help] to see a list of available commands"));
            }
        } else {
           this.echo('');
        }
    }, {
        greetings: 'Welcome to www.songthamtung.com ~\nType [[b;#1abc9c;<BACKGROUND>;]about] to get started!',
        name: 'st_terminal',
        height: 200,
        prompt: '>_ST ',
        convertLinks: false
    });
});