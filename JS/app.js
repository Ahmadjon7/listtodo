'use strict'

const elForm = document.querySelector('#wrapper-form'),
      elImport = document.querySelector('.text-deker'),
      elInput = document.querySelector('#wrapper-input'),
      elMark = document.querySelector('#wrapper-mark'),
      elDelet = document.querySelector('#btn-delet'),
      elList = document.querySelector('.intro-list');



    
    elInput.addEventListener('focus',()=>{
        if(!elInput.value == 0){
            console.log('hello world')
        }else{
            elMark.classList.add('visibility')
        }
    })
    elMark.addEventListener('click',()=>{
        elInput.value = ''
    })
    elForm.addEventListener('submit',todo)

    function todo(e){
        e.preventDefault()
        const elValue = elInput.value
        if(elValue.trim().length == ''){
            elImport.innerHTML = 'Please fill in the input'
        }else{
            const item = document.createElement('li')
            item.className = 'intro-item'
            item.innerHTML = `<div class="wrapper-btns mt-2">
            <div class="btn btn-success text-white"><i class="fa-solid fa-circle-check"></i>Complate</div>
            <div class="btn btn-warning text-white"><i class="fa-solid fa-pen-to-square"></i>Edit</div>
            <div class="btn btn-info text-white"><i class="fa-solid fa-clock"></i>09:20:20</div>
            <div class="btn btn-danger text-white"><i class="fa-solid fa-trash-can"></i>Delete</div>
        </div>`
            const text = document.createElement('p')
            text.className = 'text-success intro-text'
            text.innerText = elValue
            item.appendChild(text)
            elList.appendChild(item)
            elInput.value = ''
            elImport.innerHTML = ''
            elMark.classList.remove('visibility')
        }


    }

    elDelet.addEventListener('click',()=>{
        const confirmLengt = confirm('Ishonchingiz komilmi hammsi ochirib tashlashga')
        if(confirmLengt === true){
            elList.innerHTML = ''

        }
        elImport.innerHTML = ''
        elInput.value = ''
    })
    