let count = document.querySelector('.count p')

document.querySelector('#lower')
   .addEventListener('click', () => {
      count.innerText = parseInt(count.innerText) - 1
      if (parseInt(count.innerText) < 0) {
         alert('You have reached the bottom limit of 0')
         count.innerText = 0
      }

      //incase users mess with the developer tools
      if (parseInt(count.innerText) > 50) {
         alert('You have reached the upper limit of 50')
         count.innerText = 50
      }
   })

document.querySelector('#add')
   .addEventListener('click', () => {
      count.innerText = parseInt(count.innerText) + 1
      if (parseInt(count.innerText) > 50) {
         alert('You have reached the upper limit of 50')
         count.innerText = 50
      }
      //incase users mess with the developer tools
      if (parseInt(count.innerText) < 0) {
         alert('You have reached the bottom limit of 0')
         count.innerText = 0
      }
   })






   // let buttons = Array.from(document.querySelectorAll('button'))
   // let selectStuff = document.querySelector('.select-stuff')
   // let autoStuff = document.querySelector('.auto-stuff')
   // let autoInput = document.querySelectorAll('[name=direction]')
   // let selectInput = document.querySelector('#select-input')
   // let submitBtn = Array.from(document.querySelectorAll('aside button'))
   // let selectStuff = document.querySelector('.count p')
// document.querySelector('#reset')
//   .addEventListener('click', () => {
//      count.innerText = 8
//   })

// document.querySelector('#auto')
//    .addEventListener('click', () => {
//       autoStuff.classList.add('show')
//       document.body.classList.add('hide')
//       submitBtn[0].addEventListener('click', () => {
//          autoStuff.classList.remove('show')
//          document.body.classList.remove('hide')
//          let timerst = setInterval(() => {
//             if (autoInput[0].checked) {
//                count.innerText = parseInt(count.innerText) + 1
//             } else {
//                count.innerText = parseInt(count.innerText) - 1
//             }
//             if (parseInt(count.innerText) < 0) {
//                alert('You have reached the bottom limit of 0')
//                count.innerText = 0
//                clearInterval(timerst)

//             } else if (count.innerText > 50) {
//                count.innerText = 50
//                alert('You have reached the upper limit of 50')
//                clearInterval(timerst)
//             }
//             buttons.forEach(button => {
//                button.addEventListener("click", () => clearInterval(timerst))
//             })
//          }, 500)
//       })
//    })


// document.querySelector('#select').addEventListener('click', () => {
//    selectStuff.classList.add('show')
//    document.body.classList.add('hide')
//    selectInput.value = 0
//    selectInput.addEventListener('change', (e) => {
//       selectInput.value = e.target.value
//       if (e.target.value > 50) {
//          selectInput.value = 50
//       }
//       if (e.target.value < 0) {
//          selectInput.value = 0
//       }
//       if (e.target.value === "") {
//          selectInput.value = 0
//       }
//    })
//    submitBtn[1].addEventListener('click', () => {
//       selectStuff.classList.remove('show')
//       document.body.classList.remove('hide')
//       count.innerText = selectInput.value
//    })
// })