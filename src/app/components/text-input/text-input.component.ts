import {Component, AfterViewInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-text-input',
  template: '<label>Search users<input #input type="text"></label>'
})
export class TextInputComponent implements AfterViewInit {
  @Output() queryChanged = new EventEmitter<string>();
  @ViewChild('input', {static: false}) searchInput: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((e: any) => e.target.value),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.queryChanged.emit(value);
    });
  }
}
