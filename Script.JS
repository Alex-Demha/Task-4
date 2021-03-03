function showPassword() {
    var x = document.getElementById("form-password");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 

  function validation(e){
    var i = 0;
    var isCorrect = false;
    var email = document.getElementById('form-email');
    var password = document.getElementById('form-password');
    var emailLength = email.value.length;
    for (i=0; i<emailLength; i++)
    {
      if(email.value[i] == "@")
      {
        isCorrect = true;
      }
    }
    if (isCorrect == false)
    {
      e.preventDefault();
      alert('please enter a correct email address');
    }
    if (password.value.length <= 8)
    {
      e.preventDefault();
      alert ('password has to be at least 8 characters long');}
     }

  var login = document.getElementById('login');
  login.addEventListener('click',validation);

//PROJECT-3: CARDS -----------------------------------------------------
$('.card').on('mouseover', function(e){
    $(this).children('.card-body').children('.card-text').css({
      "transition": "color .2s ease .2s",
      "color": "#1e212d"
    });
});

$('.card').on('mouseout', function(e){
  $(this).children('.card-body').children('.card-text').css({
    "transition": "color .1s ease",
    "color": "transparent"
  });
});

$('.copy').on('click', function(e){
  e.preventDefault();
  window.navigator.clipboard.writeText($(this).text());
  $(this).next().fadeIn(800).fadeOut(800);
})