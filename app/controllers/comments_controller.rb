class CommentsController < ApplicationController
  def create
    # @comment = Comment.new(comment_params)
    # @comment.item_id = params[:item_id]
    # @comment_params.user_id = current_user.id

    # item_id直接塞資料，沒有進資料庫撈，就有可能被造假
    # @comment = Comment.new(comment_params, 
    #                        item_id: params[:item_id] 
    #                        user_id: current_user.id)

    # 先撈資料庫確認是不是有這個item_id,不會被造假存入根本不存在的item
    @item = Item.find(params[:item_id])
    # 因為有設定belongs_to所以可以直接塞item物件
    @comment = @item.comments.build(comment_params.merge(user: current_user))

    if @comment.save
      #為空的時候可以連到create.js.erb(or html)

      # render js: "alert('hi')"      
      # render json: {name: '1111', age: 18}
      # redirect_to  item_path(params[:item_id]), notice: 'ok'
    else
      render 'items/show'
    end
  end

  private
  def comment_params
    # user_id & item_id 可以自己塞資料
    # 傳回去的是一組hash
    params.require(:comment).permit(:content)

    # merge可以再追加一串hash
    # params.require(:comment).permit(:content).merge(user: current_user)
  end
end

