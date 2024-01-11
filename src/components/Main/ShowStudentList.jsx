import React, { Fragment } from "react";
import avatar from "../../assets/avatar.png";

const STUDENTS = {
  classNameOne: [
    {
      id: 1,
      name: "Brad pitt",
      score: "A+",
      percentage: "98%",
      img: "https://goldenglobes.com/wp-content/uploads/2023/10/brad-pitt_03_paramount-pictures.jpg?w=640",
    },
    {
      id: 2,
      name: "Denzel Washington",
      score: "A+",
      percentage: "95%",
      img: "https://mediaproxy.snopes.com/width/1200/height/1200/https://media.snopes.com/2017/04/denzel.jpg",
    },
    {
      id: 3,
      name: "Leonardo DiCaprio",
      score: "A+",
      percentage: "99%",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
    },
    {
      id: 4,
      name: "Hugh Jackman",
      score: "A+",
      percentage: "99%",
      img: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpgQ",
    },
    {
      id: 5,
      name: "Danial craig",
      score: "A+",
      percentage: "85%",
      img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/77711_v9_bc.jpg",
    },
    {
      id: 6,
      name: "Angelina Jolie",
      score: "A+",
      percentage: "88%",
      img: "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 7,
      name: "Selena Gomez",
      score: "A",
      percentage: "78%",
      img: "https://assets.vogue.com/photos/657fafc0d4ee3d8c90ad3ee2/master/pass/GettyImages-1830310616.jpg",
    },
    {
      id: 8,
      name: "Christian Bale",
      score: "A+",
      percentage: "99%",
      img: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg",
    },
    {
      id: 9,
      name: "christopher nolan",
      score: "A+",
      percentage: "100%",
      img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/233377_v9_bb.jpg",
    },
    {
      id: 10,
      name: "Taylor Swift",
      score: "A",
      percentage: "75%",
      //   intentionally image is not given because we want to show default image
    },
  ],

  classNameTwo: [
    {
      id: 1,
      name: "Britney Spears",
      score: "A+",
      percentage: "98%",
      img: "https://www.billboard.com/wp-content/uploads/2023/08/britney-spears-2019-billboard-espanol-1548.jpg?w=942&h=623&crop=1",
    },
    {
      id: 2,
      name: "Sting",
      score: "A+",
      percentage: "95%",
      img: "https://www.onthisday.com/images/people/sting.jpg?w=360",
    },
    {
      id: 3,
      name: "Nirvana",
      score: "A+",
      percentage: "99%",
      img: "https://cdn.britannica.com/82/101882-050-9FA7F900/Kurt-Cobain-Nirvana-1993.jpg",
    },
    {
      id: 4,
      name: "Madonna",
      score: "A+",
      percentage: "85%",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMUPzuXIS_-001gdqJmebiUogzYdnphQwEQ&usqp=CAU",
    },
    {
      id: 5,
      name: "Elton John",
      score: "A+",
      percentage: "85%",
      img: "https://m.media-amazon.com/images/M/MV5BMjM3Njk3Nzc4MF5BMl5BanBnXkFtZTgwODMzNjUxMzE@._V1_.jpg",
    },
    {
      id: 6,
      name: "The Last Mohicans",
      score: "A+",
      percentage: "88%",
      img: "https://lwlies.com/wp-content/uploads/2017/06/daniel-day-lewis-the-last-of-the-mohicans.jpg",
    },
    {
      id: 7,
      name: "Scott moss",
      score: "A",
      percentage: "78%",
      //   intentionally image is not given because we want to show default image
    },
    {
      id: 8,
      name: "Hanz zimer",
      score: "A+",
      percentage: "99%",
      img: "https://yt3.googleusercontent.com/ytc/AIf8zZSiAoMNDsFCgTCC7a2KqHCU2t6gp4O6MIe8_2c9=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 9,
      name: "Dua Lipa",
      score: "A+",
      percentage: "100%",
      img: "https://m.media-amazon.com/images/M/MV5BOWRiMzRlZGUtNjA1Zi00OGJlLTg3Y2QtYjQ3MDNhOTQ1OWVjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 10,
      name: "Anne marie",
      score: "A",
      percentage: "75%",
      //   intentionally image is not given because we want to show default
      img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1068733394.jpg?crop=1xw:0.37550066755674233xh;center,top",
    },
  ],
};
const ShowStudentList = () => {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          class One
        </td>
      </tr>

      {STUDENTS.classNameOne.map(({ id, name, img, score, percentage }) => {
        return (
          <Fragment key={id}>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">{id}</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex items-center space-x-3">
                  <img
                    className=" h-8 w-8 rounded-full"
                    src={img || avatar}
                    width="32"
                    height="32"
                    alt={name}
                  />
                  <span className="whitespace-nowrap">{name}</span>
                </div>
              </td>
              <td className="p-5 text-center text-sm md:text-xl">{score}</td>
              <td className="p-5 text-center text-sm md:text-xl">
                {percentage}
              </td>
            </tr>
          </Fragment>
        );
      })}

      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          class Two
        </td>
      </tr>

      {STUDENTS.classNameTwo.map(({ id, name, img, score, percentage }) => {
        return (
          <Fragment key={id}>
            <tr className="border-b border-[#7ECEB529]" key={id}>
              <td className="p-5 text-sm md:text-xl">{id}</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex items-center space-x-3">
                  <img
                    className=" h-8 w-8 rounded-full"
                    src={img || avatar}
                    width="32"
                    height="32"
                    alt={name}
                  />
                  <span className="whitespace-nowrap">{name}</span>
                </div>
              </td>
              <td className="p-5 text-center text-sm md:text-xl">{score}</td>
              <td className="p-5 text-center text-sm md:text-xl">
                {percentage}
              </td>
            </tr>
          </Fragment>
        );
      })}
    </>
  );
};

export default ShowStudentList;
