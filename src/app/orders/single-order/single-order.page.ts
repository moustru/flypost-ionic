import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { statusOrders } from '../../utils/statuses';
import { dateFormat, timeFormat } from '../../utils/date';
import { AlertController } from '@ionic/angular'; 
import axios from 'axios';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.page.html',
  styleUrls: ['./single-order.page.scss'],
})
export class SingleOrderPage implements OnInit {
  id = this.router.snapshot.params['id'];
  orderInfo = null;
  statusDelivery = null;
  modalText = {
    title: null,
    message: null
  }
  failReason = null;

  constructor(private router: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    axios.get(`/courier/orders/${this.id}`).then(res => {
      this.orderInfo = res.data
    })
  }

  status(val) {
    return statusOrders(val)
  }

  toDate(val) {
    return `${dateFormat(val)}, ${timeFormat(val)}`
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.modalText.title,
      message: this.modalText.message,
      buttons: ['Да', 'Нет']
    });

    await alert.present();
  }

  async successDelivery() {
    const alert = await this.alertController.create({
      header: 'Подтверждение доставки',
      message: 'Вы действительно хотите подтвердить завершение доставки?',
      buttons: [
        {
          text: 'Да',
          role: 'yes',
          cssClass: 'success',
          handler: () => {
            axios.patch(`/courier/orders/${this.id}/delivered`).then(() => {})
          }
        },
        {
          text: 'Нет',
          cssClass: 'danger'
        }
      ]
    });

    this.statusDelivery = 'success';

    await alert.present();
  }

  async failDelivery() {
    const alert = await this.alertController.create({
      header: 'Отмена доставки',
      message: 'Вы действительно хотите отменить доставку?',
      inputs: [
        {
          name: 'fail',
          type: 'text',
          id: 'name2-id',
          value: this.failReason,
          placeholder: 'Причина отмены'
        }
      ],
      buttons: [
        {
          text: 'Да',
          role: 'yes',
          cssClass: 'success',
          handler: () => {
            axios.patch(`/courier/orders/${this.id}/not-delivered`, {
              failReason: this.failReason
            }).then(() => {})
          }
        },
        {
          text: 'Нет',
          cssClass: 'danger'
        }
      ]
    });

    this.statusDelivery = 'fail';

    await alert.present();
  }
}
