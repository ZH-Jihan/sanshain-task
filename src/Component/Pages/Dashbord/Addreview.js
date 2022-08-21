import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Addreview = () => {
  const [user] = useAuthState(auth);
  const img = user?.photoURL;

  const handleReview = (event) => {
    event.preventDefault();

    const reviewinfo = {
      name: event.target.name?.value,
      ratings: event.target.rating?.value,
      review: event.target.review?.value,
      img: img,
    };

    console.log(reviewinfo);
    fetch("https://warm-wave-77383.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(reviewinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          event.target.reset();
          toast.success("Your Review Completed");
          Navigate("/dashboard");
        }
      });
  };

  return (
    <form onSubmit={handleReview}>
      <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
        <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
            ADD YOUR REVIEW
          </h1>
          <div class="space-y-4">
            <div>
              <label for="title" class="text-lg font-bold ">
                Name:
              </label>
              <input
                disabled
                value={user.displayName}
                type="text"
                placeholder="Your Name"
                name="name"
                class="ml-2 outline-none py-1 px-2 text-md font-bold border-2 rounded-md"
              />
            </div>
            <div>
              <label for="description" class="block mb-2 text-lg font-serif">
                Description:
              </label>
              <textarea
              required
                style={{ height: "110px" }}
                cols="30"
                rows="10"
                placeholder="whrite here.."
                name="review"
                class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div>
              <label for="title" class="text-lg font-bold ">
                Rating Here:
              </label>
              <input
                required
                type="number"
                max={5}
                min={1}
                placeholder="Your Rating"
                name="rating"
                class="ml-2 outline-none py-1 px-2 text-md  border-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
            >
              ADD REVIEW
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Addreview;
