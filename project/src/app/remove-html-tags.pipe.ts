import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'removeHtmlTags'
})
export class RemoveHtmlTagsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    const doc = new DOMParser().parseFromString(value, 'text/html');
    return this.sanitizer.bypassSecurityTrustHtml(doc.body.textContent || '');
  }

}
