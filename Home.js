import React, { Component } from 'react';
import './All.css';
import Footer from './Footer.js'
import bossimg from '../img/boss.jpg'
import logokmitl from '../img/logo_kmitl.jpg'
import worldacademic from '../img/worldacademic.png';
import tcaslogo from '../img/tcaslogo.png';
import kmitllogo from '../img/kmitllogo.jpg';
import { FcStatistics , FcAbout , FcCalculator, FcCheckmark} from "react-icons/fc";
import science from '../img/science.jpg';
import engineer from '../img/engineer.jpg';
import arch from '../img/arch.jpeg';
import it from '../img/it.jpg';

class Home extends Component {
    constructor(props){
        super(props)
        this.state= {
            show1 : null ,
        }
        this.toggleDiv1 = this.toggleDiv1.bind(this) ;
        this.onChange = this.onChange.bind(this) ;
    }
    toggleDiv1(e)  {
        this.setState(prevState1 => ({
          isShow1:!prevState1.isShow1 
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

                <div>
                    <meta charSet="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>KMITL ADMISSION</title>
                    <meta content name="description" />
                    <meta content name="keywords" />
                    {/* Favicons */}
                    <link href="assets/img/favicon.png" rel="icon" />
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
                    {/* Google Fonts */}
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
                    {/* Vendor CSS Files */}
                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
                    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
                    <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
                    <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                    {/* Template Main CSS File */}
                    <link href="assets/css/style.css" rel="stylesheet" />
                    {/* =======================================================
  * Template Name: Bethany - v2.2.0
  * Template URL: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
                    {/* ======= Header ======= */}
                    <header id="header" className="fixed-top d-flex align-items-center">
                        <div className="container">
                            <div className="header-container d-flex align-items-center">
                                <div className="logo mr-auto">
                                    <h1 className="text-light"><a href="index.html"><span>KMITL ADMISSION 2021</span></a></h1>
                                    {/* Uncomment below if you prefer to use an image logo */}
                                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                                </div>
                                <nav className="nav-menu d-none d-lg-block">
                                    <ul>
                                        <li className="active"><a href="#header">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#services">information</a></li>
                                        <li><a href="/RankDe">Ranking</a></li>
                                        
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
                                        <li><a href="#contact">Contact</a></li>
                                        
                                    </ul>
                                </nav>{/* .nav-menu */}
                            </div>{/* End Header Container */}
                        </div>
                    </header>{/* End Header */}
                    {/* ======= Hero Section ======= */}

                    
                    <section id="hero" className="hero-container d-flex align-items-center">
                        <div className="hero-container  mt-5" data-aos="fade-in" data-aos-delay={200}>
                            
                            <h1>KMITL ADMISSION SITE 2021</h1>
                            <h2 className="container">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เปิดเผยจำนวนรับ TCAS63 ออกมาแล้ว 
                            โดยมีจำนวนรับรวมทั้งหมด 6,604 ที่นั่ง โดยมีการเปิดรับในรูปแบบที่ 1 มากที่สุด ถึง 2,735 ที่นั่ง หรือคิดเป็น 41% ของจำนวนรับทั้งหมด
                            
                            </h2>
                            <a href="" className="btn-get-started scrollto">Get Started</a>
                            </div>
                    </section>
                    
                    <main id="main">
                        {/* ======= Clients Section ======= */}
                        <section id="clients" className="clients">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay={100}>
                                        <img src={tcaslogo} className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay={200}>
                                        <img src={kmitllogo} className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay={300}>
                                        <img src={tcaslogo} className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay={400}>
                                        <img src={kmitllogo} className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay={500}>
                                        <img src={tcaslogo} className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay={600}>
                                        <img src={kmitllogo} className="img-fluid" alt />
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Clients Section */}
                        {/* ======= About Section ======= */}
                        <section id="about" className="about">
                            <div className="container">
                                <div className="row content">
                                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
                                        <h2>พระจอมเกล้าลาดกระบัง</h2>
                                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
                                        <p>
                                        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เป็นมหาวิทยาลัยในกำกับของรัฐ ตามพระราชบัญญัติสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. ๒๕๕๑[2] โดยมีวัตถุประสงค์ เพื่อให้การศึกษา การค้นคว้าวิจัย และการพัฒนาด้านวิทยาศาสตร์ และ เทคโนโลยีเพื่อความก้าวหน้า ทางอุตสาหกรรม และ เศรษฐกิจของประเทศเดิมที สถาบันเทคโนโลยีพระจอมเกล้า ตั้งขึ้นตามพระราชบัญญัติ สถาบันเทคโนโลยีพระจอมเกล้า พ.ศ. 2514 ด้วยการรวม วิทยาลัยโทรคมนาคมนนทบุรี วิทยาลัยเทคนิคพระนครเหนือ และวิทยาลัยเทคนิคธนบุรี เข้าด้วยกัน โดยแต่ละแห่งมีฐานะเป็นวิทยาเขต วิทยาลัยโทรคมนาคมนนทบุรี เป็นสถาบันเทคโนโลยีพระจอมเกล้าวิทยาเขตนนทบุรี และในปีเดียวกันนั้นได้ย้ายไปที่ อำเภอลาดกระบัง เป็นวิทยาเขตเจ้าคุณทหารลาดกระบัง

สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ประกอบด้วยพระนาม "พระจอมเกล้า" 
            </p>
                                        
                                    
                                    </div>
                                </div>
                            </div>
                        </section>{/* End About Section */}
                        {/* ======= Counts Section ======= */}
                        <section id="counts" className="counts">
                            <div className="container">
                                <div className="row counters">
                                    <div className="col-lg-3 col-6 text-center">
                                        <span data-toggle="counter-up">232</span>
                                        <p>จำนวนนักศึกษาในประเทศ</p>
                                    </div>
                                    <div className="col-lg-3 col-6 text-center">
                                        <span data-toggle="counter-up">521</span>
                                        <p>จำนวนนักศึกษาต่างชาติ</p>
                                    </div>
                                    <div className="col-lg-3 col-6 text-center">
                                        <span data-toggle="counter-up">1,463</span>
                                        <p>นักศึกษาทั้งหมด</p>
                                    </div>
                                    <div className="col-lg-3 col-6 text-center">
                                        <span data-toggle="counter-up">15</span>
                                        <p>จำนวนพนักงาน</p>
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Counts Section */}
                        {/* ======= Why Us Section ======= */}
                        <section id="why-us" className="why-us">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
                                        <div className="content">
                                            <h3>Official KMITL Admisson site</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
                                            <div className="text-center">
                                                <a href="https://www1.reg.kmitl.ac.th/TCAS/index.php" className="more-btn">Visit Site <i className="bx bx-chevron-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 d-flex align-items-stretch">
                                        <div className="icon-boxes d-flex flex-column justify-content-center">
                                            <div className="row">
                                                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                                                    <div className="icon-box mt-4 mt-xl-0">
                                                        <i className="bx bx-receipt" />
                                                        <img src={bossimg} className="img-fluid" alt width="300" height="200"/>
                                                        <h4 className="mt-3">อธิการบดี</h4>
                                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                                                    <div className="icon-box mt-4 mt-xl-0">
                                                        <i className="bx bx-cube-alt" />
                                                        <img src={worldacademic} className="img-fluid mb-3" alt width="300" height={100}/>
                                                        <h4>อันดับมหาวิทยาลัยของโลก</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                                                    <div className="icon-box mt-4 mt-xl-0">
                                                        <i className="bx bx-images" />
                                                        <img src={logokmitl} className="img-fluid mb-3" alt width="300" height={100}/>
                                                        <h4>อันดับมหาวิทยาลัยในไทย</h4>
                                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* End .content*/}
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Why Us Section */}
                        {/* ======= Cta Section ======= */}
                        <section id="cta" className="cta">
                            <div className="container">
                                <div className="text-center" data-aos="zoom-in">
                                    <h3>KMTIL WEBSITE </h3>
                                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <a className="cta-btn" href="https://www.kmitl.ac.th/en">Visit Site</a>
                                </div>
                            </div>
                        </section>{/* End Cta Section */}
                        {/* ======= Services Section ======= */}
                        <section id="services" className="services section-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="section-title" data-aos="fade-right">
                                            <h2>Features</h2>
                                            <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="row"> 
                                            <div className="col-md-6 d-flex align-items-stretch">
                                                <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                                                    <div className="icon"><FcCalculator></FcCalculator> <i className="bx bxl-dribbble" /></div>
                                                    <h4><a href>คำนวณคะแนน Admission </a></h4>
                                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                                <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                                                    <div className="icon"><FcAbout height={100} width={100}></FcAbout><i className="bx bx-file" /></div>
                                                    <h4><a href>คาดการณ์โอกาสติด</a></h4>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex align-items-stretch mt-4">
                                                <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                                                    <div className="icon"><FcStatistics></FcStatistics><i className="bx bx-tachometer" /></div>
                                                    <h4><a href>สถิติคะแนน Admission</a></h4>
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex align-items-stretch mt-4">
                                                <div className="icon-box" data-aos="zoom-in" data-aos-delay={400}>
                                                    <div className="icon"><FcCheckmark></FcCheckmark><i className="bx bx-world" /></div>
                                                    <h4><a href>ข้อมูลภาควิชา</a></h4>
                                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Services Section */}
                        
                        {/* ======= Testimonials Section ======= */}
                        <section id="testimonials" className="testimonials section-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="section-title" data-aos="fade-right">
                                            <h2>Factories</h2>
                                            <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="testimonials-carousel">



                                            <div className="testimonial-item">
                                            <h2>คณะวิทยาศาสตร์</h2>
                                                <h4>Factory of Science</h4>
                                                <img src={science} className="mg-fluid mt-3 mb-3" alt height="200" />
                                                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                                <a href="/SciDePage" className="cta-btn mb-3">เลือกคณะนี้ <i className="bx bx-chevron-right" /></a>
                                            </div>


                                            <div className="testimonial-item">
                                            <h2>คณะวิศวกรรมศาสตร์</h2>
                                                <h4>Factory of Engineer</h4>
                                                <img src={engineer} className="mg-fluid mt-3 mb-3" alt height="200" />
                                                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                                <a href="/EnDePage" className="cta-btn mb-3">เลือกคณะนี้ <i className="bx bx-chevron-right" /></a>
                                            </div>


                                            <div className="testimonial-item">
                                            <h2>คณะสถาปัตยกรรมศาสตร์</h2>
                                                <h4>Factory of Architecture</h4>
                                                <img src={arch} className="mg-fluid mt-3 mb-3" alt height="200" />
                                                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                                <a href="/SciDePage" className="cta-btn mb-3">เลือกคณะนี้ <i className="bx bx-chevron-right" /></a>
                                            </div>


                                            <div className="testimonial-item">
                                            <h2>คณะเทคโนโลยีสารสนเทศ</h2>
                                                <h4>Factory of InformationTechnology</h4>
                                                <img src={it} className="mg-fluid mt-3 mb-3" alt height="200" />
                                                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                                <a href="/SciDePage" className="cta-btn mb-3">เลือกคณะนี้ <i className="bx bx-chevron-right" /></a>
                                            </div>
                                            
                                            
                                            {this.state.isShow1 ?
                                                <div className="Home-infodiv mb-5">

                                                    <div className="testimonial-item">
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                                <img src="{../img/science.jpg}" className="testimonial-img" alt />
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                            </div>



                                            <div className="testimonial-item">
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                            </div>
                                            <div className="testimonial-item">
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                            </div>
                                            <div className="testimonial-item">
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                            </div>
                                            <div className="testimonial-item">
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                            </div>
                                                    
                                                </div> : null}
                                                <div className="text-center">
                                                <button onClick={this.toggleDiv1} className="cta-btn"> Show More <i className="bx bx-chevron-right" /></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Testimonials Section */}
                        
                        {/* ======= Contact Section ======= */}
                        <section id="contact" className="contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4" data-aos="fade-right">
                                        <div className="section-title">
                                            <h2>Contact</h2>
                                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay={100}>
                                        <iframe style={{ border: 0, width: '100%', height: 270 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.841236652481!2d100.77295476539852!3d13.728060101540427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1607766654392!5m2!1sth!2sth" frameBorder={0} allowFullScreen />
                                        <div className="info mt-4">
                                            <i className="icofont-google-map" />
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 mt-4">
                                                <div className="info">
                                                    <i className="icofont-envelope" />
                                                    <h4>Email:</h4>
                                                    <p>info@example.com</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="info w-100 mt-4">
                                                    <i className="icofont-phone" />
                                                    <h4>Call:</h4>
                                                    <p>+1 5589 55488 55s</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Contact Section */}
                    </main>{/* End #main */}
                    
                    <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
                    {/* Vendor JS Files */}
                    {/* Template Main JS File */}
                </div>

                <Footer />
                





                
            </div>
        );
    }
}

export default Home;