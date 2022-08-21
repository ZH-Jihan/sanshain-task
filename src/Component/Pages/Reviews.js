import React from "react";
import { useQuery } from "react-query";
import Review from '../Home/Review';
import Loading from "../Shared/Loading";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(["review"], () =>
    fetch("https://warm-wave-77383.herokuapp.com/review").then((res) => res.json())
  );
  console.log(reviews);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-12 mb-16">
      <h4 className="text-4xl text-center pb-16 font-bold">Our Customer Reviews</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 lg:mx-16">
        {reviews?.map((review) => (
          <Review reviews={review} key={review._id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;