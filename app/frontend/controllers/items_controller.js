import { Controller } from "stimulus"
//ax是可以自己命名的
//import ax from "axios"
import Rails from "@rails/ujs"

export default class extends Controller {
  // 定義item_id是target
  static targets = ["icon","item_id" ]

  additem(e) {
    e.preventDefault();
  
    let item_id = this.item_idTarget.value;
  
    Rails.ajax({
      url: `/items/${item_id}/add_to_cart`, 
      type: 'POST', 
      success: resp => {
        document.querySelector('#items_count').innerText = resp.items_count 
      }, 
      error: err => {
        console.log(err);
      } 
    })
  }

  heart(e) {
    e.preventDefault();   

    let item_id = document.querySelector('#item_id').value;

    Rails.ajax({
      url: `/api/v1/items/${item_id}/favorite`,
      type: 'POST',
      success: resp => {
        if (resp.status === "favorited"){
          this.iconTarget.classList.remove('far');
          this.iconTarget.classList.add('fas');          
        } else {
          this.iconTarget.classList.remove('fas');
          this.iconTarget.classList.add('far');
        }        
      },
      error: err => {
        console.log(err);
      }      
    })
  }

  
    /*axios的方法*/
    // const csrfToken = document.querySelector('[name=csrf-token]').content;
    // ax.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    // ax.post(`/api/v1/items/${item_id}/favorite`)
    //   .then(resp => { 
    //     // 用胖火箭的艦的寫法才能抓到this，不然會變成undefined
    //     if (resp.data.status === "favorited"){
    //       this.iconTarget.classList.remove('far');
    //       this.iconTarget.classList.add('fas');          
    //     } else {
    //       this.iconTarget.classList.remove('fas');
    //       this.iconTarget.classList.add('far');
    //     }        
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    /*純js開關*/
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
