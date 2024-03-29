// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'Biệt Thự',
    name: 'House 1',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House1,
    imageLg: House1Lg,
    country: 'Việt Nam',
    address: 'Đống Đa, Hà Nội',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Phung Viet Vuong',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'Biệt Thự',
    name: 'House 2',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House2,
    imageLg: House2Lg,
    country: 'Việt Nam',
    address: 'Yên Bái',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Nguyen Manh An',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'Resort',
    name: 'House 3',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House3,
    imageLg: House3Lg,
    country: 'Việt Nam',
    address: 'Nha Trang',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Phung Thi Dieu Vi',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'Biệt Thự',
    name: 'House 4',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House4,
    imageLg: House4Lg,
    country: 'Việt Nam',
    address: 'Khánh Hoà',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Tuan Khai',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'Nhà Vườn',
    name: 'House 5',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House5,
    imageLg: House5Lg,
    country: 'Việt Nam',
    address: 'Vũng Tàu',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Tran Thi Thu Trang',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'Biệt Thự',
    name: 'House 6',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Căn Hộ',
    name: 'Apartament 1',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Căn Hộ',
    name: 'Apartament 2',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'England',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Căn Hộ',
    name: 'Apartament 3',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'France',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'Nhà',
    name: 'House 7',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House7,
    imageLg: House7Lg,
    country: 'ThaiLan',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Resort',
    name: 'House 8',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House8,
    imageLg: House8Lg,
    country: 'Việt Nam',
    address: 'Thạch Thất',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Viet Viet',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'Nhà',
    name: 'House 9',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House9,
    imageLg: House9Lg,
    country: 'ThaiLan',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'Biệt Thự',
    name: 'House 10',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House10,
    imageLg: House10Lg,
    country: 'France',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Biệt Thự',
    name: 'House 11',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House11,
    imageLg: House11Lg,
    country: 'France',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Biệt Thự',
    name: 'House 12',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: House12,
    imageLg: House12Lg,
    country: 'France',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Căn Hộ',
    name: 'Apartament 16',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Căn Hộ',
    name: 'Apartament 17',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'France',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Căn Hộ',
    name: 'Apartament 18',
    description:
      'Ngôi biết thự đó rất to và đẹp , mang nhiều hơi hướng hiện đại trẻ trung . Căn biệt thự có tổng cộng là 7 phòng là ba phòng ngủ , một phòng khách , nhà bếp và hai nhà vệ sinh. phòng ngủ của em được trang trí những hình ảnh galaxy rất đẹp , phòng em gái được trang trí theo sở thích búp bê của con bé , phòng của bố mẹ thì đơn giản và sang trọng . Sau nhà , chính là khu vực vườn cây để căn biệt thự trở lên xanh và gần gũi với thiên nhiên hơn . Bên canh khu vườn chính là một chiếc bể bơi rất to và dài  giành để thư giãn sau những ngày đầy mệt mỏi . Cạnh đó là một chiếc gara để để ô tô . Từ trong ra ngoài ngôi nhà đều được làm chủ yếu từ gạch trắng trông rất sáng và hài hòa . Căn nhà như một nơi rất tuyệt vời mà ai cũng muốn có',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
