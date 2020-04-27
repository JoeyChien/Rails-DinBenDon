import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["message"]  

  close(e){
    e.preventDefault();   //主要給<a>用，就部會跑去#網址
    this.messageTarget.remove();
  }
}
