Rails.application.routes.draw do
  resources :categories
  # 巢狀可以讓comment依附item，通常最多用到兩層，太多層很醜
  # 包在裡面的就不會直接有comments_path可以用
  resources :items do
    # comment放在itme頁面裡面了所以只需要create，
    # 之前要有newe跟show之類是因為要有一個頁面來輸入新增的資料，
    # 但對於comment都不需要用到自己的頁面，幾乎都render item的頁面
    resources :comments, only: [:create]
    # 只留新增
    # /comments/new
    # /comments/create 
  end


  # users
  get "/login", to: "users#login"
  post "/login", to: "users#signin"
  delete "/logout", to: "users#logout"
  get "/sign_up", to: "users#signup"
  post "/sign_up", to: "users#register"  

  root "items#index"
end
