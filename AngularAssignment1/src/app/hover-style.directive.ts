import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  @Input() fontWeight?: string;
  @Input() borderColor?: string;

  constructor(private elm: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter(button) {
    this.mouseEnterEffect(this.borderColor, this.fontWeight);
  }

  @HostListener('mouseleave') onMouseLeave(button) {
    this.mouseLeaveEffect(this.borderColor, this.fontWeight);
  }

  private mouseEnterEffect(color, fontWeight) {
    if (color) {
      this.elm.nativeElement.style.borderBottom = `2px solid ${color}`;
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = fontWeight;
    }
  }

  private mouseLeaveEffect(color, fontWeight) {
    if (color) {
      this.elm.nativeElement.style.borderBottom = '';
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }

}
