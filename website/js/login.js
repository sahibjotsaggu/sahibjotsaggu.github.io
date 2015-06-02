function getStatus() {
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get()) {
        console.log("go to main page.");
    }
    else {
    	
    	console.log("not logged in.");
    }
}

function checkStat(googleUser) {
    console.log("You are signed in. (from checkStat)");
    //window.location = "index.html";
    console.log("go to main page (from checkStat)");
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}