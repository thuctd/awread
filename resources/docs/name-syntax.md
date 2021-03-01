Quy tắc đặt tên cho các atom trong awread

- Thứ tự ưu tiên:

  - web: reader/writer có thể viết tắt rd/wr
  - page: home/market/book/account....
  - module: main-banner/ new-book/ feature-book / best-seller.....
  - item: book-item/book-item-grid/book-item-list
    Ví dụ: Trang chủ của reader có hình ảnh slider. thì tên ưu tiên sẽ là: rd-home-main-slider (organ)
    Module truyện mới cập nhật: rd-home-new-book (organ)
    Phần
  - Các module có thể sử dụng ở nhiều trang, thì có thể bỏ qua tên page trong tên của module đó.
    - Ví dụ: ở trang market, có phần TOP PHỔ BIẾN thì có thể đặt tên dạng: rd-sidebar-feature-book
  - Có thể tạo tên các module theo nhận dạng hiển thị
    - Ví dụ: book-grid (dạng cột - ảnh trên nội dung dưới), book-list(dạng ngang - ảnh trái, nội dung phải)
  - Trước khi làm 1 phần nào, mọi người nên cân nhắc và nghĩ đến 1 cái tên thật phù hợp. Tên có thể dài nhưng đọc lên sẽ hiểu đc nó đang mô tả vấn đề gì.
  - Với những atom đc reuse nhiều như product-item, text, text-link thì sẽ đặt tên dễ hiểu nhất, nhìn để biết được thành phần đó có thể style như nào, hiển thị ra sao.

- Nên reuse triệt để các item.
  - Ví dụ: trong page home và các page market, có các item book tương đối giống nhau vì vậy, nên dùng chung là book-item-grid (dùng cho việc hiển thị grid / dạng cột) và thêm các biến xác định có hiển thị đặc biệt (như: isWishlist - được yêu thích, isOrder: có số thứ tự),
- Hạn chế tối đa fix cứng width-height cho image
  Việc fix cứng width và height cho image dẫn tới việc bị méo ảnh hoặc k tối ưu với responsive. Nên để hình ảnh có 1 tỉ lệ TƯƠNG ĐỐI theo % hơn là theo px, rem.
- Không nên xác định các margin âm quá lớn, các giao diện khác nhau có thể dễ bị vỡ
- Các item muốn căn giữa trong 1 box, recommend sử dụng display: flex;/ text-align:center. Các thuộc tính này sẽ cho hiển thị chuẩn hơn việc căn chỉnh margin, padding. Việc sử dụng sẽ linh hoạt trong từng trường hợp.
