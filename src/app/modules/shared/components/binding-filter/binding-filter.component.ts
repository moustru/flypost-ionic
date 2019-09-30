import { Component, OnInit } from '@angular/core';
import { BindingService } from "shared/services/binding.service";
import { BindingOutput } from "shared/dto/common";
import { ModalController } from "@ionic/angular";
import { AbstractModalComponent } from "shared/components/abstract-modal-component";

@Component({
  selector: 'app-binding-filter',
  templateUrl: './binding-filter.component.html',
  styleUrls: ['./binding-filter.component.scss'],
  providers: [BindingService]
})
export class BindingFilterComponent extends AbstractModalComponent implements OnInit {

  private _bindings = Array<BindingOutput>()

  constructor(private bindingService: BindingService, modals: ModalController) {
    super(modals)
  }

  ngOnInit() {
    this.bindingService.getBranches().subscribe(output => this._bindings = output)
  }

  get bindings(): BindingOutput[] {
    return this._bindings
  }
}
