import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    {path: "/", component: HomeComponent},
    {path:"transaction", component: TransactionComponent},
    {path:"category", component: CategoryComponent}
];
