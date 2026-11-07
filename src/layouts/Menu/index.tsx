import {
    Container,
    Drawer,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    NavLink
} from 'idea-react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';

const logo = new URL('../../assets/images/fcc-logo.png', import.meta.url) + '';

@observer
export class Menu extends Component {
    @observable accessor open = false;

    @action toggle = () => (this.open = !this.open);

    @action hide = () => (this.open = false);

    renderLinks = () => (
        <NavbarNav className="flex-fill lg:justify-content-end gap-3">
            <NavLink className="text-white" href="#/events" onClick={this.hide}>
                历史活动
            </NavLink>
            <NavLink
                className="text-white"
                href="https://web-conf.dev/"
                target="_blank"
                rel="noreferrer"
                onClick={this.hide}
            >
                前端大会
            </NavLink>
            <NavLink
                className="text-white"
                href="https://web-conf.dev/#2018/Code4City/"
                target="_blank"
                rel="noreferrer"
                onClick={this.hide}
            >
                code for city
            </NavLink>
            <NavLink className="text-white" href="#/sponsors" onClick={this.hide}>
                赞助商
            </NavLink>
        </NavbarNav>
    );

    render() {
        return (
            <Navbar className="sticky-top z-3 bg-transparent" expand="lg" theme="dark">
                <Container className="d-flex align-items-center justify-content-between py-2">
                    <NavbarBrand className="m-0" href="#/">
                        <img className="d-block" src={logo} height={45} alt="FCC 成都社区" />
                    </NavbarBrand>

                    <NavbarToggler expanded={this.open} onClick={this.toggle} />

                    <Drawer
                        className="w-100"
                        bodyClassName="d-flex flex-column lg:flex-row lg:align-items-center gap-3"
                        title="导航菜单"
                        responsive="lg"
                        placement="end"
                        open={this.open}
                        onDismiss={this.hide}
                    >
                        {this.renderLinks()}
                    </Drawer>
                </Container>
            </Navbar>
        );
    }
}
