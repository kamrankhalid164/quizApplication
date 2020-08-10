function Question1(){
     var score=0;
    var q1a1=document.getElementById('q1a1');
    var q1a2=document.getElementById('q1a2');
    var q1a3=document.getElementById('q1a3');
    var q1a4=document.getElementById('q1a4');
    if(q1a1.checked==true){
        ++score
    }
    

        var q2a1=document.getElementById('q2a1');
        var q2a2=document.getElementById('q2a2');
        var q2a3=document.getElementById('q2a3');
        var q2a4=document.getElementById('q2a4');
        if(q2a1.checked==true){
         ++score
    
    }
    var q3a1=document.getElementById('q3a1');
    var q3a2=document.getElementById('q3a2');
    var q3a3=document.getElementById('q3a3');
    var q3a4=document.getElementById('q3a4');
    if(q3a2.checked==true){
     ++score

    }

    var q4a1=document.getElementById('q4a1');
    var q4a2=document.getElementById('q4a2');
    var q4a3=document.getElementById('q4a3');
    var q4a4=document.getElementById('q4a4');
    if(q4a3.checked==true){
     ++score
    }

    alert("your score is "+score+"/4")
}