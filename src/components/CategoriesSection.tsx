import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <div className=" flex text-black justify-center items-center text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Shop Categories
      </div>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Dresses"
          image="dress.jpg"
          link="dresses"
        />
        <CategoryItem
          categoryTitle="Bottoms"
          image="pants.jpg"
          link="bottoms"
        />
        <CategoryItem
          categoryTitle="Tops"
          image="set_quality.jpg"
          link="tops"
        />
        <CategoryItem
          categoryTitle="Accessories"
          image="bag.jpg"
          link="accessories"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
