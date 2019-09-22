import { Component, OnInit } from '@angular/core';
import { BindingService } from "shared/services/binding.service";
import { BindingOutput } from "shared/dto/common";

@Component({
  selector: 'app-context-filter',
  templateUrl: './binding-filter.component.html',
  styleUrls: ['./binding-filter.component.scss'],
  providers: [BindingService]
})
export class BindingFilterComponent implements OnInit {

  private _bindings = Array<BindingOutput>()

  constructor(private bindingService: BindingService) { }

  ngOnInit() {
    this.bindingService.getBranches().subscribe(output => this._bindings = output)
  }

  get bindings(): BindingOutput[] {
    return this._bindings
  }
}
