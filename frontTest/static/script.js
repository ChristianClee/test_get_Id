"use strict"
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const screen = document.getElementById('screen')

const url = 'http://localhost:5000/get'
const url_3 = 'http://localhost:5000/getSettio'
const url_4 = 'http://localhost:5000/saveToMongo'
const url_2 = 'http://localhost:5000/quit'
// const url = 'http://miskkov-ilya-test.ru:5000/get'





class TestServer{
  constructor(btn, btn2, screen, url) {
    this.url = url
    this.btn = btn
    this.btn2 = btn2
    this.screen = screen

    this.btn.addEventListener('click', (e) => { this.clickHendle(e) })
    this.btn2.addEventListener('click', (e) => { this.saveToMongo(e) })
    this.btn.addEventListener('mousedown', (e) => this.downCollor(e))
    this.btn.addEventListener('mouseup', (e) => this.upCollor(e))
    window.addEventListener('beforeunload', () => {
      const key = sessionStorage.getItem('userUniqKey')
      console.log(key)

      fetch(url_2, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({key})
      })
    })
  }

  async clickHendle(e) {
    e.preventDefault()
    this.fetchingSession()
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

  fetchingCookie() {
    fetch(this.url, {
      method: "GET",
      credentials: 'include',
    })
      .then( res => res.json())
      .then(res => console.log(res))
      .then(res => console.log(document.cookie))
  }

  async saveToMongo(e) {
    e.preventDefault()
    // console.log(sessionStorage.getItem('userUniqKey'))
  }

  fetchingSession() {
    fetch(url_3)
      .then(res => res.json())
      .then(res => {
        const isKey = Boolean(sessionStorage.getItem('userUniqKey'))
        if (!isKey) {
          sessionStorage.setItem('userUniqKey', res)
          console.log('key has existed')
        } else {
          console.log("key is exist")
        }
        
      })
      .catch((e) => console.error('fetching error',e) )
  }


}

const events = new TestServer(btn, btn2, screen, url)

