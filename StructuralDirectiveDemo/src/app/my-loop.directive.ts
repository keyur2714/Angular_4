import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

  @Input() set appMyLoop(loopLimit:number){
    for(let i=1;i<=loopLimit;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }  
}
