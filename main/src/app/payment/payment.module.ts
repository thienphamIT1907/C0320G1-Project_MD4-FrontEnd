import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentCenterComponent } from './payment-center/payment-center.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';


@NgModule({
  declarations: [PaymentCenterComponent, DeliveryAddressComponent, PaymentInvoiceComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
