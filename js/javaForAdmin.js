'use strict';
var total = 0;
var femaleTotal = 0;
var maleTotal = 0;
var mathTotal = 0;
var scienceTotal = 0;
var englishTotal = 0;
var avg=0;


function Student(studentName, studentId, gender, parentId, mathMark, englishMark, scienceMark, feedBack, mathTotal, scienceTotal, englishTotal, avg) {
  this.studentName = studentName;
  this.studentId = studentId;
  this.gender = gender;
  this.parentId = parentId;
  this.mathMark = mathMark;
  this.englishMark = englishMark;
  this.scienceMark = scienceMark;
  this.feedBack = feedBack;
  this.mathTotal = mathTotal;
  this.scienceTotal = scienceTotal;
  this.englishTotal = englishTotal;
  this.avg = avg;
  //this total will holds the total of each subject
  this.CourseTotal = 0;
  Student.all.push(this);
}
// this is the array that contains each student that is added by the form
Student.all = [];
var STD = [];
var clicks = 0;
// var STD = [];
// global variables
var stdname = 0;
var studentId = 0;
var gender = 0;
var parentId = 0;
//first subject
var grade1 = 0;
var grade2 = 0;
var grade3 = 0;
var mathMark = [];
//second subjiect
var gradeE1 = 0;
var gradeE2 = 0;
var gradeE3 = 0;
var englishMark = [];
var feedBack = 0;
//third subject
var gradeS1 = 0;
var gradeS2 = 0;
var gradeS3 = 0;
var scienceMark = [];

var studentString;

