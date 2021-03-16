
//auto counting numbers
const countingNumber1 = document.querySelector(".countingNumbers1")
const countingNumber2 = document.querySelector(".countingNumbers2")
const countingNumber3 = document.querySelector(".countingNumbers3")
const countingNumber4 = document.querySelector(".countingNumbers4")

//1st counting number
let count1 = 0
let count1Interval = setInterval( () => {
 count1++
 if(count1 > 189){
     clearInterval(count1Interval)
 }

 countingNumber1.innerHTML = `${count1}`
},10)


//2nd counting number
let count2 = 0
let count2Interval = setInterval( () => {
    count2++
    if(count2 > 61){
        clearInterval(count2Interval)
    }

    countingNumber2.innerHTML = `${count2}`
},35)


//3rd counting number
let count3 = 0
let count3Interval = setInterval( () => {
    count3++
    if(count3 > 53){
        clearInterval(count3Interval)
    }

    countingNumber3.innerHTML = `${count3}`
},35)


//4th counting number
let count4 = 0
let count4Interval = setInterval( () => {
    count4++
    if(count4 > 37){
        clearInterval(count4Interval)
    }

    countingNumber4.innerHTML = `${count4}`
},50)



//search popUP 
const searchPopUp = document.querySelector('.search_pop_up')
const searchIcon = document.querySelector('.fa-search-location')
const backDrop = document.querySelector('.backdropBlack')
const closebtn = document.querySelector('.closeBtn')

searchIcon.addEventListener('click', () => {
    searchPopUp.classList.add('activePopup')
    backDrop.classList.add('activeBackDrop')
})
closebtn.addEventListener('click',() => {
    searchPopUp.classList.remove('activePopup')
    backDrop.classList.remove('activeBackDrop')
})