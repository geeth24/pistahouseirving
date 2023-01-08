import Image from "next/image"
import styled from "styled-components"

export const Nav = styled.nav<{ scrollNav: boolean }>`
    background: ${({ theme, scrollNav }) =>
        theme === "light" && scrollNav === true ? "#fffffcc4" : "transparent"};
    background: ${({ theme, scrollNav }) =>
        theme === "dark" && scrollNav === true ? "#1a202cc4" : "transparent"};
    backdrop-filter: ${({ scrollNav }) =>
        scrollNav === true ? "saturate(180%) blur(20px)" : "none"};
    /* height: 80px; */
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
    filter: drop-shadow(0 0 0.5rem green);
`

export const NavLogoImage = styled(Image)`
    width: 100px;
    height: 40px;
    margin-right: 24px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 900px) {
        color: #10c60f;
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

export const NavLinks = styled.div`
    color: #10c60f;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &.active {
        color: #06bd9c;
    }
    &:hover {
        color: #06bd9c;
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #06bd9c;
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
    background-color: #06bd9c;
    white-space: nowrap;
    padding: 8px 16px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    margin-right: 24px;
    border-radius: 8px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #beeca0;
        color: #06bd9c;
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavBtnLink = styled.div`
    background-color: #06bd9c;
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
        color: #06bd9c;
    }
`
