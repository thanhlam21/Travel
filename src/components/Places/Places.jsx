import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/los-angeles.jpg";
import Img6 from "../../assets/places/tam-coc.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description:
      "Nhà hát Opera Sydney, được người Việt gọi là Nhà hát Con Sò là một công trình nhà hát tại thành phố Sydney, Úc. Nhà hát có kiến trúc độc đáo hình con sò hay những cánh buồm no gió ra khơi. Đây là công trình kiến trúc độc đáo của Sydney nói riêng và nước Úc nói chung, thu hút nhiều du khách đến thăm.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Los Angeles là thành phố lớn nhất tiểu bang California và lớn thứ nhì tại Hoa Kỳ, thuộc về Quận Los Angeles. Thành phố còn được gọi tắt là Los bởi người Việt ở vùng lân cận.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Tam Coc - Ninh Binh",
    location: "Viet Nam",
    description:
      "Tam Cốc – Bích Động là quần thể hang động ở vùng đất xã Ninh Hải huyện Hoa Lư tỉnh Ninh Bình, Việt Nam. Tam Cốc – Bích Động còn được biết đến với những cái tên nổi tiếng như vịnh Hạ Long trên cạn hay Nam thiên đệ nhị động là một khu du lịch trọng điểm quốc gia Việt Nam",
    price: 4200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
