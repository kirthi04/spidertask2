var includeques = [];
var diffcount = [];
var coloree = new Array(10);
for(var i=0; i<(coloree.length) ; i++){
    coloree[i] = new Array(4);
}
for(var j=0 ; j<3 ;j++){
    diffcount[j]=0;
}
 function queschoices(question,choices,solution){
     this.question = question;
     this.choices = choices;
     this.solution = solution;
 }
 includeques.push(new queschoices("Place of origin" , ["India","China","Italy","Japan"] , "China"));
 includeques.push(new queschoices("Year of origin" , ["2020","2019","2018","2017"] , "2019"));
 includeques.push(new queschoices("Most effective way to save people" , ["Vaccines","Treatment","social distancing","antibiotics"], "social distancing"));
 includeques.push(new queschoices("Continents where COVID19 has not been detected yet" , ["Africa","Europe","Asia","Antartica"] , "Antartica"));
 includeques.push(new queschoices("How does the weather seem to affect the corona virus" , ["Not known","Destroyed at high temperatures","Destroyed at low temperatures","Temperature does not affect"] , "Not known"));
 includeques.push(new queschoices("What other viruses belong to coronavirus family" , ["MERS and HIV","HIV","Influenza","SARS and MERS"] , "SARS and MERS"));
 includeques.push(new queschoices("What percentage of people confirmed to have COVID19 , develop mild or moderate symptoms" , ["20%","40%","60%","80%"] , "80%" ));  
 includeques.push(new queschoices("How long does the novel corona virus survive on plastic" , ["one day","two days","three days","four days"] , "three days")); 
 includeques.push(new queschoices("Who's at highest risk of developing severe COVID19 disease" , ["Children","Adults","People over 60 years of age","Pregnant women"] , "People over 60 years of age"));
 includeques.push(new queschoices("Minimum distance to be maintained from a sick person" , ["1feet","2feet","3feet","4feet"] , "3feet"));

 var noofques = 0;
 document.getElementById("question").innerHTML = includeques[0].question;
    for(var i=0;i<4;i++){
     document.getElementById("newe"+(i+1)).style.backgroundColor="white";   
     document.getElementById("newe"+(i+1)).innerHTML = includeques[0].choices[i];  
     selectchoice("newe"+(i+1) , includeques[0].choices[i] , 0);}
document.getElementById("change").onclick = function(){
 noofques += 1;
    document.getElementById("question").innerHTML = includeques[noofques].question;
    for(var i=0;i<4;i++){
     document.getElementById("newe"+(i+1)).style.backgroundColor="white";   
     document.getElementById("newe"+(i+1)).innerHTML = includeques[noofques].choices[i];  
     selectchoice("newe"+(i+1) , includeques[noofques].choices[i] , noofques);
    }
    document.getElementById("change").innerHTML = "NEXT";
    if(diffcount[noofques]>0){
     for(var i=0;i<4;i++){
     document.getElementById("newe"+(i+1)).style.backgroundColor= coloree[noofques][i+1]; 
    } }
}
 function selectchoice(idofbut,txtselect,primaryno){
     var selection = document.getElementById(idofbut);
     selection.onclick = function(){
   if((txtselect == includeques[primaryno].solution) && (diffcount[primaryno]==0)){
       document.getElementById(idofbut).style.backgroundColor="green";
       for(var l=0 ; l<4 ; l++){
           if(document.getElementById("newe" + (l+1)).innerHTML ==  document.getElementById(idofbut).innerHTML){
                coloree[primaryno][l+1] = "green";
           }
           else{
             coloree[primaryno][l+1] = "white"; 
           }
       }
   }
   if((txtselect != includeques[primaryno].solution) && (diffcount[primaryno]==0)){
       document.getElementById(idofbut).style.backgroundColor="red";
       for(var k=0;k<4;k++){
           if(document.getElementById("newe" + (k+1)).innerHTML == includeques[primaryno].solution){
               var greencolore =  (k+1);
           }
       }
       document.getElementById("newe" + greencolore ).style.backgroundColor="green"; 
       for(var l=0 ; l<4 ; l++){
           if( document.getElementById("newe" + (l+1)).innerHTML ==  document.getElementById(idofbut).innerHTML){
                coloree[primaryno][l+1] = "red";
           }
           else if(document.getElementById("newe" + (l+1)).innerHTML == includeques[primaryno].solution){
             coloree[primaryno][l+1] = "green"; 
           }
           else if(( document.getElementById("newe" + (l+1)).innerHTML !=  document.getElementById(idofbut).innerHTML) && (document.getElementById("newe" + (l+1)).innerHTML != includeques[primaryno].solution)){
             coloree[primaryno][l+1] = "white";  
           }
       } 
   }
   diffcount[primaryno]++;
     }
 }
 document.getElementById("change1").onclick = function(){
     noofques -= 1;
    document.getElementById("question").innerHTML = includeques[noofques].question;
     if(diffcount[noofques]==0){
     for(var i=0;i<4;i++){
     document.getElementById("newe"+(i+1)).style.backgroundColor="white"; 
     document.getElementById("newe"+(i+1)).innerHTML = includeques[noofques].choices[i];  
     selectchoice("newe"+(i+1) , includeques[noofques].choices[i] , noofques);
    }
   }
   else{
     for(var i=0;i<4;i++){
     document.getElementById("newe"+(i+1)).style.backgroundColor= coloree[noofques][i+1]; 
     document.getElementById("newe"+(i+1)).innerHTML = includeques[noofques].choices[i];  
   //  selectchoice("newe"+(i+1) , includeques[noofques].choices[i] , noofques);
    }
   }
}    
function submit(){
 document.getElementById("actualques").style.display = "none";
 document.getElementById("resultdisplay").style.display = "block";
 var rightans;
 var wrongans=0;
 var unans=0;
 for(i = 0; i<10;i++){
 var q=0;    
 var b=0;    
     for(var j=1;j<=4;j++){
         if(coloree[i][j] == "red"){
           q++;
         }
         if(coloree[i][j] == "green"){
           b++;
         }
     }
    if(q>0){
        wrongans++;
    } 
    if((q==0)  && (b==0)){
        unans++;
    }
 }
 rightans = 10 - (wrongans + unans);
 document.getElementById("answeredques").innerHTML  = "NO OF QUES ANSWERED CORRECTLY: " + rightans;
 document.getElementById("wrongques").innerHTML  = "NO OF QUES ANSWERED WRONGLY: " + wrongans;
var finalscore = 5*(rightans) - wrongans;
document.getElementById("finalscore").innerHTML = "YOUR SCORE IS " + finalscore ; 

}          