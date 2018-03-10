import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  helloStep1 : string = "";
  helloStep2 : string = "";
  helloStep3 : string = "";
  helloStep4 : string = "";

  isCompleted : boolean = false;

  // VALIDATION FUNCTIONS
  isStep1Valid(){
    return this.helloStep1 === "hello";
  }

  isStep2Valid(){
    return this.helloStep2 === "sppoti";
  }

  isStep3Valid(){
    return this.helloStep3 === "nice";
  }

  isStep4Valid(){
    return this.helloStep4 === "wizard";
  }

  // ON NEXT HIT
  onStep1Next($event){
    //do something when next button is pressed
  }
  onStep2Next($event){
    //do something when next button is pressed
  }
  onStep3Next($event){
    //do something when next button is pressed
  }

  // ON COMPLETE - LAST STEP
  onComplete($event){
    console.log("on complete");
    this.isCompleted = true;
  }

  // ON PREV HIT
  onStep2Prev(event){
    //do something when prev button is pressed
  }
  
  onStep3Prev(event){
    //do something when prev button is pressed
  }
  
  onStep4Prev(event){
    //do something when prev button is pressed
    this.isCompleted = false;
  }

}
