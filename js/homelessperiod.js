// FACEBOOK

<div id="fb-root"></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//ANIMATIONS


$(document).ready(function (){

        $(".petition").click(function (){
            //$(this).animate(function(){
                $('html, body').animate({
                    scrollTop: $("#signatures").offset().top
                }, 1000);
            //});
        });
        $(".donate").click(function (){
            //$(this).animate(function(){
                $('html, body').animate({
                    scrollTop: $("#donations").offset().top
                }, 1000);
            //});
        });
    
});

// ANALYTICS

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61026610-1', 'auto');
ga('send', 'pageview');

