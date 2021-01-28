import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'organ-content-book',
  templateUrl: './content-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBookOrgan implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Input() content = `
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khóCuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.

  ***

  Nắng rải từng giọt xuống lòng đường vàng ươm như những giọt mật. Thư vuốt mồ hôi, xóc đều tập tờ rơi trên tay, bàn tay nhỏ phe phẩy trước mặt cố tạo ra một chút gió.

  - Hay cậu về sớm đi Thư, mặt cậu đỏ bừng lên rồi kìa!

  Cô bạn cùng câu lạc bộ lo lắng nhìn vào khuôn mặt Thư đang nóng đỏ, lại nhìn đường sá đã thưa người. Trưa nắng thế này, cũng chẳng ai muốn vác mặt ra đường mà hành xác làm gì cả.

  - Tớ không sao.

  Thư cười, nụ cười lẫn vào nắng hình như hơi chói mắt. Thế này với cô có là gì! Cô đang khoác trên mình màu áo đỏ, màu áo của đội Đỏ. Những người được cô tuyên truyền vận động hiến máu đã tặng đi một phần sức khỏe của mình, trao cho những sinh mạng yếu ớt khác. Vậy thì mới chỉ có chút nắng này, cô sao có thể từ bỏ dễ dàng như vậy được.

  Vừa nghĩ, trước mặt cô đã thấy một anh chàng cao lớn đang bước lại gần. Anh bạn bước chậm, có lẽ cũng không có gì là quá vội. Thư xốc lại tệp tờ rơi, tư thế chuẩn bị.

  - Chào bạn, mình là thành viên của đội Đỏ trường Kinh tế. Bạn có thể cho mình xin chút thời gian không ạ?

  Anh bạn nheo mắt nhìn thẳng vào Thư, nụ cười có vẻ gian xảo.

  - Nếu mình nói không thể thì sao?

  Thư ngẩn mặt nhìn anh bạn lạ. Cô đã cố gắng để ý và chọn giữ lại những người có vẻ không vội. Và thường thì những người cô giữ lại dù thích hay không thích vẫn rất hào phóng cho cô xin mấy phút đồng hồ nghe cô giới thiệu và vận động. Còn trường hợp hiện tại, cô chưa gặp bao giờ!

  Thấy cô bạn đội Đỏ có vẻ khó xử, anh chàng nọ khẽ cười một cái.

  - Nếu không định cho bạn thời gian, mình đã bỏ đi lâu rồi.

  Thư lại một phen ngẩn người, anh bạn nhìn cô thú vị rồi tự động rút trên tay cô một tờ thông tin về ngày hội hiến máu. Anh chàng gật gù:

  - Bạn tên gì? Hi vọng mình sẽ được gặp lại bạn ngày hiến máu.

  Dường như anh bạn cũng không cần nghe câu trả lời. Anh gấp đôi tờ giấy nhét vào cặp rồi tiếp tục đi. Thư bấy giờ mới nối liền được các nơ-ron thần kinh lại, nói với theo từ phía sau:

  - Cảm ơn bạn, hẹn gặp lại bạn. Mình tên Thư.

  Anh bạn kia hình như có hơi dừng bước nhưng không quay đầu lại, anh chỉ giơ bàn tay lên tỏ ý chào rồi cứ vậy bước đi.

  - Ai đó Thư?

  Giọng cô bạn thân trong câu lạc bộ tò mò lên tiếng. Thư cười nhẹ, lắc đầu.

  Một ngày nắng, dưới hàng cây lưa thưa lá dường như có chút gió nhẹ lùa vào.



  Ngày hội hiến máu nhân đạo đông đúc không khác gì hội chợ thương mại. Thư đứng tại cửa ra vào, có nhiệm vụ gửi lời chào và lời chúc đến những bạn đi hiến máu. Cứ một chốc cô lại ngó nghiêng, cậu bạn lạ hôm nọ liệu có đến không nhỉ?

  - Này bạn, tôi có thể hỏi một chút không?

  Thư giật mình nhìn người đứng đối diện. Là một anh chàng khá điển trai, đeo cặp kính trắng khá dày và làn da ngăm ngăm đen. Thư không rõ ánh mắt sau cặp kính trắng của cậu là gì, chỉ thấy cả người cậu đang run lên không rõ lý do. Thư lùi lại một bước, nhỏ nhẹ:

  - Vâng, mình có thể giúp...

  - Các cậu đi bán máu ở đâu?

  Thư còn chưa kịp nói hết câu cậu bạn kia đã chen ngang. Gương mặt Thư cứng đơ, cô không hiểu câu hỏi này của cậu bạn là có ý gì. Cô hít một hơi thật sâu lấy lại bình tĩnh rồi lên tiếng:

  - Chúng tớ không bán máu. Sau khi nhận máu các bạn hiến, chúng tớ chuyển về cho các bệnh viện và...

  - Nói dối!

  Cậu bạn lạ cắt ngang lời Thư, ngữ điệu có gì đó vẻ rất tức giận. Thư sợ hãi lùi lại thêm vài bước, căng thẳng đề phòng.

  Nhưng cậu bạn sau khi ngắt lời xong cũng chẳng gay gắt thêm. Cậu nhìn thẳng vào mắt Thư:

  - Trả lời tôi đi, tôi thật sự rất cần...

  Chưa kịp nói hết câu, cậu bạn đã ngã ụp xuống sân trường. Mấy anh tình nguyện gần đó nhanh chóng đưa cậu vào phòng y tế. Kỳ lạ, cậu ta là ai, tại sao lại hỏi rồi nói với Thư những câu như thế?



  Lúc Thư vào phòng y tế thăm người bạn lạ thì cậu ta đã tỉnh. Cậu vẫn nằm lầm lì một chỗ, nhưng cũng không từ bỏ thắc mắc đội Đỏ bán máu ở đâu. Thư đứng từ đằng xa nhìn ngó thái độ của người lạ, cậu ta dường như không có ý xấu, cậu ta chỉ muốn biết ở đâu có thể bán máu thôi thì phải.

  - Em Phạm Minh Duy. Em phải hiểu là em đang bị suy nhược cơ thể nghiêm trọng, em không thể bán máu được, không có bất kỳ chỗ nào dám mua máu của em đâu. Em đã bán bao nhiêu máu rồi?

  Cậu bạn tên Minh Duy cúi đầu không nói. Thư hình như thấy nước mắt cậu rơi. Kỳ quặc, con trai mà rơi nước mắt, chắc hẳn phải có điều gì khiến cậu ta đau khổ lắm.

  - Cậu có khó khăn gì à?

  Thư nhỏ giọng hỏi, âm thanh cất lên từ phía sau lưng không biết người nào đó có nghe thấy không. Thư thấy cậu bạn khẽ cúi đầu.

  - Cách nhanh nhất bây giờ, tôi chỉ có thể bán máu.

  Thư không hiểu, càng nghe càng không hiểu. Cô tiến gần cậu bạn hơn một chút.

  - Này, tôi có thể giúp gì cho cậu không?

  Cô y tá lắc đầu bỏ ra ngoài. Mấy thành viên đội Đỏ kể cả Thư đều đang nín thở, kiên nhẫn nghe câu trả lời từ cậu bạn Minh Duy đó. Nhưng Duy không nói, anh rút dây truyền đứng dậy bỏ ra ngoài. Ở đó, làm gì có ai hiểu anh.

  Tất cả mọi người trong phòng trố mắt nhìn Duy, không ai dám ngăn cản. Chỉ đến khi ngoài cửa vang lên một giọng nói đầy khiêu khích, Duy dừng lại, mọi người trong phòng cũng chạy vội ra ngoài.

  - Tôi mua, cậu có dám bán không?

  Duy nhìn người đứng đối diện. Anh chàng dong dỏng cao và khuôn mặt đang nở nụ cười không rõ cảm xúc. Anh thở mạnh, lên tiếng hỏi:

  - Anh mua, anh mua với giá bao nhiêu?

  - Ba trăm nghìn cho 100ml máu, nhưng bù lại, cậu phải bán hết máu của cậu cho tôi!

  Duy ngạc nhiên, tất cả những người đứng đó đều ngạc nhiên. Thư nheo mày nhìn anh chàng đầy khí phách kia thấy quen quen, phải rồi, người đó là người đã nói hi vọng gặp cô trong ngày hội hiến máu.

  Anh chàng kia vẫn nhìn Duy chờ đợi. Khuôn mặt Duy hơi tái, anh chưa bao giờ thấy ai mua máu với giá cao như vậy, nhưng cũng chưa bao giờ thấy ai muốn mua tất cả máu của một con người.

  Dường như cảm thấy sốt ruột. Anh chàng kia lại lên tiếng thúc giục:

  - Sao? Sợ rồi à? Có dám bán không?

  Duy nhìn người đứng trước mặt mình đầy tức giận. Khuôn mặt và câu hỏi kia chẳng phải đang trêu tức anh sao? Anh nắm chặt bàn tay thành nắm đấm, gằn giọng.

  - Tôi bán.

  - Cậu chắc chứ? - Anh chàng nọ cười nhạt. - Mua xong máu của cậu rồi, tôi trả tiền cho ai?

  Duy chau mày, bàn tay càng nắm chặt, hận không thể đấm ngay người trước mặt một phát. Nếu không phải vì mẹ anh cần phẫu thuật gấp anh cũng không phải khốn khổ đến thế này.

  22 triệu. Dốc hết tiền trong nhà, vay mượn hàng xóm họ hàng đủ kiểu cũng mới chỉ được 10 triệu, còn 12 triệu kia không biết làm thế nào. Có người bày anh đi bán máu. Đã bán 4 lần, hết hơn 2 lít máu mới chỉ được thêm 5 triệu. Tiền thì vẫn thiếu, mà cái thân thể suy nhược này của anh đi bán máu cũng chẳng ai dám mua nữa rồi. Quẫn quá anh mới phải phát điên như thế, còn những 7 triệu.

  - Dù cậu cần tiền hơn mạng sống của mình đi chăng nữa, tôi vẫn nghĩ cậu vẫn nên giữ lại cái mạng mà tiêu tiền.

  - Anh chắc chắn là một công tử con nhà giàu rồi. - Duy lên tiếng chặn ngang lời dạy dỗ của người lạ mặt. - Vậy nên anh không hiểu được tôi đâu, không bao giờ hiểu!

  Cuộc đối đầu giữa hai chàng trai đang gay cấn nảy lửa. Thư chẳng hiểu lấy can đảm từ đâu đã khiến cô lại gần mà lên tiếng:

  - Tôi... tôi không phải tiểu thư công tử con nhà giàu gì đó. Liệu có thể hiểu được cậu không?

  Duy chuyển ánh nhìn về phía cô gái nhỏ đang run rẩy nhìn mình. Cảm xúc tức giận không hiểu vì sao lại giảm bớt đi.

  Câu nói đó của Thư không chỉ thu hút Duy mà còn thu hút bao nhiêu người đứng đó, kể cả anh chàng ngông nghênh kia. Anh nhìn cô chăm chú, rồi lại lắc đầu cười. Vẫn biết là cô ngốc nghếch lắm, nhưng anh không ngờ cô lại ngốc nghếch đến vậy. Đặt một câu hỏi vô cùng ngớ ngẩn với một người đang tức, cũng thú vị ra phết!

  Thư nhận ra ánh nhìn kỳ quặc của mọi người giành cho mình. Gan đột nhiên bé tí lại, mặt không ngừng đỏ.

  Duy kéo tay Thư ra khỏi đám đông, lạnh nhạt:

  - Được, tôi nói với cô.

  Duy kéo Thư ra tới cổng trường, cô sợ hãi nhìn anh, miệng lắp bắp nói không rõ tiếng.

  - Chúng ta... đi... đi đâu vậy?

  Duy không nói, cứ thế đẩy Thư lên xe bus. Cô có chút sợ, lại lặng im không dám lên tiếng hỏi, Duy cũng chẳng trả lời.

  Xe bus dừng ở bến xe bus gần bệnh viện Bạch Mai. Duy dắt Thư thẳng đến khoa Ung bướu, phòng bệnh có bốn người đang nằm. Anh kéo cô lại giường cuối cùng.

  - Mẹ, đây là bạn con, cô ấy đến thăm mẹ!

  Người phụ nữ gầy gò uể oải nhìn Thư, đôi mắt đáng sợ làm cô giật mình cúi đầu.

  - Chào bác, cháu là Thư, bạn của Duy ạ.

  Người phụ nữ mệt mỏi gật đầu rồi cố gắng ngồi dậy, Thư nhanh tay đỡ lấy bà, giọng nói nhỏ nhẹ:

  - Bác còn mệt, không cần ngồi dậy đâu ạ.

  - Không sao. - Người phụ nữ cười hiền. - Hiếm khi mới thấy Duy nó đưa bạn đến chơi.

  Thư nheo mày nhìn Duy, người đó vẫn đang chuyên tâm gọt hoa quả. Có lẽ anh ta ít bạn, hoặc là anh ta không muốn có bạn. Thư thấy thương, cô cố tỏ ra thân thiết, nắm lấy tay người phụ nữ ngọt ngào:

  - Bệnh của bác đỡ hơn chút nào chưa ạ?

  - Bác khỏe nhiều rồi, cảm ơn cháu đã đến thăm.

  Thư còn đang định hỏi thêm gì đó thì đã thấy Duy đặt đĩa hoa quả ngay trước mặt mẹ, đẩy Thư ra. Anh vừa nói với mẹ, nhưng cũng hình như là để nói với cô.

  - Con hỏi bác sĩ rồi, cuối tuần này người ta sẽ phẫu thuật cho mẹ, mẹ an tâm.

  - Mẹ đã nói không cần mà. - Người phụ nữ có vẻ ngạc nhiên. - Phẫu thuật rồi lấy đâu tiền cho con đi học nữa?

  - Mẹ an tâm, rẻ lắm. Chỉ có hơn chục triệu, một chút.

  Từ "một chút" anh nói hơi ngập ngừng. 22 triệu đúng là hơn 10 triệu, và so với những đại gia bạc tỷ, cái hơn đó đúng là hơn một chút.

  Người phụ nữ thở dài nhìn Duy rồi lại nhìn Thư. Bà đặt người xuống giường, nhẹ nhàng:

  - Hai đứa hôm nay không đi học à?

  Thư dường như hiểu ý bà. Bà muốn nghỉ ngơi, cô vờ nhìn đồng hồ vẻ vội vã:

  - Chết, bác nhắc cháu mới nhớ. Cháu có tiết học lúc 9 giờ 45. Vậy cháu xin phép bác đi trước ạ.

  Người phụ nữ khẽ gật đầu, cười với cô một cái rồi nhắm mắt nghỉ ngơi. Duy đưa cô ra ngoài, không cần cô phải hỏi anh đã tự khắc nói:

  - Mẹ tôi bị viêm túi mật cấp.

  “ Viêm túi mật cấp?” Cái tên này nghe quen lắm. Cô đã từng nhìn thấy ở đâu đó. Một căn bệnh nguy hiểm có thể dẫn đến tử vong, cần phẫu thuật cắt bỏ túi mật. mà chi phí phẫu thuật cũng phải tới haichục triệu. Thư nheo mày nhìn Phan, ngấp ngứ.

  - Cậu... thiếu tiền đúng không?

  - Vay, bán tất cả những thứ có thể, kể cả máu, tôi cũng vẫn còn thiếu đến 7 triệu.

  Duy thở dài. Anh cũng không hiểu vì sao anh lại dễ dàng cho cô gái này biết chuyện của mình như vậy. Có lẽ vì khi đó anh giận, vì anh không làm chủ được cảm xúc của mình nữa. Anh liếc nhìn đôi mắt trong veo của cô gái ngồi bên cạnh, vừa sợ hãi, vừa lo lắng. Lạ, cô ấy có lo lắng sao?

  - Cô tên gì?

  Duy đột ngột cất tiếng hỏi làm Thư giật mình. Cô ngạc nhiên nhìn Duy một cái rồi mới nhỏ giọng đáp lời:

  - Thư. Tên tôi là Thư.

  - Mỗi thế thôi à?

  Duy cười, chẳng hiểu sao anh lại cười tự nhiên trước một người lạ như thế. Thư nhìn anh hơi ngạc nhiên, rồi lại hào hứng đáp lại anh:

  - Không. Tên đầy đủ là Hoàng Thương Thư.

  Duy gật đầu, cũng không có ý định giới thiệu tên mình. Anh đưa mắt phiêu dạt theo mấy đám mây trên không trung một chút rồi kéo tay ra bến xe bus, cho cô về trường.

  Trường Kinh tế Quốc dân cách đó không xa. Một chuyến xe bus đi độ mấy phút là tới. Quãng thời gian ngắn không đủ để cô kịp suy nghĩ nhiều về Duy, nhưng đủ để cô hiểu lý do vì sao Duy phải làm vậy. Bước từng bước mệt mỏi trên con đường nắng như trải lửa, Thư thấy khoảng cách từ bến xe bus đến cổng trường thật xa.

  - Chuyện thế nào rồi cô bé?

  Thư ngẩng đầu, bóng ô che mát xuống mặt. Anh chàng cô gặp ở cổng trường ngày hôm đó. Anh chàng đứng trước mặt Duy và hỏi mua hết tất cả máu của Duy. Kỳ lạ, người này nói cô quen cũng không phải là quen, nhưng đi cạnh anh cô lại thấy bình yên lạ. Cô không tò mò, không sợ hãi, tự nhiên trả lời anh:

  - Mẹ anh ấy bị viêm túi mật cấp.

  Cô ngước nhìn người cầm ô, người ta cao hơn cô một cái đầu nhưng vẫn đang cố che ô thật thấp cho cô không bị nắng. Anh gật đầu một cái, nhẹ như gió, cũng chẳng hỏi cô thêm.

  - Anh là ai? Anh tên gì?

  Thư cuối cùng cũng không thể chịu đựng được sự im lặng ấy, cất tiếng hỏi dồn dập. Anh nheo mắt nhìn cô rồi lại cười nham nhở.

  - Anh là sếp của em. Anh là Phan Anh.

  Thư há hốc miệng. Hóa ra đây chính là Phan Anh trong truyền thuyết, đội trưởng đội Đỏ mà cô chưa được gặp mặt bao giờ. Thư đột nhiên cảm thấy mình thật may mắn, cô đang được đi dưới ô của anh, được anh che ô, được anh đợi.

  Nhưng ngoài cảm giác cảm thấy may mắn ấy, Thư lại đột nhiên nhớ ra khuôn mặt đần độn của mình trước đó mấy ngày. Thôi xong, mất mặt như thế thì phải làm sao???

  Bóng ô đột nhiên rung lên. Thư ngước đôi mắt tròn nhìn người đang đứng cạnh mình, chẳng biết nên nói gì. Phan dường như đang cười, lại như không cười. Đôi mắt anh hướng thẳng về phía trước rồi khẽ cụp ô.

  - Đây, trả em về khoa Kế toán của em.

  - Anh Phan Anh...

  Phan đứng lại, nhíu mày nhìn Thư. Mặt cô đỏ bừng, cũng không rõ vì sao lại cất tiếng gọi anh như vậy. Giờ anh đứng lại rồi, cô bỗng dưng muốn độn thổ đi đâu một lát. Cái miệng, thật là muốn đánh một phát chết luôn đi.

  - Nếu em muốn hỏi về Duy. Câu lạc bộ tình nguyện của chúng ta sẽ có hướng giải quyết. Nếu em muốn hỏi vì sao anh biết khoa em học thì anh xin trả lời là anh có hồ sơ của em. Còn... - Phan lại cười nham hiểm, ánh mắt nhìn Thư đầy vẻ trêu chọc. - Nếu em đơn giản chỉ muốn gọi tên anh, thì gọi anh là Phan.

  Phan nói một tràng dài rồi quay lưng bỏ đi luôn. Không chịu nán lại nhìn mặt Thư đang đỏ lựng. Không phải tại anh, là tại nắng, tại nóng cả thôi! khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  Cuộc đời của mỗi người giống như những chuyến đi, chuyến đi ấy có thể thuận lợi, có thể khó khăn, có thể gặp người này hay người khác. Có người nói đi như thế nào, gặp ai đều là do người lái xe cố tình điều khiển khiến chúng ta có chuyến đi như thế, nhưng lại quên rằng, chúng ta chính là người lái những chiếc xe.
  `;

  constructor() {}

  ngOnInit(): void {}
}
