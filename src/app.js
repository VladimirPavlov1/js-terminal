// 1 завдання

// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

// console.log(galleryItems);


// import SimpleLightbox from "simplelightbox";

// import "simplelightbox/dist/simple-lightbox.min.css";

// const bodyEl= document.querySelector('body')
// const galleryList =document.querySelector('.gallery')
// const markupEl=markupElemGallery(galleryItems)

// galleryList.insertAdjacentHTML('beforeend',markupEl)

// function markupElemGallery(galleryItems){
    
//     return galleryItems.map(({preview,original,description})=>{
//     return`
//     <div class="gallery">
//         <a class="gallery__item" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 alt="${description}"
//                 title="${description}"
//             />
//         </a>
//     </div>`;   
// }).join('');
// }


// // const linkEl=document.querySelector('.gallery__link');
// // const imgEl=document.querySelectorAll('.gallery__image')
// galleryList.addEventListener('click',onDivGalleryClick)
// let gallery = new SimpleLightbox('.gallery__item');
// console.log(gallery)

// function onDivGalleryClick(event){
//     event.preventDefault()


//    if(event.target.nodeName!=='IMG'){
//     return
//    }
//    gallery.options.captionDelay=250;
//    gallery.options.animationSpeed=350;
   
// }




// 2 завдання

// var throttle = require('lodash.throttle');
// const iframe = document.querySelector('iframe');
// console.dir(iframe)
// const player = new Vimeo.Player(iframe)
// console.log(player)
// player.on('timeupdate',throttle(function(data) {
//     data.preventDefault
//     let currentTime = data.seconds
//     console.log(currentTime)
//     localStorage.setItem('videoplayer-current-time',currentTime)
  
// },1000));
// let localCurrentTime =Number(localStorage.getItem("videoplayer-current-time"))
// console.log(localCurrentTime)

// player.setCurrentTime(localCurrentTime).then(function(seconds) {
//     seconds=localCurrentTime
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             localCurrentTime<0;
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


// 3 завдання
// var throttle = require('lodash.throttle');

// const refs ={
//     form:document.querySelector('.feedback-form'),
//     textarea:document.querySelector('textarea'),
//     input:document.querySelector('input'),
// }

// refs.form.addEventListener('input',throttle(onFormInput,2000));
// refs.form.addEventListener('submit',onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);
// refs.input.addEventListener('input',onInputInput);

// console.dir(refs.input)


// const formData={};
// console.log(formData)

// function onFormSubmit(evt){
//     evt.preventDefault();
//     evt.currentTarget.reset()
//     localStorage.removeItem('feedback-form-state')
   
    
   
// }

// function onTextareaInput(evt){
//     console.dir(evt.currentTarget.value)
    
   
// }

// function onInputInput(evt){
//     console.log(evt.currentTarget.value)
// }



// function onFormInput(evt){
//     formData[evt.target.name]=evt.target.value;
//     localStorage.setItem('feedback-form-state',JSON.stringify(formData));

// }
// fillMessageForm();
// function fillMessageForm(){
//     const getMessage= localStorage.getItem('feedback-form-state')
//     if(getMessage){
//     const fillMessage= JSON.parse(getMessage);
//     console.log(fillMessage)
//     if(fillMessage.email){
//     refs.input.value=fillMessage.email}
//     if(fillMessage.message){
//     refs.textarea.value =fillMessage.message;}}

// }

// const refs = {
//     startBtn:document.querySelector('button[data-start]'),
//     stoptBtn:document.querySelector('button[data-stop]'),
//     bodyEl:document.querySelector('body'),
// }
// console.log(refs)
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }

//   refs.startBtn.addEventListener('click',onStartBtnClick);
//   refs.stoptBtn.addEventListener('click', onStopBtnClick);
//   let intervalId=null;
//   console.dir(refs.startBtn)
  
//   function onStartBtnClick(){
//     intervalId=setInterval(()=>{
//     refs.bodyEl.style.backgroundColor=getRandomHexColor();
//     console.log('click');
//     refs.startBtn.disabled = true},1000);
//   }

