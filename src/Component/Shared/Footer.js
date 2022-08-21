import React from "react";
import appstore from '../../assets/Socile/Download_on_the_App_Store_Badge.svg';
import playstore from '../../assets/Socile/sprite.png';


const Footer = () => {
  return (
    <div className="pt-12">
    <footer class="footer p-10 bg-error text-white">
  <div>
    <span class="footer-title">Services</span> 
    <a href="https://www.flex-tools.com/en/company/environment-protection/" class="link link-hover">Design</a> 
    <a href="https://www.flex-tools.com/en/service/" class="link link-hover">Marketing</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a href="https://www.flex-tools.com/en/company/" class="link link-hover">About us</a> 
    <a href="https://www.flex-tools.com/en/contact/" class="link link-hover">Contact</a> 
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a href="https://www.flex-tools.com/en/company/flex-and-borussia-dortmund/" class="link link-hover">Flex & Dev</a> 
    <a href="#" class="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer class="footer px-10 py-4 border-t bg-error text-white border-error">
  <div class="items-center grid-flow-col">
  <p>FLEX Warranty-App</p>
   <a href="https://play.google.com/store/apps/details?id=com.sic.android.flex" target='_blank' rel="noreferrer"><img src={playstore}  alt="" srcset="" /></a>
   <a href="https://apps.apple.com/de/app/flex/id1064920301?l=en" target='_blank' rel="noreferrer"><img src={appstore} alt="" srcset="" /></a>
  </div> 
  <div class="md:place-self-center md:justify-self-end">
    <div class="grid grid-flow-col gap-4">
      <a href="https://www.instagram.com/accounts/login/?next=/flex_tools" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a href="https://www.youtube.com/user/flexvideotube/" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a href="https://www.facebook.com/flexelektrowerkzeuge/" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
<footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by Flex Tols Industries Ltd</p>
    <p>Desing & Develop By <a className="text-error" href="https://www.facebook.com/mdjakir.hossen.560/" target="_blank" rel="noopener noreferrer">ZH Jihan</a></p>
  </div>
</footer>
    </div>
  );
};

export default Footer;
