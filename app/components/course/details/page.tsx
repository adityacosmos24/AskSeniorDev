import CourseDetailsHero from "../../CourseDetailsHero";
import Navbar from "../../Navbar";
import CourseDetailsWhatYouWillLearn from "../../CourseDetailsWhatYouWillLearn";
import CourseDetailsCourseContent from "../../CourseDetailsCourseContent";
import CourseDetailsTestimonial from "../../CourseDetailsTestimonial";
import Footer from "../../Footer";

export default function Page(){
    return (
        <>
        <Navbar/>
            <CourseDetailsHero/>
            <CourseDetailsWhatYouWillLearn/>
            <CourseDetailsCourseContent/>
            <CourseDetailsTestimonial/>
        <Footer/>
        </>
    )
}