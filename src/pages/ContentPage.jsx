import { ArticleContent } from "../components/ArticleContent";
import { SideNavigation } from "../components/SideNavigation";

export const ContentPage = () => {
  return (
    <>
      <section className=" ">
        <div className="border-2 border-solid border-sky-700 w-9/12 m-auto grid grid-cols-[30%_70%] justify-between rounded sm:w-full sm:block md:w-[80%] md:block lg:w-[80%] xl:w-[78%] sm:relative  ">
          <SideNavigation />
          <ArticleContent />
        </div>
      </section>
    </>
  );
};
