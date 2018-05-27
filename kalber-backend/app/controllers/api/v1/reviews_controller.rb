class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :comment]
  before_action :authenticate_request!, only: [:create, :comment]

  def index
    @reviews = Review.all.order(:id)
    render json: @reviews
  end

  def show
    render json: @review
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: {message: "Review could not be save due to #{@review.errors.full_messages}"}, status: 422
    end
  end

  def comment
    @review.update(feedback: params[:comment])
    render json: @review
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params[:review][:questions_options_attributes] = params[:review][:questions_options]
    params.require(:review).permit(:feedback, :performance_review_id, :reviewer_id,
                                   :questions_options_attributes => [:review_id, :question_id, :option_id])
  end
end
