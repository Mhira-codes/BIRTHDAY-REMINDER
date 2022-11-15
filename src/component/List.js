import React from "react";

const List = ({ birthdayLists }) => {
  return (
    <div className="flex flex-col gap-3 items-start justify-center">
      {birthdayLists.map((birthday) => (
        <div className="flex gap-4 items-center justify-start">
          <img src={birthday.image}  className="w-[4rem] h-[4rem] rounded-full"/>
          <div className="flex flex-col  items-start">
            <span className="text-base font-medium">{birthday.name}</span>
            <span className="font-normal text-gray-500">{birthday.age} years</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
