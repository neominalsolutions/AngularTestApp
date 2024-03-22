import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// Annotations
// classların hangi tipte bir yapı olarak değerlendirileceğini belirliğimi declartion tanımlayıcılar.
// <app-root>
// import ile başka bir moduldeki veriyi component için çekebiliriz.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // property
  title = 'Angular'; // Angular her bir yazılan değeri state olarak yaklaşır ve burada bir değiş olursa bu değişimi changeTracker mekanizması ile html bind eder.

  // angular için class react için function
  clickMe() {
    // class içindeki property this keyword ile kullanılır
    this.title = 'Angular İlk Gün';
  }
}
