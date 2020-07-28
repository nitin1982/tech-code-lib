function gitLogin(firebaseConfig) {
    //console.log(firebase.apps.length);
    if(firebase.apps.length === 0)
        firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    return firebase.auth().signInWithPopup(provider).then(
        function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            //console.log(result.additionalUserInfo.profile);
            return result.additionalUserInfo.profile;
            //localStorage.setItem("user", result.additionalUserInfo.profile);
        }
    ).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(error);
    })
}