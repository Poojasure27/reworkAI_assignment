import React from 'react';
import "../../styles/pricing.css";

const Pricing = () => {
  return (
    <section className='pricing__section'>
      <div className="container">
        <h1 className='heading'>Pricing</h1>
        <div className="price__content">
          <div className='paragraph'>
            <p>Free forever. Upgrade for unlimited tasks,<br /> better security, and exclusive features.</p>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card free">
              <h2>Free</h2>
              <p>$0/month</p>
              <button>Get Started for Free</button>
              <div className="features">
                <ul>
                  <li><h6>upto 5 project members</h6></li>
                  <li><h6>unlimited tasks and projects</h6></li>
                  <li><h6>2GB storgagr</h6></li>
                  <li><h6>Integration</h6></li>
                  <li><h6>Basic support</h6></li>
                </ul>
              </div>
            </div>

            <div className="pricing-card premium">
              <h2>Premium</h2>
              <p>$9/month</p>
              <button>Sign Up Now</button>
              <div className="features">
                
                <ul>
                  <li> <h6>upto 50 project members</h6></li>
                  <li><h6>unlimited tasks and projects</h6></li>
                  <li><h6>50GB storage</h6></li>
                  <li><h6>Integration</h6></li>
                 <li><h6>Basic support</h6></li>
                  <li><h6>Advanced Analytics</h6></li>
                  <li><h6>Basic support</h6></li>
                </ul>
              </div>
            </div>

            <div className="pricing-card premium white-bg">
              <h2>Pro</h2>
              <p>$19/month</p>
              <button>Sign Up Now</button>
              <div className="features">
               
                <ul>
                  <li><h6>Unlimited project members</h6></li>
                  <li><h6>Unlimited tasks and projects</h6></li>
                  <li><h6>200GB storage</h6></li>
                  <li><h6>Integration</h6></li>
                  <li><h6>Custom fields</h6></li>
                  <li><h6>Export capabilities</h6></li>
                  <li><h6>API access</h6></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing;
