require 'rails_helper'

RSpec.describe Question, type: :model do

  describe Question do
    it { is_expected.to validate_presence_of(:statement) }
  end

  describe "creation" do
    it "should have one question created after being created" do
      Question.create(statement: 'Communicates friendly with colleagues and clients')
      expect(Question.count).to eq(1)
    end

    it "should save all the options along with question" do
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
    it "should invalidate creation of question without statement" do
      question = Question.create(statement: nil)
      expect(question.valid?).to eq(false)
    end
  end
end
