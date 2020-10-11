// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "myapp-project-123.firebaseapp.com",
  databaseURL: "https://myapp-project-123.firebaseio.com",
  projectId: "myapp-project-123",
  storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST"
};

firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth();


function signUp(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  alert("Signed Up");
}



function signIn(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  
  
  
}


function signOut(){
  
  auth.signOut();
  alert("Signed Out");
  
}



auth.onAuthStateChanged(function(user){
  
  if(user){
    
    var email = user.email;
    alert("Active User " + email);
    
    //Take user to a different or home page

    //is signed in
    
  }else{
    
    alert("No Active User");
    //no user is signed in
  }
  
  
  
});

