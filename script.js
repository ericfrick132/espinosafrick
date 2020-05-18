$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } 
    });
  });

  $(".seccion-central .contenedor, .dropdown-item").click(function(e){
    var id = $(this).attr('redir');
    if(id){
      window.location.href = "/servicios.html#"+id;
    }
  });

  $(window).on("load", function() {
    $("#body").fadeIn(800);
});

function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}

$("#contactenos").click(function(){
  if(isMobile()){
    window.open("https://api.whatsapp.com/send?phone=5491122548737&amp;text=Hola,%20Tengo%20una%20consulta,");
  }
  else{
    window.open("mailto:estudioespinosafrick@gmail.com?subject=Consulta&nbsp;via&nbsp;mail");
  }
});


  