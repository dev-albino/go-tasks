const modal = document.getElementById('modal');
const alertElement = document.getElementById('alert');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');
btnCreateTask.addEventListener("click", createTask);

function createTask(e){
    e.preventDefault();
    if(!inputDate.value || !inputDescription.value){
        alertElement.style.display = "block";
        closeAlert();
        return;
    }
    const newTask = {
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString("pt-BR", {timeZone: "UTC"}),
        id: Math.floor(Math.random() * 10000)
    }
    const allTasks = getTasks();
    setTasks([...allTasks, newTask]);
    reload();
    toggleModal();
    clearFields();
}

function toggleModal() {
    modal.classList.toggle('modal-visible');
    clearFields();
}

function clearFields() {
    inputDate.value = "";
    inputDescription.value = "";
}

function closeAlert(){
    setTimeout(() => {
        alertElement.style.display = "none";
        
    }, 2000);
}