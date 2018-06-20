
import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[hide-header]', // Attribute selector
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {

  @Input("header") header: HTMLElement;
  headerHeight;
  scrollContent;

  constructor(public element: ElementRef, public renderer: Renderer) {

    console.log('Hello HideHeaderDirective Directive');
  }

  /**
   * ngOnInit contiene la transaccion y el tamaño del header nativo
   * 
   */
    ngOnInit(){
    this.headerHeight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
  }

  /**
   *  setea estilos dependiendo el tamaño  que ocupe el scroll
   * @param event recibe el tamaño que ocupa el scroll en pantalla
   */
  
  onContentScroll(event){
    if(event.scrollTop > 36){
      this.renderer.setElementStyle(this.header, "top", "-258px")
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px")
    } else {
      this.renderer.setElementStyle(this.header, "top", "-10px");
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "96px")
    }
  }

}