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
        path:'',
        component:EmptyPageComponent,
        title: 'Home!'

    }
];