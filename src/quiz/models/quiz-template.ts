import { QuizModel } from "./quiz-model";

export class QuizTemplate
{
    public readonly quiz :QuizModel[] =[
    {
        question: 'Which one is prime number?',
        answerModel:[
            {
                answer:'1',
                isCorrect:false
            },
            {
                answer:'2',
                isCorrect:true
            },
            {
                answer:'0',
                isCorrect:false
            },
        ],
        
    },
    {
        question: 'Which one is palindrome?',
        answerModel:[
            {
                answer:'madam',
                isCorrect:true
            },
            {
                answer:'[.]][]]',
                isCorrect:false
            },
            {
                answer:'lioili',
                isCorrect:false
            },
        ],
        
    },
    {
        question: 'Which one is not a country?',
        answerModel:[
            {
                answer:'Luxemburg',
                isCorrect:false
            },
            {
                answer:'Vatican',
                isCorrect:false
            },
            {
                answer:'Rome',
                isCorrect:true
            },
        ],
        
    }
    ]
}