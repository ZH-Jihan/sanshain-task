const Warinty = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://www.flex-tools.com/fileadmin/_processed_/b/f/csm_Registrierung_23517285b2.jpg" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">3 year warranty</h2>
          <p>Protect yourself against unexpected repair costs for up to three years - even after the statutory warranty period has expired.</p>
          <div className="card-actions justify-center pt-4 ">
            <a href="https://www.flex-tools.com/en/service/3-year-warranty/?tx_flexproduct_products%5Bproduct%5D=-&cHash=4c845e9f3d5be307a687b15c83f354be" className="btn text-white w-full">To The 3 year warranty</a>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://www.flex-tools.com/fileadmin/flex-tools.com/media/09_Unternehmen/FLEX_Fachhaendler.jpg" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dealer Search</h2>
          <p>Want to buy a FLEX product? Only from professional dealers!
Find FLEX dealers near you</p>
          <div className="card-actions justify-center pt-4 ">
            <a href="https://www.flex-tools.com/en/find-dealer/#center=51.164118,10.454119&zoom=6" className="btn text-white w-full">Dealer Search</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warinty;
