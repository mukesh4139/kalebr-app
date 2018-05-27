class Api::V1::QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]
  before_action :authenticate_request!, only: [:create, :update, :destroy]

  def index
    if params[:all]
      @questions = Question.all
    else
      @question = Question.where(id: params[:ids])
    end
    render json: @questions.order(:id)
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

  def destroy
    if @question.destroy
      render json: {message: "Question deleted successfully"}, status: :ok
    else
      render json: {message: "Question could not be deleted"}, status: 422
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
end
