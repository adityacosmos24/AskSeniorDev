import CourseDetailsHero from "../../CourseDetailsHero";
import Navbar from "../../Navbar";
import CourseDetailsWhatYouWillLearn from "../../CourseDetailsWhatYouWillLearn";
import CourseDetailsCourseContent from "../../CourseDetailsCourseContent";

export default function Page(){
    return (
        <>
        <Navbar/>
            <CourseDetailsHero/>
            <CourseDetailsWhatYouWillLearn/>
            <CourseDetailsCourseContent/>
        </>
    )
}