const emailInput = document.getElementById('input-email');
const dropdown = document.getElementById('material');
const datepicker = document.getElementById('datepicker');
const quantity = document.getElementById('quantity');


const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

emailInput.addEventListener('input', () => {

    const email = emailInput.value;

        if (validateEmail(email)) {
            // Валидный Email
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
        } else {
            // Невалидный Email
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
        }
});

datepicker.addEventListener('input',() => {
    
    const date = datepicker.value;

    if (validateDate(date)) {
            // Валидный Email
            datepicker.classList.remove('invalid');
            datepicker.classList.add('valid');
        } else {
            // Невалидный Email
            datepicker.classList.remove('valid');
            datepicker.classList.add('invalid');
        }
});

document.getElementById("e-mail-button").onclick = function() {
    
    if( validateEmail(emailInput.value)){
        submit(`${emailInput.value} - подписался на рассылку`)
    } else {
        toastBootstrap.show()
        showToast("Не удалось",false);
    }
}

document.getElementById("form-button").onclick = function() {

    if( validateDate(datepicker.value)){
    submit(`Город: ${material.value} \nДата поездки: ${datepicker.value} \nУчастников: ${quantity.value}`
    )}
    else {
        toastBootstrap.show()
        showToast("Не удалось",false);
    }
}


function submit (data = null) {

    if(!data) return false
    
    const token = '6849282604:AAHSsHYnfI9hpOmoiB8sD8vw-hBK7gRZJ_Y';
    const chatId = '-4118309344';
    const message = data;

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, { method: 'POST'})
    .then(response => response.json())
        .then(data => {
            if(data.ok) {
                showToast('Успешная отправка',true);
            }
        })
        .catch(error => console.error('Error:', error));
}


function showToast(msg,validate){
    document.querySelector("#liveToast .toast-body").innerHTML = msg
                
    if (validate){
        toastLiveExample.classList.remove('bg-danger');
        toastLiveExample.classList.add('bg-success');
    } else {
        toastLiveExample.classList.add('bg-danger');
        toastLiveExample.classList.remove('bg-success');  
    }
        toastBootstrap.show()
}
    