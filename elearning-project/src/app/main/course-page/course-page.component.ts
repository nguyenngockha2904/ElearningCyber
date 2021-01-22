import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit, AfterViewInit {
  danhMucList: any[] = [
    {
      maDanhMuc: 'BackEnd',
      tenDanhMuc: 'Lập trình Backend',
    },
    {
      maDanhMuc: 'Design',
      tenDanhMuc: 'Thiết kế Web',
    },
    {
      maDanhMuc: 'DiDong',
      tenDanhMuc: 'Lập trình di động',
    },
    {
      maDanhMuc: 'FrontEnd',
      tenDanhMuc: 'Lập trình Front end',
    },
    {
      maDanhMuc: 'FullStack',
      tenDanhMuc: 'Lập trình Full Stack',
    },
    {
      maDanhMuc: 'TuDuy',
      tenDanhMuc: 'Tư duy lập trình',
    },
  ];

  listCourse: any[] = [
    {
      maKhoaHoc: '2',
      biDanh: 'hoc-lap-trinh-frontend',
      tenKhoaHoc: 'Hoc Lap Trinh FrontEnd',
      moTa: 'tu a toi z',
      luotXem: 9,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/hoc-lap-trinh-frontend.jpg',
      maNhom: 'GP01',
      ngayTao: '05/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'admin_test',
        hoTen: 'seaways',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FrontEnd',
        tenDanhMucKhoaHoc: 'Lập trình Front end',
      },
    },
    {
      maKhoaHoc: '3',
      biDanh: 'lap-trinh-fullstack',
      tenKhoaHoc: 'LAP TRINH FULLSTACK',
      moTa: 'DAY LA KHOA HOC DANG KY MAT TIEN',
      luotXem: 90,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-fullstack.jpg',
      maNhom: 'GP01',
      ngayTao: '08/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'admin_test',
        hoTen: 'seaways',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FrontEnd',
        tenDanhMucKhoaHoc: 'Lập trình Front end',
      },
    },
    {
      maKhoaHoc: '45dd',
      biDanh: '333hhh',
      tenKhoaHoc: '333hhh',
      moTa: 'asd',
      luotXem: 0,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/333hhh.jpg',
      maNhom: 'GP01',
      ngayTao: '16/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'hanGV',
        hoTen: 'GV',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: '55w',
      biDanh: 'backend-node-js',
      tenKhoaHoc: 'Backend Node js',
      moTa:
        'Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng. Wikipedia',
      luotXem: 0,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/backend-node-js.jpg',
      maNhom: 'GP01',
      ngayTao: '05/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: null,
        hoTen: null,
        maLoaiNguoiDung: null,
        tenLoaiNguoiDung: null,
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'Backend_01',
      biDanh: 'lap-trinh-golang-2020',
      tenKhoaHoc: 'Lập trình Golang 2020',
      moTa: 'Lập trình Golang 2020 88888888888800000000',
      luotXem: 321,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang-2020.png',
      maNhom: 'GP01',
      ngayTao: '14/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'admin_test',
        hoTen: 'seaways',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'Backend_02',
      biDanh: 'nodejs',
      tenKhoaHoc: 'NodeJS',
      moTa:
        'Node.js là một nền tảng chạy trên môi trường V8 JavaScript runtime - một trình thông dịch JavaScript cực nhanh chạy trên trình duyệt Chrome. Bình thường thì bạn cũng có thể tải bộ V8 và nhúng nó vào bất cứ thứ gì; Node.js làm điều đó đối với các web server. JavaScript suy cho cùng cũng chỉ là một ngôn ngữ - vậy thì không có lý do gì để nói nó không thể sử dụng trên môi trường server tốt như là trong trình duyệt của người dùng được.',
      luotXem: 5567,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/nodejs.jpg',
      maNhom: 'GP01',
      ngayTao: '19/10/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'khai',
        hoTen: 'Le The',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FullStack',
        tenDanhMucKhoaHoc: 'Lập trình Full Stack',
      },
    },
    {
      maKhoaHoc: 'Backend_10',
      biDanh: 'java-backeend-gp01',
      tenKhoaHoc: 'Java BackeEnd GP01',
      moTa:
        'Nếu như bạn đang muốn trở thành một nhà lập trình phát triển website, chắc hẳn bạn đã biết website được chia làm 2 phần: Phần đầu là giao diện hiển thị ở bên ngoài mà người dùng nhìn thấy, phần thứ 2 là phần máy chủ, ứng dụng và một số cơ sở dữ liệu ở bên trong. Nhiệm vụ của 2 phần này chính là lập trình viên front end và lập trình viên back end.\n\nĐể một thiết kế website mang đến sự trải nghiệm tốt cho người dùng thì bắt buộc front end phải làm việc hiệu quả. Thế nhưng, để cho front end hoạt động trơn tru thì back end cần phải xây dựng đủ tốt. Trái với front end, các yếu tố của back-end lại không thể nhìn thấy bằng mắt.',
      luotXem: 100,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/java-backeend-gp01.jpg',
      maNhom: 'GP01',
      ngayTao: '05/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: null,
        hoTen: null,
        maLoaiNguoiDung: null,
        tenLoaiNguoiDung: null,
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'Backend_101',
      biDanh: 'lap-trinh-front-end1',
      tenKhoaHoc: 'Lập trình front end1',
      moTa: 'ádasd',
      luotXem: 100,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-front-end1_gp01.jpg',
      maNhom: 'GP01',
      ngayTao: '04/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'hanGV',
        hoTen: 'GV',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FullStack',
        tenDanhMucKhoaHoc: 'Lập trình Full Stack',
      },
    },
    {
      maKhoaHoc: 'BackEnddfff',
      biDanh: 'test-update-2',
      tenKhoaHoc: 'TEST UPDATE 2',
      moTa:
        'Đối với những người đang bắt đầu học và tìm hiểu về lập trình phát triển các website thì chắc chắn đều có một thắc mắc chung về vấn đề backend là gì và những kiến thức nào cần có khi bắt đầu làm Back end? Nếu như bạn cũng đang có những thắc mắc giống như vậy thì hãy tham khảo ngay thông tin tại bài viết được tổng hợp dưới đây để xem cách làm thế nào trở thành một Backend developer chuyên nghiệp.',
      luotXem: 100,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/test-update-2.jpg',
      maNhom: 'GP01',
      ngayTao: '05/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: null,
        hoTen: null,
        maLoaiNguoiDung: null,
        tenLoaiNguoiDung: null,
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'BackEnddfff9999',
      biDanh: 'c-netframework',
      tenKhoaHoc: 'C# .Netframework',
      moTa:
        'C# (C Sharp, đọc là "xi-sáp") là một ngôn ngữ lập trình hướng đối tượng đa năng vô cùng mạnh mẽ được phát triển bởi Microsoft, C# là phần khởi đầu cho kế hoạch .NET của họ. Tên của ngôn ngữ bao gồm ký tự thăng theo Microsoft nhưng theo ECMA là C#, chỉ bao gồm dấu số thường. Microsoft phát triển C# dựa trên C++ và Java. C# được miêu tả là ngôn ngữ có được sự cân bằng giữa C++, Visual Basic, Delphi và Java.\n\nC# được thiết kế chủ yếu bởi Anders Hejlsberg kiến trúc sư phần mềm nổi tiếng với các sản phẩm Turbo Pascal, Delphi, J++, WFC. Phiên bản gần đây nhất là 9.0, được phát hành vào năm 2020 cùng với Visual Studio 2019 phiên bản 16.8.[14]',
      luotXem: 100,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/c-netframework.jpg',
      maNhom: 'GP01',
      ngayTao: '05/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: null,
        hoTen: null,
        maLoaiNguoiDung: null,
        tenLoaiNguoiDung: null,
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'BE001',
      biDanh: 'lap-trinh-backend-nodejs',
      tenKhoaHoc: 'Lập trình backend NodeJs',
      moTa: 'ĐÂy là khóa học lập trình backend với nodejs từ a tới z',
      luotXem: 4,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-backend-nodejs.jpg',
      maNhom: 'GP01',
      ngayTao: '06/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'admin_test',
        hoTen: 'seaways',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'design_01',
      biDanh: 'photoshop-2020',
      tenKhoaHoc: 'Photoshop 2020',
      moTa:
        'Adobe Photoshop là một phần mềm chỉnh sửa đồ họa được phát triển và phát hành bởi hãng Adobe Systems ra đời vào năm 1988 trên hệ máy Macintosh. Photoshop được đánh giá là phần mềm dẫn đầu thị trường về sửa ảnh bitmap và được coi là chuẩn cho các ngành liên quan tới chỉnh sửa ảnh',
      luotXem: 51231,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/photoshop-2020.jpeg',
      maNhom: 'GP01',
      ngayTao: '12/09/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'khai',
        hoTen: 'Le The',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'Design',
        tenDanhMucKhoaHoc: 'Thiết kế Web',
      },
    },
    {
      maKhoaHoc: 'Full_02',
      biDanh: 'khoa-fullstack',
      tenKhoaHoc: 'Khóa Fullstack',
      moTa: 'Fullstack vr2 do Cybersoft cung cấpgwww',
      luotXem: 12,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/khoa-fullstack.jpg',
      maNhom: 'GP01',
      ngayTao: '04/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: null,
        hoTen: null,
        maLoaiNguoiDung: null,
        tenLoaiNguoiDung: null,
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FullStack',
        tenDanhMucKhoaHoc: 'Lập trình Full Stack',
      },
    },
    {
      maKhoaHoc: 'haha123',
      biDanh: 'haha123',
      tenKhoaHoc: 'haha123',
      moTa: 'KHÓA LẬP TRÌNH FRONT-END CHUYÊN SÂU CHO NGƯỜI MỚI BẮT ĐẦU',
      luotXem: 100,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/haha123_gp01.jpg',
      maNhom: 'GP01',
      ngayTao: '23/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'hanGV',
        hoTen: 'GV',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'llllllddsdsds',
      biDanh: 'sdasd',
      tenKhoaHoc: 'sdasd',
      moTa: 'ádasd',
      luotXem: 100,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/sdasd_gp01.jpg',
      maNhom: 'GP01',
      ngayTao: '07/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'hanGV',
        hoTen: 'GV',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FullStack',
        tenDanhMucKhoaHoc: 'Lập trình Full Stack',
      },
    },
    {
      maKhoaHoc: 'Mobile 12',
      biDanh: 'android-cookie',
      tenKhoaHoc: 'Android Cookie',
      moTa: 'Mobile cookie OK',
      luotXem: 1,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/android-cookie.jpg',
      maNhom: 'GP01',
      ngayTao: '05/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: null,
        hoTen: null,
        maLoaiNguoiDung: null,
        tenLoaiNguoiDung: null,
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'DiDong',
        tenDanhMucKhoaHoc: 'Lập trình di động',
      },
    },
    {
      maKhoaHoc: 'Phone_100',
      biDanh: 'swift-os',
      tenKhoaHoc: 'Swift OS',
      moTa:
        'Swift là một ngôn ngữ lập trình hướng đối tượng dành cho việc phát triển iOS và macOS, watchOS, tvOS, Linux, và z/OS. được giới thiệu bởi Apple tại hội nghị WWDC 2014. Swift được mong đợi sẽ tồn tại song song cùng Objective-C, ngôn ngữ lập trình hiện tại dành cho các hệ điều hành của Apple',
      luotXem: 6,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/swift-os.jpeg',
      maNhom: 'GP01',
      ngayTao: '19/10/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'mgn',
        hoTen: 'NGUYEN VU',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'DiDong',
        tenDanhMucKhoaHoc: 'Lập trình di động',
      },
    },
    {
      maKhoaHoc: 'reactjs001',
      biDanh: 'react-12',
      tenKhoaHoc: 'React 12',
      moTa:
        "It's my goal to get you started with React as quick as possible and ensure your success. But I don't just focus on students getting started. I want everyone to benefit from my courses, that's why we'll dive deeply into React and why I made sure to also share knowledge that's helpful to advanced React developers. ",
      luotXem: 200,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/react-12.jpg',
      maNhom: 'GP01',
      ngayTao: '22/11/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'testacc3',
        hoTen: 'Ba Văn Gà',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'test_FE',
      biDanh: 'test-fe',
      tenKhoaHoc: 'test FE',
      moTa: 'KHÓA LẬP TRÌNH FRONT-END CHUYÊN SÂU CHO NGƯỜI MỚI BẮT ĐẦU',
      luotXem: 100,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/test-fe_gp01.jpg',
      maNhom: 'GP01',
      ngayTao: '23/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'hanGV',
        hoTen: 'GV',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'TuDuy',
        tenDanhMucKhoaHoc: 'Tư duy lập trình',
      },
    },
    {
      maKhoaHoc: 'VINHTESTTT',
      biDanh: 'demo',
      tenKhoaHoc: 'DEMO',
      moTa: 'VINNNNNNNNNNs',
      luotXem: 0,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/demo.png',
      maNhom: 'GP01',
      ngayTao: '01/12/2020',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'adminhai',
        hoTen: 'admin',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'BackEnd',
        tenDanhMucKhoaHoc: 'Lập trình Backend',
      },
    },
    {
      maKhoaHoc: 'web0001',
      biDanh: 'nhap-mon-lap-trinh-web',
      tenKhoaHoc: 'Nhập môn lập trình Web',
      moTa:
        "Bạn là người mới và muốn bước đầu tìm hiểu về lập trình web?.Bạn muốn tự xây dựng trang web cho sản phẩm của mình? Bạn muốn tìm tòi học hỏi những điều mới, chuyên môn mới? Bạn có niềm đam mê với bộ môn lập trình web nhưng đang băn khoăn không biết nên chọn khóa học nào? Đừng lo lắng! Hãy đến với khóa học 'Nhập môn lâp trình web' của chúng tôi để học tất cả những điều căn bản nhất về lập trình web.\n\nKhóa học 'Nhập môn lập trình Web' sẽ cho bạn cái nhìn tổng quan nhất về lập trình web. Những yếu tố giúp bạn đưa ra quyết định có nên học lập trình web hay không.\n\nĐồng thời khóa học cũng giới thiệu cách thức sử dụng các công cụ đơn giản và dễ dùng nhất để xây dựng một trang web của riêng bạn.\nLợi ích từ khoá học\nBiết được lý do tại sao bạn nên học lập trình web mà không phải một môn lập trình nào khác.\nHiểu được lập trình web là gì và những kiến thức cơ bản nhất về lập trình web.\nPhù hợp với\nNhững người mong muốn học lập trình web.\nHọc sinh, sinh viên khoa CNTT.\nHọc sinh, sinh viên có ngành khác mong muốn học hỏi cái mới.\n",
      luotXem: 300,
      hinhAnh:
        'https://elearning0706.cybersoft.edu.vn/hinhanh/nhap-mon-lap-trinh-web.jpg',
      maNhom: 'GP01',
      ngayTao: '02/01/2021',
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: 'admin_test',
        hoTen: 'seaways',
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ',
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: 'FrontEnd',
        tenDanhMucKhoaHoc: 'Lập trình Front end',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  }
}
