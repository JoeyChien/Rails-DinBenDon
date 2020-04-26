import { Controller } from "stimulus"

export default class extends Controller {
  // 定義target的物件，可定義多個，之後呼叫用XXXTarget
  static targets = ["content", "submit"]  

  //連結到畫面執行內容，可測試是否成功連結   
  //   connect() {
  //   console.log('aa')
  // }

  check(e){
    if (this.contentTarget.value.length >= 2){
      this.submitTarget.disabled = false;
    }else{
      this.submitTarget.disabled = true;
    }
  }
}
