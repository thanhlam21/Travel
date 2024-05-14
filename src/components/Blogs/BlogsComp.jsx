import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "The Taj Mahal, a world-renowned masterpiece located in the city of Agra, is one of the must-visit destinations in India. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal stands as a symbol of eternal love. Its architecture showcases a perfect blend of Mughal, Persian, and Indian artistry. As you enter the grounds of the Taj Mahal, you will be captivated by the pristine white beauty of the monument reflected in the clear blue water of the surrounding ponds. The intricate patterns, elaborate carvings, and precious stones embedded in the façade enhance its magnificent splendor. Particularly at sunrise or sunset, the Taj Mahal glistens and appears ethereal.Inside the Taj Mahal, you can uncover rich historical and cultural stories. The surrounding gardens, designed in Persian style with paved paths and lush greenery, create a peaceful and relaxing atmosphere.The Taj Mahal is not only a UNESCO World Heritage site but also a symbol of human ingenuity and refinement. It is undoubtedly a remarkable travel destination, offering unforgettable experiences for visitors from around the world. Come and discover the enchanting beauty of the Taj Mahal, one of the greatest wonders of the world.",
    author: "Someone",
    date: "April 22, 2023",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "April 22, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
