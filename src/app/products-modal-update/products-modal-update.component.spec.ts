import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalUpdateComponent } from './products-modal-update.component';

describe('ProductsModalUpdateComponent', () => {
  let component: ProductsModalUpdateComponent;
  let fixture: ComponentFixture<ProductsModalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsModalUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
