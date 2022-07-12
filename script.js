
let main = document.getElementById('main_character');

let x = 64
 let y = 0
 let angle = screen && screen.orientation && screen.orientation.angle
document.addEventListener('orientation',()=>{
    if(angle == 0){
        alert('画面を横にしてください')

    }
})

document.addEventListener('keydown',(e)=>{
//タイトルを変えて遊びたい!!
 document.title = `Create games [${e.key}]`;



if(e.key == 'd' || e.key == 'ArrowRight'){
    
    x = x + 64
    main.style.cssText = `left:${x}px`
    console.log(x)
}
if(e.key == 'a' || e.key == 'ArrowLeft'){
    if(x-64 > 0 ){x = x - 64}
    main.style.cssText = `left:${x}px`
    console.log(x)
}

})

