import { Pipe, PipeTransform } from '@angular/core';

enum OrderStatus {
  Invoiced = 100,
  Shipped = 102,
  Submmitted = 104,
}

@Pipe({
  name: 'orderStatus',
  standalone: true,
})
export class OrderStatusPipe implements PipeTransform {
  // ...rest operator c# params
  transform(value: number, ...args: any): any {
    console.log('value', value);
    console.log('args', OrderStatus.Submmitted.toString());

    if (value === OrderStatus.Invoiced) return 'Invoiced';
    else if (value === OrderStatus.Shipped) return 'Shipped';
    else return 'Submmitted';
  }
}
