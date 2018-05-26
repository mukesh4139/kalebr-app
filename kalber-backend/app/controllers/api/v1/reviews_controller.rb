class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authenticate_request!, only: [:create, :update, :destroy]

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

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: {message: "Review could not be updated due to #{@review.errors.full_messages}"}, status: 422
    end
  end

  def destroy
    if @review.destroy
      render json: {message: "Review deleted successfully"}, status: :ok
    else
      render json: {message: "Review could not be deleted"}, status: 422
    end
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:feedback)
  end
end
