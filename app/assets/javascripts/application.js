// // This is a manifest file that'll be compiled into application.js, which will include all the files
// // listed below.
// //
// // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// // or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
// //
// // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// // compiled file. JavaScript code in this file should be added after the last require_* statement.
// //
// // Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// // about supported directives.
// //
// //= require jquery
// //= require jquery_ujs
// //= require turbolinks
// //= require bootstrap
// //= require bootstrap-sprockets
// //= require_tree .


// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89727720-1', 'auto');
ga('send', 'pageview');


// Terminal

jQuery(function($, undefined) {
    $('#st_terminal').terminal(function(command) {
          if (command.toLowerCase() == 'about') {
              this.echo("Name: Songtham Tungkitkancharoen\nAge: 25\nCity: San Francisco\nSchool: UC San Diego '14\nDegree: B.A. Sociology w/ High Honors Distinction\nOccupation: Software Engineer\nTech: C# .NET, AngularJS, Ruby on Rails, Python, SQL");
          }
          else if (command.toLowerCase() == 'books') {
              this.echo("48 Laws of Power — Robert Greene\nBe Here Now — Ram Dass\nHow to Eat — Thich Nhat Hanh\nReWork — Jason Fried & David Hansson\nShantaram — Gregory David Roberts\nSoft Skills: the Software Developer's Life Manual — John Sonmez\nTao of Wu — RZA\nThe Alchemist — Paulo Coelho\nThe Art of War — Sun Tzu\nThe Four Agreements — Don Miguel Ruiz");
          }
          else if (command.toLowerCase() == 'countries') {
              this.echo("USA\nEngland\nItaly\nFrance\nSpain\nGreece\nMalta\nTurkey\nPortugal\nMorocco\nCanada\nThailand\nJapan\nChina");
          }
          else if (command.toLowerCase() == 'quotes') {
              this.echo("Be the change that you wish to see in the world\n— Mahatma Gandhi\n\nGive a man a fish feed him for a day; teach a man to fish feed him for life\n— Ancient Proverb\n\nIf you can't explain it simply, you don't understand it well enough\n— Albert Einstein\n\nThe man who says he can and the man who says he cannot are both correct\n— Confucius\n\nThe journey of a thousand miles begins with a single step\n— Lao Tzu\n\nYou miss 100% of the shots you don't take\n— Wayne Gretzky\n\nToday you are you, that is truer than true, there is no one alive who is you-er than you!\n— Dr. Seuss");
          }
          else if (command.toLowerCase() == 'resume')
          {
              this.echo("[[!;;;;https://s3.amazonaws.com/stxts-profile/st_resume.pdf]https://s3.amazonaws.com/stxts-profile/st_resume.pdf]")
          }
          else if (command.toLowerCase() == 'linkedin')
          {
              this.echo("[[!;;;;https://www.linkedin.com/in/stxts]https://www.linkedin.com/in/stxts]")
          }
          else if (command.toLowerCase() == 'github')
          {
              this.echo("[[!;;;;https://www.github.com/stxts]https://www.github.com/stxts]")
          }
          else if (command.toLowerCase() == 'help') {
              this.echo("about — about me\nbooks — a list of some of my favorite books\ncountries — a list of places I've visited\nquotes — a list of some of my favorite quotes\ngithub — link to my github\nlinkedin — link to my linkedin\nresume — link to my resume\nclear — clear terminal");
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
          }
    }, {
        greetings: 'Welcome to www.songthamtung.com!\nType [[b;#1abc9c;<BACKGROUND>;]help] to see a list of available commands',
        name: 'st_terminal',
        height: 200,
        prompt: '>_ST ',
        convertLinks: true
    });
});