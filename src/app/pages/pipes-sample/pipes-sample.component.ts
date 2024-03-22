import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import localeTr from '@angular/common/locales/tr';
import localeEN from '@angular/common/locales/en';
import { environment } from '../../environments/environment';
import { OrderStatusPipe } from '../../pipes/OrderStatus.pipe';

// provider ile yapılan kofigurasyonlar component veya uygulama geneline yansır.
// deafult localization ayarları en-US olarak gelir.
// ng add @angular/localization paketini ekledik
// ng add ile eklenen paketlere config ayarları kendiliğinden yükleniyor.

registerLocaleData(localeTr);
registerLocaleData(localeEN);
// Pipe içinde CommonModule kullandık
// Directive Pipelar Import ile ekleniyor
@Component({
  selector: 'app-pipes-sample',
  standalone: true,
  imports: [CommonModule, OrderStatusPipe],
  providers: [{ provide: LOCALE_ID, useValue: environment.localization }],
  templateUrl: './pipes-sample.component.html',
  styleUrl: './pipes-sample.component.scss',
})
export class PipesSampleComponent {
  order: any = {
    orderDate: new Date(),
    listPrice: 1500.5,
    customerName: 'Ali',
    address: 'Istanbul Türkiye',
    freight: 15.59,
    discountRate: 0.2,
    status: 102,
  };
}
