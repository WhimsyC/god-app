import { Directive, HostListener, Renderer2 } from "@angular/core";



@Directive({
    selector: 'app-root',
  })
  export class ToggleDirective {
    constructor(private renderer: Renderer2) {}
  
    @HostListener('click', ['$event.currentTarget']) onClick(target) {
      /*
  currentTarget refers to the element to which the event handler is attached.
  target refers to the element on which the event occurs.
      */
      let iconElement = target.querySelector('.togglingIcon');
      let icons = {
        frown: { icon: 'frown', pair: 'smile' },
        smile: { icon: 'smile', pair: 'frown' },
        angry: { icon: 'angry', pair: 'laughing' },
        laughing: { icon: 'laughing', pair: 'angry' },
      };
  
      for (let x in icons) {
        if (iconElement.classList.contains(icons[x].icon)) {
          this.renderer.addClass(iconElement, icons[icons[x].pair].icon);
          this.renderer.removeClass(iconElement, icons[x].icon);
          break;
        }
      }
    }
  }