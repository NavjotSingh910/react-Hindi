import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
    // const [data,setData]=useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data=useLoaderData()
  return (
    <div className="bg-gray-700/50 flex  flex-wrap justify-center p-6 text-2xl font-bold">
      Github Username : {data.name}
    </div>
  );
}

export default GitHub;

export const githubInfoLoader= async() =>{
  const response =await fetch("https://api.github.com/users/hiteshchoudhary")
  return response.json()
}