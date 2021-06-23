import React from "react";
import {Button,Card,CardHeader,	CardBody,	CardTitle,	Collapse,	DropdownMenu,	DropdownItem,	UncontrolledDropdown,	DropdownToggle,	FormGroup,	Form,	Input,	InputGroupAddon,	InputGroupText,	InputGroup,	Media,	NavbarBrand,	Navbar,	NavItem,	NavLink,	Nav,	Progress,	Table,	Container,	Row,	Col} from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

export default class Login extends React.Component {
  state = { Show: false, Showing: false};
  show = () => { if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 3000);
  };

  
  constructor(props){
    super(props);

    this.state = {       
            email: '',      
            password:'',
            users: [],
            email_error:'', 
            email_color:'black', 
            pass_error:'',
            pass_color:'black', 
            redirect: false,
            message:'',
            pop:'',    
    };
  }
 
  componentDidMount() { }

LoginSend=ev=>{
	ev.preventDefault();
	console.log("hi")
	this.username=this.state.email;
	this.password=this.state.password;
	this.setState({ loading: true });
console.log(this.username);
console.log(this.password);
	if(this.username=='vel@gmail.com' && this.password=="12345" ){
		console.log("true");
		this.props.history.push({
			pathname: `/user/dashboard`,
			search: '?login=true',
			state: { listId:0,
					 vueId:0,
					} 
			});
	}else{
		console.log("false");

	}

}

  render() {
    return (
      <>
     
     
	 
		<div class="kt-grid kt-grid--ver kt-grid--root"  style={{"overflow-y":"hidden"}}> 
			<div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
				<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">

				
					<div class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside" style={{"background-image":" url(/assets/media//bg/bg-4.jpg)","height":" 800px !important"}}>
						<div class="kt-grid__item">
							<a  class="kt-login__logo">
								<img src="/assets/konza-logo-wht.png"/>
							</a>
						</div>
						<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
							<div class="kt-grid__item kt-grid__item--middle">
								<h3 class="kt-login__title">Welcome to KONZA!</h3>
								<h4 class="kt-login__subtitle">KONZA builds upon a proven model for the development of the technical infrastructure necessary to enable the sharing of clinical information at the point of care, while supporting transformative value-based payment models, care management, and data analytics. Patients, physicians, healthcare facilities, and other healthcare providers from across the country benefit from KONZA's delivery of unequaled actionable intelligence.</h4>
							</div>
						</div>
						<div class="kt-grid__item">
							<div class="kt-login__info">
								<div class="kt-login__copyright">
									&copy KONZA, Incorporated 2019 - All Rights Reserved.
								</div>
								
							</div>
						</div>
					</div>

				
					<div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">

						
						<div class="kt-login__head">
							<span class="kt-login__signup-label">Don't have an account yet?</span>&nbsp;&nbsp;
							
							

							 <a class="kt-link kt-login__signup-link">
							    <NavLink 
							        class="kt-link kt-login__signup-link"
                                    to="/auth/Register" 
                                    tag={Link} >   <span class="kt-menu__link-text">Sign Up! </span>
                                 </NavLink> 
							</a>
						</div>

						
						<div class="kt-login__body">

							
							<div class="kt-login__form">
								<div class="kt-login__title">
									<h3>Sign In</h3>
								</div>

							
								<form class="kt-form" action="" novalidate="novalidate">
									<div class="form-group">
										<input 
											class="form-control" 
											type="text" 
											placeholder="Email" 
											name="email"
											autocomplete="off" 
											onChange={ev => this.setState({email: ev.target.value})} 
											/>
									</div>
									<div class="form-group">
										<input 
											class="form-control" 
											type="password" 
											placeholder="Password" 
											name="password"
											onChange={ev => this.setState({password: ev.target.value})} 
											 />
									</div>

								
									<div class="kt-login__actions">
										<a class="kt-link kt-login__link-forgot">
											Forgot Password ?
										</a>
										<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
										onClick={this.LoginSend}
										
										>Sign In</button>
									</div>

								</form>

								<div class="kt-login__divider">
									<div class="kt-divider">
										<span></span>
										<span>OR</span>
										<span></span>
									</div>
								</div>
								<div class="kt-login__options">
									<a href="#" class="btn btn-primary kt-btn">
										<i class="fab fa-facebook-f"></i>
										Facebook
									</a>
									<a href="#" class="btn btn-info kt-btn">
										<i class="fab fa-twitter"></i>
										Twitter
									</a>
									<a href="#" class="btn btn-danger kt-btn">
										<i class="fab fa-google"></i>
										Google
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


      </>
    );
  }
}





