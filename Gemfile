source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

gem 'rails', '~> 5.2.1'
gem 'pg'
gem 'puma', '~> 3.11'
gem 'jquery-rails'
gem 'sassc-rails'
gem 'bootstrap', '~> 4.3.1'
gem 'uglifier', '>= 1.3.0'
gem 'bootsnap', require: false
gem 'redis'

gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'dotenv-rails', groups: [:development, :test]
gem 'haml'

group :development, :test do
  gem 'pry', '~> 0.12.2'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
