import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'template-read',
  templateUrl: './read.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadTemplate implements OnInit {
  @Input() contentRead = `Vội vàng quá, yêu hay không yêu cũng đều như vậy cả, kết cục vẫn là buộc phải chia tay! 
  \n   Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe. Nắng rải từng giọt xuống lòng đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút gió.- Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi kìa! Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.- Tớ không sao... Vội vàng quá, yêu hay không yêu cũng đều như vậy cả, kết cục vẫn là buộc phải chia tay! 
  \n   Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe. Nắng rải từng giọt xuống lòng đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút gió.- Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi kìa! Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.- Tớ không sao... Vội vàng quá, yêu hay không yêu cũng đều như vậy cả, kết cục vẫn là buộc phải chia tay! 
  \n   Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe. Nắng rải từng giọt xuống lòng đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút gió.- Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi kìa! Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.- Tớ không sao... Vội vàng quá, yêu hay không yêu cũng đều như vậy cả, kết cục vẫn là buộc phải chia tay! 
  \n   Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe. Nắng rải từng giọt xuống lòng đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút gió.- Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi kìa! Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.- Tớ không sao... Vội vàng quá, yêu hay không yêu cũng đều như vậy cả, kết cục vẫn là buộc phải chia tay! 
  \n   Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe. Nắng rải từng giọt xuống lòng đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút gió.- Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi kìa! Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.- Tớ không sao...`
  constructor() { }

  ngOnInit(): void {
  }

}
