listofstudent_array=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;

    listofstudent_array.push(name1);
    listofstudent_array.push(name2);
    listofstudent_array.push(name3);
    listofstudent_array.push(name4);

    console.log(listofstudent_array);
    
    document.getElementById("names").innerHTML=listofstudent_array;
    document.getElementById("buttonsubmit").style.display="none";
    document.getElementById("buttonsort").style.display="inline-block";
    

}
function sort(){
    listofstudent_array.sort();
    console.log(listofstudent_array);
    document.getElementById("names").innerHTML=listofstudent_array;
}

