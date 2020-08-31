var count=0;
  var topscore=[];
  var gettname;
   var includeques0 = [];  
   var includeques = [];
   var diffcount = [];
   var coloree = new Array(10);
   for(var i=0; i<(coloree.length) ; i++){
       coloree[i] = new Array(4);
   }
   for(var j=0 ; j<10 ;j++){
       diffcount[j]=0;
   }
    function queschoices(question,choices,solution){
        this.question = question;
        this.choices = choices;
        this.solution = solution;
    }
    includeques0.push(new queschoices("Place of origin of corona virus" , ["India","China","Italy","Japan"] , "China"));
    includeques0.push(new queschoices("Year of origin of corona virus" , ["2020","2019","2018","2017"] , "2019"));
    includeques0.push(new queschoices("Most effective way to control the spread" , ["Vaccines","Awareness","Social distancing","Antibiotics"], "Social distancing"));
    includeques0.push(new queschoices("Continents where COVID19 has not been detected yet" , ["Africa","Europe","Asia","Antartica"] , "Antartica"));
    includeques0.push(new queschoices("How does the weather seem to affect the corona virus" , ["Not known","Destroyed at high temperatures","Destroyed at low temperatures","Temperature does not affect"] , "Not known"));
    includeques0.push(new queschoices("What other viruses belong to coronavirus family" , ["MERS and HIV","HIV","Influenza","SARS and MERS"] , "SARS and MERS"));
    includeques0.push(new queschoices("What percentage of people confirmed to have COVID19 , develop mild or moderate symptoms" , ["20%","40%","60%","80%"] , "80%" ));  
    includeques0.push(new queschoices("How long does the novel corona virus survive on plastic" , ["one day","two days","three days","four days"] , "three days")); 
    includeques0.push(new queschoices("Who's at highest risk of developing severe COVID19 disease" , ["Children","Adults","People over 60 years of age","Pregnant women"] , "People over 60 years of age"));
    includeques0.push(new queschoices("Minimum distance to be maintained from a sick person" , ["1feet","2feet","3feet","4feet"] , "3feet"));
    for(var i=0;i<10;i++)
{ var t = includeques0[Math.floor(Math.random() * includeques0.length)];
   includeques[i] = t;
   for (k=0; k<10; k++) 
    {  if (includeques0[k] == t) 
        { break;
        } 
    }
  includeques0.splice(k,1);
 }
 let secondCount = 0;
       let stopWatch;
       const displayPara = document.querySelector('.clock');
       let timenow;
    var noofques = -1;
    function displayCount() {
        
        let seconds = Math.floor(secondCount /100);
        let milli=Math.floor(secondCount);
        if(milli>=99)
        {
            milli=milli-(seconds*100);
        }
        
        
 timenow =seconds+"."+milli;
 displayPara.textContent = "TIME LEFT: " + (100-Number(timenow));
 if(Number(timenow) > 100){
    submit();
  }
        secondCount++;
      }
    document.getElementById("quizstart").onclick = function(){
       document.getElementById("fronthing").style.display = "none";
      gettname = document.getElementById("myform").elements.namedItem("fname").value;
      document.getElementById("actualques").style.display = "block";
      stopWatch = setInterval(displayCount, 10);
      document.body.style.backgroundImage = "url('corona3.jpg')";
      noofques += 1;
       document.getElementById("question").innerHTML = includeques[noofques].question;
       for(var i=0;i<4;i++){
        document.getElementById("newe"+(i+1)).style.backgroundColor="white";   
        document.getElementById("newe"+(i+1)).innerHTML = includeques[noofques].choices[i];  
        selectchoice("newe"+(i+1) , includeques[noofques].choices[i] , noofques);
       }
  }
   document.getElementById("change").onclick = function(){
    noofques += 1;
       document.getElementById("question").innerHTML = includeques[noofques].question;
       for(var i=0;i<4;i++){
        document.getElementById("newe"+(i+1)).style.backgroundColor="white";   
        document.getElementById("newe"+(i+1)).innerHTML = includeques[noofques].choices[i];  
        selectchoice("newe"+(i+1) , includeques[noofques].choices[i] , noofques);
       }
      // document.getElementById("change").innerHTML = "NEXT";
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
          document.getElementById(primaryno).style.backgroundColor="green";
          alert("CONGRATULATIONS , YOU HAVE ANSWERED IT RIGHT.")
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
          document.getElementById(primaryno).style.backgroundColor="red";
          alert("SORRY , YOU HAVE ANSWERED IT WRONG.")
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
   function sidebar(id){
var indexvar = id.getAttribute("id");
var indexvar1 = Number(indexvar);
document.getElementById("question").innerHTML = includeques[indexvar1].question;
       for(var i=0;i<4;i++){
        document.getElementById("newe"+(i+1)).style.backgroundColor="white";   
        document.getElementById("newe"+(i+1)).innerHTML = includeques[indexvar1].choices[i];  
        selectchoice("newe"+(i+1) , includeques[indexvar1].choices[i] , indexvar1);
       }
       document.getElementById("change").innerHTML = "NEXT";
       if(diffcount[indexvar1]>0){
        for(var i=0;i<4;i++){
        document.getElementById("newe"+(i+1)).style.backgroundColor= coloree[indexvar1][i+1]; 
       } }
       noofques = indexvar1;
  }
  
  function submit(){
    clearInterval(stopWatch);
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
    document.getElementById("playername").innerHTML  = gettname + "'s RESULT";
    document.getElementById("answeredques").innerHTML  = "NO OF QUES ANSWERED CORRECTLY: " + rightans;
    document.getElementById("wrongques").innerHTML  = "NO OF QUES ANSWERED WRONGLY: " + wrongans;
 var finalscore = 5*(rightans) - wrongans;
 if(timenow > 60){
   finalscore = finalscore - Math.floor((timenow/10)) + 5;
 }
 var currentidate = new Date();
 var newdaydate = currentidate.toString();
 currentdate = newdaydate.slice(0,24);
 document.getElementById("finalscore").innerHTML = "YOUR SCORE IS " + finalscore ; 
 localStorage.setItem(finalscore,"quizp");
 var addspace = "";
 for(i=0;i<(10-(gettname.length/1.65));i++){
addspace = "\xa0" + addspace;
 }
 var forstore=gettname + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+addspace + finalscore + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + currentdate;
 
 localStorage.setItem(forstore,finalscore);
 for( i=0; i<localStorage.length ;i++)
{var c=localStorage.key(i);
  if(localStorage.getItem(c)=="quizp")
  {topscore[count]=Number(localStorage.key(i));
  count++;
  }
}
var ks;
for( i=0; i<count ; i++)
  {
    for(j=i+1; j<count ; j++)
    {
      if((topscore[i]) < (topscore[j]))
      {
        ks=topscore[i];
        topscore[i]=topscore[j];
        topscore[j]=ks;
      }
    }
  }
  var top3score=0;
  var highscore = topscore[0];  
  var highscore1 = topscore[1];
  var highscore2 = topscore[2];
  for( i=0; i<localStorage.length ;i++)
{var c=localStorage.key(i);
  if((localStorage.getItem(c)==highscore) && (top3score<3) )
  {document.getElementById("information").innerHTML += c + "<br />";
  top3score++;
  }} 
if(top3score<3){
  for( i=0; i<localStorage.length ;i++)
{var c=localStorage.key(i);
  if(localStorage.getItem(c)==highscore1)
  {document.getElementById("information").innerHTML += c + "<br />";
  top3score++;
  }}}
  if(top3score<3){
  for( i=0; i<localStorage.length ;i++)
{var c=localStorage.key(i);
  if(localStorage.getItem(c)==highscore2)
  {document.getElementById("information").innerHTML += c + "<br />";
  top3score++;
  }}}  
  }