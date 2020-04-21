class Item < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true, 
                    numericality: { greater_than: 0 }
  has_many :comments
  belongs_to :category
  has_many :favorite_items
  has_many :users, through: :favorite_items
  
  has_one_attached :cover

  # 呼叫才會使用
  # scope :available, -> { where(deleted_at: nil) }
  # 跟上面同樣功能，建議多做多行的時候再用
  # def self.available
  #   where(id: 2)
  # end

  # 所有查詢都會自動套用
  default_scope { where(deleted_at: nil) }

  def destroy
    update(deleted_at: Time.now)
  end

  def favorited_by(u)
    u.items.include?(self)
  end
end
