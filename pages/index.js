import {Keyboard} from "../components/Keyboard";
import {Selection} from "../components/Selection";
import {useEffect, useState} from "react";
import {Logo} from "../components/Logo";
import {Nav} from "../components/Nav";
import {ResetButton} from "../components/ResetButton";
import Cookie from "js-cookie";
import cookie from "cookie";
import CookieConsent from "react-cookie-consent";
import styles from "./index.module.sass";
import Head from 'next/head'

function Home({initialLayoutType, initialLayout, initialTheme, initialCookieConsent}) {
    const [layoutType, setLayoutType] = useState(() => initialLayoutType);
    const [layout, setLayout] = useState(() => initialLayout);
    const [layoutData, setLayoutData] = useState(require("../data/" + layout + "/" + layoutType + ".json"));
    const [reset, setReset] = useState(false);
    const [theme, setTheme] = useState(() => initialTheme); //Theme switcher
    const [cookieConsent, setCookieConsent] = useState(JSON.parse(initialCookieConsent));
    const [disableKeyHandler, setDisableKeyHandler] = useState(false);

    function handleLayoutTypeSelection(layoutType) {
        setLayoutType(layoutType);
        setLayoutData(require("../data/" + layout + "/" + layoutType + ".json"));
    }

    function handleLayoutSelection(layout) {
        let val;

        setLayout(layout);
        if (layout === "iso" && layoutType === "65p") {
            val = "100p";
            setLayoutType(val);
        }
        setLayoutData(require("../data/" + layout + "/" + (val || layoutType) + ".json"));
    }

    function handleThemeSelection(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        if (cookieConsent) {
            Cookie.set('layoutType', layoutType);
            Cookie.set('layout', layout);
            Cookie.set('theme', theme);
            setDisableKeyHandler(false);
        }
    }, [layoutType, layout, theme, cookieConsent]);

    function switchReset() {
        setReset(!reset);
    }

    return <div className={styles.containerStyle}>
        <Head>
            <title>KeyCheck | Check your keys in style!</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="description"
                  content="Check if your keyboard keys are all working correctly!
                  With style and for different form factors and layouts."/>
        </Head>
        <Logo theme={theme}/>
        <Nav setLayout={handleLayoutSelection} setTheme={handleThemeSelection} active={layout} theme={theme}/>
        <Selection selectionHandler={handleLayoutTypeSelection} active={layoutType} disable={layout === "iso"}
                   theme={theme}/>
        <Keyboard data={layoutData} type={layoutType} isReset={reset} switchReset={switchReset} theme={theme}
                  disabled={disableKeyHandler}/>
        <ResetButton resetHandler={switchReset} theme={theme}/>
        <CookieConsent enableDeclineButton overlay sameSite={"strict"} flipButtons={true}
                       overlayStyle={{background: "rgba(0, 0, 0, 0.7)"}}
                       containerClasses={styles.cookieConsentStyle}
                       style={{background: "#f0f0f3", color: "#3d3d3d"}}
                       buttonStyle={{
                           background: "#68DEB3",
                           borderRadius: "0.4em",
                           color: "#3D3D3D",
                           padding: "0.8em",
                           boxShadow: "0.15em 0.15em 0.1em #4ea686"
                       }}
                       buttonClasses={styles.cookieConsentButtonStyle}
                       declineButtonClasses={styles.cookieConsentButtonStyle}
                       declineButtonStyle={{
                           background: "#f45e61",
                           borderRadius: "0.4em",
                           color: "#f0f0f3",
                           padding: "0.8em",
                           boxShadow: "0.15em 0.15em 0.1em #bd494b"
                       }}
                       onAccept={() => {
                           setCookieConsent(true);
                           setDisableKeyHandler(false);
                       }}
                       onDecline={() => {
                           setCookieConsent(false);
                           setDisableKeyHandler(false);
                       }}>
            This website uses cookies to enhance the user experience.
        </CookieConsent>
        <style global jsx>{`
        * {
            box-sizing: border-box;
            user-select: none;
        }
        html, body {
            background-color: ${theme === "dark" ? "#3D3D3D" : "#f0f0f3"};
            margin: 0
        }
      `}</style>
    </div>
}

export async function getServerSideProps({req}) {
    const cookies = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

    return {
        props: {
            initialLayoutType: cookies.layoutType || "100p",
            initialLayout: cookies.layout || "ansi",
            initialTheme: cookies.theme || "light",
            initialCookieConsent: cookies.CookieConsent || null
        },
    }
}

export default Home;