//   function onStopBtnClick(){
//     console.log("тиць")
//     clearInterval(intervalId);
//     refs.startBtn.disabled = false
  // }

  // const promise = new Promise((resolve,reject)=>{
  //   const canFullfilled=Math.random()>0.5
  //   setTimeout(()=>{
  //     if(canFullfilled){
  //     resolve('Проміс виконався успішно')
  //     }

  //     reject('Проміс виконався з помилкою')},2000)
    
  // })

  // promise.then(
  //   result=>{
  //     console.log('Проміс виконався успішно')
  //   },
  //     error=>{
  //       console.log('Проміс виконався успішно')
  //     },
  //   )

  // console.log(promise)

  // const p= new Promise((result,reject)=>{})


// function countPositivesSumNegatives(input){
    // your code here
  //   let count=0;
  //   let sum=0;
  //   if(input!==[0]||input!==[]){
  //     for(let i=0;i<input.length;i+=1)
  //       if(input[i]>0){
  //         console.log(input[i])
  //         count+=1
  //       }
  //       else if(input[i]<0){
  //         sum+=input[i]
  //         console.log(input[i])
  //       }
  //     return [count,sum]
    
  // }
  
  // }

  // const input = [0];

  // console.log(countPositivesSumNegatives(input))

  
  // function squareSum(numbers){
    
  //  const total= numbers.reduce((acc, number) => {return acc+ number**2}, 0);
  //  return total;
  // }


  // const numbers=[1,2,2]
  // console.log(squareSum(numbers))
  

  // API погода cd1169ad9fd243b3be5160337222211

// const formEl=document.querySelector('.search')
// console.log(formEl)
// const listEl= document.querySelector('.list')
// console.log(listEl)
// formEl.addEventListener('submit',onFormSubmit);

// function onFormSubmit(evt){
//   evt.preventDefault();
  
//   console.dir(evt.currentTarget)
//   const {days:{value:daysValue},search:{value:searchValue}} = evt.currentTarget.elements;
//   console.log(daysValue,searchValue)

//   if(!searchValue){
//     alert('Поле пусте😒');
//     return;
//   }
//   forecastApi(searchValue,daysValue).then(data=>
    
//     createMarkup(data.forecast.forecastday))
// }

// const BASE_URL='https://api.weatherapi.com/v1/forecast.json';
// const API_KEY='cd1169ad9fd243b3be5160337222211'

// function forecastApi(name="Kiev",days){
//   return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=${days}&lang=uk`)
  
//   .then(resp=>{
//     console.log(resp)
//   if(!resp.ok){
//     throw new Error(resp.statusText)
//   }
//   return resp.json()
// })

// .catch(err=>console.error(err))
// }


// function createMarkup(arr){
//   const markUp=arr.map(item=>`<li class='item'>
//   <img src="${item.day.condition.icon}" alt="">
//   <span>${item.day.condition.text}</span>
//   <h2>День: ${item.date}</h2>
//   <h3>Температура:${item.day.avgtemp_c}&#8451;
//   </h3>
//   </li>`).join('');
//   listEl.innerHTML=markUp;
// }

// Функція що знаходить мінімальне та максимальне число


// const arr=[5]        

// const min = function(list){
//   let count=list[0];
//  for(let i=0; i<list.length;i+=1){
//   if(count >=list[i]){
//     count=list[i]
//   }
//  }

  
//   return count
// }
// const max = function(list){
  
//   let count=list[0];
//   for(let i=0; i<list.length;i+=1){
//    if(count <=list[i]){
//      count=list[i]
//    }
//   }



   
//    return count
// }

// const min=function(list)=>Math.min(...list)
// console.log(min(arr))
// console.log(max(arr))


console.log('hello')

// abbrevName("Evan Cole"), "E.C")

const arr ="HxXBqNwiyAccop QKYpmZCiiA";

// function  abbrevName(name){
//   const newArr=name.split(' ')
//   let firstWord=newArr[0];
//   let secondWord=newArr[1];
//   let abbrevArr=[];
 
  
 
//   abbrevArr.push(firstWord[0],secondWord[0])
 
//   newString=abbrevArr.join('.')
  
//   return newString
// }
// 1.Ділимо на 2 слова.
// 2. Приводимо до масиву
// 2.Забираємо 1 букви
// зшиваємо 2 масиви


// function  abbrevName(name){
//  const letters= name.split('')
//  let newArr=[];
//  let newString='';
 
//  for(const letter of letters){
 
//   if(letter!==' '&&letter===letter.toUpperCase()){
//     newArr.push(letter)
//   }
  
//  }
//  newString=newArr.join(".")
//  return newString
// }


// console.log(abbrevName(arr))


