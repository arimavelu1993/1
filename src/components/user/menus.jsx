import React from "react";

import {Button,Card,CardHeader,	CardBody,	CardTitle,	Collapse,	DropdownMenu,	DropdownItem,	UncontrolledDropdown,	DropdownToggle,	FormGroup,	Form,	Input,	InputGroupAddon,	InputGroupText,	InputGroup,	Media,	NavbarBrand,	Navbar,	NavItem,	NavLink,	Nav,	Progress,	Table,	Container,	Row,	Col} from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

class menus extends React.Component {
  render() {
    return (
      <>
            <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                    <ul class="kt-menu__nav ">
                        
                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                          
                            

                            <a href="javascript:;"
                             class="kt-menu__link kt-menu__toggle">
                               <i class="kt-menu__link-icon flaticon-web"></i>
                                 <NavLink 
                                    class="kt-menu__link kt-menu__toggle"
                                    to="/user/dashboard" 
                                    tag={Link} >   <span class="kt-menu__link-text">Dashboard </span>
                                 </NavLink> </a>
                        </li>

                        <li class="kt-menu__section ">
                            <h4 class="kt-menu__section-text">Views </h4>
                            <i class="kt-menu__section-icon flaticon-more-v2"></i>
				            		</li>
                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Patient List</span><i class="kt-menu__ver-arrow la la-angle-right"></i></a>
                              <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                  <ul class="kt-menu__subnav">
                                      <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                  </ul>
                              </div>
                        </li>

                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Secure Messaging</span><i class="kt-menu__ver-arrow la la-angle-right"></i></a>
                              <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                  <ul class="kt-menu__subnav">
                                      <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                  </ul>
                              </div>
                        </li>
                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Links</span><i class="kt-menu__ver-arrow la la-angle-right"></i></a>
                              <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                  <ul class="kt-menu__subnav">
                                      <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                  </ul>
                              </div>
                        </li>
                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Customize</span></a>
                              <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                  <ul class="kt-menu__subnav">
                                      <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                      <li class="kt-menu__item " aria-haspopup="true"><a  class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                  </ul>
                              </div>
                        </li>
                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Tools </span></a>
                              
                        </li>



                    </ul>
                </div>
            </div>




      </>
    );
  }
}

export default menus;
