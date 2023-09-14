import { useState } from "react";
import { useEffect } from "react";


const CourseList = () => {


    const [allCourse, setAllCourse] = useState([]);

   useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
    .then(data => setAllCourse(data))
   },[])

    return (
        <>
        <div className="w-[80%]">
            <img src="https://i.ibb.co/HdHRzyc/Rectangle-2-2.png" alt="" />
            <h1 className="my-3">ProducIntroduction to C Programmingt</h1>
            <p ><small>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</small></p>
            <div className="flex gap-20 my-1">
                <p>$ Price: 12000</p>
                <p>Credit:1 hr</p>
            </div>
           
           <button className="text-center py-2 px-[122px] bg-blue-600 rounded-xl"> select </button>
           
        </div>
        
        </>
        
    );
};

export default CourseList;