import Categories from "../components/Categories";
import BackButton from "../components/BackButton";

const CategoriesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <BackButton />
      </div>
      <Categories />
    </div>
  );
};

export default CategoriesPage;
