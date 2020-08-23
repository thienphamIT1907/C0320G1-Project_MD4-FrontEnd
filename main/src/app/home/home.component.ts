//creator: Nguyễn Xuân Hùng
import { Router } from '@angular/router';
import { Auction } from './../shared/models/auction';
import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../shared/services/auction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auctionList: Auction[];
  auctionStatusId =2;
  message="";
  showSearch :boolean;
  productName :string="";
  price : string="";
  categoryName : string=""; 
  currentProductName :string="";
  currentPrice : string="";
  currentCategoryName : string="";
  constructor(private auctionService: AuctionService,
    private router:Router) { }
  
  ngOnInit() {
    this.showSearch=false;
    this.message="";
     this.auctionService.getAuctionsProductByAuctionId(this.auctionStatusId).subscribe(data=> {
       this.auctionList=data;
      })
     
  }
  changeStatusAuction(value){
    if(value=="đang đấu giá"){
      this.auctionStatusId=2;
      this.ngOnInit();
    }else{
      this.auctionStatusId=3;
      this.ngOnInit();
    }
  }
  navigateToMyAuctionPage(){
    this.router.navigateByUrl("/auction/myAuction");
  }
  navigateToTopAuctionPage(){
    this.router.navigateByUrl("/auction/topAuction");
  }
  changeCategoryName(value){
    this.message="";
    if(value==""){
      this.ngOnInit();
    }else{
      this.auctionService.getAucionsListByAuctionIdAndCategoryName(2,value).subscribe(data=>{
        this.auctionList= data;
        if(this.auctionList.length==0){
          this.message="Hiện tại không có loại sản phẩm này đang đấu giá"
        }
      }
        )
    }
  }

  showSearchForm(){
    if(this.showSearch){
      this.showSearch=false;
    }else{
      this.showSearch=true;
    }
  }
  search(){
    this.productName=this.currentProductName;
    this.categoryName = this.currentCategoryName;
    this.price = this.currentPrice;
    this.auctionService.searchAuctionsAtHomePage(this.productName,this.price,this.currentPrice)
  }
}
