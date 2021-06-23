import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import ReactTable from "react-table";
//deploye

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}
function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default class Dashboard extends React.Component {


  state = { Show: false, Showing: false };
  show = () => {
    if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 3000);
  };
    
  state = { searchString: '' }
  handleChange = (e) => {
    this.setState({ searchString:e.target.value });
  }
  render() {
    var libraries = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function(i) {
        return i.name.toLowerCase().match( searchString );
      });
    }
  }

  constructor(props) {
    super(props); 
    this.data=[
      {"first":"Anil","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Hardik","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Third","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Fourth","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Fifth","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Sixth","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Seventh","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
      {"first":"Sixth","last":"Sharma","dob":"10/02/1993","gender":"male","address":"10 Downing Street" },
     ]
    this.state = {
      email: '',
      password: '',
      users: [],
      email_error: '',
      email_color: 'black',
      pass_error: '',
      pass_color: 'black',
      redirect: false,
      message: '',
      pop: '',
      selectedDay: undefined,
      userlist:this.data
    };

  }

  submitCreate = ev => {
    ev.preventDefault();
    console.log(this.state.firstname);
    console.log(this.data);
     this.state.userlist= this.data.filter(data => data.first == this.state.firstname )
    console.log(this.state.userlist);
   
    
  }

  
  componentDidMount() { }
  render() {


    if(this.state.userlist) {
      var commentNodes = this.state.userlist.map((list,i)=>{
        return (
            <tr key={i}>
             <td>{list.first} </td>
             <td>{list.last}</td>
             <td>{list.dob}</td>
             <td>{list.gender}</td>
             <td>{list.address}</td>
          </tr>				
        );
        });
      }


 
    return (
      <>
        <div class="row">
          <div class="col-md-12">


            <div class="kt-portlet">



              <form class="kt-form">
                <div class="kt-portlet__body">

                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>First Name</label>
                        <input 
                         type="email" 
                         class="form-control" 
                         aria-describedby="emailHelp"
                         placeholder="Enter First Name" 
                         onChange={e =>{
                          this.setState({firstname: e.target.value})
                         }}
                         />

                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="email"
                         class="form-control" aria-describedby="emailHelp" placeholder="Enter Last Name" 
                         onChange={e =>{
                          this.setState({lastname: e.target.value})
                         }}
                         />
                        
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <label>D.O.B</label>

                        <div class="input-group date">
                          <DayPickerInput
                            style={{ "width": "250px" }}
                            class="form-control"
                            onChange={this.myChangeHandler}
                            formatDate={formatDate}
                            format='dd/MM/yyyy'
                            placeholder="DD/MM/YYYY"
                            onDayChange={e => {
                              var date = new Date(e);
                              let mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                                day = ("0" + date.getDate()).slice(-2);
                              let dob = [day, mnth, date.getFullYear()].join("/");
                              this.setState({ dob: dob })
                            }}
                          />
                        </div>



                        

                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Gender</label>
                        <div class="kt-radio-inline" style={{"padding-top": "10px"}}>
                              <label class="kt-radio kt-radio--bold kt-radio--success">
															<input type="radio" name="radio6" /> Male
															<span></span>
														</label>
														<label class="kt-radio kt-radio--bold kt-radio--brand">
                                <input type="radio" name="radio6"/> Female
                                <span></span>
                             </label>

														<label class="kt-radio kt-radio--bold ">
                                <input type="radio" name="radio6"/> Other
                                <span></span>
                             </label>
												</div>
                        
                      </div>
                    </div>
                  </div>

                  <div class="row">
                  <div class="col-md-6 row">
                  <div class="col-md-2"> MRN  </div> <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg col-md-10   "></div> 
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>MRN Root</label>
                        <input type="name" 
                        class="form-control"
                         aria-describedby="emailHelp" placeholder="Enter MRN Root" 
                         onChange={e =>{
                          this.setState({mrnRoot: e.target.value})
                         }}
                         />
                        
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label> MRN Extension</label>
                        <input type="email" 
                        class="form-control" aria-describedby="emailHelp" placeholder="Enter MRN Extension" 
                        onChange={e =>{
                          this.setState({mrnExt: e.target.value})
                         }}/>
                        
                      </div>
                    </div>
                    </div>


                    <div class="col-md-6 row">
                      <div class="col-md-6"> Encounted With in Date Range  </div> <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg col-md-6 "></div> 
                 
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="input-group date">
                          <DayPickerInput
                            style={{ "width": "250px" }}
                            class="form-control"
                            onChange={this.myChangeHandler}
                            formatDate={formatDate}
                            format='dd/MM/yyyy'
                            placeholder="DD/MM/YYYY"
                            onDayChange={e => {
                              var date = new Date(e);
                              let mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                                day = ("0" + date.getDate()).slice(-2);
                              let dob = [day, mnth, date.getFullYear()].join("/");
                              this.setState({ startdate: dob })
                            }}
                          />
                        </div>
                        
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <div class="input-group date">
                          <DayPickerInput
                            style={{ "width": "250px" }}
                            class="form-control"
                            onChange={this.myChangeHandler}
                            formatDate={formatDate}
                            format='dd/MM/yyyy'
                            placeholder="DD/MM/YYYY"
                            onDayChange={e => {
                              var date = new Date(e);
                              let mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                                day = ("0" + date.getDate()).slice(-2);
                              let dob = [day, mnth, date.getFullYear()].join("/");
                              this.setState({ enddate: dob })
                            }}
                          />
                        </div>
                        
                      </div>
                    </div>
                    </div>
                  </div>


                </div>
                <div class="kt-portlet__foot">
                  <div class="kt-form__actions">
                    <button type="reset" class="btn btn-primary"   onClick={this.submitCreate} > Search </button> &nbsp;
                    <button type="reset" class="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              </form>

            </div>


          </div>
        </div>

















        {/* <div class="kt-portlet kt-portlet--mobile">
         
          <div class="kt-portlet__body kt-portlet__body--fit">
            <div >
              
                <div class="kt-portlet__body">
                <table class="table table-striped- table-bordered table-hover table-checkable" >
										<thead>
											<tr>
												<th>First Name</th>
												<th>Last Name</th>
												<th>D.O.B</th>
												<th>Gender</th>
												<th> Address</th>
											</tr>
										</thead>
                
										<tbody>
                          {commentNodes}
                    </tbody>
                    </table>
                    </div>

                    <div>
                        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..."/>
                        <ul>
                          {libraries.map(function(i) {
                              return <li>{i.name} <a href={i.url}>{i.url}</a></li>;
                          }) } 
                        </ul>
             </div>

       

               
            </div>

          </div>
        </div> */}



































    
    

         


      </>
    );
  }
}






var libraries = [
  { name: 'Backbone.js', url: 'https://documentcloud.github.io/backbone/'},
  { name: 'AngularJS', url: 'https://angularjs.org/'},
  { name: 'jQuery', url: 'https://jquery.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'React', url: 'https://facebook.github.io/react/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'https://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Mootools', url: 'http://mootools.net/'},
  { name: 'Underscore', url: 'https://documentcloud.github.io/underscore/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'https://momentjs.com/'},
  { name: 'Express', url: 'http://expressjs.com/'},
  { name: 'Koa', url: 'http://koajs.com/'},
];