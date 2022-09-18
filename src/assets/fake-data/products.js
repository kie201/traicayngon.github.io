// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Kiwi xanh New Zealand",
    price: 75.734,
    image01: product_01_image_01,
    
    category: "Burger",

    desc: "Kiwi xanh chứa nhiều hợp chất rất tốt cho sức khỏe, một quả kiwi chứa 270% Vitamin C, E và các chất Protein, canxi, muối, clo…giúp cải thiện chức năng của hệ miễn dịch, phòng ngừa viêm gan và sự tấn công của virus và vi khuẩn, nâng cao sự miễn dịch. Kiwi xanh giúp ngăn chặn việc tạo thành chất gelatin hoặc đông cục khi tiêu thụ các loại thực phẩm có chất độc.Kiwi tăng hiệu quả giảm cân, giảm nguy cơ bệnh ưng thư và tim mạch, tẩy trắng răng, trị tàn nhang và ức chế quá trình oxy hóa làn da, đào thải và ngăn ngừa các sắc tố đen giúp da sáng trắng, hồng hào và mịn màng đặc biệt đối với các bà mẹ sau khi sinh. ",
  },

  {
    id: "02",
    title: "Mâm xôi đỏ",
    price: 51.323,
    image01: product_02_image_01,
    
    category: "Burger",

    desc: "Quả phúc bồn tử chứa rất ít hàm lượng calo, chứa rất nhiều vitamin C và chất xơ để hỗ trợ hệ miễn dịch và tăng cường sức đề kháng. Ngoài ra, phúc bồn tử còn chứa vitamin A, vitamin B6, vitamin B, vitamin E, vitamin K và một số khoáng chất quan trọng khác như: kali, đồng, mangan, photpho,...",
  },

  {
    id: "03",
    title: "Dâu Nhật Family ",
    price: 88.343,
    image01: product_03_image_01,
   
    category: "Pizza",

    desc: "Lượng chất bảo vệ, chống oxy hóa của dâu gấp 10 lần cà rốt, giúp loại bỏ các gốc tự do có hại, làm chậm quá trình lão hóa. Các axit ellagic, lutein và zeathaccins kết hợp với vitamin C có trong dâu tây giúp ngăn ngừa ung thư, chế ngự sự phát triển của các khối u, tiêu diệt các gốc tự do và trung hòa ảnh hưởng tiêu cực có khả năng xảy ra ở tế bào trong cơ thể. Dâu có tính mát giúp giải nhiệt, thải độc hiệu quả. Dâu tây còn thường được dùng trong chế độ ăn kiêng dành cho người béo, giúp giảm cân hiệu quả. Vitamin C trong dâu tây có tác dụng sản sinh ra collagen, cải thiện độ đàn hồi cho da. Hàm lượng vitamin C trong dâu tây được đánh giá cao hơn cả cam, giúp tăng sức đề kháng, giảm cảm cúm.",
  },

  {
    id: "04",
    title: "Chanh Dây",
    price: 77.938,
    image01: product_04_image_01,
   
    category: "Pizza",

    desc: "Chanh dây đứng thứ 3 trong những loại quả cung cấp nhiều chất xơ nhất, chỉ sau hạnh nhân và dừa, 100g chanh dây cung cấp đến 10g chất xơ.",
  },

  {
    id: "05",
    title: "Dưa lưới TL3 VietGAP",
    price: 69.738,
    image01: product_05_image_01,
    
    category: "Pizza",

    desc: " Dưa lưới TL3 được trồng theo tiêu chuẩn Vietgap đạt chất lượng trái tròn đều, đầy thịt, ngọt mọng nước cùng hương thơm đậm đà.",
  },
  {
    id: "06",
    title: "Kiwi vàng New Zealand",
    price: 84.837,
    image01: product_01_image_01,
    
    category: "Burger",

    desc: "Trái size nhỏ (khoảng 5 - 6 trái/0.5Kg), đều, đẹp, vỏ mỏng, thịt vàng óng ánh. Thịt mọng nước, ngọt thơm, chua dịu ở phần hạt",
  },

  {
    id: "07",
    title: "Táo Envy New Zealand",
    price: 94.343,
    image01: product_02_image_02,
    
    category: "Pizza",

    desc: "Quả to tròn, với vỏ màu đỏ điểm thêm các sọc màu vàng thịt giòn, vị ngọt đậm, mùi thơm dịu nhẹ",
  },

  {
    id: "08",
    title: "Chuối Dole ",
    price: 26.837,
    image01: product_03_image_02,
    
    category: "Pizza",

    desc: "Chuối DOLE, thương hiệu chuối nổi tiếng thế giới được người tiêu dùng trong và ngoài nước tin dùng.Là một giống chuối ngoại nhập, có mùi thơm và có vị ngọt đặc trưng.",
  },

  {
    id: "09",
    title: "Sầu riêng cơm Dona",
    price: 110.0,
    image01: product_04_image_02,
    
    category: "Bread",

    desc: "Sầu riêng có mùi đậm và vị ngọt béo đặc trưng.Cơm dày, vàng và dẻo hơn.Chứa nhiều vitamin và chất xơ.Thường được ăn trực tiếp hoặc làm kem, bánh.",
  },

  {
    id: "10",
    title: "Măng cụt Bảo Lộc ",
    price: 169.0,
    image01: product_05_image_02,
    category: "Bread",

    desc: "Trái vừa, cuống tươi xanh, dễ tách. Múi căng mọng, thịt trắng, ngọt nhiều, chua thanh đặc trưng",
  },

  {
    id: "11",
    title: "Thanh long ruột đỏ",
    price: 49.343,
    image01: product_06_image_01,
    category: "Bread",

    desc: "Trái cây Việt canh tác an toàn, tuyển chọn loại nhất. Có ruột đỏ, ngọt, giàu dinh dưỡng hơn thanh long trắng",
  },

  {
    id: "12",
    title: "Dâu tằm",
    price: 35.822,
    image01: product_06_image_02,
    category: "Bread",

    desc: "Trong quả dâu cũng có nhiều thành phần dưỡng chất có lợi cho sức khỏe như đường, protein, acid hữu cơ, vitamin B1, vitamin C, carotene, chất chống oxy hóa, chất xơ...",
  },

  {
    id: "13",
    title: "Ổi nữ hoàng",
    price: 26.394,
    image01: product_06_image_03,
    category: "Bread",

    desc: "Ổi nữ hoàng có thịt quả khá dày và ruột rất nhỏ có một ít hạt. Ổi có mùi thơm mát, giòn và ngọt đặc trưng.Được tuyển chọn khắt khe, đảm bảo vệ sinh thực phẩm.",
  },
];

export default products;
