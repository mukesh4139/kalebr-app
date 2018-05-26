class Api::V1::PerformanceReviewsController < ApplicationController
  before_action :set_performance_review, only: [:show, :update, :destroy]
  before_action :authenticate_request!, only: [:create, :update, :destroy]

  def index
    @performance_reviews = PerformanceReview.all.order(:id)
    render json: @performance_reviews
  end

  def show
    render json: @performance_review
  end

  def create
    @performance_review = PerformanceReview.new(performance_review_params)
    if @performance_review.save
      render json: @performance_review
    else
      render json: {message: "Performance Review could not be save due to #{@performance_review.errors.full_messages}"}, status: 422
    end
  end

  def update
    if @performance_review.update(performance_review_params)
      render json: @performance_review
    else
      render json: {message: "Performance Review could not be updated due to #{@performance_review.errors.full_messages}"}, status: 422
    end
  end

  def destroy
    if @performance_review.destroy
      render json: {message: "Performance Review deleted successfully"}, status: :ok
    else
      render json: {message: "Performance Review could not be deleted"}, status: 422
    end
  end

  private

  def set_performance_review
    @performance_review = PerformanceReview.find(params[:id])
  end

  def performance_review_params
    params.require(:performance_review).permit(:reviewee_id, :reviewer_ids => [])
  end
end
