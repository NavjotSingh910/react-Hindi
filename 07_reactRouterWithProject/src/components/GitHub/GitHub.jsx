import React, { useEffect, useState } from "react";

function GitHub() {
    const [data,setData]=useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-gray-700/50 flex  flex-wrap justify-center p-6 text-2xl font-bold">
      Github Username : {data.name}
    </div>
  );
}

export default GitHub;
