import React, {useEffect, useRef} from 'react';
//import {useRouter} from 'next/router'
import {
    Box,
    Container,
    ThemeProvider,
    Button,
} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import HeaderBlank from '../../components/header/headerBlank';
import LogoNew from "../../components/icons/LogoNew";
import emailjs from '@emailjs/browser';

let intViewportHeight,
    launchAni = false;

export default function AppformIndex() {
    const mainForm = useRef();
    let formSection = 0;
    //const router = useRouter();
    useEffect(() => {
        intViewportHeight = window.innerHeight;
        let timer = null;
        const handleScroll = () => {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                let thisSectionid;
                const sectionID = Math.floor(window.scrollY / intViewportHeight);
                const ratio = (window.scrollY % intViewportHeight) / intViewportHeight;
                if (ratio > .7) {
                    thisSectionid = sectionID + 1;
                } else {
                    thisSectionid = sectionID;
                }
                if (formSection !== thisSectionid) {
                    formSection = thisSectionid;
                    goSection(formSection);
                }
            }, 150);
        }
        const handleResize = () => {
            intViewportHeight = window.innerHeight;
            goSection(formSection);
        }
        const prepareSideLink = () => {
            Array.from(document.querySelectorAll('.formSection')).forEach(function (el) {
                el.removeAttribute('id');
                el.removeAttribute('data-index');
            });
            const sideNav = document.getElementById('sideNav'),
                ul = sideNav.firstChild,
                openSections = document.querySelectorAll('.formSection.open');
            let li, a, index = 0;
            ul.innerHTML = "";
            Array.from(openSections).forEach(function (el) {
                el.setAttribute('id', 'formSection' + index.toString());
                el.setAttribute('data-index', index.toString());
                index++;
                if (openSections.length > index) {
                    li = document.createElement('li');
                    li.classList.add('side-link');
                    li.setAttribute('data-index', index.toString());
                    if (formSection === index) {
                        li.classList.add('active');
                    }
                    a = document.createElement('a');
                    a.innerHTML = index.toString();
                    a.onclick = function (e) {
                        e.preventDefault();
                        if (launchAni) {
                            return false;
                        }
                        goSection(parseInt(this.parentNode.getAttribute('data-index')));
                    }
                    li.appendChild(a);
                    ul.appendChild(li);
                }
            });
        }
        const initialize = () => {
            prepareSideLink();
            window.scrollTo(window.scrollX, window.scrollY - 1);
            window.scrollTo(window.scrollX, window.scrollY + 1);
            goSection(0); //xxx
        }
        initialize();
        /* const onHashChanged = (url) => {
                     let sectionid = 0
                       if (window.location.hash) {
                           sectionid = parseInt(window.location.hash.replace('#formSection', ''));
                           sectionid = sectionid > -1 ? sectionid : 0;
                       }
                       if (sectionid !== formSection) {
                           goSection(sectionid);
                       }
        };*/
        //window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        //will be called on component mount
        document.body.style.overflow = "hidden";
        document.getElementById('logoMain').style.opacity = '0';
        //window.addEventListener("hashchange", onHashChanged);

        /** Focus Check */
        const els = document.querySelectorAll("input,textarea,button"),
            focused = (el) => {
                const index = parseInt(el.target.closest(".formSection").getAttribute('data-index'));
                if (index !== formSection) {
                    goSection(index);
                }
            };
        for (let i = 0; i < els.length; ++i) {
            els[i].addEventListener("focus", focused, true);
        }

        /** Row Validate */
        const dataChecks = document.querySelectorAll("[data-check]"),
            rowValidate = (el) => {
                const res = validate(el.target.getAttribute('data-check'));
                if (res) {
                    goNextSection();
                } else {
                    //console.log("Error"); //xxx
                }
                //console.log(el.getAttribute('data-check'));
                // const index = parseInt(el.target.closest(".formSection").getAttribute('data-index'));
                // if (index !== formSection) {
                //     goSection(index);
                // }
            };
        for (let i = 0; i < dataChecks.length; ++i) {
            dataChecks[i].addEventListener("click", rowValidate, true);
        }

        /** Radios Check - White List */
        const radiosWhitelist = document.querySelectorAll("input[name='iswhitelist']"),
            radiosWhitelistCheck = (el) => {
                if (el.target.value === 'yes') {
                    document.querySelectorAll('[data-id="formSectionWhitelist"]')[0].classList.add('open');
                } else {
                    document.querySelectorAll('[data-id="formSectionWhitelist"]')[0].classList.remove('open');
                }
                prepareSideLink();
                goSection(formSection + 1);
            };
        for (let i = 0; i < radiosWhitelist.length; ++i) {
            radiosWhitelist[i].addEventListener("change", radiosWhitelistCheck, true);
        }
        /** Radios Check - Royalties */
        const radiosRoyalties = document.querySelectorAll("input[name='isroyalties']"),
            radiosRoyaltiesCheck = (el) => {
                if (el.target.value === 'yes') {
                    document.querySelectorAll('[data-id="formSectionRoyalties"]')[0].classList.add('open');
                } else {
                    document.querySelectorAll('[data-id="formSectionRoyalties"]')[0].classList.remove('open');
                }
                prepareSideLink();
                goSection(formSection + 1);
            };
        for (let i = 0; i < radiosRoyalties.length; ++i) {
            radiosRoyalties[i].addEventListener("change", radiosRoyaltiesCheck, true);
        }


        /** Unregister */
        return () => {
            //window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            document.body.style.overflow = "auto";
            document.getElementById('logoMain').style.opacity = '1';
            for (let i = 0; i < els.length; ++i) {
                els[i].removeEventListener("focus", focused, true);
            }
            for (let i = 0; i < radiosWhitelist.length; ++i) {
                radiosWhitelist[i].removeEventListener("change", radiosWhitelistCheck, true);
            }
            for (let i = 0; i < radiosRoyalties.length; ++i) {
                radiosRoyalties[i].removeEventListener("change", radiosRoyaltiesCheck, true);
            }
            for (let i = 0; i < dataChecks.length; ++i) {
                dataChecks[i].removeEventListener("click", rowValidate, true);
            }

            //window.removeEventListener("hashchange", onHashChanged);
        }

    }, [])

    const goSection = function (sectionid) {
        if (sectionid === 0 || sectionid !== formSection) {
            formSection = sectionid;
            //window.scrollTo(window.scrollX, intViewportHeight * sectionid)
            //document.location = '#formSection' + sectionid;
            document.getElementById('logoMain').style.opacity = (sectionid !== 0 ? 1 : 0).toString();
            const elSideNav = document.getElementById("sideNav");
            if (sectionid === 0) {
                elSideNav.classList.remove("sideNavShow");
            } else {
                elSideNav.classList.add("sideNavShow");
                Array.from(document.querySelectorAll('.side-link.active')).forEach(function (el) {
                    el.classList.remove('active');
                });
                document.querySelector('li.side-link:nth-child(' + sectionid + ')').classList.add('active');
                const inp = document.querySelector('#formSection' + sectionid + ' .inp');
                if (inp) {
                    inp.focus();
                }
            }
        }
        scroll({top: intViewportHeight * sectionid});
    }
    const goNextSection = function () {
        const openSections = document.querySelectorAll('.formSection.open');
        if ((formSection + 1) < openSections.length) {
            goSection(formSection + 1);
        }
    };


    /** Form Submit */
    function onFormSubmit() {
        const submitSection = document.getElementById('submitSection'),
            p = submitSection.querySelector('p'),
            pBackupText = p.innerText,
            button = submitSection.querySelector('button');
        button.disabled = true;
        if (validateAll()) {
            /*const formData = [];
            const keys = [
                'collectionname', 'collectiondescription', 'totalsupply', 'mintdate', 'iswhitelist',
                'whitelistdescription', 'isroyalties', 'royaltiesdescription', 'price', 'mintingdescription',
                'website', 'twitteraccount', 'telegramaccount', 'discordlink', 'contactinformation'
            ];
            for (let el, key, rowData, section, i = 0; i < keys.length; ++i) {
                key = keys[i];
                if (key === 'iswhitelist' || key === 'isroyalties') {
                    el = document.querySelector("input[name='" + key + "']");
                } else {
                    el = document.getElementById(key === 'mintdate' ? 'mintyear' : key);
                }
                section = el.closest(".formSection");
                rowData = {title: section.querySelector('label').innerText, value: '-'};
                //console.log(rowData);
                switch (key) {
                    case 'mintdate':
                        rowData.value = document.getElementById('mintyear').value + '-';
                        rowData.value += document.getElementById('mintmonth').value + '-';
                        rowData.value += document.getElementById('mintday').value;
                        break;
                    case 'iswhitelist':
                    case 'isroyalties':
                        rowData.value = document.querySelector("input[name='" + key + "']:checked").value;
                        break;
                    case 'whitelistdescription':
                        if (document.querySelector("input[name='iswhitelist']:checked") !== null) {
                            if (document.querySelector("input[name='iswhitelist']:checked").value === 'yes') {
                                rowData.value = el.value;
                            }
                        }
                        break;
                    case 'royaltiesdescription':
                        if (document.querySelector("input[name='isroyalties']:checked") !== null) {
                            if (document.querySelector("input[name='isroyalties']:checked").value === 'yes') {
                                rowData.value = el.value;
                            }
                        }
                        break;
                    default:
                        rowData.value = el.value;
                        break;
                }
                formData.push(rowData);
            }*/
            //console.log(formData);

            p.innerText = 'Please Wait';
            let isFormSent = false,
                formError = null;
            const sideLinks = document.querySelectorAll('.side-link'),
                sideLinkCount = sideLinks.length;

            /** To The Moon */
            const toTheMoon = () => {
                const sideNav = document.getElementById('sideNav');
                sideNav.classList.add('toTheMoon');
                launchAni = true;
                let shipindex = sideLinkCount,
                    timerMoon = setInterval(function () {
                        Array.from(sideLinks).forEach(function (el) {
                            el.classList.remove('ship')
                        });
                        document.querySelector(".side-link[data-index='" + shipindex + "']").classList.add('ship');
                        shipindex--;
                        //console.log(shipindex);
                        if (shipindex === 1) {
                            shipindex = sideLinkCount;
                            if (isFormSent) {
                                clearTimeout(timerMoon);
                                if (formError) {
                                    p.innerText = 'An error occurred while submitting the form. Please try again later. If the error persists, please let us know at support@launchart.io';
                                } else {
                                    p.innerHTML = '<strong>Thank you for getting in touch!</strong> <br> We appreciate you contacting LaunchArt. One of our colleagues will get back in touch with you soon! Have a great day!';
                                }
                            }
                        }
                    }, 700);
            }
            toTheMoon();

            emailjs.sendForm('service_cmj7sx8', 'template_appform', mainForm.current, 'GMzo0UGFw4p0siOUd')
                .then((result) => {
                    //console.log(result.text);
                    isFormSent = true;
                    formError = false;
                    document.getElementById("form").reset();
                    const openSections = document.querySelectorAll('.formSection.open');
                    Array.from(openSections).forEach(function (el) {
                        if (parseInt(el.getAttribute('data-index')) !== sideLinkCount) {
                            el.classList.remove('open');
                        }
                    });
                }, (error) => {
                    //console.error(error.text);
                    isFormSent = true;
                    formError = true;
                    launchAni = false;
                    button.disabled = false;
                });
        } else {
            let timer = setTimeout(function () {
                button.disabled = false;
                clearTimeout(timer);
            }, 150);
        }
    }

    /** Validation */
    function validateAll() {
        let ret = true;
        const keys = [
            'collectionname', 'collectiondescription', 'totalsupply', 'mintdate', 'iswhitelist',
            'whitelistdescription', 'isroyalties', 'royaltiesdescription', 'price', 'mintingdescription',
            /*'website', 'telegramaccount', 'discordlink',*/ 'twitteraccount', 'contactinformation'
        ];

        for (let index, el, key, i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (!validate(key)) {
                if (key === 'iswhitelist' || key === 'isroyalties') {
                    el = document.querySelector("input[name='" + key + "']");
                } else {
                    el = document.getElementById(key === 'mintdate' ? 'mintyear' : key);
                }
                index = parseInt(el.closest(".formSection").getAttribute('data-index'));
                goSection(index);
                return false;
            }
        }

        return ret;
    }

    function validate(key) {
        let el;
        if (key === 'iswhitelist' || key === 'isroyalties') {
            el = document.querySelector("input[name='" + key + "']");
        } else {
            el = document.getElementById(key === 'mintdate' ? 'mintyear' : key);
        }
        const section = el.closest(".formSection");
        const msg = section.querySelector('.msg');
        let error = false;
        switch (key) {
            case 'mintdate':
                if (document.getElementById('mintyear').value.trim().length !== 4 ||
                    !document.getElementById('mintmonth').value.trim().length ||
                    !document.getElementById('mintday').value.trim().length) {
                    error = true;
                }
                break;
            case 'iswhitelist':
            case 'isroyalties':
                error = document.querySelector("input[name='" + key + "']:checked") === null;
                break;
            case 'whitelistdescription':
                if (document.querySelector("input[name='iswhitelist']:checked") !== null) {
                    if (document.querySelector("input[name='iswhitelist']:checked").value === 'yes') {
                        if (!el.value.trim().length) {
                            error = true;
                        }
                    }
                }
                break;
            case 'royaltiesdescription':
                if (document.querySelector("input[name='isroyalties']:checked") !== null) {
                    if (document.querySelector("input[name='isroyalties']:checked").value === 'yes') {
                        if (!el.value.trim().length) {
                            error = true;
                        }
                    }
                }
                break;
            case 'website':
            case 'telegramaccount':
            case 'discordlink':
                error = false;
                break;
            default:
                if (!el.value.trim().length) {
                    error = true;
                }
                break;
        }
        if (error) {
            msg.classList.add('wrn');
            msg.innerHTML = 'Please check your answer!';
            el.focus();
        } else {
            msg.classList.remove('wrn');
            msg.innerHTML = '';
        }
        return !error;
    }

    return (
        <ThemeProvider theme={theme}>
            <SEO
                title="Launchart Application Form"
                description="Launchart Application Forms"
            />
            <HeaderBlank heading="Application Form"/>
            <Box id="appform" sx={styles.appform}>
                <Container>
                    <nav className="sideNav" id="sideNav">
                        <ul>
                            <li/>
                        </ul>
                        {/*<li className="side-link"><a onClick={(e) => {goSectionLink(e, 1)}}>1</a></li>*/}
                    </nav>
                    <form ref={mainForm} autoComplete="off" id="form">
                        <div className="formSection open">
                            <div className="infoLogo">
                                <LogoNew width={'100%'} height={'auto'} id={"logoHuge"}/>
                            </div>
                            <div className="infoText">
                                <h1>LaunchArt Request</h1>
                                <p>
                                    We are requesting some vital pieces of information about your project before our
                                    first meeting.
                                </p>
                                <p>
                                    For questions, please contact on Discord LeeroyJenkins#8467 or please feel free to
                                    contact us at support@launchart.io
                                </p>
                                <Button variant="primary" type="button" /*tabIndex={-1}*/ onClick={(e) => {
                                    goNextSection();
                                }}>Start</Button>
                            </div>
                        </div>

                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Collection name</label>
                                <input
                                    type="text" name="collectionname" id="collectionname"
                                    className="inp" /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type the collection name..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="collectionname">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="desc">Collection description</label>
                                <p className="exm">
                                    This description will be used to present the collection on the marketplace.
                                </p>
                                <textarea
                                    name="collectiondescription" id="collectiondescription" className="inp"
                                    /*tabIndex={-1}*/
                                    placeholder="Type the collection description..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="collectiondescription">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">How many NFTs do you have in your collection?</label>
                                <input
                                    type="text" name="totalsupply" id="totalsupply" className="inp" /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type the total supply..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" data-check="totalsupply">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">When do you plan to have your NFT minting event?</label>

                                <div className="dateGroup">
                                    <input
                                        type="text" name="mintyear" id="mintyear" className="inp" /*tabIndex={-1}*/
                                        role="presentation" autoComplete="off" maxLength={4}
                                        placeholder="Year"
                                    />
                                    <span className="sep">/</span>
                                    <input
                                        type="text" name="mintmonth" id="mintmonth" className="inp" /*tabIndex={-1}*/
                                        role="presentation" autoComplete="off" maxLength={2}
                                        placeholder="Month"
                                    />
                                    <span className="sep">/</span>
                                    <input
                                        type="text" name="mintday" id="mintday" className="inp" /*tabIndex={-1}*/
                                        role="presentation" autoComplete="off" maxLength={2}
                                        placeholder="Day"
                                    />
                                </div>


                                <footer>
                                    <Button variant="primary" type="button" data-check="mintdate">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Do you need a whitelist mechanism?</label>
                                <div className="toggle-radio">
                                    <input type="radio" name="iswhitelist" id="iswhitelistyes" className="yes"
                                           value="yes" /*defaultChecked*/
                                    />
                                    <input type="radio" name="iswhitelist" id="iswhitelistno" className="no"
                                           value="no"/>
                                    <div className="switch">
                                        <label className="yes" htmlFor="iswhitelistyes">Yes</label>
                                        <label className="no" htmlFor="iswhitelistno">No</label>
                                        <span/>
                                    </div>
                                </div>
                                <footer>
                                    <Button variant="primary" type="button" data-check="iswhitelist">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection" data-id="formSectionWhitelist">
                            <div className="formGroup">
                                <label htmlFor="desc">How many people do you aim to have in your whitelist, and
                                    how many different whitelists do you want to have?</label>
                                <p className="exm">
                                    Example: <br/>
                                    2 Whitelists with 2000 people for each.
                                </p>
                                <textarea
                                    name="whitelistdescription" id="whitelistdescription"
                                    className="inp" /*tabIndex={-1}*/
                                    placeholder="Type your whitelist description..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="whitelistdescription">OK</Button>
                                    <span className="msg"/>
                                </footer>

                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Do you want to have a royalties mechanism?</label>
                                <div className="toggle-radio">
                                    <input type="radio" name="isroyalties" id="isroyaltiesyes" className="yes"
                                           value="yes" /*defaultChecked*/
                                    />
                                    <input type="radio" name="isroyalties" id="isroyaltiesno" className="no"
                                           value="no"/>
                                    <div className="switch">
                                        <label className="yes" htmlFor="isroyaltiesyes">Yes</label>
                                        <label className="no" htmlFor="isroyaltiesno">No</label>
                                        <span/>
                                    </div>
                                </div>
                                <footer>
                                    <Button variant="primary" type="button" data-check="isroyalties">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection" data-id="formSectionRoyalties">
                            <div className="formGroup">
                                <label htmlFor="desc">Please describe your royalties mechanism in detail.</label>
                                <p className="exm">
                                    Example: <br/>
                                    1% for the team at this address (0x...) <br/>
                                    2% for the DAO at this address(0x...)
                                </p>
                                <textarea
                                    name="royaltiesdescription" id="royaltiesdescription"
                                    className="inp" /*tabIndex={-1}*/
                                    placeholder="Type your royalties mechanism..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="royaltiesdescription">OK</Button>
                                    <span className="msg"/>
                                </footer>

                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">What's the aimed minting price for this collection?</label>
                                <input
                                    type="text" name="price" id="price" className="inp" /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type the price..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" data-check="price">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="desc">Can you describe how do you imagine your minting event?</label>
                                <p className="exm">
                                    Example: <br/>
                                    During the first hour, the whitelisted users will be able to mint with a limit of 3
                                    NFTs per address.
                                    After the first hour, it'll be opened to the public without any limit.
                                </p>
                                <textarea
                                    name="mintingdescription" id="mintingdescription" className="inp" /*tabIndex={-1}*/
                                    placeholder="Describe your minting event..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="mintingdescription">OK</Button>
                                    <span className="msg"/>
                                </footer>

                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Your Website</label>
                                <p className="exm">
                                    Example: https://www.launchart.io
                                </p>
                                <input
                                    type="text" name="website" id="website" className="inp" /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type your website url..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" data-check="website">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Twitter account</label>
                                <p className="exm">
                                    Example: @launchartio
                                </p>
                                <input
                                    type="text" name="twitteraccount" id="twitteraccount"
                                    className="inp" /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type your Twitter account..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="twitteraccount">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Telegram Handle</label>
                                <p className="exm">
                                    Example: @launchartio
                                </p>
                                <input
                                    type="text" name="telegramaccount" id="telegramaccount" className="inp"
                                    /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type your Telegram account..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="telegramaccount">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Discord group link</label>
                                <p className="exm">
                                    Example: https://discord.gg/yourInviteKey
                                </p>
                                <input
                                    type="text" name="discordlink" id="discordlink" className="inp" /*tabIndex={-1}*/
                                    role="presentation" autoComplete="off"
                                    placeholder="Type your discord invite link..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" data-check="discordlink">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="desc">Contact Information</label>
                                <p className="exm">
                                    How should we contact you?
                                </p>
                                <textarea
                                    name="contactinformation" id="contactinformation" className="inp" /*tabIndex={-1}*/
                                    placeholder="Type your contact information..."
                                />
                                <footer>
                                    <Button variant="primary" type="button"
                                            data-check="contactinformation">OK</Button>
                                    <span className="msg"/>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup" style={{textAlign: "center"}} id="submitSection">
                                <p>If you are ready to launch</p>
                                <Button sx={styles.submitButton} variant="primary" type="button" onClick={onFormSubmit}>Submit
                                    Form</Button>
                            </div>
                        </div>

                    </form>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

const styles = {
    appform: {
        // position: 'absolute',
        // left: 0,
        // top: 0,
        // right: 0,
        // bottom: 0,
        '.formSection': {
            width: ['90%', '70%', '70%', '70%', '60%', '50%'],
            paddingLeft: ['10%', '0', '0', '0', '0', '0'],
            paddingTop: '60px',
            margin: 'auto',
            height: '100vh',
            display: 'none',
            alignContent: 'center',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            '&.open': {
                display: 'flex'
            },
            '.formGroup': {
                flex: 1,
                'footer': {
                    paddingTop: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '2px solid',
                    borderColor: 'primary',
                    marginTop: '2',
                }
            },
            '.msg': {
                color: 'muted',
                '&.wrn': {
                    color: 'warning',
                }
            },
            'label': {
                display: 'block',
                padding: '0 0 .6rem 0',
                fontSize: '1.3rem',
                lineHeight: '1.6rem',
            },
            'p.exm': {
                margin: '.7rem 0'
            },
            "input[type='text'],textarea": {
                display: 'block',
                width: '100%',
                border: 'none',
                padding: '8px 0',
                backgroundColor: 'transparent',
                outline: '0',
                color: 'heading',
                fontSize: '1.4rem',
                resize: 'none',
                '&:focus, &:active': {
                    outline: '0',
                    boxShadow: 'none'
                }
            },
            'textarea': {
                height: '100px'
            },
            '.dateGroup': {
                "input[type='text']": {
                    display: "inline-block",
                    width: ["28%", "24%", "22%", "17%", "17%", "18%", "20%"],
                    backgroundColor: "backgroundSecondary",
                    padding: ['8px 2px', '8px 4px', '8px 6px', '8px', '8px 12px', '8px 16px',],
                },
                '.sep': {
                    display: "inline-block",
                    fontSize: '1.4rem',
                    margin: ["0 .25rem", "0 .2rem", "0 .4rem", "0 .6rem", "0 .8rem", "0 1rem",],
                }
            }
        },
        "#formSection0": {
            width: '80%',
            paddingLeft: '0',
            justifyContent: ['center', 'center', 'center', 'flex-start', 'flex-start', 'flex-start'],
            alignItems: ['flex-start', 'flex-start', 'flex-start', 'center', 'center', 'center'],
            flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
            '.infoLogo': {
                flex: [0, 0, 0, 1, 1, 1],
                marginBottom: [5, 5, 5, 0, 0, 0],
                'img': {
                    width: ['100%', '100%', '100%', '80%', '80%', '80%'],
                }
            },
            '.infoText': {
                flex: [0, 0, 0, 1, 1, 1],
                h1: {
                    marginTop: 0
                }
            },
        },
        '.sideNav': {
            position: 'fixed',
            left: 0,
            top: '60px',
            bottom: 0,
            zIndex: 5,
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-around',
            '&.sideNavShow': {
                display: 'flex'
            },
            'ul': {
                display: 'flex',
                height: '90%',
                maxHeight: '500px',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
            'ul,li': {
                listStyleType: 'none',
                margin: '0',
                padding: '0',
            },
            'li': {
                display: 'block',
                margin: '0 0 0 16px',
                'a': {
                    textIndent: '-9999px',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    '&:after': {
                        content: "''",
                        display: 'block',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'heading',
                        transition: 'all .5s ease',
                    },
                },
                '&.active': {
                    'a': {
                        '&:after': {
                            width: '14px',
                            height: '14px',
                            backgroundColor: 'primary',
                        },
                    },
                },
                '&:last-child': {
                    marginBottom: 0,
                    'a': {
                        transition: 'transform .5s ease',
                        background: "center center no-repeat url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNFNzQyNDE7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC40LDEyYzAuMi0wLjgsMC0xLjgtMC42LTIuNWMwLTAuMiwwLTAuMywwLTAuNWMwLTEtMC40LTItMS4yLTIuOEM4LjUsNi4xLDguMyw1LjksOC4xLDUuOA0KCQlDNy45LDUuOSw3LjgsNiw3LjYsNi4yQzYuOCw2LjksNi40LDcuOSw2LjQsOC45YzAsMC4yLDAsMC40LDAsMC41Yy0wLjcsMC43LTAuOSwxLjctMC44LDIuNUgyLjljLTAuNSwwLTAuOC0wLjUtMC42LTFMNy40LDAuNA0KCQljMC4yLTAuNSwxLTAuNSwxLjIsMEwxMy43LDExYzAuMiwwLjUtMC4xLDEtMC42LDFIMTAuNHoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOC41LDguOEM4LjIsOSw3LjgsOSw3LjUsOC44Yy0wLjMtMC4zLTAuMy0wLjcsMC0wLjljMC4zLTAuMywwLjctMC4zLDAuOSwwQzguNyw4LjEsOC43LDguNSw4LjUsOC44eiIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNS43LDEyIDUuNywxMiA1LjcsMTIgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC40LDEyTDEwLjQsMTJDMTAuMywxMiwxMC4zLDEyLDEwLjQsMTJMMTAuNCwxMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAuNCwxMmwtMS43LDMuNmMtMC4yLDAuNS0xLDAuNS0xLjIsMEw1LjcsMTJjMCwwLDAsMCwwLDBjMC42LTAuNiwxLjQtMSwyLjMtMUM4LjksMTEsOS43LDExLjQsMTAuNCwxMg0KCQlDMTAuMywxMiwxMC4zLDEyLDEwLjQsMTJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==')",
                        '&:after': {
                            display: 'none',
                            width: '16px',
                            height: '16px',
                        },
                    },
                    '&.active': {
                        'a': {
                            transform: 'scale(2)'
                        }
                    }
                },
            },
            '&.toTheMoon': {
                'li': {
                    "&[data-index='1']": {
                        'a': {
                            background: "center center no-repeat url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM3RjdCNUQ7fSAuc3Qxe2ZpbGw6I0ZFRTY3Mjt9IC5zdDJ7ZmlsbDojQTA5ODY0O30gLnN0M3tmaWxsOiM2OTYyMkM7fTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLjguNWMuMy40LjMuOSAwIDEuMy0uOSAxLjMtMS4zIDIuOS0xLjMgNC41IDAgNC41IDMuNyA4LjIgOC4yIDguMiAxLjYgMCAzLjEtLjUgNC41LTEuMy40LS4zLjktLjMgMS4zIDAgLjIuMS4zLjMuNC41LjItMS43LjEtMy41LS40LTUuMy0xLjgtNS42LTcuNC05LTEzLjEtOC4yLjEgMCAuMy4xLjQuM3oiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNLjYgMTUuNmMyIDYuMyA4LjggOS44IDE1LjEgNy44IDQuNS0xLjQgNy42LTUuMyA4LjItOS44LS4xLS4yLS4yLS4zLS40LS41LS40LS4zLS45LS4zLTEuMyAwLTEuMy45LTIuOSAxLjMtNC41IDEuMy00LjUgMC04LjItMy43LTguMi04LjIgMC0xLjYuNS0zLjEgMS4zLTQuNS4zLS40LjMtLjkgMC0xLjMtLjEtLjItLjMtLjMtLjUtLjRsLTEuOS42Yy02LjMgMi05LjggOC43LTcuOCAxNXoiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTAuNyAxNy43YzEuMS0uNCAxLjctMS42IDEuNC0yLjctLjQtMS4xLTEuNi0xLjctMi43LTEuNC0xLjEuNC0xLjcgMS43LTEuNCAyLjguNCAxLjEgMS41IDEuNyAyLjcgMS4zek01LjcgMTEuM2MuNy0uMiAxLjEtLjkuOC0xLjYtLjItLjctLjktMS4xLTEuNi0uOXMtMS4xLjktLjggMS42Yy4yLjcuOSAxLjEgMS42Ljl6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTIwLjQgNy40Yy41LS4xLjYtLjguNC0xLjUtLjItLjctLjctMS4xLTEuMi0xLS41LjEtLjYuOC0uNCAxLjUuMi43LjcgMS4xIDEuMiAxek0xNi40IDIuN2MuMS0uNi0uNS0xLjItMS4zLTEuNC0uOS0uMi0xLjcuMS0xLjguNy0uMS42LjUgMS4yIDEuMyAxLjQuOC4yIDEuNi0uMSAxLjgtLjd6TTE5LjkgMTEuNWMuMi0uOS0uNC0xLjctMS4yLTEuOS0uOS0uMi0xLjcuMy0xLjkgMS4yLS4yLjkuNCAxLjcgMS4yIDEuOS45LjEgMS43LS40IDEuOS0xLjJ6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTguNCAzLjhjMS4xLS4zIDEuOC0xLjEgMS42LTEuOC0uMi0uNy0xLjMtMS0yLjQtLjZzLTEuOSAxLjItMS42IDEuOWMuMi43IDEuMi45IDIuNC41ek0xNy4xIDIxLjZjMS4xLS40IDEuOS0xLjIgMS42LTEuOS0uMi0uNy0xLjMtLjktMi40LS42cy0xLjkgMS4yLTEuNiAxLjljLjIuOCAxLjMgMSAyLjQuNnpNNC4yIDE5LjRjLjIuNC41LjguOSAxLjEuNy41IDEuNS44IDIgLjYuMi0uMS4zLS4xLjQtLjMuNS0uNiAwLTEuNi0uOS0yLjMtLjctLjUtMS41LS44LTItLjYtLjIuMS0uMy4xLS40LjMtLjIuMy0uMi43IDAgMS4yeiIvPjwvc3ZnPg==')",
                            transform: 'scale(2)',
                            '&:after': {
                                display: 'none',
                                width: '16px',
                                height: '16px',
                            },
                        }
                    },
                    '&:last-child': {
                        'a': {
                            background: "inherit",
                            '&:after': {
                                display: 'inherit',
                            },
                        },
                        '&.active': {
                            'a': {
                                transform: 'inherit'
                            }
                        }
                    },
                    ' &.active': {
                        'a': {
                            '&:after': {
                                backgroundColor: 'heading',
                                width: '4px',
                                height: '4px',
                            },
                        },
                    },
                    '&.ship': {
                        'a': {
                            transition: 'none',
                            transform: 'scale(2) !important',
                            background: "center center no-repeat url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNFNzQyNDE7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC40LDEyYzAuMi0wLjgsMC0xLjgtMC42LTIuNWMwLTAuMiwwLTAuMywwLTAuNWMwLTEtMC40LTItMS4yLTIuOEM4LjUsNi4xLDguMyw1LjksOC4xLDUuOA0KCQlDNy45LDUuOSw3LjgsNiw3LjYsNi4yQzYuOCw2LjksNi40LDcuOSw2LjQsOC45YzAsMC4yLDAsMC40LDAsMC41Yy0wLjcsMC43LTAuOSwxLjctMC44LDIuNUgyLjljLTAuNSwwLTAuOC0wLjUtMC42LTFMNy40LDAuNA0KCQljMC4yLTAuNSwxLTAuNSwxLjIsMEwxMy43LDExYzAuMiwwLjUtMC4xLDEtMC42LDFIMTAuNHoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOC41LDguOEM4LjIsOSw3LjgsOSw3LjUsOC44Yy0wLjMtMC4zLTAuMy0wLjcsMC0wLjljMC4zLTAuMywwLjctMC4zLDAuOSwwQzguNyw4LjEsOC43LDguNSw4LjUsOC44eiIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNS43LDEyIDUuNywxMiA1LjcsMTIgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC40LDEyTDEwLjQsMTJDMTAuMywxMiwxMC4zLDEyLDEwLjQsMTJMMTAuNCwxMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAuNCwxMmwtMS43LDMuNmMtMC4yLDAuNS0xLDAuNS0xLjIsMEw1LjcsMTJjMCwwLDAsMCwwLDBjMC42LTAuNiwxLjQtMSwyLjMtMUM4LjksMTEsOS43LDExLjQsMTAuNCwxMg0KCQlDMTAuMywxMiwxMC4zLDEyLDEwLjQsMTJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==')",
                            '&:after': {
                                display: 'none',
                                width: '16px',
                                height: '16px',
                            },
                        },
                    }
                },
            }
        },
        '.toggle-radio': {
            position: 'relative',
            display: 'inlineBlock',
            width: '150px',
            height: '50px',
            margin: '10px 0 0 0',
            '.switch': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '150px',
                height: '50px',
                textAlign: 'center',
                margin: '-30px 0 0 -75px',
                backgroundColor: 'transparent !important',
                transition: 'all 0.2s ease',
                borderRadius: '4px',
                span: {
                    position: 'absolute',
                    width: '20px',
                    height: '4px',
                    top: '50%',
                    left: '50%',
                    margin: '-2px 0px 0px -9px',
                    backgroundColor: 'muted',
                    display: 'block',
                    transform: 'rotate(0deg)',
                    transition: 'all 0.2s ease',
                    '&:after': {
                        content: "''",
                        display: 'block',
                        opacity: 0,
                        position: 'absolute',
                        width: '4px',
                        height: '12px',
                        marginTop: '-8px',
                        background: '#fff',
                        transition: 'all 0.2s ease',
                    }
                },
            },
            'input[type=radio]': {
                display: 'none'
            },
            label: {
                cursor: 'pointer',
                color: 'muted',
                width: '60px',
                lineHeight: '50px',
                transition: 'all 0.2s ease',
            },
            'label.yes': {
                position: 'absolute',
                left: '0px',
                height: '20px',
            },
            'label.no': {
                position: 'absolute',
                right: '0',
            },
            'input.no': {
                '&:checked ~ .switch': {
                    background: '#bb0000',
                },
                '&:checked ~ .switch span': {
                    background: '#bb0000',
                    marginLeft: '-8px',
                    transform: 'rotate(-45deg)'
                },
                '&:checked ~ .switch span:after': {
                    opacity: 1,
                    background: '#bb0000',
                    height: '20px',
                    marginTop: '-8px',
                    marginLeft: '8px'
                },
            },
            'input.yes': {
                '&:checked ~ .switch': {
                    background: '#00bc9c',
                },
                '&:checked ~ .switch span': {
                    background: '#00bc9c',
                    margin: '-2px 0px 0px -4px',
                    transform: 'rotate(-45deg)'
                },
                '&:checked ~ .switch span:after': {
                    opacity: 1,
                    background: '#00bc9c',
                    width: '4px',
                    height: '12px',
                    marginTop: '-8px',
                },
            },
            'input.yes:checked ~ .switch label.yes': {
                color: '#00bc9c'
            },
            'input.no:checked ~ .switch label.no': {
                color: '#bb0000'
            },
        },
    },
    submitButton: {
        '&[disabled]': {
            border: '1px solid #999999',
            backgroundColor: '#cccccc',
            color: '#898989',
        }
    }
};
