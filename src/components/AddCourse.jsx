/* eslint-disable react/prop-types */


const AddCourse = ({secletedCourses}) => {
    console.log(secletedCourses);
    return (
        <div>
            <h3 className="ml-7 border-b-2 py-4">Add your course here</h3>
            {
                secletedCourses.map((course,idx) => (
                 <li key= {idx} className=" pl-10">{course.name}</li>
                ))
            }
        </div>
    );
};

export default AddCourse;