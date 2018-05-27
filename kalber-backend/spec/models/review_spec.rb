require 'rails_helper'

RSpec.describe Review, type: :model do

	describe Review do
		it { is_expected.to validate_presence_of(:performance_review) }
		it { is_expected.to validate_presence_of(:reviewer) }
	end

  before(:each) do
		@reviewer = User.create({ firstname: 'Anil', lastname: 'Kumar', email: 'anil.kumar@example.com', password: 'example' })
    @reviewee = User.create({ firstname: 'Gita', lastname: 'Kumari', email: 'gita.kumari@example.com', password: 'example' })
		@performance_review = PerformanceReview.create(reviewee_id: @reviewee.id, :reviewer_ids => [@reviewer.id])

		questions = [
				{ statement: 'Communicates friendly with colleagues and clients',
					options_attributes:[
							{statement: 'Very Much Agree'},
							{statement: 'Agree'},
							{statement: 'Disagree'},
							{statement: 'Totally Disagree'}
					]
				},

				{ statement: 'Works and collaborate with colleagues without any friction',
					options_attributes:[
							{statement: 'Very Much Agree'},
							{statement: 'Agree'},
							{statement: 'Disagree'},
							{statement: 'Totally Disagree'}
					]
				}
    ]

    @questions = Question.create(questions)
  end

	describe "creation" do
		it "should have one review created after being created" do
      Review.create(performance_review_id: @performance_review.id, reviewer_id: @reviewer.id)
			expect(Review.count).to eq(1)
    end

		it "should accept the questions_options along with review" do
			review = Review.create(performance_review_id: @performance_review.id, reviewer_id: @reviewer.id,
                               questions_options_attributes: [{question_id: @questions.first.id,
                                                               option_id: @questions.first.options.first.id
                                                              }]
      )
			expect(review.valid?).to eq(true)
    end

		it "should save all the questions_options along with review" do
			review = Review.create(performance_review_id: @performance_review.id, reviewer_id: @reviewer.id,
														 questions_options_attributes: [{question_id: @questions.first.id,
																														 option_id: @questions.first.options.first.id
																														}]
			)
			expect(review.questions_options.size).to eq(1)
		end
	end
end
