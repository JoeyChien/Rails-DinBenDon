class Api::V1::ItemsController < ApplicationController
  def favorite
    # 沒找到就回傳錯誤訊息
    item = Item.find(params[:id])    

    if item.favorited_by(current_user)
      # 透過user去找所有的item再找到想要刪除的目標去刪除 
      current_user.items.delete(item)
      render json: { status: 'removed' }
    else
      # 丟進去current_user的items裡面
      current_user.items << item
      render json: { status: 'favorited' }
    end    
  end
end
