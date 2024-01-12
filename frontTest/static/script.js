const btn = document.getElementById('btn')
const screen = document.getElementById('screen')
// const url = 'http://localhost:5000/get'
const url = 'miskkov-ilya-test.ru:5000/get'





class TestServer{
  constructor(btn, screen, url) {
    this.url = url
    this.btn = btn
    this.screen = screen

    this.btn.addEventListener('click', (e) => this.fetching(e))
    this.btn.addEventListener('mousedown', (e) => this.downCollor(e))
    this.btn.addEventListener('mouseup', (e) => this.upCollor(e))

  }

  async fetching(e) {
    e.preventDefault()
    const data = await(await fetch(this.url)).json()
    this.screen.textContent = data
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




}

const events = new TestServer(btn, screen, url)

