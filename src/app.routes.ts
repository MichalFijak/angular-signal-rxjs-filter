import { Routes } from "@angular/router";
import { CountryFilterComponent } from "./country-filter/country-filter.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { EmptyPageComponent } from "./empty-page/empty-page.component";

export const appRoutes:Routes=[
    {
        path:'country',
        component:CountryFilterComponent,
        title: 'Country filter!'
    },
    {
        path:'calculator',
        component:CalculatorComponent,
        title: 'Currency calculator!'
    },
    {
        path:'music-shop',
        loadComponent: ()=>import('./music-shop/music-shop.component').then(m=>m.MusicShopComponent),
        title: 'Music shop!'
    },
    {
        path:'quiz',
        loadComponent:()=>import('./quiz/quiz.component').then(q=>q.QuizComponent),
        title:'Quiz!'
    },
    {
        path:'currency-swapper',
        loadComponent:()=>import('./currency-swapper/currency-swapper.component').then(c=>c.CurrencySwapperComponent),
        title:'Curenncy swapper from'
    },
    {
        path:'',
        component:EmptyPageComponent,
        title: 'Home!'

    }
];