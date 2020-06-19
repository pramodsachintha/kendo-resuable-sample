import { Directive, OnInit, Input } from '@angular/core';
import { DataBindingDirective, GridComponent } from '@progress/kendo-angular-grid';
type dataFn<T> = (arg1: object, ...args: any[]) => Promise<T>;

@Directive({
  selector: '[appKenodCustomDataBinding]'
})
export class KenodCustomDataBindingDirective extends DataBindingDirective implements OnInit {

  @Input() dataLoadFunction: dataFn<any>;
  constructor(public grid: GridComponent) {
    super(grid);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.rebind();
  }

  public rebind(): void {
    const params = {}; // params can be used to add more functionalities such as filtering and paginating the grid
    this.grid.loading = true;
    this.dataLoadFunction(params).then((result) => {
      this.grid.data = result;
      this.grid.loading = false;
    });
  }

}
