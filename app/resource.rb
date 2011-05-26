class Resource
  def initialize(id, name, data)
    self.id = id
    self.name = name
    self.data = data
  end

  def to_summary_hash
    { :id => self.id, :name => self.name }
  end

  def to_json_detail
    { :id => self.id, :name => self.name, :data => self.data }.to_json
  end

  attr_accessor :id, :name, :data
end
