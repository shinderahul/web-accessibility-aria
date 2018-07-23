var name = '';
var phone = '';
var email = '';
var message = '';
var regex = '';

$(document).ready(function(){


  /***********  Validation  ************/

   $('#submit').click(function(e){


    e.preventDefault();


    name = $('#name').val();
    phone = $('#phone').val();
    email = $('#email').val();
    message = $('#message').val();
    regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if( name == "" || name.length > 36 || !isNaN(name) ){
      $('#name').addClass('err');
      return false;
    }else{
      $('#name').removeClass('err');
    }

    if( phone.length < 10 ){
      $('#phone').addClass('err');
      return false;
    }else{
      $('#phone').removeClass('err');
    }


    if(email == 'E-mail' || email == "" ){
      $('#email').addClass('err');
      return false;
      email = ""
    }else{
      var bol = IsEmail(email)
      if(bol){
        $('#email').removeClass('err');
      }else{
        $('#email').addClass('err');
        return false;
      }
    }

    if( message == "" || message.length > 200 ){
      $('#message').addClass('err');
      return false;
    }else{
      $('#message').removeClass('err');
    }

  //-----Everything is clean ... can send it to backend and successful call the popup function
  //--- change the page url to the one needed

    var data = {
        name : $('#name').val(),
        phone : $('#phone').val(),
        email : $('#email').val(),
        message : $('#message').val()
    };

    $.ajax({
      type: "POST",
      url : "assets/php/contact.php",
      data: data,
      success: function() {
        $('.success').fadeIn(1000);
      }
    });

  });

})



function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
      }



function numbersonly(myfield, e, dec)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) ||
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;

// decimal point jump
else if (dec && (keychar == "."))
   {
   myfield.form.elements[dec].focus();
   return false;
   }
else
   return false;
}





$(".alpha-only").keypress(function(event){
  var inputValue = event.charCode;
  if((inputValue > 47 && inputValue < 58) && (inputValue != 32)){
    event.preventDefault();
  }
});
