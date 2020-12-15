import React, { Component } from 'react';
import './SciDec.css';
import {
    BrowserRouter as Router,
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class EnDePage extends Component { 
    constructor(props){
        super(props)
        this.state= {
            show1 : null ,
            show2 : null ,
            show3 : null ,
            show4 : null ,
            show5 : null ,
            show6 : null ,
            enCEview : localStorage.getItem("comencount") ,
            enCVview : localStorage.getItem("civencount") ,
            enCMview : localStorage.getItem("chemencount")
        }
        this.toggleDiv1 = this.toggleDiv1.bind(this) ;
        this.toggleDiv2 = this.toggleDiv2.bind(this) ;
        this.toggleDiv3 = this.toggleDiv3.bind(this) ;
        this.toggleDiv4 = this.toggleDiv4.bind(this) ;
        this.toggleDiv5 = this.toggleDiv5.bind(this) ;
        this.toggleDiv6 = this.toggleDiv6.bind(this) ;
    }
    toggleDiv1(e)  {
        this.setState(prevState1 => ({
          isShow1:!prevState1.isShow1 
        })) 
      }
    toggleDiv2(e)  {
        this.setState(prevState2 => ({
          isShow2:!prevState2.isShow2
        })) 
      } 
    toggleDiv3(e)  {
        this.setState(prevState3 => ({
          isShow3:!prevState3.isShow3
        })) 
      } 
    toggleDiv4(e)  {
        this.setState(prevState4 => ({
          isShow4:!prevState4.isShow4
        })) 
      } 
    toggleDiv5(e)  {
        this.setState(prevState5 => ({
          isShow5:!prevState5.isShow5 
        })) 
      } 
    toggleDiv6(e)  {
        this.setState(prevState6 => ({
          isShow6:!prevState6.isShow6 
        })) 
      } 
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
           
            <div>
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container">
                        <div className="header-container d-flex align-items-center">
                            <div className="logo mr-auto">
                                <h1 className="text-light"><a href="#header"><span>Factory of Engineer </span></a></h1>
                                {/* Uncomment below if you prefer to use an image logo */}
                                {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                            </div>
                            <nav className="nav-menu d-none d-lg-block">
                                <ul>
                                    <li className="d"><a href="/">Home</a></li>
                                    <li className="d"><a href="/">Website</a></li>
                                    <li className="drop-down"><a href>Factories</a>
                                            <ul>
                                                
                                                <li className="drop-down"><a href="/SciDePage">Science</a>
                                                    <ul>
                                                        <li><a href="/ComSciRes">Computer Science</a></li>
                                                        <li><a href="/MathSciRes">Mathmetic</a></li>
                                                        <li><a href="/PhySciRes">Physic</a></li>
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/EnDePage" >Engineer</a>
                                                    <ul>
                                                        <li><a href="/ComEnRes">Computer Engineer</a></li>
                                                        <li><a href="/ChemEnRes">Chemestic Engineer</a></li>
                                                        <li><a href="/CivEnRes">Civil Engineer</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Architecture</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Agiculture</a></li>
                                            </ul>
                                        </li>
                                </ul>
                            </nav>{/* .nav-menu */}
                        </div>{/* End Header Container */}
                    </div>
                </header>{/* End Header */}
                <section id="sci" className="en-home">
                    <div className="container">
                        <div className="text-center" data-aos="zoom-in">
                            <h3 className="mt-5">Factory of Engineer</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a className="cta-btn" href="#">Call To Action</a>
                        </div>
                    </div>
                </section>{/* End Cta Section */}
                {/* ======= Testimonials Section ======= */}
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="section-title" data-aos="fade-right">
                                    
                                    <h2>คณะวิศวกรรมศาสตร์ </h2>
                                    
                                    <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                </div>
                            </div>
                            <div className="col-lg-8" data-aos="fade-up" data-aos-delay={100}>
                                <div className="owl-carousel testimonials-carousel">
                                    {/* ======= Comsci Section ======= */}
                                    <div className="testimonial-item">
                                        <h2>สาขาวิศวกรรมคอมพิวเตอร์</h2>
                                        <h3>Department of Computer Engineer</h3>
                                        <   div class="container">
                                            <h4>จำนวนผู้เข้าชม : {this.state.sciCSview}</h4>
                
                                         </div> 

                                        <img  className="sci-factor container mt-2" alt />
                                        <p className="mt-3">
                                            <i className="bx bxs-quote-alt-left quote-icon-left " />
                                         Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                         <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        {this.state.isShow1 ?
                                        <form onSubmit={this.SubmitForm} >
                                            
                                        </form> :null}
                                        
                                        <button className="cta-btn mb-3" ><a href="/ComSciRes">เลือกสาขานี้</a></button>
                                    </div>


                                    <div className="testimonial-item">
                                        <h2>สาขาคณิตศาสตร์</h2>
                                        <h3>Department of Mathematics science</h3>
                                        <   div class="container">
                                            <h4>จำนวนผู้เข้าชม : {this.state.sciMTHview}</h4>
                
                                         </div> 

                                        <img  className="sci-factor container mt-2" alt />
                                        <p className="mt-3">
                                            <i className="bx bxs-quote-alt-left quote-icon-left " />
                                         Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                         <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        {this.state.isShow1 ?
                                        <form onSubmit={this.SubmitForm} >
                                            
                                        </form> :null}
                                        
                                        <button className="cta-btn mb-3" ><a href="/MathSciRes">เลือกสาขานี้</a></button>
                                    </div>


                                    <div className="testimonial-item">
                                        <h2>สาขาฟิสิกส์</h2>
                                        <h3>Department of Physic science</h3>
                                        <   div class="container">
                                            <h4>จำนวนผู้เข้าชม : {this.state.sciPYview}</h4>
                
                                         </div> 

                                        <img  className="sci-factor container mt-2" alt />
                                        <p className="mt-3">
                                            <i className="bx bxs-quote-alt-left quote-icon-left " />
                                         Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                         <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        {this.state.isShow1 ?
                                        <form onSubmit={this.SubmitForm} >
                                            
                                        </form> :null}
                                        
                                        <button className="cta-btn mb-3" ><a href="/PhySciRes">เลือกสาขานี้</a></button>
                                    </div>


                                    
                                    





                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Testimonials Section */}
                


                {/* get viewer */}

            </div>
           
        );
    }
}



export default EnDePage;