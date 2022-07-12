import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalNewComponent } from './products-modal-new.component';

describe('ProductsModalNewComponent', () => {
  let component: ProductsModalNewComponent;
  let fixture: ComponentFixture<ProductsModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsModalNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
