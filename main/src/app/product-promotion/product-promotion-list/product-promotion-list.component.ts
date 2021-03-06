import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductPromotion} from '../../shared/models/ProductPromotion';
import {Product} from '../../shared/models/product';
import {ProductPromotionService} from '../../shared/services/product-promotion.service';
import {DeleteProductPromotionComponent} from '../delete-product-promotion/delete-product-promotion.component';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-product-promotion-list',
  templateUrl: './product-promotion-list.component.html',
  styleUrls: ['./product-promotion-list.component.css']
})
export class ProductPromotionListComponent implements OnInit {
  productPromotions: ProductPromotion[];
  products: Product[];
  idProduct: number;
  private mapProduct = new Map();
  private mapProductPromotion = new Map();
  constructor(private productPromotionService: ProductPromotionService,
              private router: Router,
              private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.productPromotionService.getProductPromotionList().subscribe((data: ProductPromotion[])  => {{
      this.productPromotions = data;
      this.productPromotions.forEach(element => {
        this.productPromotionService.getProductPromotionDto(element.id).subscribe(data1 => {
          this.idProduct = data1.idProduct;
          this.mapProductPromotion.set(element.id, this.idProduct);
        });
      });
    }});
    this.productPromotionService.getProductList().subscribe((data: Product[]) => {{
      this.products = data;
      this.products.forEach(element => {
        this.mapProduct.set(element.id, element.name);
      });
    }});
  }
  deleteProductPromotion(id: number) {
    this.productPromotionService.deleteProductPromotion(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }
  openDialog(id) {
    this.productPromotionService.getProductPromotion(id).subscribe(dataOfPromotion => {
      const dialogRef = this.dialog.open(DeleteProductPromotionComponent, {
        width: '500px',
        height: '200px',
        data: {data1: dataOfPromotion},
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
  //
  // updateProductPromotion(id: number) {
  //   this.router.navigate(['promotion/update', id]);
  // }
}