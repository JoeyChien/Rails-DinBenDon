import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  // 定義target的XXX物件，可定義多個，之後呼叫用XXXTarget
  static targets = ["item_id"]  
   
  additem(e){
    let item_id = this.item_idTarget.value
    Rails.ajax({
        url: `/items/${item_id}/add_to_cart`,
        type: 'POST',
        success: resp => {
          document.querySelector('#cart_count').innerText  = resp.cart_count
        },
        error: err => {
          console.log(err);
        }      
    })
  }
}
