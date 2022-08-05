function checkRes() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        document.body.style.padding = '100px'
        document.querySelector('.start_back').style.display = 'none'
        document.querySelector('.left_menu').style.display = 'none'
        document.querySelector('.main_border').style.position = 'static'
        document.querySelector('.main_border').style.height = '100%'
        document.querySelector('.right_menu').style.margin = 'auto'
        document.querySelector('.right_button_menu').style.alignItems = 'center'
        document.querySelector('.right_button_menu').style.justifyContent = 'space-between'
        document.querySelector('.right_button_menu').style.height = '250px'
        let rB = document.querySelector('.right_button h1')
        Array.from(document.querySelectorAll('.right_button')).forEach(rB => {rB.style.fontSize = '16px'})
        document.querySelector('.bottom_menu').style.display = 'none'
        document.querySelector('.content').style.top = '330px'
        document.querySelector('.content').style.position = 'static'
        document.querySelector('#info').style.marginLeft = '0'
        document.querySelector('#svl-tr').style.marginLeft = '0'
        document.querySelector('#ul-service').style.marginLeft = '0'
        document.querySelector('#eis').style.marginLeft = '0'
        document.querySelector('#sao').style.marginLeft = '0'
        document.querySelector('#po').style.marginLeft = '0'
        document.querySelector('#video').style.marginLeft = '0'
    }
}
checkRes()
document.querySelector('.left_sub_button1').style.display = 'none'
let btn = document.querySelector('.left_sub_button')
Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'none'})


window.onload = function () {
    document.body.classList.add('animation_hiding');
    window.setTimeout(function () {
      document.body.classList.add('animation');
      document.body.classList.remove('animation_hiding');
    }, 1500);
}

const logo = document.querySelector('#logo')
logo.onclick = function() {window.scrollTo({
    top: 0,
    behavior: "smooth"})}

let cOne = document.querySelector('#check')
let cTwo = document.querySelector('#check1')

cOne.onclick = function () {
    if (cOne.checked === true)
        {Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'flex'});
        document.querySelector('.left_sub_button1').style.display = 'none'
        cTwo.checked = false
        }
    else {Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'none'})
    }
}

cTwo.onclick = function () {
    if (cTwo.checked === true)
        {document.querySelector('.left_sub_button1').style.display = 'flex'        
        Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'none'})
        cOne.checked = false       
        }
    else {document.querySelector('.left_sub_button1').style.display = 'none'
    }
}
let infoPage = document.querySelector('#info');
let infoBtn = document.querySelector('#info_btn');
infoBtn.onclick = function () {
    infoPage.scrollIntoView({behavior: "smooth"})
}
let svlPage = document.querySelector('#svl-tr');
let svlBtn = document.querySelector('#svl-tr_btn');
svlBtn.onclick = function () {
    svlPage.scrollIntoView({behavior: "smooth"})
}
let ulServicePage = document.querySelector('#ul-service');
let ulServiceBtn = document.querySelector('#ul-service_btn');
ulServiceBtn.onclick = function () {
    ulServicePage.scrollIntoView({behavior: "smooth"})
}
let eisPage = document.querySelector('#eis');
let eisBtn = document.querySelector('#eis_btn');
eisBtn.onclick = function () {
    eisPage.scrollIntoView({behavior: "smooth"})
}
let saoPage = document.querySelector('#sao');
let saoBtn = document.querySelector('#sao_btn');
saoBtn.onclick = function () {
    saoPage.scrollIntoView({behavior: "smooth"})
}
let poPage = document.querySelector('#po');
let poBtn = document.querySelector('#po_btn');
poBtn.onclick = function () {
    poPage.scrollIntoView({behavior: "smooth"})
}
let videoPage = document.querySelector('#video');
let videoBtn = document.querySelector('#video_btn');
videoBtn.onclick = function () {
    videoPage.scrollIntoView({behavior: "smooth"})
}



