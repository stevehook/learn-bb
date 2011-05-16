require 'app/requires'

class App < Sinatra::Base
  set :static, true
  set :public, 'public'

  get '/' do
    haml :index
  end

  run! if /app.rb$/ =~ $0
end
