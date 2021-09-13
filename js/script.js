/*first paragraph - DESIGN*/

$(document).ready(function() {
  $("#h-design").click(function() {
    $("#services1").show();
    $("#h-design").hide();
  })
})

$(document).ready(function() {
$("#services1").click(function() {
  $("#h-design").show();
  $("#services1").hide();
  })
})


/*second paragraph - DEVElOPMENT*/

$(document).ready(function() {
  $("#h-development").click(function() {
    $("#services2").show();
    $("#h-development").hide();
  })
})

$(document).ready(function() {
$("#services2").click(function() {
  $("#h-development").show();
  $("#services2").hide();
  })
})


/*third paragraph - PRODUCT MANAGEMENT*/

$(document).ready(function() {
  $("#h-pmanagement").click(function() {
    $("#services3").show();
    $("#h-pmanagement").hide();
  })
})

$(document).ready(function() {
$("#services3").click(function() {
  $("#h-pmanagement").show();
  $("#services3").hide();
  })
})

/*Hover functions*/
  
$(document).ready(function(){
  $("#pic1").mouseover(function(){
    $("#hfn1").show();
  }).mouseout(function(){
    $("#hfn1").hide();
  });
});

$(document).ready(function(){
  $("#pic2").mouseover(function(){
    $("#hfn2").show();
  }).mouseout(function(){
    $("#hfn2").hide();
  });
});

$(document).ready(function(){
  $("#pic3").mouseover(function(){
    $("#hfn3").show();
  }).mouseout(function(){
    $("#hfn3").hide();
  });
});

$(document).ready(function(){
  $("#pic4").mouseover(function(){
    $("#hfn4").show();
  }).mouseout(function(){
    $("#hfn4").hide();
  });
});

$(document).ready(function(){
  $("#pic5").mouseover(function(){
    $("#hfn5").show();
  }).mouseout(function(){
    $("#hfn5").hide();
  });
});

$(document).ready(function(){
  $("#pic6").mouseover(function(){
    $("#hfn6").show();
  }).mouseout(function(){
    $("#hfn6").hide();
  });
});

$(document).ready(function(){
  $("#pic7").mouseover(function(){
    $("#hfn7").show();
  }).mouseout(function(){
    $("#hfn7").hide();
  });
});

$(document).ready(function(){
  $("#pic8").mouseover(function(){
    $("#hfn8").show();
  }).mouseout(function(){
    $("#hfn8").hide();
  });
});

  /*Contact information*/
  
  $(document).ready(function(){
    $("form#contact-form").submit(function(event){
      // event.preventDefault();
      var name = $("input#c-name").val();
      var email = $("input#c-email").val();
      var message = $("textarea#comment").val();
      if ($("input#c-name").val() && $("input#c-email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }  
    });
  });