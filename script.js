const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let aaa = document.getElementById('aaa').value;
    let attendance = document.getElementById('attendance').value;
    let grades = "";
  
    // Convert attendance to number and validate
    let attendancePercent = parseFloat(attendance);
    if (isNaN(attendancePercent) || attendancePercent < 0 || attendancePercent > 100) {
      alert("Please enter a valid attendance percentage between 0 and 100");
      return;
    }
  
    let totalGrades = (parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy) + parseFloat(aaa)).toFixed(2);
    let perc = (((totalGrades/750) * 100).toFixed(2));
    
    // Set grades based on percentage
    if(perc <= 100 && perc >= 90){
      grades = 'S';
    } else if(perc <= 89 && perc >= 75){
      grades = 'A+';
    } else if(perc <= 74 && perc >= 60){
      grades = 'B+';
    } else {
      grades = 'F';
    }
  
    // Handle attendance status
    let attendanceStatus = document.getElementById('attendanceStatus');
    if(attendancePercent < 75) {
      attendanceStatus.innerHTML = "Warning: Attendance below 75% may affect final results";
      attendanceStatus.className = "attendance-status attendance-warning";
    } else {
      attendanceStatus.innerHTML = "Attendance is satisfactory";
      attendanceStatus.className = "attendance-status attendance-good";
    }
  
    // Final result calculation (considering both grades and attendance)
    let isPassing = perc >= 39.5 && attendancePercent >= 75;
    
    document.getElementById('showData').innerHTML = 
      `Out of 750 your total is ${totalGrades} and percentage is ${perc}%. 
       <br> Your grade is ${grades}. 
       <br> Your attendance is ${attendancePercent}%`;
    
    document.getElementById('result').innerHTML = isPassing ? 'PASS' : 'FAIL';
  }
  