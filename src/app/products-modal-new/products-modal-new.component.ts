import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsModalUpdateComponent } from '../products-modal-update/products-modal-update.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-modal-new',
  templateUrl: './products-modal-new.component.html',
  styleUrls: ['./products-modal-new.component.scss']
})
export class ProductsModalNewComponent implements OnInit {
  public form:any;
  constructor(public dialogRef: MatDialogRef<ProductsModalUpdateComponent>,
    private formBuilder: FormBuilder, private productService: ProductsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      type: [''],
      description: [''],
      price: ['']
    });
  }

  public sendData(){

    if(this.form.value.name === '' ||
      this.form.value.type === '' ||
      this.form.value.description === '' ||
      this.form.value.price === ''){
      return;
    }

    this.productService.post("http://localhost:8080/list-product",
      {
        name:this.form.value.name,
        type:this.form.value.type,
        description:this.form.value.description,
        price: this.form.value.price
      }
    )
    .subscribe(() => {
      this.form.reset();
      this.dialogRef.close();
      window.location.reload();
    })
  }



  onNoClick(): void {
    this.dialogRef.close();
  }


}
