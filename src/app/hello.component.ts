import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>FeedBack NGS!</h3>`,
  styles: [`h3 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
