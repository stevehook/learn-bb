class Resource
  def initialize(id, name, data)
    self.id = id
    self.name = name
    self.data = data
  end

  def url
    "resources/#{self.id}"
  end

  def to_summary_hash
    { :id => self.id, :name => self.name, :url => self.url }
  end

  def to_json_detail
    { :id => self.id, :name => self.name, :url => self.url, :data => self.data }.to_json
  end

  attr_accessor :id, :name, :data
end
