import { Controller } from "stimulus"
//ax是可以自己命名的
//import ax from "axios"
import Rails from "@rails/ujs"

export default class extends Controller {
  // 定義icon是target
  static targets = ["icon"]

  carrot(e) {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    //ax.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    let item_id = document.querySelector('#item_id').value;

    Rails.ajax({
      url: `/api/v1/items/${item_id}/favorite`,
      type: 'POST',
      success: resp => {
        if (resp.data.status === "favorited"){
          this.iconTarget.classList.remove('fa-carrot');
          this.iconTarget.classList.add('fa-lemon');          
        } else {
          this.iconTarget.classList.remove('fa-lemon');
          this.iconTarget.classList.add('fa-carrot');
        }        
      },
      error: err => {
        console.log(err);
      }      
    })

    // ax.post(`/api/v1/items/${item_id}/favorite`)
    //   .then(resp => { 
    //     // 用胖火箭的艦的寫法才能抓到this，不然會變成undefined
    //     if (resp.data.status === "favorited"){
    //       this.iconTarget.classList.remove('fa-carrot');
    //       this.iconTarget.classList.add('fa-lemon');          
    //     } else {
    //       this.iconTarget.classList.remove('fa-lemon');
    //       this.iconTarget.classList.add('fa-carrot');
    //     }        
    //   })
    //   .catch(function(err){
    //     console.log(err);
    //   })


    // if(this.clicked){
    // this.iconTarget.classList.remove('fa-lemon');
    // this.iconTarget.classList.add('fa-carrot');
    //  
    // }else{
    //   this.iconTarget.classList.remove('fa-carrot');
    //   this.iconTarget.classList.add('fa-lemon');
    //   this.clicked = true;
    // }    
  }
}
