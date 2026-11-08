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

type MenuLink = {
    title: string;
    href: string;
    target?: '_blank';
    rel?: 'noreferrer';
};

const links: MenuLink[] = [
    { title: '历史活动', href: '#/events' },
    {
        title: '前端大会',
        href: 'https://web-conf.dev/',
        target: '_blank',
        rel: 'noreferrer'
    },
    {
        title: 'code for city',
        href: 'https://web-conf.dev/#2018/Code4City/',
        target: '_blank',
        rel: 'noreferrer'
    },
    { title: '赞助商', href: '#/sponsors' }
];

@observer
export class Menu extends Component {
    @observable accessor open = false;

    @action toggle = () => (this.open = !this.open);

    @action hide = () => (this.open = false);

    renderLinks = () => (
        <NavbarNav className="flex-fill lg:justify-content-end gap-3">
            {links.map(({ title, href, target, rel }) => (
                <NavLink
                    className="text-white"
                    key={href}
                    {...{ href, target, rel }}
                    onClick={this.hide}
                >
                    {title}
                </NavLink>
            ))}
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
