
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3xj2wuuubsAlKVdODJq1nLcPcp1EYKK4",
    authDomain: "test-5ccf6.firebaseapp.com",
    databaseURL:"https://test-5ccf6-default-rtdb.firebaseio.com/",
    projectId: "test-5ccf6",
    storageBucket: "test-5ccf6.appspot.com",
    messagingSenderId: "138398129278",
    appId: "1:138398129278:web:fd0c89aae674808261cc2f"
  };
  
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


  function addUser()
  {
      user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "Testing"
    });
  }