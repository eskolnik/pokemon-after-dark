class Player < ActiveRecord::Base
  validates :name, presence: true
  validates :initials, presence: true
  
end
