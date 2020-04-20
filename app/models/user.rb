class User < ApplicationRecord
  # validates
  validates :email, presence: true, 
                    uniqueness: true
  validates :password, presence: true, 
                       confirmation: true,
                       length: {minimum: 4}
  
  # relationship
  has_many :histories
  has_many :events, through: :histories
  has_many :comments
end
