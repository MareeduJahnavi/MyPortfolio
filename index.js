function validate(){

    var fn = document.getElementById("fname").value
    var pn = /^[A-Z][a-z]*$/
    //if submitted without any input
    if(fn==""){
        document.getElementById("fnm").innerHTML = "Enter the fname"
        return false
    }

    //if input is lowercase Eg. janu
    if(fn.match(pn)){
        true
    }
    else{
        document.getElementById("fnm").innerHTML = "Enter first Letter as UPPERCASE and remaining as LOWERCASE"
        return false
    }

    //if min char size doesn't given
    if(fn.length<3){
        document.getElementById("fnm").innerHTML = "Characters should be more than 2"
        return false
    }

    //if max char size is exceeded
    if(fn.length>9){
        document.getElementById("fnm").innerHTML = "Characters should be less than or equal to 9"
        return false
    }



    var ln = document.getElementById("lname").value
    var pln = /^[A-Z][a-z]*$/
    //if submitted without any input
    if(ln==""){
        document.getElementById("lnm").innerHTML = "Enter the lname"
        return false
    }

    //if input is lowercase Eg. janu
    if(ln.match(pln)){
        true
    }
    else{
        document.getElementById("lnm").innerHTML = "Enter first Letter as UPPERCASE and remaining as LOWERCASE"
        return false
    }

    //if min char size doesn't given
    if(ln.length<3){
        document.getElementById("lnm").innerHTML = "Characters should be more than 2"
        return false
    }

    //if max char size is exceeded
    if(ln.length>15){
        document.getElementById("lnm").innerHTML = "Characters should be less than or equal to 15"
        return false
    }



    var pnum = document.getElementById("pno").value
    var ppn = /^[6-9]{1}[0-9]{9}$/
    //if submitted without any input
    if(pnum==""){
        document.getElementById("pn").innerHTML = "Enter PhoneNumber"
        return false
    }

    //if pattern doesn't match with input
    if(pnum.match(ppn)){
        true
    }
    else{
        document.getElementById("pn").innerHTML = "Enter firstNumber in range(6-9) and remaining 9num in range(0-9)"
        return false
    }



    var ema = document.getElementById("email").value
    var pem = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    //if submitted without any input
    if(ema==""){
        document.getElementById("em").innerHTML = "Enter Email-ID"
        return false
    }

    //if pattern doesn't match with input
    if(ema.match(pem)){
        true
    }
    else{
        document.getElementById("em").innerHTML = "Enter valid email-id"
        return false
    }



    var u = document.getElementById("llink").value
    var ul = /^https?:\/\/\S+$/

    //if submitted without any input
    if(u==""){
        document.getElementById("ll").innerHTML = "Enter url"
        return false
    }

    //if pattern doesn't match with input
    if(u.match(ul)){
        true
    }
    else{
        document.getElementById("ll").innerHTML = "Enter valid url"
        return false
    }

    var form = document.getElementById("sheetdb-form");
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(response => response.json()) // Fix syntax here
    .then(data => {
        console.log(data);
        // Display a success message or redirect the user
        alert("Form submitted successfully!");
        // Alternatively, you can redirect the user to another page
        // window.location.href = "success.html";
        location.reload()
    })
    
    // Return false to prevent the default form submission
    return false;

}