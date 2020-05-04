import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["message","myCart", "cartCounter"]  

  close(e){
    e.preventDefault();   //常常給<a>用，就不會跑去#網址
    this.messageTarget.remove();
  }
  
  updateCart(e){    
    this.myCartTarget.classList.add('shake');
    this.cartCounterTarget.innerText = e.detail; 
    let self = this

    setTimeout(function(){
      /* 如果用this會被卡死在這個fun裡面 */
      self.myCartTarget.classList.remove('shake');
    }, 500);
    
    /* 箭頭函式會抓外面的this */
    // setTimeout(() => { this.myCartTarget.classList.remove('shake'); },500);
    
  }
}
