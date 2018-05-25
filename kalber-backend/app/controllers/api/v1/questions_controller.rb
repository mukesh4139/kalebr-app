class Api::V1::QuestionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  before_action :set_question, only: [:show, :update]
  before_action :authenticate_request!, only: [:create]

  def index
    @questions = Question.all.order(:id)
    render json: @questions
  end

  def show
    render json: @question
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question
    else
      render json: {message: "Question could not be save due to #{@question.errors.full_messages}"}, status: 422
    end
  end

  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: {message: "Question could not be updated due to #{@question.errors.full_messages}"}, status: 422
    end
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params[:question][:options_attributes] = params[:question][:options]
    params.require(:question).permit(:statement, :options_attributes => [:id, :statement, :_destroy])
  end

  def record_not_found
    render json: {message: "This requested record is either deleted or does not exist"}, :status => 422
  end
end
