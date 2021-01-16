import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // BASIC OBSERVABLES MANIPLUATION
  private obervable$;

  ngOnInit(): void {
    this.obervable$ = new Observable((observer: any) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    // BASIC SUBSCRIPTION
    this.obervable$.subscribe(
      value => console.log(value),
      err => console.log(err),
    () => console.log('completed')
    );

    // SUBSCRIPTION WITH OPERATORS
    this.obervable$.pipe(
      map(value => value * 2),
      filter(value => value >= 4)
    ).subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    console.log('destroyed');
    this.obervable$.unsubscribe();
  }
  /*
  // OBSERVABLE FROM A CLICK EVENT
  private eventObservable$ = fromEvent(document, 'click');


  ngOnInit(): void {
    this.eventObservable$.subscribe(value => console.log(value));
  }


  ngOnDestroy(): void {
  }*/



}

