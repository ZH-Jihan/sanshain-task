import { faFlag, faPeopleGroup, faShippingFast, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const Summary = () => {
  return (
    <div className="lg:w-10/12 m-auto py-12 px-8 text-center">
        <h1 className='text-3xl font-bold py-2'>Millions Delar & Customer Trust Us</h1>
        <p className='font-bold text-xl pb-8'>Try to understand user expecation</p>
      <div class="stats shadow lg:w-full grid   lg:grid-cols-4 gap-6">
        <div class="stat">
          <div class="stat-figure text-primary">
          <FontAwesomeIcon icon={faFlag} className="h-11 text-primary"></FontAwesomeIcon>
          </div>
          <div class="stat-title">Countries</div>
          <div class="stat-value text-primary">86</div>
          <div class="stat-desc"></div>
        </div>
        <div class="stat">
          <div class="stat-figure text-primary">
          <FontAwesomeIcon icon={faPeopleGroup} className="h-11 text-primary"></FontAwesomeIcon>
          </div>
          <div class="stat-title">Happy Clients</div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
          <FontAwesomeIcon icon={faStar} className="h-11 text-secondary"></FontAwesomeIcon>
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-secondary">2.6M</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
              <FontAwesomeIcon icon={faShippingFast} className="h-11 text-secondary"></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Shipments done</div>
          <div class="stat-desc text-secondary">Wating For Shiping 13%</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
