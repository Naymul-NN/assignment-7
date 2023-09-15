/* eslint-disable react/prop-types */


const AddCourse = ({secletedCourses,remaining,totalHour}) => {
    console.log(secletedCourses);
    return (
        <div>
            <h3 className="ml-10 text-xl font-bold border-b-2 py-4">Add your course here</h3>
            <h2 className="pl-10 py-6">Credit hour remaining: {remaining} hr</h2>
           
            <div className="ml-10 py-3 border-y-2 border-indigo-400">
            {
                secletedCourses.map((course,idx) => (
                 <li key= {idx}>{course.name}</li>
                 
                ))
            }
            </div>
             <h3 className="ml-10 py-2 border-b-2 border-indigo-950">Total credit hour: {totalHour}</h3>

        </div>
    );
};

export default AddCourse;