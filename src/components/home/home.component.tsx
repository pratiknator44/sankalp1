import HomeCarouselComponent from "./home-carousel.component";
import HomeFiltersComponent from "./home-filter.component";
import WishCategoryItemsComponent from "./wish-category-items.component";

export default function HomeComponent() {
    return (
        <div >
            <HomeCarouselComponent></HomeCarouselComponent>
            <div className="mt-3">
                <HomeFiltersComponent></HomeFiltersComponent>
            </div>
            <div className="mt-3">
                <div className="display-5 m-3" style={{textAlign: 'left'}}>Birthday Wishes <a className="button button-primary h5 text-primary cursor-pointer">See all</a></div>
                <div className=''>
                    <WishCategoryItemsComponent></WishCategoryItemsComponent>
                </div>
            </div>
            <hr></hr>

            <div className="mt-3">
                <div className="display-5 m-3" style={{textAlign: 'left'}}>Good Morning Wishes <a className="button button-primary h5 text-primary cursor-pointer">See all</a></div>
                <div className=''>
                    <WishCategoryItemsComponent></WishCategoryItemsComponent>
                </div>
            </div>
        </div>
    );
}