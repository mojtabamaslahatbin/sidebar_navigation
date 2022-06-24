import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import classes from "./NavigationMenu.module.css";
import avatar from "../../assets/images/avatar.png";
import { analyticsItems, contentItems, customizationItems } from "../../constants/menuItems";

const NavigationMenu = props => {
    const [openSidebar, setOpenSidebar] = useState(true);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme => (theme === "light" ? "dark" : "light"));
        console.log("theme clicked", theme);
    };

    const handleToggleBtn = () => {
        setOpenSidebar(!openSidebar);
    };

    return (
        <div className={openSidebar ? classes.menu : classes.collapsedMenu} data-theme={theme}>
            <div className={classes.logo}>
                <Icon icon="tabler:box" width="24" inline={true} />
                <span onClick={handleToggleBtn} className={classes.toggleButton}>
                    {openSidebar ? "<" : ">"}
                </span>
            </div>
            <ul className={classes.itemsList}>
                <div
                    className={`${classes.menuSubjectWrapper} ${
                        openSidebar ? null : classes.collapsed
                    }`}
                >
                    <h6 className={classes.menuSubject}>ANALYTICS</h6>
                </div>
                {analyticsItems.map((item, index) => {
                    return (
                        <li key={index} className={`${openSidebar ? null : classes.collapsed}`}>
                            <Link
                                to="/#"
                                className={`${classes.item} ${
                                    openSidebar ? null : classes.collapsed
                                }`}
                            >
                                <div>
                                    <Icon icon={item.icon} width="16" inline={true} />
                                </div>
                                <div>
                                    <span className={openSidebar ? null : classes.hideText}>
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
                <div
                    className={`${classes.menuSubjectWrapper} ${
                        openSidebar ? null : classes.collapsed
                    }`}
                >
                    <h6 className={classes.menuSubject}>CONTENT</h6>
                </div>
                {contentItems.map((item, index) => {
                    return (
                        <li key={index} className={`${openSidebar ? null : classes.collapsed}`}>
                            <Link
                                to="/#"
                                className={`${classes.item} ${
                                    openSidebar ? null : classes.collapsed
                                }`}
                            >
                                <div>
                                    <Icon icon={item.icon} width="16" inline={true} />
                                </div>
                                <div>
                                    <span className={openSidebar ? null : classes.hideText}>
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    );
                })}

                <div
                    className={`${classes.menuSubjectWrapper} ${
                        openSidebar ? null : classes.collapsed
                    }`}
                >
                    <h6 className={classes.menuSubject}>CUSTOMIZATION</h6>
                </div>
                {customizationItems.map((item, index) => {
                    return (
                        <li key={index} className={`${openSidebar ? null : classes.collapsed}`}>
                            <Link
                                to="/#"
                                className={`${classes.item} ${
                                    openSidebar ? null : classes.collapsed
                                }`}
                            >
                                <div>
                                    <Icon icon={item.icon} width="16" inline={true} />
                                </div>
                                <div>
                                    <span className={openSidebar ? null : classes.hideText}>
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className={classes.darkModeBtn}>
                <button
                    className={`${openSidebar ? null : classes.collapsed}`}
                    onClick={toggleTheme}
                >
                    <div>
                        <Icon icon="heroicons-outline:light-bulb" width="20" inline={true} />
                    </div>
                    <div>
                        <span className={openSidebar ? null : classes.hideText}>
                            {theme === "light" ? "Dark Mode" : "Light Mode"}
                        </span>
                    </div>
                </button>
            </div>
            <div className={`${classes.userAvatar} ${openSidebar ? null : classes.collapsed}`}>
                <div className={`${openSidebar ? null : classes.collapsed}`}>
                    <img src={avatar} alt="userAvatar" />
                </div>
                <div className={`${classes.userInfo} ${openSidebar ? null : classes.hideText}`}>
                    <span>Omer E</span>
                    <span>Premium user</span>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;
