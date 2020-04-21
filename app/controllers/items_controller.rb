class ItemsController < ApplicationController
  before_action :find_item, only: [:show, :edit, :update, :destroy, :add_to_cart]

  def index
    @items = Item.all
  end
  
  def show
    @comment = Comment.new
    # eager loading，解決n+1 query的問題，預先載入關聯資料，減少查詢的次數
    # 把comment裡面用到的user資料先抓出來，在view的時候再用in的方式抓想要的user
    # SELECT "users".* FROM "users" WHERE "users"."id" IN (?, ?)  [["id", 1], ["id", 4]]
    @comments = @item.comments.includes(:user)     
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      redirect_to items_path, notice: '成功新增餐點'
    else
      render :new, notice: '新增失敗'
    end

  end

  def edit
  end

  def update
    # 中斷點
    # debugger

    if @item.update(item_params)
      redirect_to items_path, notice: '成功更新餐點'
    else
      render :edit
    end
  end

  def destroy
    @item.destroy
    redirect_to items_path, notice: '成功刪除餐點'
  end

  def add_to_cart
    current_cart.add_item(@item.id)
    session[:carty] = current_cart.to_hash
    render json: { cart_count: current_cart.items.count }
  end

  private
  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name,
                                 :description,
                                 :price,
                                 :spec,
                                 :category_id,
                                 :cover)
  end
end
