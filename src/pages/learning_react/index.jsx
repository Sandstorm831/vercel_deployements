import Accordian from "../../components/learning_react_components/accordian/index.jsx";
import RandomColor from "../../components/learning_react_components/random_color/index.jsx";
import StarRating from "../../components/learning_react_components/star_rating/index.jsx";
import ImageSlider from "../../components/learning_react_components/image_slider/index.jsx";
import LoadMoreData from "../../components/learning_react_components/load-more-data/index.jsx";
import Treeview from "../../components/learning_react_components/tree-view/index.jsx";
import menus from "../../components/learning_react_components/tree-view/data.js";
import QRCodeGenerator from "../../components/learning_react_components/qrcode/index.jsx";
import LightDarkMode from "../../components/learning_react_components/light_dark_mode/index.jsx";
import ScrollIndicator from "../../components/learning_react_components/custom_scroll_indicator/index.jsx";
import TabTest from "../../components/learning_react_components/custom-tabs/tabs-test.jsx";
import ModalTest from "../../components/learning_react_components/custom_modal_popup/modal-test.jsx";
import GithubProfileFinder from "../../components/learning_react_components/github_profile_finder/index.jsx";
import SearchAutoComplete from "../../components/learning_react_components/search-autocomplete/index.jsx";
import FeatureFlagGlobalState from "../../components/learning_react_components/feature-flag/context/index.jsx";
import FeatureFlags from "../../components/learning_react_components/feature-flag/index.jsx";
import UseFetchTest from "../../components/learning_react_components/useFetch/test.jsx";
import OutsideClickTest from "../../components/learning_react_components/clickOutside/test.jsx";
import UseWindowResizeTest from "../../components/learning_react_components/useWindowResize/test.jsx";
import ScrollTopBottom from "../../components/learning_react_components/ScrollTopBottom/index.jsx";
import SectoinScroller from "../../components/learning_react_components/ScrollSection/index.jsx";
import "../../output.css"
export default function LearningReactApp(){
    return <div className="flex flex-col h-max text-center">
        <Accordian />
        <RandomColor />
        <StarRating numStars={10} />
        <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={4} />
        <LoadMoreData />
        <Treeview menus={menus} />
        <QRCodeGenerator />
        <LightDarkMode />
        <ScrollIndicator url='https://dummyjson.com/products?limit=100'/>
        <TabTest />
        <ModalTest />
        <GithubProfileFinder />
        <SearchAutoComplete />

        {/* Feature Flag implementation */}
        <FeatureFlagGlobalState>
            <FeatureFlags key={"dom-dom"}/>
        </FeatureFlagGlobalState>

        <UseFetchTest />
        <OutsideClickTest />
        <UseWindowResizeTest />
        <ScrollTopBottom />
        <SectoinScroller />
    </div>
}