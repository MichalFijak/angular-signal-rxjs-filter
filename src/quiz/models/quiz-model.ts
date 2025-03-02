import { AnswerModel } from "./answer-model";

export interface QuizModel {
    question:string;
    answerModel:AnswerModel[];
}
