// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
    apiKey: "AIzaSyAhV05GIRh7wSDmxOouH9dxyxlWucfnWlA",
    authDomain: "testfirebase1uttd.firebaseapp.com",
    databaseURL: "https://testfirebase1uttd.firebaseio.com",
    projectId: "testfirebase1uttd",
    storageBucket: "testfirebase1uttd.appspot.com",
    messagingSenderId: "1023797458189",
    appId: "1:1023797458189:web:bd44c387825bec8aee2c44"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
// var database = firebase.database();

// function writeUserData(userId, name, email, phoneNumber) {
//     database.ref(userId).set({
//         name,
//         email,
//         phoneNumber
//     });
// }

// // writeUserData("18211TT1631", "triet", "triet@gmail.com", "05154613132");
// var userRef = firebase.database().ref("users");
// userRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     document.write(data.username);
// });
const arr = [1, 2, 3, 4, 5];
const sinhvien = {
    name: {
        firstName: "do",
        lastName: "phung"
    },
    age: 18
}

console.log(`${sinhvien.name.lastName} ${sinhvien.name.firstName} ${17 + 15}, ${arr}`);