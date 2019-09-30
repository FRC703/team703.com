import React, { Component } from "react";

import { Navbar as Nav } from 'bloomer/lib/components/Navbar/Navbar'
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem'
import { NavbarStart } from 'bloomer/lib/components/Navbar/NavbarStart'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd'
import { Link } from "react-router-dom";

let last_known_scroll_position = 0;
let ticking = false;

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navbarTransparent: true
        }
        window.addEventListener('scroll', (e) => {
            last_known_scroll_position = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.getScrollPosition();
                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    getScrollPosition = () => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop)
        if(scrollTop > 500) {
            // Only push to state if value is not changed
            if(this.state.navbarTransparent) {
                this.setState({
                    navbarTransparent: false
                })
            }
        }else {
            // Only push to state if value is not changed
            if(!this.state.navbarTransparent) {
                this.setState({
                    navbarTransparent: true
                })
            }
        }
    }

    render() {
        return (
            <Nav className={this.state.navbarTransparent && this.props.homePage ? "is-fixed-top is-dark" : "is-fixed-top"} isTransparent={this.state.navbarTransparent && this.props.homePage}>
                <NavbarStart>
                <NavbarItem href="#/">
                    Team Phoenix
                </NavbarItem></NavbarStart>
                <NavbarEnd>
                    <NavbarItem href="#/events">Events</NavbarItem>
                    <NavbarItem href="#/sara">SARA</NavbarItem>
                    <NavbarItem href="#/team">Team</NavbarItem>
                    <NavbarItem href="#/contact">Contact</NavbarItem>
                </NavbarEnd>
            </Nav>
            //   <Level renderAs="nav">
            //     <Level.Item>
            //       <Link to="/events">Events</Link>
            //     </Level.Item>
            //     <Level.Item>
            //       <Link to="/sara">SARA</Link>
            //     </Level.Item>
            //     <Level.Item>
            //       <Heading>
            //         <Link to="/">Team Phoenix</Link>
            //       </Heading>
            //     </Level.Item>
            //     <Level.Item>
            //       <Link to="/team">Team</Link>
            //     </Level.Item>
            //     <Level.Item>
            //       <Link to="/contact">Contact</Link>
            //     </Level.Item>
            //   </Level>
        );
    }
}
