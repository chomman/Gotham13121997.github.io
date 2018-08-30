$(() => {
  $.ajaxSetup({ cache: false })
  let getter = (url) => {
    return new Promise((resolve, reject) => {
      $.get(url, (data) => {
        resolve({'stars': data.stargazers_count, 'forks': data.forks_count})
      }).fail(() => {
        resolve('error')
      })
    })
  }
  let stars_and_forks = null
  let url_array = [getter('https://api.github.com/repos/Gotham13121997/superCodingBot'),getter('https://api.github.com/repos/Gotham13121997/python-telegram-bot-openshift3'),getter('https://api.github.com/repos/Gotham13121997/FB-TO-TG-GROUP-CONNECT')]
  Promise.all(url_array).then(function(values) {
    stars_and_forks = values
    if (!stars_and_forks.includes('error')) {
      localStorage.stars_and_forks = JSON.stringify(values)
    } else {
      stars_and_forks = JSON.parse(localStorage.stars_and_forks);
    }
    let stars = document.getElementsByClassName('ui right floated label star');
    let forks = document.getElementsByClassName('ui right floated label fork');

    for (let i = 0; i < stars.length; i++) {
      stars[i].innerHTML = ` <i class="large star icon"></i><span style="font-size: 16px;">${stars_and_forks[i].stars}</span>`;
      forks[i].innerHTML = ` <i class="large fork icon"></i><span style="font-size: 16px;">${stars_and_forks[i].forks}</span>`;
    }
  })
})
function detectmob() {
  return (window.innerWidth <= 800)
}
function loaded () {
  document.getElementById('page_dimmer').className = 'ui inactive page dimmer'
}
function empty() {
  let name = document.getElementsByName('name')[0].value
  let email = document.getElementsByName('_replyto')[0].value
  let message = document.getElementsByName('message')[0].value

  if (name === '' || email === '' || message === '') {
    return false
  }
}
function project_modal (arg) {
  let parent = $('#project_modal')
  let timeouter = null
  function showSlides () {
    let i
    let slides = document.getElementsByClassName('nomain mySlides')
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slideIndex1++
    if (slideIndex1 > slides.length) {
      slideIndex1 = 1
    }
    slides[slideIndex1 - 1].style.display = 'block'
  }
  if (detectmob()) {
    if (arg !== 7) {
      window.location.href = window.location.href + 'project_mobile.html?arg=' + arg
    }
  } else {
    switch (arg) {
      case 0:
        $('.header', parent).html('SuperCodingBot')
        $('.content', parent).html(`   <div class="ui stackable grid container" style="font-size: 18px;">
                <div class="row">
                    <div class="nine wide right floated column">
                        <div class="nomain slideshow-container">

                            <div class="nomain mySlides fade1">
                                <img src="sucobo/pic1.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="sucobo/pic2.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="sucobo/pic3.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="sucobo/pic4.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="sucobo/pic5.png" class="ui huge image">
                            </div>

                        </div>
                    </div>
                    <div class="seven wide column">
                        <p>This is a Telegram Chatbot for Competitive Programmers. You can use it to, among other things:</p><ul><li>Get notified about upcoming and ongoing contests</li><li>Compile and run code from the Bot itself</li><li>Get programming questions from sites like CODEFORCES and CODECHEF</li><li>Register your handle of sites like CODECHEF, CODEFORCES, SPOJ, HACKERRANK AND HACKEREARTH and get a ranklist to compete with others </li><li>Get programming topics from GeeksForGeeks.com</li></ul>
                    </div>
                </div>
            </div>`)
        parent
          .modal({
            transition: 'vertical flip',
            onShow: () => {
              slideIndex1 = 0
              timeouter = setInterval(showSlides, 2000)
              showSlides()
            },
            onHide: () => {
              clearInterval(timeouter)
            }
          })
          .modal('show')
        break
      case 1:
        $('.header', parent).html('python-telegram-bot-openshift3')
        $('.content', parent).html(`<div class="ui stackable grid container" style="font-size: 18px;">
                <p>This is a Starter kit built in Python for running a Telegram Chatbot built with the python-telegram-bot library on openshift online v 3</p>
            </div>`)
        parent.modal({
          transition: 'vertical flip',
          onShow: () => {
          },
          onHide: () => {
          }
        }).modal('show')
        break
      case 2:
        $('.header', parent).html('Mohan Sweets Billing Software')
        $('.content', parent).html(`   <div class="ui stackable grid container" style="font-size: 18px;">
                <div class="row">
                    <div class="ten wide right floated column">
                        <div class="nomain slideshow-container">

                            <div class="nomain mySlides fade1">
                                <img src="mohan_sweets/pic1.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="mohan_sweets/pic2.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="mohan_sweets/pic3.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="mohan_sweets/pic4.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="mohan_sweets/pic5.png" class="ui huge image">
                            </div>

                        </div>
                    </div>
                    <div class="six wide column">
                        <p>This is a cross platform desktop application built using Electron Framework for Mohan Sweets Private Limited. It has among other things :</p>
                        <ul><li>Help Grid for selecting items according to name or Item Code</li><li>Auto filling of rates and amounts</li><li>Options to add and edit items</li><li>Generation of bill and printing using thermal printer</li><li>Accessing total sale of each day</li></ul>
                    </div>
                </div>
            </div>`)
        timeouter = setInterval(showSlides, 2000)
        parent
          .modal({
            transition: 'vertical flip',
            onShow: () => {
              slideIndex1 = 0
              showSlides()
            },
            onHide: () => {
              clearInterval(timeouter)
            }
          })
          .modal('show')
        break
      case 3:
        $('.header', parent).html('Broom Revolution')
        $('.content', parent).html(`   <div class="ui stackable grid container" style="font-size: 18px;">
                <div class="row">
                    <div class="seven wide right floated column">
                        <div class="nomain slideshow-container">
                            <div class="nomain mySlides fade1">
                                <img src="broom_revolution/pic1.jpeg"   class="ui medium image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="broom_revolution/pic2.jpeg" class="ui medium image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="broom_revolution/pic3.jpeg" class="ui medium image">
                            </div>
                        </div>
                    </div>
                    <div class="eight wide column">
                        <p>This is a Volunteer Management App for AAP Kerala. Made in my freshman year along with my friends. It has among other things :</p>
                        <ul><li>Real time updation using firebase</li><li>Hierarchial arrangement of volunteers</li><li>Phone Number Parser</li><li>Adding new volunteers and editing their data</li></ul>
                    </div>
                </div>
            </div>`)
        parent
          .modal({
            transition: 'vertical flip',
            onShow: () => {
              slideIndex1 = 0
              timeouter = setInterval(showSlides, 2000)
              showSlides()
            },
            onHide: () => {
              clearInterval(timeouter)
            }
          })
          .modal('show')
        break
      case 4:
        $('.header', parent).html('FB-TO-TG-GROUP-CONNECT')
        $('.content', parent).html(`   <div class="ui stackable grid container" style="font-size: 18px;">
                <div class="row">
                    <div class="eight wide right floated column">
                        <div class="nomain slideshow-container">
                            <div class="nomain mySlides fade1">
                                <img src="fb_to_tg/pic1.png"   class="ui medium image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="fb_to_tg/pic3.jpg" class="ui medium image">
                            </div>
                        </div>
                    </div>
                    <div class="eight wide column">
                        <p>This is a python tool/bot which sends posts made on a Facebook group to a Telegram group:</p>                    </div>
                </div>
            </div>`)
        parent
          .modal({
            transition: 'vertical flip',
            onShow: () => {
              slideIndex1 = 0
              timeouter = setInterval(showSlides, 2000)
              showSlides()
            },
            onHide: () => {
              clearInterval(timeouter)
            }
          })
          .modal('show')
        break
      case 5:
        $('.header', parent).html('Oolpay')
        $('.content', parent).html(`   <div class="ui stackable grid container" style="font-size: 18px;">
                <div class="row">
                    <div class="eight wide right floated column">
                        <div class="nomain slideshow-container">
                            <div class="nomain mySlides fade1">
                                <img src="oolpay/pic1.png"   class="ui medium image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="oolpay/pic2.png" class="ui medium image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="oolpay/pic3.png" class="ui medium image">
                            </div>
                        </div>
                    </div>
                    <div class="eight wide column">
                        <p>This is an E-Commerce Android app for a startup. I collaborated in this project with my friend Mayank Raj who did a lot of work.</p>
                        </div>
                </div>
            </div>`)
        parent
          .modal({
            transition: 'vertical flip',
            onShow: () => {
              slideIndex1 = 0
              timeouter = setInterval(showSlides, 2000)
              showSlides()
            },
            onHide: () => {
              clearInterval(timeouter)
            }
          })
          .modal('show')
        ;
        break
      case 6:
        $('.header', parent).html('PLJRWEB Offline')
        $('.content', parent).html(`   <div class="ui stackable grid container" style="font-size: 18px;">
                <div class="row">
                    <div class="ten wide right floated column">
                        <div class="nomain slideshow-container">

                            <div class="nomain mySlides fade1">
                                <img src="pljrapp/pic1.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="pljrapp/pic2.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="pljrapp/pic3.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="pljrapp/pic4.png" class="ui huge image">
                            </div>

                            <div class="nomain mySlides fade1">
                                <img src="pljrapp/pic5.png" class="ui huge image">
                            </div>

                        </div>
                    </div>
                    <div class="six wide column">
                        <p>This is a cross platform desktop application built using Electron Framework for PLJRWEB law journal company. It has among other things :</p>
                        <ul><li>Options for Freetext search, Partywise Search, Citation Guided Search</li><li>Saving of history</li>Dark and Light Themes<li>Option to bookmark judgements</li><li>Making Notes etc.</li></ul>
                    </div>
                </div>
            </div>`)
        parent
          .modal({
            transition: 'vertical flip',
            onShow: () => {
              slideIndex1 = 0
              timeouter = setInterval(showSlides, 2000)
              showSlides()
            },
            onHide: () => {
              clearInterval(timeouter)
            }
          })
          .modal('show')
        break
      case 7:
        break
    }
  }
}
