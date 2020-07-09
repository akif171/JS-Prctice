function Card(){

    var inp = document.getElementById("name").value;
    var rend = document.getElementById("name_c").innerHTML=inp;


    var inp = document.getElementById("father_name").value;
    var rend = document.getElementById("father_name_c").innerHTML=inp;


    var inp = document.getElementById("class").value;
    var rend = document.getElementById("class_c").innerHTML=inp;
    

    var inp = document.getElementById("address").value;
    var rend = document.getElementById("address_c").innerHTML=inp;


    var inp = document.getElementById("photo").value;
    var rend = document.getElementById("image").getAttribute('src',inp);

}


