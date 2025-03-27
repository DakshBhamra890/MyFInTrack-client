//we import all the necessary modules
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class Category {
  _id: string | undefined;
  categoryName: string | undefined;
}

@Component({
  selector: 'app-category',
  imports: [NgFor, FormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  CATEGORIES: Category[] = [];
  _id: string | undefined;
  categoryName: string | undefined;

  // Geting all the categories
  getCategories(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.CATEGORIES = response as Category[];
    });
  }
// adding categories
  addCategory(): void {
    let newCategory = {
      categoryName: this.categoryName,
    };

    this.categoryService.addCategory(newCategory).subscribe(() => {
      this.getCategories();
      this.clearForm();
    });
  }
// clearing category form 
  clearForm(): void {
    this._id = undefined;
    this.categoryName = undefined;
  }

  // Selecting category 
  selectCategory(category: Category): void {
    this._id = category._id;
    this.categoryName = category.categoryName;
  }
// deleting category
  deleteCategory(_id: string): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(_id).subscribe(() => {
        this.getCategories();
        this.clearForm();
      });
    }
  }
// updating category
  updateCategory(): void {
    let category = {
      _id: this._id,
      categoryName: this.categoryName,
    };

    this.categoryService.updateCategory(category).subscribe(() => {
      this.getCategories();
      this.clearForm();
    });
  }

  // starting this component
  ngOnInit(): void {
    this.getCategories();
  }
}
