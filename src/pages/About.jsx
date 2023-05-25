import { Link } from "react-router-dom"
import RatedStar from "../components/RatedStar"
// import StarRating from "../components/StarRating"
import Address from "../links/Address"
import EmailAddress from "../links/EmailAddress"
import PhoneNumber from "../links/PhoneNumber"

const About = () => {
  return (
    <div>
      <div className='about'>
          <div className="about--profile">
            <img src='' alt="" className="about--image" />
            <div className="verification--icon">
              {/* {!item.licenseExpired && (
                <span className="stamp--licensed">LICENSED</span>
              )} */}
              {/* {item.licenseExpired && (
                <span className="stamp--unlicensed">UNLICENSED</span>
              )} */}
            </div>
          </div>
        <div className='about--info'>
         <h4>DPR OIL</h4>
         <span className='about--top--rating'>4.0</span>
         <span className='about--top--rating'><RatedStar rating={4.0}/></span>
         <p>CERT NO: xxx-xxx-xxx</p>
        </div>
        <hr />
        <div className='about--about'>
          <h3>Resident Pharmacist</h3>
        </div>
          {/* <ModalPharmacist item={item}/> */}
        <hr />
        <div className='about--about'>
          <h3>About</h3>
          <p className='about--text--info'>Lorem ipsum..</p>
        </div>
        <hr />
        <div className='about--details'>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <div className='address'><Address address={'Abuja'}/></div>
          </div>
          <div>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <div className='telephone'><PhoneNumber number={'+234'}/></div>
          </div>
          <div>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <div className='mail'><EmailAddress email={'@gmail.com'} /></div>
          </div>
          <div>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p className='availability'>{'24/7'}</p>
          </div>
        </div>
        <hr />
        <div className='about--reviews'>
          <h3>Ratings and reviews</h3>
          <p className='about--text--info'>
            {/* {item.reviews.length < 1 ? "No reviews yet!": item.reviews[item.reviews.length - 1].body} */}
          </p>
        </div>
        <div className='about--text--info'>
        {/* {item.reviews.length < 1 ? <p></p> : item.reviews[0].body === "" ? "No reviews yet!":
        <p className='about--anonymous'><em>--Anonymous</em></p>
        } */}
        </div>
        {/* {item.reviews.length < 1 ? <p></p> :
        <div className='about--more'>
          {item.reviews[0].body === "" ? <p></p> : <Link to={`/about/review/${uniqueGuid}`}>See All Reviews</Link>}
        </div>
        } */}
        <hr />
        <div className='about--ratings'>
          <p className='about--title'><strong>Rate & Report</strong></p>
          {/* {showPopup && <button type="submit" className='about--button' onClick={handleSubmit}>POST</button>} */}
        </div>
        <div className='about--rating'>
          {/* <StarRating onRate={handleRate} /> */}
          {/* {!showPopup && <p className='about--rating--bad'>Bad</p>}
          {!showPopup && <p className='about--rating--great'>Great</p>}
          {showPopup && <Popups />}
          {showPopup && 
          <div className='about--fill'>
            <form>
              <textarea name="" id="" cols="1" rows="2" 
                typeof='text' 
                placeholder='Post a review (optional)'
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                className='about--form'
              />
            </form>
          </div>
          } */}
          {/* {isPosted && <p className='about--posting'>Thanks for posting!</p>} */}
        </div>
        {/* <ModalPopup item={item} /> */}
        <div className='about--more'>
          <Link to={`/about/report}`}>View all reports</Link>
        </div>
      </div>
    </div>
  )
}

export default About