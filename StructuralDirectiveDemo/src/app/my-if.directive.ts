import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) {
    console.log("Directive Object Created...");
    console.log("Current Template Ref is: "+this.templateRef);
   }

  @Input("appMyIf") set myIfCondition(condition: boolean){
    console.log(condition);
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }


}
