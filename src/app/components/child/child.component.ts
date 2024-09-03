import { ChangeDetectionStrategy, ChangeDetectorRef, Component, input, InputSignal } from '@angular/core';
import { IData } from '@interfaces/data.interface';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SharedService, useClass: SharedService }],
})
export class ChildComponent {
  public parentPrimitiveData: InputSignal<number> = input.required();
  public parentNonPrimitiveData: InputSignal<IData> = input.required();
  public parentAsyncData: InputSignal<number> = input.required();

  public primitiveData: number = 0;
  public nonPrimitiveData: IData = { value: 0 };

  constructor(
    private cdr: ChangeDetectorRef,
    public sharedService: SharedService
  ) {}

  public forceCheck(): void {
    this.cdr.markForCheck();
  }

  public updatePrimitiveData(): void {
    this.primitiveData++;
  }

  public updateNonPrimitiveData(): void {
    this.nonPrimitiveData.value++;
  }

  public updateServiceValue(): void {
    this.sharedService.sharedValue++;
  }
}
