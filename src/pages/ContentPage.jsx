import { ArticleContent } from "../components/ArticleContent";
import { SideNavigation } from "../components/SideNavigation";
import { SocialMediaPage } from "./SocialMediaPage";

export const ContentPage = () => {
  return (
    <>
      <section className="mt-3 " >
        <div className="border-2 border-solid border-sky-700 w-9/12 m-auto grid grid-cols-[30%_70%] justify-between rounded sm:w-full sm:block md:w-10/12 md:block lg:w-9/12 xl:w-9/12">
          <SideNavigation />
          <ArticleContent/>
          
        </div>
      </section>
    </>
  );
};
