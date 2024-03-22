import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textDecoration]',
  standalone: true, // module bağımlı değil
})
export class TextDecorationDirective {
  // angular bir component veya directive içerisinde servis kullanmak için DI işlemi yapıyoruz.
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.el.nativeElement.style.fontSize = '12px';
    this.renderer.setAttribute(
      this.el.nativeElement,
      'title',
      'textDecoration'
    );
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver($event: any) {
    console.log('event', $event);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }
}
