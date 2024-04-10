import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/Manoj P N.jpg"
import user_2 from "../../assets/Me.jpeg"
import user_3 from "../../assets/Nandan.jpg"
import user_4 from "../../assets/Preetham.jpg"

const Testimonials = () => {
  
    const slider = useRef();
    let tx = 0;

    
    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }else {
            tx = 0;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackword = () => {
        if(tx < 0){
            tx += 25;
        }else {
            tx = -75;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  
    return (
    <div id='contributers' className='testimonials'  >
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackword} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Manoj P N</h3>
                            <span><b>4NI20CS049</b></span>
                            <br />
                            <span>The National Institute of Engineering, Mysore</span>
                        </div>
                    </div>
                    <p>A master at managing our Power BI dashboard, his organizational skills and data expertise kept our project on track and insightful.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Manoj S H</h3>
                            <span><b>4NI20CS050</b></span>
                            <br />
                            <span>The National Institute of Engineering, Mysore</span>
                        </div>
                    </div>
                    <p>The driving force behind our website's development, his expertise and commitment brought our vision to life online.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Nandan Kumar S</h3>
                            <span><b>4NI20CS406</b></span>
                            <br />
                            <span>The National Institute of Engineering, Mysore</span>
                        </div>
                    </div>
                    <p>A key collaborator in crafting our project report, his insightful analysis and dedication ensured its thoroughness and clarity.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Preetham B N</h3>
                            <span><b>4NI20CS070</b></span>
                            <br />
                            <span>The National Institute of Engineering, Mysore</span>
                        </div>
                    </div>
                    <p>Instrumental in the creation of our compelling presentation, his creativity and attention to detail captivated our audience.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
