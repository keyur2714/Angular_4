import { Component,HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple-animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anti-clock.animation';
import { ON_OFF_ANIMATION } from './animations/on-off.animation'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [STATE_ANIMATION,ROUND_ANTICLOCK_ANIMATION,ON_OFF_ANIMATION]
})
export class AppComponent {
  title = 'AnimationDemo';
  state : string = 'start';

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in'; 
  @HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute'; 

  friendsName : string[] = ["keyur","denish","vinit"];

  onOffState : string = 'on';


  toggleStates(){
    this.state = this.state == 'start' ? 'stop' : 'start';
  }

  toggleRowState(){
    this.onOffState = this.onOffState == 'on' ? 'off' : 'on';
  }
}
