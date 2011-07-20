require './app/requires'

class App < Sinatra::Base
  set :static, true
  set :root, File.dirname(__FILE__)
  set :public, 'public'

  helpers do
    def partial(page, options={})
      haml page, options.merge!(:layout => false)
    end
  end

  get '/' do
    haml :index
  end

  get '/resources' do
    return ResourceStore.find_all.collect { |resource| resource.to_summary_hash }.to_json
  end

  post '/resources' do
    post_data = JSON.parse request.body.string
    resource = Resource.new(ResourceStore.next_id, post_data['name'], post_data['data'])
    ResourceStore.add(resource)
    resource ? resource.to_json_detail : ''
  end

  get '/resources/:id' do
    content_type :json
    resource = ResourceStore.find(params[:id].to_i)
    resource ? resource.to_json_detail : ''
  end

  delete '/resources/:id' do
    content_type :json
    ResourceStore.destroy(params[:id].to_i)
    return ResourceStore.find_all.collect { |resource| resource.to_summary_hash }.to_json
  end

  put '/resources/:id' do
    post_data = JSON.parse request.body.string
    resource = ResourceStore.find(params[:id].to_i)
    if resource
      post_data.each do |key, value|
        if resource.respond_to?("#{key}=") && key != 'id'
          resource.send("#{key}=", value)
        end
      end
    end
    resource ? resource.to_json_detail : ''
  end

  run! if /app.rb$/ =~ $0
end
