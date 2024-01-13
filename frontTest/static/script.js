"use strict"
const btn = document.getElementById('btn')
const screen = document.getElementById('screen')
const url = 'http://localhost:5000/get'
const url_2 = 'http://localhost:5000/quit'
// const url = 'http://miskkov-ilya-test.ru:5000/get'





class TestServer{
  constructor(btn, screen, url) {
    this.url = url
    this.btn = btn
    this.screen = screen

    this.btn.addEventListener('click', (e) => this.clickHendle(e))
    this.btn.addEventListener('mousedown', (e) => this.downCollor(e))
    this.btn.addEventListener('mouseup', (e) => this.upCollor(e))
    window.addEventListener('beforeunload',()=> {
      fetch(url_2)
    })
  }

  async clickHendle(e) {
    e.preventDefault()
    this.fetching()

  }
  downCollor(e) {
    e.preventDefault()
    this.screen.style.background = 'rgba(0,100,0,.1)'
    this.screen.textContent = ''
  }
  
  upCollor(e) {
    e.preventDefault()
    this.screen.style.background = ''
  }

  fetching() {
    fetch(this.url, {
      method: "GET",
      credentials: 'include',
    })
      .then( res => res.json())
      .then(res => console.log(res))
      .then(res => console.log(document.cookie))
  }



}

const events = new TestServer(btn, screen, url)

