/* плавный якорный скролл*/
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
 anchor.addEventListener("click", (event) => {
  event.preventDefault();
  const block = anchor.getAttribute('href')
  document.querySelector('' + block).scrollIntoView({
   behavior: "smooth",
  })
 })
}

const inputField_1 = document.querySelector('#input__header_1')
const inputField_2 = document.querySelector('#input__header_2')
const inputField_3 = document.querySelector('#input__header_3')
const inputField_4 = document.querySelector('#input__header_4')
const btn = document.querySelector('#btn_header')
const btn_ = document.querySelector('#footer__btn')



btn.addEventListener('click', function() {
 // перевірка успішного входу
 if (!inputField_1.value == '' && (!inputField_2.value == '' || inputField_2.value  == typeof(Number))) {
  setTimeout(() => {
   const body = document.querySelector('.apple')
  body.innerHTML = `
  <div class="alert alert-success" role="alert">
  <h3 style="text-align:center" class="alert-heading">Ви успішно зареєструвалися!</h3>
  <p style="text-align:center">Тепер ви можете приєднатися до курсів які вам довподоби!</p>
  <hr>
</div>
  `
  setTimeout(() => {
   body.innerHTML = `
   <section class="apple">
   <div class="background__apple">
     <div class="container">
       <nav class="navigation navbar-expand-lg navbar-dark">
         <ul class="navbar-nav navbar-nav-scroll">              
           <li class="link center"><a href="" class="logo"> COURSEWAY</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
           </li>
           <li class="link"><a href="#" class="text collapse navbar-collapse" id="navbarNav">головна</a></li>
           <li class="link"><a href="#course" class="text collapse navbar-collapse" id="navbarNav">курси</a></li>
           <li class="link"><a href="#advant" class="text collapse navbar-collapse" id="navbarNav">блог</a></li>
           <li class="link"><a href="#team" class="text collapse navbar-collapse" id="navbarNav">про проект</a></li>
           <li class="link"><a href="#form" class="text collapse navbar-collapse" id="navbarNav">редєстрація</a></li>
         </ul>
       </nav>
       <h1 class="main__header">БЕЗКОШНОВНІ ОНЛАЙН-КУРСИ</h1>
       <h3 class="pre__header">ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</h3>
       <div class="form__container">
         <div class="header__form">
           <input class="header_form_elements input__header" type="text" placeholder="Email" required id="input__header_1">
           <input class="header_form_elements input__header" type="text" placeholder="Password" required id="input__header_2">
           <button class="btn__submit header_form_elements" id="btn_header">РОЗПОЧАТИ!</button>
         </div>
       </div>
     </div>
   </div>
 </section>
   `
  }, 2500)
  }, 500)
 }

 // помилка
 else {
  const body = document.querySelector('.apple')
  setTimeout(() => {
   body.innerHTML =`
   <div class="alert alert-danger" role="alert">
   <h3 style="text-align:center" class="alert-heading">Помилка авторизації!</h3>
   <p style="text-align:center">поля електронної пошти або паролю не повинні бути порожніми!</p>
   <hr>
 </div>
   `
   setTimeout(() => {
    body.innerHTML = `
    <section class="apple">
    <div class="background__apple">
      <div class="container">
        <nav class="navigation navbar-expand-lg navbar-dark">
          <ul class="navbar-nav navbar-nav-scroll">              
            <li class="link center"><a href="" class="logo"> COURSEWAY</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </li>
            <li class="link"><a href="#" class="text collapse navbar-collapse" id="navbarNav">головна</a></li>
            <li class="link"><a href="#course" class="text collapse navbar-collapse" id="navbarNav">курси</a></li>
            <li class="link"><a href="#advant" class="text collapse navbar-collapse" id="navbarNav">блог</a></li>
            <li class="link"><a href="#team" class="text collapse navbar-collapse" id="navbarNav">про проект</a></li>
            <li class="link"><a href="#form" class="text collapse navbar-collapse" id="navbarNav">редєстрація</a></li>
          </ul>
        </nav>
        <h1 class="main__header">БЕЗКОШНОВНІ ОНЛАЙН-КУРСИ</h1>
        <h3 class="pre__header">ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</h3>
        <div class="form__container">
          <div class="header__form">
            <input class="header_form_elements input__header" type="text" placeholder="Email" required id="input__header_1">
            <input class="header_form_elements input__header" type="text" placeholder="Password" required id="input__header_2">
            <button class="btn__submit header_form_elements" id="btn_header">РОЗПОЧАТИ!</button>
          </div>
        </div>
      </div>
    </div>
  </section>
    `
   }, 2100)
  }, 500)
 }
})

btn_.addEventListener('click', function() {
 // перевірка успішного входу
 if (!inputField_3.value == '' && (!inputField_4.value == '' || inputField_4.value  == typeof(Number))) {
  setTimeout(() => {
   const body = document.querySelector('.footer__form')
  body.innerHTML = `
  <div class="alert alert-success" role="alert">
  <h3 style="text-align:center" class="alert-heading">Ви успішно зареєструвалися!</h3>
  <p style="text-align:center">Тепер ви можете приєднатися до курсів які вам довподоби!</p>
  <hr>
</div>
  `
  setTimeout(() => {
   body.innerHTML = `
   <section class="footer__form">
  <div class="container" id="form">
    <h2 class="form__header">ЗАРЕЄСТРУЙСЯ ЗАРАЗ</h2>
    <h3 class="form__text">Та отримай задоволення від навчання</h3>
    <div class="form__footer__container" id="form">
      <input class="sizing" type="text" placeholder="Name" required> 
      <input class="sizing" type="text" placeholder="Email" required> 
      <button class="submit" id="footer__btn">Submit!</button>
    </div>
  </div>
  </section>
   `
  }, 2500)
  }, 500)
 }

 // помилка
 else {
  const body = document.querySelector('.footer__form')
  setTimeout(() => {
   body.innerHTML =`
   <div class="alert alert-danger" role="alert">
   <h3 style="text-align:center" class="alert-heading">Помилка авторизації!</h3>
   <p style="text-align:center">поля електронної пошти або паролю не повинні бути порожніми!</p>
   <hr>
 </div>
   `
   setTimeout(() => {
    body.innerHTML = `
    <section class="footer__form">
  <div class="container" id="form">
    <h2 class="form__header">ЗАРЕЄСТРУЙСЯ ЗАРАЗ</h2>
    <h3 class="form__text">Та отримай задоволення від навчання</h3>
    <div class="form__footer__container" id="form">
      <input class="sizing" type="text" placeholder="Name" required> 
      <input class="sizing" type="text" placeholder="Email" required> 
      <button class="submit" id="footer__btn">Submit!</button>
    </div>
  </div>
  </section>
    `
   }, 2100)
  }, 500)
 }
})