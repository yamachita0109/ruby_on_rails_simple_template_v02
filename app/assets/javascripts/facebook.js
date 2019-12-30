function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else {
    document.getElementById('status').innerHTML = 'Please log ' + 'into this webpage.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function logout() {
  FB.logout(function(response) {
    console.log('logout')
    console.log(response)
 });  
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '1043184572687272',
    cookie: true,
    xfbml: true,
    version: 'v5.0'
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me?fields=id,email,name', function (response) {
    console.log(response)
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  },{scope:'public_profile,email'});
}