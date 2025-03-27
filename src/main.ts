import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Category } from './app/components/category/category.component';
import { Transaction } from './app/components/transaction/transaction.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));