import { Directive, Input } from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]' // Attribute selector
})
export class HideHeaderDirective {

 // @Input ("header") header:HTMLElement;

  constructor() {
    console.log('Hello HideHeaderDirective Directive');
  }
  
  onContentScroll(event){
    console.log(event);
  }

}
