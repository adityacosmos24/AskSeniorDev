import CourseDetailsHero from "../../CourseDetailsHero";
import Navbar from "../../Navbar";
import CourseDetailsWhatYouWillLearn from "../../CourseDetailsWhatYouWillLearn";

export default function Page(){
    return (
        <>
        <Navbar/>
            <CourseDetailsHero/>
            <CourseDetailsWhatYouWillLearn/>
        </>
    )
}