// this function sent the students to the local storage
function updateStudent() {
  studentString = JSON.stringify(Student.all);
  localStorage.setItem("studentinfo", studentString);
}
// this function get the students from the local storage
function getStudent() {
  studentString = localStorage.getItem("studentinfo");
  if (studentString ) {
    Student.all = JSON.parse(studentString);
      makingHeader();
    ///---------------------------------------------------------------------------------------
    for (var b = 0; b < Student.all.length; b++) {
      var STDtable = document.getElementById("studentinfo");
      // this is student table data
      var data1 = document.createElement("tr");
      STDtable.appendChild(data1);
      var td = document.createElement('td');
      data1.appendChild(td);
      td.textContent = Student.all[b].studentName;
      var td2 = document.createElement('td');
      data1.appendChild(td2);
      td2.textContent = Student.all[b].studentId;
      var td3 = document.createElement('td');
      data1.appendChild(td3);
      td3.textContent = Student.all[b].gender;
      var td4 = document.createElement('td');
      data1.appendChild(td4);
      td4.textContent = Student.all[b].parentId;
      


      for (var i = 0; i < 3; i++) {

        var td5 = document.createElement('td');
        data1.appendChild(td5);
        td5.textContent = Student.all[b].mathMark[i];
        total = total + parseInt(mathMark[i]);
        mathTotal += parseInt(Student.all[b].mathMark[i])

      }

      for (var i = 0; i < 3; i++) {
        var td7 = document.createElement('td');
        data1.appendChild(td7);
        td7.textContent = Student.all[b].englishMark[i];
        total = total + parseInt(englishMark[i]);
        englishTotal += parseInt(Student.all[b].englishMark[i]);

      }

      for (var i = 0; i < 3; i++) {
        var td6 = document.createElement('td');
        data1.appendChild(td6);
        td6.textContent = Student.all[b].scienceMark[i]
        total = total + parseInt(scienceMark[i]);
        scienceTotal += parseInt(Student.all[b].scienceMark[i]);
      }

      var td8 = document.createElement("td");
      td8.textContent = Student.all[b].avg;
      data1.appendChild(td8);
      

      var td9 = document.createElement("td");
      data1.appendChild(td9);
      td9.setAttribute("border-collapse", " collapse");
      td9.textContent = Student.all[b].feedBack;



    }

    // STDtable.deleteRow(-1);


    //-----------------------------------------------------------------------------------------  
  }
}
// add event listner when clicking on submit 
var adminForm = document.getElementById("addStudent");
adminForm.addEventListener("submit", addstudent);
// this event fuction increase the clicks and call the header function and then get and store the values from the form 
function addstudent(event) {
  event.preventDefault();
  clicks++;
  if (clicks == 1 && !studentString) {
    makingHeader();
  }
  if (clicks >= 1) {
    stdname = event.target.stdname.value;
    studentId = event.target.stdID.value;
    gender = event.target.gender.value;
    parentId = event.target.prntID.value;
    var firtstSub = document.getElementById("math");
    //first subject
    grade1 = event.target.firstExam.value;
    grade2 = event.target.secondExam.value;
    grade3 = event.target.thirdExam.value;
    mathMark = [];
    mathMark.push(grade1, grade2, grade3);
    mathTotal = parseInt(grade1) + parseInt(grade2) + parseInt(grade3);

    //second subjiect
    gradeE1 = event.target.FirstExamEnglish.value;
    gradeE2 = event.target.secondExamEnglish.value;
    gradeE3 = event.target.ThirdExamEnglish.value;
    englishMark = [];
    englishMark.push(gradeE1, gradeE2, gradeE3);
    englishTotal = parseInt(gradeE1) + parseInt(gradeE2) + parseInt(gradeE3);

    feedBack = event.target.feedback.value;
    //third subject
    gradeS1 = event.target.firstExamScience.value;
    gradeS2 = event.target.secondExamScience.value;
    gradeS3 = event.target.ThirdExamScience.value;
    scienceMark = [];
    scienceMark.push(gradeS1, gradeS2, gradeS3);
    scienceTotal = parseInt(gradeS1) + parseInt(gradeS2) + parseInt(gradeS3);
    avg = ((mathTotal + englishTotal + scienceTotal)/3);
    // avg.push(avg);
  }
  STD = new Student(stdname, studentId, gender, parentId, mathMark, englishMark, scienceMark, feedBack, mathTotal, scienceTotal, englishTotal, avg);
  renderTable();
  updateStudent();
}
// this fuction creates header 
function makingHeader() {
  var STDtable = document.getElementById("studentinfo");
  var tr = document.createElement('tr');
  STDtable.appendChild(tr);
  var th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Student Name";
  var th1 = document.createElement("th");
  tr.appendChild(th1);
  th1.textContent = "Student ID";
  var th2 = document.createElement("th");
  tr.appendChild(th2);
  th2.textContent = "Gender";
  var th3 = document.createElement("th");
  tr.appendChild(th3);
  th3.textContent = "Parent ID";
  var th4 = document.createElement("th");
  th4.setAttribute("colspan", "3");
  tr.appendChild(th4);
  th4.textContent = "Math";
  var th5 = document.createElement("th");
  th5.setAttribute("colspan", "3");
  tr.appendChild(th5);
  th5.textContent = "English";
  var th6 = document.createElement("th");
  th6.setAttribute("colspan", "3");
  tr.appendChild(th6);
  th6.textContent = "Science ";
  var th7 = document.createElement("th");
  tr.appendChild(th7);
  th7.textContent = "Averge";
  var th8 = document.createElement("th");
  tr.appendChild(th8);
  th8.textContent = "FeedBack";
}
// this fuction creates the table
function renderTable() {
  // addstudent();
  // this is the table
  var STDtable = document.getElementById("studentinfo");
  // this is student table data
  var data1 = document.createElement("tr");
  STDtable.appendChild(data1);
  var td = document.createElement('td');
  data1.appendChild(td);
  td.textContent = STD.studentName;
  var td2 = document.createElement('td');
  data1.appendChild(td2);
  td2.textContent = STD.studentId;
  var td3 = document.createElement('td');
  data1.appendChild(td3);
  td3.textContent = STD.gender;
  var td4 = document.createElement('td');
  data1.appendChild(td4);
  td4.textContent = STD.parentId;
  var total = 0;
  //this is the for loop to get each mark in math subject
  for (var j = 0; j < mathMark.length; j++) {
    var td5 = document.createElement('td');
    data1.appendChild(td5);
    td5.textContent = STD.mathMark[j];
    mathTotal += parseInt(STD.mathMark[j]);
    total = total + parseInt(mathMark[j]);
  }
  mathTotal = parseInt(grade1) + parseInt(grade2) + parseInt(grade3);


  //this is the for loop to get each mark in english subject
  for (var d = 0; d < englishMark.length; d++) {
    var td6 = document.createElement('td');
    data1.appendChild(td6);
    total = total + parseInt(englishMark[d]);
    td6.textContent = STD.englishMark[d];
  }
  englishTotal = parseInt(gradeE1) + parseInt(gradeE2) + parseInt(gradeE3);


  //this is the for loop to get each mark in science subject
  for (var k = 0; k < scienceMark.length; k++) {
    var td7 = document.createElement('td');
    data1.appendChild(td7);
    td7.textContent = STD.scienceMark[k];
    total = total + parseInt(scienceMark[k]);
  }
  scienceTotal = parseInt(gradeS1) + parseInt(gradeS2) + parseInt(gradeS3);



  var td8 = document.createElement("td");
  data1.appendChild(td8);
  avg = ((mathTotal + englishTotal + scienceTotal)/3);
  td8.textContent = avg;
  // STDtable.deleteRow(-1);
  var td9 = document.createElement("td");
  data1.appendChild(td9);
  td9.setAttribute("border-collapse", " collapse");
  td9.textContent = feedBack;
  addStudent.reset();
  // this is to count the number of female students
  if (gender === 'Male') {
    maleTotal++;
  }
  else if (gender === 'Female') {
    femaleTotal++;
  }
}


getStudent();



// getting the chart section to show statistics
var statistics = document.getElementById("showstatistics");
statistics.addEventListener("click", function (event) {
  event.preventDefault();
  renderChart();
});
// this the first chart for the gender  and it will shown as Pie
function renderChart() {
  var ctx = document.getElementById('genderChart').getContext('2d');
  var gendertChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [
          femaleTotal,
          maleTotal,
        ],
        backgroundColor: [
          '#400D16',
          'lightgray'
        ],
        label: 'Dataset 1'
      }],
      labels: [
        'female',
        'male'
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gender Chart'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });

}