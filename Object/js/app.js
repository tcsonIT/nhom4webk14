// Import Vue nếu cần thiết
const { createApp, reactive } = Vue;

createApp({
  // tạo vue
  data() {
    return {
      //ở đây trả về một đối tượng chứa tất cả các dữ liệu mà ứng dụng Vue cần. Vue sẽ sử dụng đối tượng này để quản lý trạng thái và hiển thị dữ liệu trong giao diện người dùng.
      items: [
        {
          image: "./img/—Pngtree—coca cola_1211396.png",
          title: "Carbonated Drinks",
          content:
            "Nước ngọt có ga mang đến hương vị sảng khoái với sự kết hợp hoàn hảo giữa vị ngọt dịu và bọt ga mát lạnh. Mỗi ngụm đều đánh thức vị giác, mang lại cảm giác tươi mát.",
        },
        {
          image:
            "./img/—Pngtree—glass of scotch whiskey and_15923076.png",
          title: "Alcohol Chivas",
          content:
            "Chivas là sự kết hợp hoàn hảo giữa các loại whisky mạch nha và whisky ngũ cốc, được ủ trong thùng gỗ sồi theo thời gian để tạo ra hương vị mượt mà, êm dịu.",
        },
        {
          image: "./img/—Pngtree—beer_767034.png",
          title: "Beer",
          content:
            " Bia ngoài hương vị đa dạng từ ngọt dịu đến đắng, bia còn có hàm lượng cồn thấp hơn so với rượu mạnh, làm cho nó trở thành lựa chọn yêu thích của nhiều người.",
        },
      ],
      // introduce(giới thiệu)
      greeting: [
        {
          img: "./img/t.png",
          title: "𝐒𝐭𝐫𝐨𝐧𝐠 𝐁𝐞𝐫𝐲 𝐍𝐨𝐰𝐬",
          content:
            "Chào mừng bạn đến với Beer Holic, nơi cung cấp đa dạng các loại đồ uống chất lượng cao để làm phong phú thêm trải nghiệm thưởng thức của bạn. Chúng tôi tự hào mang đến những sản phẩm từ bia, rượu cho đến nước ngọt có ga và nước ép trái cây, mỗi loại đều được chọn lựa kỹ càng và chế biến với công thức độc quyền để đảm bảo sự tươi mới và hương vị tuyệt hảo...",
        },
      ],
      //hàng bán chạy
      bestseller: [
        {
          id: 1,
          name: "Chivas Regal Extra",
          price: "1.300.000 VND / chai 700ml",
          image: "./img/sanpham/z5906688114583_2ab8466f01ac6fb5f568ed66c77f4891.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 2,
          name: "Chivas Regal Mizunara",
          price: "1.800.000 VND  / chai 700ml",
          image: "./img/sanpham/z5906688057642_aec3e4adba23f59d870953cf49de8bb8.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 3,
          name: "Chivas Regal 25",
          price: "12.000.000 VND / chai 700ml",
          image: "./img/sanpham/z5906688114580_5bb6683ea241d9ff9ca082e8b4d47b3b.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 4,
          name: "Chivas Regal XV",
          price: "1.800.000 VND / chai 700ml",
          image: "./img/sanpham/z5906688114584_b79213b9e0c638d4a62fad97af43334d.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 5,
          name: "Heineken",
          price: " 450.000 VND / thùng 24 lon 330ml",
          image: "./img/sanpham/z5906688057614_aed5b6d1abd3cf86641808c755b4ed14.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 6,
          name: "Budweiser",
          price: " 500.000 VND / thùng 24 lon 330ml",
          image: "./img/sanpham/z5906688057643_5278390b479d5bd9ccef991f3a5a1e26.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 7,
          name: "Corona Extra",
          price: " 45.000 VND / chai 355ml",
          image: "./img/sanpham/z5906688057578_21d431c97b3836d9b167e08e9b42360a.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        {
          id: 8,
          name: "Stella Artois",
          price: " 40.000 VND / chai 330ml",
          image: "./img/sanpham/z5906688057553_3f2a7a9fa9f18a7311f0cbc4788a440b.jpg",
          isNew: true,
          isBestseller: false,
          label: "Hàng Mới",
        },
        
      ],
      // mảng giỏ hàng trống

      // Tổng sản phẩm
      tgsanpham : [
      {
        id: 1,
        name: "Chivas Regal Extra",
        price: "1.300.000 VND / chai 700ml",
        image: "../img/sanpham/z5906688114583_2ab8466f01ac6fb5f568ed66c77f4891.jpg",
        spmoi: true,
        spban: false,
        label: "Hàng Mới",  
      },
      {
        id: 2,
        name: "Chivas Regal Mizunara",
        price: "1.800.000 VND  / chai 700ml",
        image: "../img/sanpham/z5906688057642_aec3e4adba23f59d870953cf49de8bb8.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 3,
        name: "Chivas Regal 25",
        price: "12.000.000 VND / chai 700ml",
        image: "../img/sanpham/z5906688114580_5bb6683ea241d9ff9ca082e8b4d47b3b.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 4,
        name: "Chivas Regal XV",
        price: "1.800.000 VND / chai 700ml",
        image: "../img/sanpham/z5906688114584_b79213b9e0c638d4a62fad97af43334d.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 5,
        name: "Heineken",
        price: " 450.000 VND / thùng 24 lon 330ml",
        image: "../img/sanpham/z5906688057614_aed5b6d1abd3cf86641808c755b4ed14.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 6,
        name: "Budweiser",
        price: " 500.000 VND / thùng 24 lon 330ml",
        image: "../img/sanpham/z5906688057643_5278390b479d5bd9ccef991f3a5a1e26.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 7,
        name: "Corona Extra",
        price: " 45.000 VND / chai 355ml",
        image: "../img/sanpham/z5906688057578_21d431c97b3836d9b167e08e9b42360a.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 8,
        name: "Stella Artois",
        price: " 40.000 VND / chai 330ml",
        image: "../img/sanpham/z5906688057553_3f2a7a9fa9f18a7311f0cbc4788a440b.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 9,
        name: "Chivas Regal 12",
        price: " 40.000 VND / chai 330ml",
        image: "../img/sanpham/sanpham1.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
    ],

    //Chivas
    tgsanpham1: [
      {
        id: 1,
        name: "Chivas Regal 12",
        price: "1.300.000 VND / chai 700ml",
        image: "../img/sanpham/sanpham2.jpg",
        spmoi: true,
        spban: false,
        label: "Hàng Mới",  
      },
      {
        id: 2,
        name: "Chivas Regal Until",
        price: "1.800.000 VND  / chai 700ml",
        image: "../img/sanpham/sanpham2.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 3,
        name: "Glenfiddich",
        price: "12.000.000 VND / chai 700ml",
        image: "../img/sanpham/sanpham3.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 4,
        name: "Chivas Regal 18",
        price: "1.800.000 VND / chai 700ml",
        image: "../img/sanpham/sanpham4.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 5,
        name: "Glenfiddich Cask",
        price: " 1.450.000 VND / chai 530ml",
        image: "../img/sanpham/sanpham5.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 6,
        name: "Chivas Bowmore",
        price: " 1.500.000 VND / chai 330ml",
        image: "../img/sanpham/sanpham6.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 7,
        name: "Chivas Bowmore 18",
        price: " 1.450.000 VND / chai 355ml",
        image: "../img/sanpham/sanpham7.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 8,
        name: "The English",
        price: " 1.400.000 VND / chai 500ml",
        image: "../img/sanpham/sanpham8.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 9,
        name: "Chivas Benrinnes",
        price: " 1.400.000 VND / chai 330ml",
        image: "../img/sanpham/sanpham9.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
    ],
    
    //Carbo
    tgsanpham2: [
      {
        id: 1,
        name: "7-Up Lemon",
        price: "50.000 VND",
        image: "../img/sanpham/7up.jpg",
        spmoi: true,
        spban: false,
        label: "Hàng Mới",  
      },
      {
        id: 2,
        name: "Coca Cola",
        price: "50.000 VND",
        image: "../img/sanpham/cola.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 3,
        name: "Monster",
        price: "50.000 VND",
        image: "../img/sanpham/monster.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 4,
        name: "Dragon Energy",
        price: "50.000 VND",
        image: "../img/sanpham/Dragon Energy.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 5,
        name: "Pepsi",
        price: "50.000 VND",
        image: "../img/sanpham/pepsi.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 6,
        name: "Relentless",
        price: "50.000 VND",
        image: "../img/sanpham/Relentless.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 7,
        name: "Red Bull",
        price: " 55.000 VND",
        image: "../img/sanpham/redbull.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 8,
        name: "Smirnoff",
        price: " 40.000 VND",
        image: "../img/sanpham/Smirnoff.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 9,
        name: "Sprite",
        price: " 40.000 VND",
        image: "../img/sanpham/sprite.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
    ],

    //Beer
    tgsanpham3: [
      {
        id: 1,
        name: "Beer Heineken",
        price: "100.000 VND",
        image: "../img/sanpham/heineken.jpg",
        spmoi: true,
        spban: false,
        label: "Hàng Mới",  
      },
      {
        id: 2,
        name: "Beer Emporiodacerveja",
        price: "100.000 VND",
        image: "../img/sanpham/bia emporiodacerveja.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 3,
        name: "Beer Affligem",
        price: "100.000 VND",
        image: "../img/sanpham/Affligem.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 4,
        name: "Beer Mort",
        price: "100.000 VND",
        image: "../img/sanpham/Mort.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 5,
        name: "Beer Palm",
        price: " 150.000 VND",
        image: "../img/sanpham/Palm.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 6,
        name: "Beer Tyskie",
        price: " 100.000 VND",
        image: "../img/sanpham/tyskie.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 7,
        name: "Beer Latrappe",
        price: " 145.000 VND",
        image: "../img/sanpham/latrappe.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 8,
        name: "Beer Chang",
        price: " 140.000 VND",
        image: "../img/sanpham/bia chang.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
      {
        id: 9,
        name: "Beer Gulpener",
        price: " 140.000 VND",
        image: "../img/sanpham/Gulpener.jpg",
        isNew: true,
        isBestseller: false,
        label: "Hàng Mới",
      },
    ],

     cartItems:[], 
    // đóng
      //
      introo: [
        {
          img: "./img/pngtree-cartoon-man-holding-a-beer-bottle-with-beard-vector-png-image_12231495.png",
          title: "CÙNG NHAU MUA SẮM",
          content: "ĐƠN HÀNG ĐẦU TIÊN NHÉ !",
        },
      ],
      //
      images: [
        "./img/slider/n1.jpg",
        "./img/slider/n4.jpg",
        "./img/slider/n3.jpg",
      ],
      //giao diện introduce and contact
      stu: [
        {
          students: [
            "Trịnh Công Sơn",
            "Vương Duy Nghiêm",
            "Nguyễn Hữu Huy Bảo",
          ],
          email: ["contact.20musicsl@gmail.com", "nghiemdz12300@gmail.com"],
          instaLinks: [
            "https://www.instagram.com/_csownn_/",
            "https://www.instagram.com/e_rav3n_/",
          ],
          contact: ["Nam Từ Liêm, Hà Nội", "0985605615", "0962391051"],
        },
      ],
      //form đăng kí
      FormData: reactive({
        ho: "",
        ten: "",
        sdt: "",
        email: "",
        emaitk: "",
        matkhau: "",
        matkhautk: "",
        noidung: "",
      }),
      Errors: reactive({
        ho: false,
        ten: false,
        sdt: false,
        email: false,
        emailtk: false,
        matkhau: false,
        matkhautk: false,
        noidung: false,
      }),

      currentImage: 0,
    };
  },
  mounted() {
    //mounted được gọi sau khi ứng dụng được gắn vào DOM. Tại đây, nó gọi startSlideshow() để bắt đầu slideshow hình ảnh.
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      }, 3000); // Chuyển ảnh mỗi 3 giây
    },
    setImage(index) {
      this.currentImage = index;
    },
    // resetErrors() {
    //   this.Errors.ho =
    //     this.Errors.ten =
    //     this.Errors.sdt =
    //     this.Errors.email =
    //     this.Errors.emailtk =
    //     this.Errors.matkhautk =
    //     this.Errors.matkhau =
    //       false;
    // },
    submitForm() {
      this.resetError();
      if (!this.FormData.ho) this.error.ho = true;
      if (!this.FormData.ten) this.error.ten = true;
      if (!this.FormData.sdt) this.error.sdt = true;
      if (!this.FormData.email) this.error.email = true;
      if (!this.FormData.emailtk) this.error.emailtk = true;
      if (!this.FormData.matkhau) this.error.matkhau = true;
      if (!this.FormData.matkhautk) this.error.matkhautk = true;
      if (!this.FormData.noidung) this.error.noidung = true;
      if (Object.values(this.error).every((error) => !error)) {
        alert("Đăng Kí Thành Công !");
      }
    },
   //thêm vào giỏ hàng
    addToCart(bseller) {
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const bsellerInCart=this.cartItems.find(item => item.id === bseller.id);
      if(bsellerInCart){
        alert(`Sản phẩm ${bseller.name} đã có trong giỏ hàng.`);
      }else{
        this.cartItems.push(bseller); // Thêm sản phẩm vào giỏ hàng
        alert(`Đã thêm ${bseller.name} vào giỏ hàng`);
      }
    },
    //Thanh tìm kiếm
  },

  // Tất cả sản phẩm
  

  // đóng

  //thêm vào giỏ hàng
  addToCart(tsanpham) {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const bsellerInCart=this.cartItems.find(item => item.id === tsanpham.id);
    if(bsellerInCart){
      alert(`Sản phẩm ${tsanpham.name} đã có trong giỏ hàng.`);
    }else{
      this.cartItems.push(tsanpham); // Thêm sản phẩm vào giỏ hàng
      alert(`Đã thêm ${tsanpham.name} vào giỏ hàng`);
    }
  },

  
  computed: {
    currentImageSrc() {
      // Tính toán và trả về đường dẫn của hình ảnh hiện tại dựa trên giá trị của currentImage.
      return this.images[this.currentImage];
    },
  },
}).mount("#app");
