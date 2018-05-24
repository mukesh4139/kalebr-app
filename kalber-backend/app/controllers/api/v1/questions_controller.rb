class Api::V1::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render json: @questions
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question
    else
      render json: {message: "Question could not be save due to #{@question.errors.full_messages}"}, status: 422
    end
  end

  private

  def question_params
    params[:question][:options_attributes] = params[:question][:options]
    params.require(:question).permit(:statement, :options_attributes => [:id, :statement])
  end
end
