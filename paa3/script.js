let pref = 0;
let suff = 0;
let counter = 0;

document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
function add(){
    if (counter > -1){

    if(suff < 9){
    suff++;
    document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
    counter++
    console.log(counter);
}
    else{
        suff = 0;
        pref++;
        document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
   
        counter++
    console.log(counter);
    }
}
else{
    // if(suff < 1){
    //     suff = 9;
    //     pref--;
    //     document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
    
    // }
    // else{
    // suff--;
    // document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
    if(suff < 9){
     
    
        suff--;
        counter++;
        console.log(counter);
        document.getElementById("res").innerHTML = "-" + pref.toString() + suff.toString();;
      
        }
        else{
            suff = 9;
            pref--;
            counter++;
            console.log(counter);
            document.getElementById("res").innerHTML = "-" + pref.toString() + suff.toString();
          
        }
if(counter == 0){
    document.getElementById("res").innerHTML = "00";
          
}
}

}

function minus(){
if(counter > 0){


    if(suff < 1){
        suff = 9;
        pref--;
        document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
        counter--;
        console.log(counter);
    }
    else{
    suff--;
    document.getElementById("res").innerHTML = pref.toString() + suff.toString();;
  
    counter--;
    console.log(counter);
}
}
else{
    if(suff < 9){
     
    
    suff++;
    counter--;
    console.log(counter);
    document.getElementById("res").innerHTML = "-" + pref.toString() + suff.toString();;
  
    }
    else{
        suff = 0;
        pref++;
        counter--;
        console.log(counter);
        document.getElementById("res").innerHTML = "-" + pref.toString() + suff.toString();;
      
    }

    if(counter == 0){
        document.getElementById("res").innerHTML = "00";
              
    }
}
}