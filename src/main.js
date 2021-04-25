import './reset.css'
// import './style.css'
import str from './css'


if (/(iPhone|iPad|iPod|iOS|(Android))/i.test(navigator.userAgent)) { //移动端
    // if(spongeBob)spongeBob.classList.add('mobile-scale')
}


let n  = 0


// const style = document.getElementById('style')
// const html = document.getElementById('html')
// style.textContent = str
// html.textContent = str

const player  = {
    id : undefined,
    n : 1 ,
    speed : 20,
    content : '',
    ui:{
      html:document.querySelector('#html'),
      style :document.querySelector('#style')
    },
    events : {
        '#pause':'pause',
        '#play':'play',
        '#slowly':'slowly',
        '#middle':'middle',
        '#fast':'fast',
    },
    init(){
        Object.keys(player.events).forEach(key=>{
            document.querySelector(key).addEventListener('click',player[player.events[key]])
        })

        player.play()

    },
    play(){
        window.clearInterval(player.id)
        player.id =setInterval(player.run,player.speed)
    },
    run(){

        if(n===str.length-1){
            console.log(str.length)
            window.clearInterval(player.id)
            return

        }
        if(str[n] === '\n'){
            player.content += '<br>'
        }else if(str[n]=== ' '){
            player.content+='&nbsp'
        } else {
            player.content += str[n]
        }

        player.ui.style.innerHTML = str.substr(0,n)
        player.ui.html.innerHTML = player.content

        player.ui.html.scrollTo(0,player.ui.html.scrollHeight)

        n++
    },
    pause(){
        window.clearInterval(player.id)
    },
    slowly(){
        player.speed  = 50
        player.play()
    },
    middle(){
        player.speed  = 20
        player.play()
    },
    fast(){

        player.speed  = 0
        player.play()
    },


}

player.init()



