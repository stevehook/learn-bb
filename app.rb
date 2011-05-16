require 'requires'

class App < Sinatra::Base
  set :static, true
  set :public, 'public'

  get '/' do
    haml :index
  end
end
