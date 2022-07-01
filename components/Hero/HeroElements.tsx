import styled from "styled-components"
export const Examplebox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-size: cover;
    color: white;
    font-family: sans-serif;
    font-weight: 200;
    z-index: 1;
    
`
export const ExampleboxDark = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-size: cover;
    color: white;
    font-family: sans-serif;
    font-weight: 200;
    z-index: 1;
`

export const HeroContainer = styled.div`
    background-color: #047f6876;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroBgVideo = styled.video`
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
export const TextContent = styled.div``

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 115px;
    text-align: left;
    text-shadow: 4px 4px 25px #000000;
    font-weight: bold;
    font-style: italic;
    opacity: 0.5;

    @media screen and (max-width: 768px) {
        font-size: 75px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    opacity: 0.1;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    text-decoration: none;

    &:hover {
        transition: 0.3s ease-in-out;
        transform: translate(0, -10px);
    }
`
