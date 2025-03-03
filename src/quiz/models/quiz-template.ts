import { QuizModel } from "./quiz-model";

export class QuizTemplate
{
    public readonly quiz :QuizModel[] =[
    {
        question: 'Which one is prime number?',
        questionId:1,
        answerModel:[
            {
                answer:'1',
                isCorrect:false,
                answerId:1,
                isChecked:false
            },
            {
                answer:'2',
                isCorrect:true,
                answerId:2,
                isChecked:false

            },
            {
                answer:'0',
                isCorrect:false,
                answerId:3,
                isChecked:false

            },
        ],
    },
    {
        question: 'Which one is palindrome?',
        questionId:2,
        answerModel:[
            {
                answer:'madam',
                isCorrect:true,
                answerId:1,
                isChecked:false

            },
            {
                answer:'[.]][]]',
                isCorrect:false,
                answerId:2,
                isChecked:false

            },
            {
                answer:'lioili',
                isCorrect:false,
                answerId:3,
                isChecked:false

            },
        ],

    },
    {
        question: 'Which one is not a country?',
        questionId:3,
        answerModel:[
            {
                answer:'Luxemburg',
                isCorrect:false,
                answerId:1,
                isChecked:false

            },
            {
                answer:'Vatican',
                isCorrect:false,
                answerId:2,
                isChecked:false

            },
            {
                answer:'Rome',
                isCorrect:true,
                answerId:3,
                isChecked:false

            },
        ],

    }
    ]
}