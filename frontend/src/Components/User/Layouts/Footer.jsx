import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <section>
            <section className="info_section layout_padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_section ">
              <h6>Our Motivation</h6>
              <ul>
                <li>
              SAVE BAZAR,SAVE LIFE.
                </li>
              </ul>
              </div>
              
            </div>
            <div className="col-md-4">
              <div className="footer_middle ">
                <h4 >
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                <Link to="/product" >Product</Link>
                </li>
                <li>
                <Link to="/contact" >Contact Us</Link>
                </li>
              </ul>
                </div>
            </div>
            <div className="col-md-4">
              <div className="social_container">
              
               <div className="footer_section">
               <h6>
               Contact Us
                </h6><>Mobile: 01780 88 65 77</><br></br>
                <Link to="monir36-367@diu.edu.bd">Emaill:Monir35-367@diu.edu.bd</Link> 
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </section>
    )
}
export default Footer