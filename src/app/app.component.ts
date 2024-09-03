import { Component } from '@angular/core';
import { ChildComponent } from '@components/child/child.component';
import { IData } from '@interfaces/data.interface';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ChildComponent, AsyncPipe],
})
export class AppComponent {
  public primitiveData: number = 0;
  public nonPrimitiveData: IData = { value: 0 };
  public asyncData$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(public sharedService: SharedService) {}

  public updatePrimitiveData(): void {
    this.primitiveData++;
  }

  public updateNonPrimitiveDataReference(): void {
    this.nonPrimitiveData = { value: this.nonPrimitiveData.value + 1 };
  }

  public updateNonPrimitiveDataValue(): void {
    this.nonPrimitiveData.value++;
  }

  public updateAsyncData(): void {
    this.asyncData$.next(this.asyncData$.value + 1);
  }

  public updateServiceValue(): void {
    this.sharedService.sharedValue++;
  }
}
