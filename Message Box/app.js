(function(){
    const form = document.querySelector("#message_form")

    form.addEventListener('submit', function(e){
        e.preventDefault()

        const message = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const messagecontent = document.querySelector('.message_content')

        if(message.value === ''){
            feedback.classList.add('show')    // to use the css ,  we make use of classList
            setTimeout(function(){
            feedback.classList.remove('show')
            }, 4000)
        }
        else{
            messagecontent.textContent = message.value
            message.value = ''
        }
    })

})()