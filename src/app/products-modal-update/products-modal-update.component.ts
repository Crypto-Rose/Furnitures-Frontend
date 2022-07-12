import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-modal-update',
  templateUrl: './products-modal-update.component.html',
  styleUrls: ['./products-modal-update.component.scss']
})
export class ProductsModalUpdateComponent implements OnInit {
  public form:any;

  constructor(public dialogRef: MatDialogRef<ProductsModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private productService: ProductsService) { }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        name: this.data.name,
        type: this.data.type,
        description: this.data.description,
        price: this.data.price
      });

    }

    public updateProduct(){

      this.productService.put(`http://localhost:8080/list-product/${this.data.id}`,
      {
        name:this.form.value.name,
        type:this.form.value.type,
        description:this.form.value.description,
        price: this.form.value.price
      })
      .subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      })
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
