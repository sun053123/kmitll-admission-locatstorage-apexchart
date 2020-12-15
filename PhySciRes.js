import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import physicsci from '../img/physicsci.jpg';
import ApexChart from './ApexChart';
import './SciDec.css';


class PhySciRes extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            series: [{ name: "", data: "" }],
            gpax: "",
            onetthai: "",
            onetsoci: "",
            oneteng: "",
            onetsci: "",
            onetmath: "",
            gat: "",
            pat1: "",
            pat2: "",
            userpoint: "",
            physcicount: "0" ,
            lower2556 : "13156" ,
            lower2557 : "13213" ,
            lower2558 : "13443" ,
            lower2559 : "12960" ,
            lower2560 : "10079" ,
            lower2561 : "9981" ,
            lower2562 : "5979" ,
            percentage : "" ,
            percentageC : ""
        };

        this.onChange = this.onChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
        this.failure1 = this.failure1.bind(this);
        this.failure2 = this.failure2.bind(this);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.calSum = this.calSum.bind(this) ;
        this.checkPercentage = this.checkPercentage.bind(this);
    }

    calSum() {
        const { lower2559 , lower2560 , lower2561 ,lower2562 ,userpoint } = this.state
        this.setState({
            percentage : ((parseFloat(userpoint)*3) / ((parseFloat(lower2559) + (2 * (parseFloat(lower2560) + parseFloat(lower2561))) + parseFloat(lower2562)) / 2)  ) * 100 ,
        })
        this.checkPercentage()
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    failure1(e) {
        alert("ไม่สามารถใส่คะแนนต่ำกว่า0ได้")
    }

    failure2(e) {
        alert("แน่ใจนะว่าได้0 ถ้าไม่ได้สอบก็ไม่ต้องใส่")
    }

    SubmitForm(e) {
        e.preventDefault()
        const { gpax, oneteng, onetmath, onetsci, onetsoci, onetthai, gat, pat1, pat2, datacv , userpoint , lower2559 , lower2560 ,lower2561 , lower2562} = this.state
        if (parseInt(gpax) < "0" || parseInt(oneteng) < "0" || parseInt(onetmath) < "0" || parseInt(onetsci) < "0" || parseInt(onetsoci) < "0" || parseInt(onetthai) < "0" || parseInt(gat) < "0" || parseInt(pat1) < "0" || parseInt(pat2) < "0") {
            this.failure1()
        }
        else if (gpax === "0" || oneteng === "0" || onetmath === "0" || onetsci === "0" || onetsoci === "0" || onetthai === "0" || gat === "0" || pat1 === "0" || pat2 === "0") {
            this.failure2()
        }
        else if (gpax === "" || oneteng === "" || onetmath === "" || onetsci === "" || onetsoci === "" || onetthai === "" || gat === "" || pat1 === "" || pat2 === ""){
            alert("ต้องใส่ข้อมูลให้ครบทุกช่อง")
        }
        else {
            this.setState({
                userpoint: (parseFloat(gpax)*1500) + ((parseFloat(oneteng)+parseFloat(onetmath)+parseFloat(onetsci) + parseFloat(onetsoci) + parseFloat(onetthai)) * 18) + (parseFloat(gat) * 10) + (parseFloat(pat1) * 10) + (parseFloat(pat2) * 30),
            })
            this.handleAddOne()
        }
    }

    componentWillMount(){
        this.getChartData()
    }
    
    componentDidMount() {
        const stringCount = localStorage.getItem("physcicount" );
        const physcicount  = parseInt(stringCount, 10);
  
        if (!isNaN(physcicount) ) {
          this.setState(() => ({ physcicount }));
        }
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.physcicount !== this.state.physcicount) {
          localStorage.setItem("physcicount", this.state.physcicount);
        }
       
        if (prevState.userpoint !== this.state.userpoint){
            this.calSum()
            this.setState({
                series: [
                    {
                        name: "Highest Point",
                        data: [14970	,15834 ,	16682 ,	14994	 ,15499	, 14631, 	15515]
                    },
                    {
                        name: "Lowest Point ",
                        data: [13156 ,	13213 ,	13443	 ,12960 ,	10079	 ,9981 ,	5979]
                    },
                    {
                        name: "My Point",
                        data: [(this.state.userpoint), (this.state.userpoint), (this.state.userpoint), (this.state.userpoint), (this.state.userpoint), (this.state.userpoint), (this.state.userpoint)]
                    }
                ],
            }) 
        }
        if (prevState.percentage !== this.state.percentage){
            this.checkPercentage()
        }
      }

    checkPercentage(){
        if (this.state.percentage > 120){
            this.setState({
                percentageC: "โอกาสสูง มีโอกาสติด > 90%"
            })
        }
        else if (this.state.percentage > 114 && this.state.percentage < 120 ){
            this.setState({
                percentageC: "โอกาสสูง มีโอกาสติด 90%"
            })
        }
        else if (this.state.percentage > 108 && this.state.percentage < 115 ){
            this.setState({
                percentageC: "โอกาสสูง มีโอกาสติด 80%"
            })
        }
        else if (this.state.percentage > 104 && this.state.percentage < 109 ){
            this.setState({
                percentageC: "ลุ้นได้ มีโอกาสติด 70%"
            })
        }
        else if (this.state.percentage > 100 && this.state.percentage <105 ){
            this.setState({
                percentageC: "ลุ้นได้ มีโอกาสติด 60%"
            })
        }
        else if (this.state.percentage >96 && this.state.percentage <101 ){
            this.setState({
                percentageC: "50/50 มีโอกาสติด 50%"
            })
        }
        else if (this.state.percentage >92 && this.state.percentage <97 ){
            this.setState({
                percentageC: "เสี่ยง มีโอกาสติด 40%"
            })
        }
        else if (this.state.percentage >88 && this.state.percentage <93 ){
            this.setState({
                percentageC: "เสี่ยง มีโอกาสติด 30%"
            })
        }
        else if (this.state.percentage >84 && this.state.percentage <89 ){
            this.setState({
                percentageC: "เสี่ยง มีโอกาสติด 20%"
            })
        }
        else if (this.state.percentage >80 && this.state.percentage <85 ){
            this.setState({
                percentageC: "ปาฏิหาริย์ มีโอกาสติด 10%"
            })
        }
        else{
            this.setState({
               percentageC: "ปาฏิหาริย์ มีโอกาสติด < 10%"
                
            })
        }
    }
    
    getChartData() {
        const { userpoint } = this.state
        this.setState({
            series: [
                {
                    name: "Highest Point",
                    data: [16531, 16115, 17152, 16096, 16479, 16457, 16861]
                },
                {
                    name: "Lowest Point ",
                    data: [14464, 14271, 15183, 13701, 13850, 13503, 15044]
                },
            ],
        })
    }
    handleAddOne() {
        this.setState(prevState => {
          return {
            physcicount: prevState.physcicount +1
          };
        }
        );
      }
    render() {
        return (<React.Fragment>
            <div className="app">
            <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container">
                        <div className="header-container d-flex align-items-center">
                            <div className="logo mr-auto">
                                <h1 className="text-light"><a href="#header"><span>Physic Science</span></a></h1>
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
                                    <li className="d"><a href="/">Website</a></li>
                                </ul>
                            </nav>{/* .nav-menu */}
                        </div>{/* End Header Container */}
                    </div>
                </header>{/* End Header */}
                <section id="sci" className="sci-py">
                    <div className="container">
                        <div className="text-center" data-aos="zoom-in">
                            <h3 className="mt-5">Department of Physic Science</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a className="cta-btn" href="#">Call To Action</a>
                        </div>
                    </div>
                </section>{/* End Cta Section */}

                    <div className="testimonials section-bg ">
                        {/* ======= Comsci Section ======= */}
                        <div className="testimonial-item1 container mt-5">
                            
                                <br />
                                <br />
                            <h3 >สาขาฟิสิกส์ </h3>
                            <h4>Department of Physic Science</h4>
                            <h4>จำนวนผู้เข้าชม : {this.state.physcicount}</h4>
                            
                            <p className="mt-3">
                                <i className="bx bxs-quote-alt-left quote-icon-left " />
                            
                                         <i className="bx bxs-quote-alt-right quote-icon-right" />
                            </p>
                            <form onSubmit={this.SubmitForm}  className="container">
                                <div className="form-row">
                                    <div className="col-md-12 form-group">
                                        <h6 className="col-md-1">GPAX</h6>
                                        <input type="number" step={0.1} min={0.0} max={4.0} minpattern="[0.0-4.0]*." name="gpax" className="form-control" placeholder="GPAX"
                                            value={this.state.gpax} onChange={this.onChange} max={4.0} min={0.0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <h6 className="col-md-4">O-NET ภาษาไทย</h6>
                                        <input type="number" name="onetthai" className="form-control" placeholder="O-NET ภาษาไทย"
                                            value={this.state.onetthai} onChange={this.onChange} max={100} min={0} defaultValue={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <h6 className="col-md-4">O-NET สังคมศึกษา</h6>
                                        <input type="number" name="onetsoci" className="form-control" placeholder="O-NET สังคมศึกษา"
                                            value={this.state.onetsoci} onChange={this.onChange} max={100} min={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <h6 className="col-md-4">O-NET ภาษาอังกฤษ</h6>
                                        <input type="number" name="oneteng" className="form-control" placeholder="O-NET ภาษาอังกฤษ"
                                            value={this.state.oneteng} onChange={this.onChange} max={100} min={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <h6 className="col-md-4">O-NET คณิตศาสตร์</h6>
                                        <input type="number" name="onetmath" className="form-control" placeholder="O-NET คณิตศาสตร์"
                                            value={this.state.onetmath} onChange={this.onChange} max={100} min={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <h6 className="col-md-2">O-NET วิทยาศาสตร์</h6>
                                        <input type="number" name="onetsci" className="form-control" placeholder="O-NET วิทยาศาสตร์"
                                            value={this.state.onetsci} onChange={this.onChange} max={100} min={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <h6 className="col-md-1">GAT</h6>
                                        <input type="number" name="gat" className="form-control" placeholder="GAT"
                                            value={this.state.gat} onChange={this.onChange} max={300} min={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <h6 className="col-md-2">PAT1</h6>
                                        <input type="number" name="pat1" className="form-control" placeholder="PAT1"
                                            value={this.state.pat1} onChange={this.onChange} max={300} min={0} />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <h6 className="col-md-2">PAT2</h6>
                                        <input type="number" name="pat2" className="form-control" placeholder="PAT2"
                                            value={this.state.pat2} onChange={this.onChange} max={300} min={0} />
                                        <div className="validate" />
                                    </div>
                                </div>
                                <button className="cta-btny primary-btn" type="submit" >susbmit</button>
                                <div className="mb-3">
                                </div>

                            </form>
                            </div>  
                            
                            
                        
                        {/* ======= Counts Section ======= */}
                    <section id="counts" className="counts container">
                            <div className="container">
                                <div className="row counters">
                                    
                                    <div className="col-lg-6 col-6 text-center">
                                        <span data-toggle="counter-up">{this.state.percentageC} {/*{this.state.percentage}*/}</span>
                                        <h4>ระดับคาดการณ์โอกาสติด</h4>
                                    </div>
                                    <div className="col-lg-6 col-6 text-center">
                                        <span data-toggle="counter-up">{this.state.userpoint}</span>
                                        <h4>คะแนนของคุณ</h4>
                                    </div>
                                </div>
                            </div>
                        </section>{/* End Counts Section */}
                        <section className="chart container">
                        <h3 className="container mt-5">คะแนน Admission ตั้งแต่ปี พ.ศ. 2556 - 2562  </h3>
                        <ApexChart series={this.state.series}  />
                        </section>
                        </div>
                        
                    </div>
              

            </React.Fragment>);
    }
}

//const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(ApexChart), domContainer);


export default PhySciRes;