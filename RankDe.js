import React, { Component } from 'react';
import Rank from './Rank.js'
import './SciDec.css';
import logokmitl from '../img/logo_kmitl.jpg'
import Footer from './Footer.js';

class RankDe extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
            data: [{ name: "", data: "" }],
            comscicount : "",
            biocount: "",
            mathcount: "" ,
            direction: {
                views: 'asc' ,
            },
            record : [ ],
        }
        
    }
    sortBy(key){
        this.setState({
            record: [
            {name:"Computer science",departmentof:"Science" , views: localStorage.getItem("comscicount") },
            {name:"Mathemetic",departmentof:"Science" , views: localStorage.getItem("mathcount")},
            {name:"Physic",departmentof:"Science" , views: localStorage.getItem("physcicount")},
            {name:"Computer Engineer",departmentof:"Engineer" , views: localStorage.getItem("comencount")},
            {name:"Civil Engineer",departmentof:"Engineer" , views: localStorage.getItem("civencount")},
            {name:"Chemical Engineer",departmentof:"Engineer" , views: localStorage.getItem("chemencount")},
            ].sort( (a,b) => (
                this.state.direction[key] =
                parseFloat(b[key]) - parseFloat(a[key])
                )),
                direction: {
                    [key]: this.state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
                }
        })
    }
    componentWillMount(){
        this.sortBy('views')
    }

    render() {
        return (
            <div className="rankpage">
                <div className="rankpage-subclass container">
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container">
                        <div className="header-container d-flex align-items-center">
                            <div className="logo mr-auto">
                                <h1 className="text-light"><a href="#header"><span>Rank</span></a></h1>
                                {/* Uncomment below if you prefer to use an image logo */}
                                {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                            </div>
                            <nav className="nav-menu d-none d-lg-block">
                                <ul>
                                    <li className="d"><a href="/">Home</a></li>
                            
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
            
            <div className="container mt-5">
                <section id="about" className="about">
                            <div className="container">
                                <div className="row content">
                                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
                                        <h2>จำนวนผู้เข้าใช้งานการคำนวณในแต่ละสาขา</h2>
                                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
                                        <img src={logokmitl} width="400"></img>
                                    </div>
                                </div>
                            </div>
                            </section>
                <div className="recorder mb-5">
							<Rank 
                                record={this.state.record}
                                sortBy = {this.sortBy}
							/>
						

				</div>
                
                
                
            </div>
            </div>
            <Footer />
            </div>
        );
    }
}

export default RankDe;