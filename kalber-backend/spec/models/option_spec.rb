require 'rails_helper'

RSpec.describe Option, type: :model do

  describe Option do
    it { is_expected.to validate_presence_of(:statement) }
    it { is_expected.to validate_presence_of(:question) }
  end

  describe "creation" do
    it "should have four options created after being created" do
      Question.create({ statement: 'Communicates friendly with colleagues and clients',
                                 options_attributes:[
                                     {statement: 'Very Much Agree'},
                                     {statement: 'Agree'},
                                     {statement: 'Disagree'},
                                     {statement: 'Totally Disagree'}
                                 ]
                               })
      expect(Option.count).to eq(4)
    end

    it "options should be saved along with question" do
      question = Question.create({ statement: 'Communicates friendly with colleagues and clients',
                                   options_attributes:[
                                       {statement: 'Very Much Agree'},
                                       {statement: 'Agree'},
                                       {statement: 'Disagree'},
                                       {statement: 'Totally Disagree'}
                                   ]
                                 })
      expect(question.options.count).to eq(4)
    end
  end

  describe "creation without mandatory parameters" do
    it "should invalidate creation of option without statement" do
      Question.create({ statement: 'Communicates friendly with colleagues and clients',
                                   options_attributes:[
                                       {statement: nil},
                                       {statement: nil},
                                       {statement: nil},
                                       {statement: nil}
                                   ]
                                 })

      expect(Option.count).to eq(0)
    end

    it "should invalidate creation of option without question" do
      option = Option.create(statement: 'Communicates friendly with colleagues and clients')
      expect(option.valid?).to eq(false)
    end
  end
end
