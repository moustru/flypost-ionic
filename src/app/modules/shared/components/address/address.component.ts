import {
  Component,
  ComponentFactory as Factory,
  ComponentFactoryResolver as FactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Address, FoobarAddress, RussianAddress } from "../../types/simple.type";

@Component({
  selector: 'app-address',
  template: `<ng-template #addressRef></ng-template>`
})
export class AddressComponent implements OnInit {

  private _container?: ViewContainerRef;
  @ViewChild('addressRef', { read: ViewContainerRef })
  @Input() address?: Address

  constructor(private factoryResolver: FactoryResolver) { }

  ngOnInit() {
    const createdAddressComponent = this._container!.createComponent(this.resolveAddressFactory());

    if (!this.address) {
      throw new Error('Address is not provided')
    }

    createdAddressComponent.instance.address = this.address
  }

  private resolveAddressFactory(): Factory<AbstractAddressComponent<Address>> {
    switch (this.address!.type) {
      case 'RUSSIAN':
        return this.factoryResolver.resolveComponentFactory(RussianAddressComponent)

      case 'FOOBAR':
        return this.factoryResolver.resolveComponentFactory(FoobarAddressComponent)
    }
  }
}

/**
 * Базовый класс компонента адреса.
 */
abstract class AbstractAddressComponent<T extends Address> {
  @Input() address?: T;
}

@Component({
  selector: 'app-russian-address',
  template: `
      <ng-template [ngIf]="address.country">Страна: {{ address.country }},</ng-template>
      Регион: {{ address.region }},
      Город: {{ address.city }},
      Улица {{ address.street }},
      <ng-template [ngIf]="address.postcode">Индекс: {{ address.postcode }},</ng-template>
      <ng-template [ngIf]="address.home">Дом: {{ address.home }},</ng-template>
      <ng-template [ngIf]="address.flat">Номер квартиры: {{ address.flat }},</ng-template>
      <ng-template [ngIf]="address.metro">Наименование метро: {{ address.metro }},</ng-template>
  `
})
export class RussianAddressComponent extends AbstractAddressComponent<RussianAddress> {
}

@Component({
  selector: 'app-foobar-address',
  template: `This is foobar address`
})
export class FoobarAddressComponent extends AbstractAddressComponent<FoobarAddress> {
}
