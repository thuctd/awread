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
  @Input() contentRead = `Vội vàng quá, yêu hay không yêu cũng đều như vậy cả, kết cục vẫn
  là buộc phải chia tay!
  1.Cuộc đời của mỗi người giống như những chuyến
  đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp
  người này hay người khác. Có người nói đi như thế nào, gặp ai đều
  là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi
  như thế, nhưng lại quên rằng, chúng ta chính là người lái những
  chiếc xe.***Nắng rải từng giọt xuống lòng
  đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ
  rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút
  gió.- Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi
  kìa!Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt
  Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế
  này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.-
  Tớ không sao.Thư cười, nụ cười lẫn vào nắng hình như
  hơi chói mắt. Thế này với cô có là gì! Cô đang khoác trên mình màu
  áo đỏ, màu áo của đội Đỏ. Những người được cô tuyên truyền vận
  động hiến máu đã tặng đi một phần sức khỏe của mình, trao cho
  những sinh mạng yếu ớt khác. Vậy thì mới chỉ có chút nắng này, cô
  sao có thể từ bỏ dễ dàng như vậy được. Vừa nghĩ, trước
  mặt cô đã thấy một anh chàng cao lớn đang bước lại gần. Anh bạn
  bước chậm, có lẽ cũng không có gì là quá vội. Thư xốc lại tệp tờ
  rơi, tư thế chuẩn bị.- Chào bạn, mình là thành viên
  của đội Đỏ trường Kinh tế. Bạn có thể cho mình xin chút thời gian
  không ạ?Anh bạn nheo mắt nhìn thẳng vào Thư, nụ cười
  có vẻ gian xảo.- Nếu mình nói không thể thì sao?Thư
  ngẩn mặt nhìn anh bạn lạ. Cô đã cố gắng để ý và chọn giữ lại những
  người có vẻ không vội. Và thường thì những người cô giữ lại dù
  thích hay không thích vẫn rất hào phóng cho cô xin mấy phút đồng
  hồ nghe cô giới thiệu và vận động. Còn trường hợp hiện tại, cô
  chưa gặp bao giờ!Thấy cô bạn đội Đỏ có vẻ khó xử, anh
  chàng nọ khẽ cười một cái.- Nếu không định cho bạn
  thời gian, mình đã bỏ đi lâu rồi.Thư lại một phen ngẩn
  người, anh bạn nhìn cô thú vị rồi tự động rút trên tay cô một tờ
  thông tin về ngày hội hiến máu. Anh chàng gật gù:- Bạn
  tên gì? Hi vọng mình sẽ được gặp lại bạn ngày hiến máu.Dường
  như anh bạn cũng không cần nghe câu trả lời. Anh gấp đôi tờ giấy
  nhét vào cặp rồi tiếp tục đi. Thư bấy giờ mới nối liền được các
  nơ-ron thần kinh lại, nói với theo từ phía sau:- Cảm
  ơn bạn, hẹn gặp lại bạn. Mình tên Thư.Anh bạn kia hình
  như có hơi dừng bước nhưng không quay đầu lại, anh chỉ giơ bàn tay
  lên tỏ ý chào rồi cứ vậy bước đi.- Ai đó Thư?Giọng
  cô bạn thân trong câu lạc bộ tò mò lên tiếng. Thư cười nhẹ, lắc
  đầu.Một ngày nắng, dưới hàng cây lưa thưa lá dường như
  có chút gió nhẹ lùa vào.Ngày hội hiến máu
  nhân đạo đông đúc không khác gì hội chợ thương mại. Thư đứng tại
  cửa ra vào, có nhiệm vụ gửi lời chào và lời chúc đến những bạn đi
  hiến máu. Cứ một chốc cô lại ngó nghiêng, cậu bạn lạ hôm nọ liệu
  có đến không nhỉ?- Này bạn, tôi có thể hỏi một chút
  không?Thư giật mình nhìn người đứng đối diện. Là một
  anh chàng khá điển trai, đeo cặp kính trắng khá dày và làn da ngăm
  ngăm đen. Thư không rõ ánh mắt sau cặp kính trắng của cậu là gì,
  chỉ thấy cả người cậu đang run lên không rõ lý do. Thư lùi lại một
  bước, nhỏ nhẹ:- Vâng, mình có thể giúp...-
  Các cậu đi bán máu ở đâu?Thư còn chưa kịp nói hết câu
  cậu bạn kia đã chen ngang. Gương mặt Thư cứng đơ, cô không hiểu
  câu hỏi này của cậu bạn là có ý gì. Cô hít một hơi thật sâu lấy
  lại bình tĩnh rồi lên tiếng:- Chúng tớ không bán máu.
  Sau khi nhận máu các bạn hiến, chúng tớ chuyển về cho các bệnh
  viện và...- Nói dối!Cậu bạn lạ cắt ngang
  lời Thư, ngữ điệu có gì đó vẻ rất tức giận. Thư sợ hãi lùi lại
  thêm vài bước, căng thẳng đề phòng.Nhưng cậu bạn sau
  khi ngắt lời xong cũng chẳng gay gắt thêm. Cậu nhìn thẳng vào mắt
  Thư:- Trả lời tôi đi, tôi thật sự rất cần...Chưa
  kịp nói hết câu, cậu bạn đã ngã ụp xuống sân trường. Mấy anh tình
  nguyện gần đó nhanh chóng đưa cậu vào phòng y tế. Kỳ lạ, cậu ta là
  ai, tại sao lại hỏi rồi nói với Thư những câu như thế?Lúc
  Thư vào phòng y tế thăm người bạn lạ thì cậu ta đã tỉnh. Cậu vẫn
  nằm lầm lì một chỗ, nhưng cũng không từ bỏ thắc mắc đội Đỏ bán máu
  ở đâu. Thư đứng từ đằng xa nhìn ngó thái độ của người lạ, cậu ta
  dường như không có ý xấu, cậu ta chỉ muốn biết ở đâu có thể bán
  máu thôi thì phải.- Em Phạm Minh Duy. Em phải hiểu là
  em đang bị suy nhược cơ thể nghiêm trọng, em không thể bán máu
  được, không có bất kỳ chỗ nào dám mua máu của em đâu. Em đã bán
  bao nhiêu máu rồi?Cậu bạn tên Minh Duy cúi đầu không
  nói. Thư hình như thấy nước mắt cậu rơi. Kỳ quặc, con trai mà rơi
  nước mắt, chắc hẳn phải có điều gì khiến cậu ta đau khổ lắm.-
  Cậu có khó khăn gì à?Thư nhỏ giọng hỏi, âm thanh cất
  lên từ phía sau lưng không biết người nào đó có nghe thấy không.
  Thư thấy cậu bạn khẽ cúi đầu.- Cách nhanh nhất bây
  giờ, tôi chỉ có thể bán máu.Thư không hiểu, càng nghe
  càng không hiểu. Cô tiến gần cậu bạn hơn một chút.-
  Này, tôi có thể giúp gì cho cậu không?Cô y tá lắc đầu
  bỏ ra ngoài. Mấy thành viên đội Đỏ kể cả Thư đều đang nín thở,
  kiên nhẫn nghe câu trả lời từ cậu bạn Minh Duy đó. Nhưng Duy không
  nói, anh rút dây truyền đứng dậy bỏ ra ngoài. Ở đó, làm gì có ai
  hiểu anh.Tất cả mọi người trong phòng trố mắt nhìn
  Duy, không ai dám ngăn cản. Chỉ đến khi ngoài cửa vang lên một
  giọng nói đầy khiêu khích, Duy dừng lại, mọi người trong phòng
  cũng chạy vội ra ngoài.- Tôi mua, cậu có dám bán
  không?Duy nhìn người đứng đối diện. Anh chàng dong
  dỏng cao và khuôn mặt đang nở nụ cười không rõ cảm xúc. Anh thở
  mạnh, lên tiếng hỏi:- Anh mua, anh mua với giá bao
  nhiêu?- Ba trăm nghìn cho 100ml máu, nhưng bù lại, cậu
  phải bán hết máu của cậu cho tôi!Duy ngạc nhiên, tất
  cả những người đứng đó đều ngạc nhiên. Thư nheo mày nhìn anh chàng
  đầy khí phách kia thấy quen quen, phải rồi, người đó là người đã
  nói hi vọng gặp cô trong ngày hội hiến máu. Anh chàng
  kia vẫn nhìn Duy chờ đợi.`
  constructor() { }

  ngOnInit(): void {
  }

}
