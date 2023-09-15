/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import AddCourse from "./AddCourse";
import { FaBeer  } from 'react-icons/fa';


const CourseList = () => {


    const [allCourse, setAllCourse] = useState([]);
    const [secletedCourses, setSeclectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalHour, setTotalHour] = useState(0);
    const [prices, setPrices] = useState (0);
   useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
    .then(data => setAllCourse(data))
   },[])

const handleSeclectCourse = (cours) => {
    const isExist = secletedCourses.find((item) => item.name == cours.name);
    let count = cours.credit;
    let cost  = cours.price;
    if(isExist){
       return alert("you already select this course")
    }else{
        secletedCourses.forEach((item) =>{
            count = count + item.credit
        } );
        secletedCourses.forEach((pice) =>{
            cost =cost + pice.price
        })
    
        const totalRemaining = 20 - count;
        if(count > 20 ){
           return alert("you have add enough credit hour ")
        }
        setTotalHour(count);
        setRemaining(totalRemaining);
        setSeclectedCourses([...secletedCourses, cours]);
        setPrices(cost);
    }
       
}
//console.log(secletedCourses)
    return (
        <>
        <div className="flex">
        <div className=" grid grid-cols-3 gap-4">
           {
            allCourse.map(cours =>(
                <div key={cours.name} className="bg-slate-200 p-3 rounded-xl">
                <img src={cours.cover} alt="" />
                <h1 className="my-3 font-bold ">{cours.name}</h1>
                <p ><small>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</small></p>
                <div className="flex gap-20 my-1">
                    <p>$ Price: {cours.price}</p>
                    <p className="inline-flex items-center"><FaBeer className="pr-1"  /> Credit: {cours.credit} hr</p>
                </div>
               
               <button onClick={ () => handleSeclectCourse(cours)} className="text-center py-2 px-[122px] bg-blue-600 rounded-xl"> select </button>
               
            </div>
            ))
           }
        </div>
            <div>
            <AddCourse secletedCourses={secletedCourses}
            remaining={remaining}
            totalHour={totalHour} 
            prices = {prices} 
            ></AddCourse>
            </div>
        </div>
        </>
        
    );
};

export default CourseList;