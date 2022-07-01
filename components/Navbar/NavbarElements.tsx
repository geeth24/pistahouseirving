import Image from "next/image"
import styled from "styled-components"

export const Nav = styled.nav`
    background: ${({ theme }) =>
        theme === "light" ? "#ffffffc4" : "#1a202cc4"};

    backdrop-filter: saturate(180%) blur(20px);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px; /*disable to spread out the navbar*/
`

export const NavLogo = styled.div`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavLogoImage = styled(Image)`
    width: 100px;
    height: 40px;
    margin-right: 24px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 900px) {
        color: #6ba644;
        display: block;
        position: absolute;
        top: 2;
        right: 0;

        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    padding: 0 2rem;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    padding: 0 18px;
    font-weight: bold;
`

export const NavLinks = styled.a`
    color: #6ba644;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &.active {
        color: #047f69;
    }
    &:hover {
        color: #047f69;
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #047f69;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    /* margin-right: 24px; */

    @media screen and (max-width: 900px) {
        display: none;
    }
`
export const NavBtnLinkN = styled.div`
    background-color: #047f69;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    margin-right: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #beeca0;
        color: #047f69;
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavBtnLink = styled.div`
    background-color: #047f69;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    margin-right: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #beeca0;
        color: #047f69;
    }
`
