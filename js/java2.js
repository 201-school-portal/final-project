'use strict';


var Students =[];
function Student (studentName,studentId,gender,parentId,mathMark,englishMark ,scienceMark, feedBack){
    this.studentName=studentName;
    this.studentId=studentId;
    this.gender=gender;
    this.parentId=parentId;
    this.mathMark=mathMark;
    this.englishMark=englishMark;
    this.scienceMark=scienceMark;
    this.feedBack=feedBack;
    //this total will holds the total of each subject
    this.CourseTotal=0;
    Students.push(this);
    }

// this is the array that contains each student that is added by the form

var STDtable =document.getElementById("studentinfo");

var STD=[];
var adminForm = document.getElementById("addStudent");
 adminForm.addEventListener("submit", addstudent);
 function makingHeader(){
  var tr=document.createElement('tr');
  STDtable.appendChild(tr);
  var th= document.createElement("th");
  tr.appendChild(th);
  th.textContent= "studnet Name";
  var th1= document.createElement("th");
  tr.appendChild(th1);
  th1.textContent= "studnet ID";
  var th2= document.createElement("th");
  tr.appendChild(th2);
  th2.textContent= "Gender";
  var th3= document.createElement("th");
  tr.appendChild(th3);
  th3.textContent= "Parent ID";
  var th4= document.createElement("th");
  th4.setAttribute("colspan", "3");
  tr.appendChild(th4);
  th4.textContent= "Math";
  var th5= document.createElement("th");
  th5.setAttribute("colspan", "3");

  tr.appendChild(th5);
  th5.textContent= "English";
  var th6= document.createElement("th");
  th6.setAttribute("colspan", "3");

  tr.appendChild(th6);
  th6.textContent= "sience ";
  var th7= document.createElement("th");
  tr.appendChild(th7);
  th7.textContent= "Averge";
  var th8= document.createElement("th");
  tr.appendChild(th8);
  th8.textContent= "FeedBack";


    }
    makingHeader();
 function addstudent(event){
 event.preventDefault();


 var stdname = event.target.stdname.value;
 console.log(stdname);
 var gender =event.target.gender.value;
 console.log(gender);
 var studentId = event.target.stdID.value;
 console.log(studentId);
 var parentId =event.target.prntID.value;
 console.log(parentId);
 var firtstSub=document.getElementById("math");
console.log(firtstSub);
//first subject
 var grade1=event.target.firstExam.value;
 console.log("fff",grade1);
 var grade2=event.target.secondExam.value;
 console.log("fff",grade2);
 var grade3=event.target.thirdExam.value;
 console.log("fff",grade3);
 var mathMark=[];
 mathMark.push (grade1,grade2,grade3);
 console.log(mathMark,"mathmark");
//second subjiect
var gradeE1=event.target.FirstExamEnglish.value;
 console.log("fff",gradeE1);
 var gradeE2=event.target.secondExamEnglish.value;
 console.log("fff",gradeE2);
 var gradeE3=event.target.ThirdExamEnglish.value;
 console.log("fff",gradeE3);
 var englishMark=[];
 englishMark.push (gradeE1,gradeE2,gradeE3);
 console.log(englishMark,"englishmark");
 var feedBack = event.target.feedback.value;
 console.log(feedBack);

 //third subject 
 var gradeS1=event.target.firstExamScience.value;
 console.log("fff",gradeS1);
 var gradeS2=event.target.secondExamScience.value;
 console.log("fff",gradeS2);
 var gradeS3=event.target.ThirdExamScience.value;
 console.log("fff",gradeS3);
 var scienceMark=[];
 scienceMark.push (gradeS1,gradeS2,gradeS3);
 console.log(scienceMark,"scienceMark");

 
  STD = new Student (stdname,gender,studentId,parentId,mathMark,englishMark,scienceMark, feedBack); 
  //this is the table 
  console.log('rrrrrrr',STD.studentName);
  var STDtable =document.getElementById("studentinfo");
 // this is student table data
  // for (let student = 0; student < STD.length; student++) {
   
var data1=document.createElement("tr");
STDtable.appendChild(data1);
  var td=document.createElement('td');
  data1.appendChild(td);
  td.textContent=STD.studentName;
  console.log(STD.studentName);
  var td2=document.createElement('td');
  data1.appendChild(td2);
  td2.textContent=STD.gender;
  var td3=document.createElement('td');
  data1.appendChild(td3);
  td3.textContent=STD.studentId;
  var td4=document.createElement('td');
  data1.appendChild(td4);
  td4.textContent=STD.parentId;
  var total=0;

  //for math
  for (var i = 0 ; i <mathMark.length ; i++){
  var td5=document.createElement('td');
  data1.appendChild(td5);
  td5.textContent=STD.mathMark[i];
  total=total+parseInt( mathMark[i]);

}
  for (var j = 0 ; j <englishMark.length ; j++){
    var td6=document.createElement('td');
    data1.appendChild(td6);
    total=total+parseInt( englishMark[j]);

    td6.textContent=STD.englishMark[j];

  }
  //for science 
  for (var k = 0 ; k <scienceMark.length ; k++){
    var td7=document.createElement('td');
    data1.appendChild(td7);
    td7.textContent=STD.scienceMark[k];
    total=total+parseInt( scienceMark[k]);
  }
  console.log(total , "total");

var td8=document.createElement("td");
data1.appendChild(td8);
td8.textContent=total/3;
// STDtable.deleteRow(-1); 
var td9=document.createElement("td");

data1.appendChild(td9);
td9.setAttribute("border-collapse"," collapse");

td9.textContent=feedBack;


  
 }

// function creatingChart()
// {
//   var femaleCounter=0;
//   var maleCounter=0;
//   console.log(Students.gender,"jkm");
//   // if(gender=="female")
//   // {
//   //   femaleCounter++;}
//   //   else {}
//   //   maleCounter++;
//   // }
//   var ctx = document.getElementById('genderChart').getContext('2d');
//   var genderChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: [5,4],
//     backgroundColor: black,

// });
// creatingChart();
// }