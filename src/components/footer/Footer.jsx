import './Footer.css'
const Footer = () => {
     return (
          <div>
               <div className="container mx-auto p-4 border rounded-2xl relative z-20 top-36">
                    <div className="px-10 py-16 flex flex-col gap-4 rounded-2xl bg-con justify-center items-center">
                         <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
                         <p className="text-lg">Get the latest updates and news right in your inbox!</p>
                         <div className="flex gap-2">
                              <input
                                   type="text"
                                   placeholder="Type here"
                                   className="input input-bordered input-md max-w-xs" />
                              <button className="btn bg-rty">Subscribe</button>
                         </div>
                    </div>
               </div>
               <div className='bg-black mx-auto pt-52'>
                    <img className='mx-auto' src="logo-footer.png" alt="" />
                    <footer className="footer container mx-auto bg-black text-white text-base-content p-10">
                         <nav>
                              <h6 className="footer-title">About Us</h6>
                              <p>We are a passionate team
                                   <br />dedicated to providing the best
                                   <br />services to our customers.</p>
                         </nav>
                         <nav>
                              <h6 className="footer-title">Quick Links</h6>
                              <a className="link link-hover">Home</a>
                              <a className="link link-hover">Services</a>
                              <a className="link link-hover">About</a>
                              <a className="link link-hover">Contact</a>
                         </nav>
                         <nav>
                              <h6 className="footer-title">Subscribe</h6>
                              <p>Subscribe to our newsletter for the<br />latest updates.</p>
                              <div className='flex gap-2'>
                                   <input
                                        type="text"
                                        placeholder="Type here"
                                        className="input input-bordered input-sm max-w-xs" />
                                   <button className="btn btn-sm bg-ytr">Subscribe</button>
                              </div>
                         </nav>
                    </footer>
                    <footer className="footer bg-black text-white text-base-content border-base-300 border-t px-10 py-4">
                         <aside className="grid-flow-col mx-auto items-center">
                              <p>
                                   @2024 Your Company All Rights Reserved.
                              </p>
                         </aside>
                    </footer>
               </div>
          </div>
     );
};

export default Footer;