class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :pw, length: {minimum: 6}, allow_nil: true


    attr_reader :pw
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, pw)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(pw) ? user : nil
    end

    def is_password?(pw)
      BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def self.generate_session_token
      SecureRandom.urlsafe_base64(16)
    end

    def password=(pw)
      @pw = pw
      self.password_digest = BCrypt::Password.create(pw)
    end

    def ensure_session_token
      self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
    end

end
