const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const Login = $('.js-login')
const Resigner = $('.js-resign')
const Modal = $('.js-modal')
const Modalbody = $('.js-modal-body')
const ResignerTable = $('.js-resign-table')
const LoginTable = $('.js-login-table')
const logBtn = $('.login-btn')
const reBtn = $('.resigner-btn')
const backBtnL = $('.js-btn--back-log')
const backBtnR = $('.js-btn--back-re')


function HidenModal(){
    Modal.classList.remove('open_modal')
}

function showLogin (){
    Modal.classList.add('open_modal')
    LoginTable.classList.add('active')
    ResignerTable.classList.remove('active')
}

function showResign (){
    Modal.classList.add('open_modal')
    ResignerTable.classList.add('active')
    LoginTable.classList.remove('active')
}

Login.addEventListener('click', showLogin)
Resigner.addEventListener('click',showResign)
Modal.addEventListener('click', HidenModal)
Modalbody.addEventListener('click', function(e){
    e.stopPropagation()
})
logBtn.addEventListener('click', showLogin)
reBtn.addEventListener('click', showResign)
backBtnL.addEventListener('click', HidenModal)
backBtnR.addEventListener('click', HidenModal)
