import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ reviews }) => {
  const { name, review, ratings, img } = reviews;
  const ratingsIcon = [];
  for (var i = 1; i <= ratings; i++) {
    ratingsIcon.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);
  }


  return (
    <div>
      <div class="card w-full  bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="avatar mx-auto ">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            {img ? <img class="w-8 rounded-full" src={img} alt="" /> : <img class="w-8 rounded-full" src="https://findicons.com/files/icons/61/dragon_soft/128/user.png" alt="" />
        }
            </div>
          </div>
          <h2 class="card-title">{name}</h2>
          <p className="text-left">
            {ratingsIcon.map((ratingIcon) => (
              <span className="text-amber-500 mr-1">{ratingIcon}</span>
            ))}
          </p>
          <p className="text-left">" {review} "</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
