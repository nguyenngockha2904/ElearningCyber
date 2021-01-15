import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-introduce-page',
  templateUrl: './introduce-page.component.html',
  styleUrls: ['./introduce-page.component.scss'],
})
export class IntroducePageComponent implements OnInit, AfterViewInit {
  constructor() {}
  listCourseTest: any[] = [
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
  ];
  currentCourse = {};
  // id: string = '';
  ngOnInit(): void {
    var id: string = '';
    $('.slider').on(
      'beforeChange',
      function (event: any, slick: any, currentSlide: any, nextSlide: any) {
        console.log(slick.$slides[nextSlide].id);

        event.preventDefault();
      }
    );
  }
  ngAfterViewInit() {
    $('.slider').slick({
      // normal options...
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    var id: string = '';
    $('.init').on(
      'beforeChange',
      function (event: any, slick: any, currentSlide: any, nextSlide: any) {
        console.log(slick.$slides[nextSlide].id);
        id = slick.$slides[nextSlide].id;
      }
    );
    console.log(id);
  }
}
