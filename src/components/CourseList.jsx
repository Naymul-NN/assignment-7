/* eslint-disable react/jsx-key */
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
        <div className=" grid grid-cols-3 gap-4">
           {
            allCourse.map(cours =>(
                <div key={cours.name} className="bg-slate-200 p-3 rounded-xl">
                <img src={cours.cover} alt="" />
                <h1 className="my-3 font-bold">{cours.name}</h1>
                <p ><small>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</small></p>
                <div className="flex gap-20 my-1">
                    <p>$ Price: {cours.price}</p>
                    <p>Credit: {cours.credit} hr</p>
                </div>
               
               <button className="text-center py-2 px-[122px] bg-blue-600 rounded-xl"> select </button>
               
            </div>
            ))
           }
        </div>
        </>
        
    );
};

export default CourseList;