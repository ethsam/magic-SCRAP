var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

jQuery.noConflict();

$( 'a.cs-Link, div.cs-Text.cs-Text--withBold' ).each(function() {
  console.log( $( this ).text() );
});
