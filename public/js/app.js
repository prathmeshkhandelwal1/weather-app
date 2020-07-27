const form = document.querySelector('form')
const input = document.querySelector('input')
const messegeOne = document.getElementById('messegeOne')
const messegeTwo = document.getElementById('messegeTwo')



form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = input.value
    messegeOne.textContent = 'loading..';
    fetch('/weather?address='+ location)
    .then(res=> res.json())
    .then(data=>{
        if(data.error){
            console.log(data.error)
            messegeOne.textContent = data.error
            messegeTwo.textContent = '';
        }else{
            messegeOne.textContent = data.location;
            messegeTwo.textContent = data.forecast;
        }
    }
    )

    // console.log(location)
})