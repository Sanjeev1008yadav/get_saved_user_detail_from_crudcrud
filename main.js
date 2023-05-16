

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


const data =axios.get("https://crudcrud.com/api/27bc96b65af74c33b930d1b07e52fdaa/appointmentData").then((response) => {
    console.log(response)

    for(var i=0 ; i<response.data.length ; i++){
       
    }
})
.catch((error)=>{
    console.log(error)
})






myForm.addEventListener('submit' , onSubmit);
function onSubmit(e){
    e.preventDefault();
   


 if(nameInput.value === '' || emailInput.value === '') {
   
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
      

        

        userList.appendChild(li);
      

        
        
        const obj = {
            
            nameInput:nameInput.value,
            emailInput:emailInput.value,
              

           
            
        }
        

        axios.post("https://crudcrud.com/api/27bc96b65af74c33b930d1b07e52fdaa/appointmentData" ,obj).then((response)=>{
            // showNewUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err)=>{
            // document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong</h4>"
            console.log(err)
        })
        // localStorage.setItem( obj.emailInput , JSON.stringify(obj));
      
      
        // clear fields
        
            
        nameInput.value = '';
        emailInput.value = '';
    
    const deleteButton = document.createElement('input')
        deleteButton.type = "Button"
        deleteButton.value = 'Delete'
        li.appendChild(deleteButton)
        // userList.appendChild(li)
        deleteButton.onclick = () => {
            localStorage.removeItem(obj.emailInput)
            userList.removeChild(li);

       
       
        }
    
        const editButton = document.createElement('input')
        editButton.type = "Button"
        editButton.value = 'edit'
        li.appendChild(editButton)        
        editButton.onclick = () => {
            localStorage.removeItem(obj.emailInput)
            userList.removeChild(li);
            document.getElementById('name').value = obj.nameInput
            document.getElementById('email').value = obj.emailInput

        }

        
            

        
        }


}
