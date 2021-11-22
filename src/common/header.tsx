import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils'
import logo from '../assets/logo.svg'
export function Header(): JSX.Element {
    return (
        <HeaderStyles className={'header'}>
            <div className="header--logo">
                <img src={logo} />
            </div>
            <nav className="header--nav">
                <ul className="header--nav__list">
                    <li className="header--nav__list--option">
                        <Link to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li className="header--nav__list--option">
                        <Link to={ROUTES.BLOG}>Blog</Link>
                    </li>
                    <li className="header--nav__list--option">
                        <Link to={ROUTES.PROJECTS}>Our Projects</Link>
                    </li>
                    <li className="header--nav__list--option">
                        <Link to={ROUTES.CONTACT}>Contact</Link>
                    </li>
                    <li className="header--nav__list--option">
                        <Link to={ROUTES.CONTACT}>Donate</Link>
                    </li>
                </ul>
            </nav>
            <Link className="header--donate" to={ROUTES.DONATE}>
                Donate
            </Link>
        </HeaderStyles>
    )
}

const HeaderStyles = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    position: fixed;
    background: white;
    .header {
        &--logo {
            height: 100%;
            img {
                height: 85%;
            }
        }
        &--nav {
            margin-right: 50px;
            &__list {
                list-style-type: none;
                display: flex;
                &--option {
                    margin-right: 15px;
                    color: var(--dark-blue);
                    transition: all 0.5s linear;
                    font-weight: 700;
                    font-family: 'Josefin Sans', sans-serif;
                    font-size: 18px;
                    &:hover,
                    &.selected {
                        color: var(--gray);
                    }
                }
            }
        }
        &--donate {
            background: var(--yellow);
            color: white;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            justify-self: flex-end;
            padding: 15px 40px;
        }
    }
`
