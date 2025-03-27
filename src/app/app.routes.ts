import { Routes } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    {path:"transaction", component: TransactionComponent},
    {path:"category", component: CategoryComponent}
];
