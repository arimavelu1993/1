import React from "react";

export default class Register extends React.Component {
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
  render() {
    return (
      <>
     
     
	
		<div class="kt-grid kt-grid--ver kt-grid--root" style={{"overflow-y":"hidden"}}> 
			<div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
				<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">

				
					<div class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside" style={{"background-image":" url(/assets/media//bg/bg-4.jpg)" ,"height":" 800px !important"    }}>
						<div class="kt-grid__item">
							<a href="#" class="kt-login__logo">
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
							<a href="#" class="kt-link kt-login__signup-link">Sign Up!</a>
						</div>

						
						<div class="kt-login__body">

							
							<div class="kt-login__form">
								<div class="kt-login__title">
									<h3>Sign In</h3>
								</div>

							
								<form class="kt-form" action="" novalidate="novalidate">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Full Name" name="email" autocomplete="off" />
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off" />
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="User Name" name="email" autocomplete="off" />
									</div>
									<div class="form-group">
										<input class="form-control" type="password" placeholder="Password" name="password" />
									</div>
									<div class="form-group">
										<input class="form-control" type="password" placeholder="Confirm Password" name="password" />
									</div>

								
									<div class="kt-login__actions">
										<a href="#" class="kt-link kt-login__link-forgot">
											Cancel
										</a>
										<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary">Sign In</button>
									</div>

								</form>

								
								
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





