     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
     import { getDatabase, set, ref, get, child, onChildAdded } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
     
     // TODO: Add SDKs for Firebase products that you want to use
     // https://firebase.google.com/docs/web/setup#available-libraries
    
     // Your web app's Firebase configuration
     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
     const firebaseConfig = {
        apiKey: "AIzaSyD3QeGDpxp-KW4YfleOuDrzI5wBMZCXses",
        authDomain: "iftar-party-95663.firebaseapp.com",
        databaseURL: "https://iftar-party-95663-default-rtdb.firebaseio.com",
        projectId: "iftar-party-95663",
        storageBucket: "iftar-party-95663.appspot.com",
        messagingSenderId: "909461455472",
        appId: "1:909461455472:web:cc781579443bea1a682ab5",
        measurementId: "G-FNEG0WB9PZ"
      };
    
                // initialize firebase
                var app = initializeApp(firebaseConfig);
    
                // reference your database
                var db = getDatabase(app);
                var draf = ref(db);


                

                function getEnteredData(){
                   var totalUser = 0;
                    var balance = 0;
                    var table = document.getElementById('userTable');
                    console.log('mahed')
                   get(child(draf,"joined/")).then((snapshot)=>{
                     
                    snapshot.forEach((childsnapshot) => {
                        
                    balance = childsnapshot.val().balance;
                    var name = childsnapshot.val().name;
                    var date = childsnapshot.val().date;
                    var serial = childsnapshot.val().serial;
                    var designation = childsnapshot.val().designation;

                    

                    table.innerHTML += `
                    
                        <tr>
                            <th scope="row">${serial}</th>
                            <td>${name}</td>
                            <td>${designation}</td>
                            <td>${date}</td>
                            <td>${balance+" TK"}</td>
                        </tr>
                    
                    `;

                    });
                    
                   })
                }

                getEnteredData();