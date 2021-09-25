import React, {Component} from 'react';
import firebase from 'firebase';
import './Auth';
import './Form.css';
import img1 from './images/download.jpg';
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',lname: '',onames: '',email: '',sci: '',
      sst: '',mtc: '',eng: '',sex: 'Sex'
    };
    this.handleChnage = this.handleChnage.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  handleChnage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  Submit = (event) => {
    event.preventDefault();
    const {fname, lname, onames, email, sci, sst, mtc, eng, sex} = this.state;
    this.setState({
      fname: '',lname: '',onames: '',email: '',sci: '',
      sst: '',mtc: '',eng: '',sex: 'Sex'
    });
    alert('successfully submitted');
    const stid = Math.round(10000 * Math.random());
    const agg = parseInt(sci) + parseInt(sst) + parseInt(mtc) + parseInt(eng);
    firebase.firestore().collection('applicants').add({
      firstname: fname,
      lastname: lname,
      othernames: onames,
      email: email,
      science: sci,
      sst: sst,
      english: eng,
      mathematics: mtc,
      sex: sex,
      aggregats: agg,
      studentID: stid
    });
  }
  render(){
    return (
      <center>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <h1>Welcome to Eagle Mixed school</h1>
          <div>
            <img src={img1} alt="" width="200px" height="200px"/>
          </div>
        </div>
          <form onSubmit={this.Submit}>
            <div style={{display: 'flex-1', flexDirection: 'row', padding:'5px', margin: '10px'}}>
              <input type="text" placeholder="First name"
                onChange={this.handleChnage} value={this.state.fname} name="fname" className="input-1"
              />
              <input type="text" placeholder="Last name"
                onChange={this.handleChnage} value={this.state.lname} name="lname" className="input-1"
              />
            </div>
            <div style={{display: 'flex-1', flexDirection: 'row', padding:'5px', margin: '10px'}}>
              <input type="text" placeholder="Other names" className="input-1"
                onChange={this.handleChnage} value={this.state.onames} name="onames"
              />
              <select value={this.state.sex} onChange={this.handleChnage} name="sex" className="input-1" style={{outline: 'none'}}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <input type="email" value={this.state.email} onChange={this.handleChnage}
              name="email" placeholder="Enter email" className="email-input"
            />
            <div>
              <p1>Enter your grades</p1>
              <div  style={{display: 'flex-1', flexDirection: 'row', padding:'5px', margin: '10px'}}>
                <input type="number" value={this.state.sci} onChange={this.handleChnage}
                  name="sci" placeholder="Science" className="input-1" max="9" min="1"
                />
                <input type="number" value={this.state.sst} onChange={this.handleChnage}
                  name="sst" placeholder="SST" className="input-1" max="9" min="1"
                />
              </div>
              <div style={{display: 'flex-1', flexDirection: 'row', padding:'5px', margin: '10px'}}>
                <input type="number" value={this.state.mtc} onChange={this.handleChnage}
                  name="mtc" placeholder="Mathematics" className="input-1" max="9" min="1"
                />
                <input type="number" value={this.state.eng} onChange={this.handleChnage}
                name="eng" placeholder="English" className="input-1" max="9" min="1"
                />
              </div>
            </div>
            <div>
              <input type="submit" value="submit" disabled={!this.state.lname || !this.state.fname || !this.state.email || !this.state.sci || !this.state.sst || !this.state.mtc || !this.state.eng}
                className="button-input"
              />
            </div>
          </form>
          <hr style={{width: '50%', color: '#000'}}></hr>
          <div>
            <p1>Email is required because we will use the submitted email to notify you if you are adimitted or not</p1>
            <h3>Thank you for choosing Eagle schools.</h3>
          </div>
        </div>
      </center>
    );
  }
}
