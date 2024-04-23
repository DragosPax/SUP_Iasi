import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-food-item',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleMapsModule,
  ],
  templateUrl: './add-food-item.component.html',
  styleUrl: './add-food-item.component.scss',
})
export class AddFoodItemComponent {
  addItemForm!: FormGroup;
  selectedFile = '';

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addItemForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
    });
  }

  get fc() {
    return this.addItemForm.controls;
  }
  submit() {
    if (this.addItemForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('name', this.addItemForm.get('name')?.value);
    formData.append('price', this.addItemForm.get('price')?.value);
    formData.append('imageUrl', this.selectedFile);

    this.restaurantService.addFoodItem(formData).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (error) => {
        this.toastrService.error(error.error, 'Error');
      },
    });
  }

  uploadImage(event: any) {
    this.selectedFile = event.target.files[0];
    this.addItemForm.patchValue({
      imageUrl: this.selectedFile,
    });
  }
}
