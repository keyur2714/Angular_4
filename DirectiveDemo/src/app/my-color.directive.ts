import { Directive , ElementRef,OnInit,Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyColorDirective implements OnInit{

  @Input()
  color: string = 'green';

  @Input()
  fontSize: string = '20px';

   constructor(private elementRef:ElementRef) {
    console.log("Directive Object Created...!");
    console.log(this.elementRef);
    console.log(this.elementRef.nativeElement);
   }

   ngOnInit(){
     this.elementRef.nativeElement.style.color = this.color;
     this.elementRef.nativeElement.style.fontSize = this.fontSize;
   }


}
