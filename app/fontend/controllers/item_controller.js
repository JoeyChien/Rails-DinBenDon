import { Controller } from "stimulus"

export default class extends Controller {
  // 定義icon是target
  static targets = ["icon"]

  initialize() {
    this.clicked = false;
  }

  carrot(e) {
    e.preventDefault();
    if(this.clicked){
      this.iconTarget.classList.remove('fa-lemon');
      this.iconTarget.classList.add('fa-carrot');
      this.clicked = false;
    }else{
      this.iconTarget.classList.remove('fa-carrot');
      this.iconTarget.classList.add('fa-lemon');
      this.clicked = true;
    }    
  }
}
