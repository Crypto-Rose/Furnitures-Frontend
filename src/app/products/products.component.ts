import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { ProductsModalUpdateComponent } from '../products-modal-update/products-modal-update.component';
import { ProductsModalNewComponent } from '../products-modal-new/products-modal-new.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductsComponent implements OnInit {

  public product:any = [];
  public form:any;
  displayedColumns: string[] = ['name', 'type', 'description', 'price', 'edit', 'delete'];

  constructor(private route:ActivatedRoute, private productService: ProductsService, private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
    })

    this.getProduct();

    this.form = this.formBuilder.group({
      name: [''],
      type: [''],
      description: [''],
      price: ['']
    });

  }

  openModalUpdateProduct(data: string): void {
    const dialogRef = this.dialog.open(ProductsModalUpdateComponent, {
      width: '250px',
      data,
    });

    dialogRef.afterClosed();
  }

  openModalNewProduct(): void {
    const dialogRef = this.dialog.open(ProductsModalNewComponent, {
      width: '250px',
    });

    dialogRef.afterClosed();
  }

  public getProduct(){
    this.productService.get(`http://localhost:8080/list-product`)
      .subscribe(response => {
          this.product = response;
      } )
  }

  public deleteProduct(id:number){
    this.productService.delete(`http://localhost:8080/list-product/${id}`)
  .subscribe(() => {
    this.form.reset();
    this.getProduct();
  })
  }

}



