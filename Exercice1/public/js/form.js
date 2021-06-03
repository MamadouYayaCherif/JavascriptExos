
var selectedRow = null;

function oneformSubmit() {
 
    var formDate =readFromData();
    if(selectedRow == null){
        inserNewRecord(formDate);
        
    }else{
        editStudentByName(formDate);
    }
    clsForm();
    selectedRow = null;
}

function readFromData() {
    var formDate ={};
    N1= parseFloat(document.getElementById("Vone").value);
    N2 = parseFloat(document.getElementById("Vtwo").value);
    Name = document.getElementById("NameS").value;
    subject = document.getElementById("subjectType").value;
    formDate["NameS"] = Name;
    formDate["subjectType"] = subject;
    formDate["Vone"] = N1;
    formDate["Vtwo"] = N2; 
    if (N1 <  0 || N1 > 100 || N2 < 0 || N2> 100)
    {
        alert(' Becarful the with the value of the Mark');
        return null;
    }
   
    return formDate;
}

function inserNewRecord(data) {
    var table = document.getElementById("SubjectList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.NameS;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.subjectType;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Vone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Vtwo;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = (data.Vtwo + data.Vone) / 2;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = gradeCalculation((data.Vtwo + data.Vone) / 2);
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = '<a onclick="onEdit(this)"> Edit </a> // <a onclick="onDelete(this)"> Delete </a>';
}

function onEdit(student) {
    selectedRow = student.parentElement.parentElement;
    document.getElementById("NameS").value = selectedRow.cells[0].innerHTML;
    document.getElementById("subjectType").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Vone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Vtwo").value = selectedRow.cells[3].innerHTML;
    
}

function clsForm(){
    document.getElementById("NameS").value = "";
    document.getElementById("subjectType").value = "";
    document.getElementById("Vone").value = "";
    document.getElementById("Vtwo").value = "";
}

function editStudentByName(student) {
    som = (student.Vone + student.Vtwo)/2;
    selectedRow.cells[0].innerHTML = student.NameS;
    selectedRow.cells[1].innerHTML = student.subjectType;
    selectedRow.cells[2].innerHTML = student.Vone;
    selectedRow.cells[3].innerHTML = student.Vtwo;
    selectedRow.cells[4].innerHTML = som
    selectedRow.cells[5].innerHTML = gradeCalculation(som)
}
function onDelete(student) {
    if(confirm("Are you sure to delete this record ?")){
        row = student.parentElement.parentElement;
        document.getElementById("SubjectList").deleteRow(row.rowIndex);
        clsForm();
    }
}

function gradeCalculation(som){
    if(som >= 80 && som <= 100){
        return "A";
    }
    if(som >= 70 && som <= 79){
        return "B";
    }
    if(som >= 60 && som <= 69){
        return "C";
    }
    if(som >= 50 && som <= 59){
        return "D";
    }
    if(som >= 40 && som <= 49){
        return "E";
    }
    if(som >= 0 && som <= 39){
        return "F";
    }
}