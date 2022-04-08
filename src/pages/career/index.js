import React, {useEffect, useRef} from 'react';
import {Box, Button, Container, Heading, jsx, Text, ThemeProvider} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import launchartBanner from "../../assets/images/hiring.svg";
import {rgba} from "polished";
import emailjs from "@emailjs/browser";

export default function IndexPage() {
    const mainForm = useRef();

    /** Form Submit */
    function onFormSubmit() {
        const submitSection = document.getElementById('submitSection'),
            p = submitSection.querySelector('p'),
            button = submitSection.querySelector('button');
        button.disabled = true;
        if (validateAll()) {
            p.innerText = 'Please Wait';

            emailjs.sendForm('service_cmj7sx8', 'template_jobform', mainForm.current, 'GMzo0UGFw4p0siOUd')
                .then((result) => {
                    p.innerHTML = 'We’re gathering information, <br> and LaunchArt will contact you <br> if your application is positive. <br><br> <strong>Thanks!</strong>';
                    document.getElementById("form").reset();
                    button.style.display = 'none';
                }, (error) => {
                    p.innerText = 'An error occurred while submitting the form. <br> Please try again later. <br> If the error persists, please let us know at support@launchart.io';
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
            'role', 'experience'/*,'discordexperience'*/, 'profession',
            'timezone', 'hours', 'portfolio', 'contactinformation'
        ];

        for (let index, el, key, i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (!validate(key)) {
                return false;
            }
        }
        return ret;
    }

    function validate(key) {
        let el;
        el = document.querySelector("[name='" + key + "']");
        const section = el.closest(".formSection");
        const msg = section.querySelector('.msg');
        let error = false;
        if (!el.value.trim().length) {
            error = true;
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
            <Layout>
                <SEO
                    title="LaunchArt | We Are Hiring!"
                    description="LaunchArt is growing, and we want to add new faces to our family!"
                />
                <Box as="section" id="home" sx={styles.section}>
                    <Container>
                        <Box sx={styles.contentWrapper}>
                            <Box sx={styles.content}>
                                <Heading as="h1">
                                    We Are Hiring!
                                </Heading>
                                <Text as="p">
                                    LaunchArt is growing, and we want to add new faces to our family!
                                    Let’s follow our dreams together!
                                </Text>
                                <Text as="p">
                                    We’re now looking for a Junior Developer, Graphic Designer,
                                    Content Creators, Community Managers, Community Moderators
                                </Text>
                            </Box>
                            <Box sx={styles.hiringLogo}>
                                <img src={launchartBanner} alt="hiring logo"/>
                            </Box>
                        </Box>
                        <Box sx={styles.contentForm}>
                            <Box sx={styles.form}>
                                <h2>Employment Application Form</h2>
                                <form ref={mainForm} autoComplete="off" id="form">
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="role">What is your desired role in LaunchArt</label>
                                            <select id="role" name="role" className="slct">
                                                <option value="">Please Select</option>
                                                <option value="Junior Developer">Junior Developer</option>
                                                <option value="Graphic Designer">Graphic Designer</option>
                                                <option value="Content Creators">Content Creators</option>
                                                <option value="Community Managers">Community Managers</option>
                                                <option value="Community Moderators">Community Moderators</option>
                                            </select>
                                            <footer>
                                                <span className="msg"/>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="experience">Your experience in NFTs</label>
                                            <input type="text" name="experience" id="experience"
                                                   className="inp" role="presentation" autoComplete="off"
                                                   placeholder="Type the experience..."/>
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="discordexperience">Your discord experience</label>
                                            <input type="text" name="discordexperience" id="discordexperience"
                                                   className="inp" role="presentation" autoComplete="off"
                                                   placeholder="Type the discord experience..."/>
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="profession">What is your profession</label>
                                            <input type="text" name="profession" id="profession"
                                                   className="inp" role="presentation" autoComplete="off"
                                                   placeholder="Type the profession..."/>
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="timezone">Which timezone are you mainly in</label>
                                            <input type="text" name="timezone" id="timezone"
                                                   className="inp" role="presentation" autoComplete="off"
                                                   placeholder="Type your timezone..."/>
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="hours">How many hours in a day you’re online</label>
                                            <input type="text" name="hours" id="hours"
                                                   className="inp" role="presentation" autoComplete="off"
                                                   placeholder="Type your hours..."/>
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="portfolio">
                                                Your past or ongoing Works that you can share with us
                                                (Portfolio, Project name & Discord Links)
                                            </label>
                                            <textarea name="portfolio" id="portfolio"
                                                      className="inp"
                                                      placeholder="Type your Portfolio..."
                                            />
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup">
                                            <label htmlFor="contactinformation">
                                                Contact Information
                                            </label>
                                            <textarea name="contactinformation" id="contactinformation"
                                                      className="inp"
                                                      placeholder="Type your contact information..."
                                            />
                                            <footer><span className="msg"/></footer>
                                        </div>
                                    </div>
                                    <div className="formSection open">
                                        <div className="formGroup" style={{textAlign: "center"}} id="submitSection">
                                            <p/>
                                            {/*<p>If you are ready to launch</p>*/}
                                            <Button sx={styles.submitButton} variant="primary" type="button"
                                                    onClick={onFormSubmit}>
                                                Submit Form
                                            </Button>
                                        </div>
                                    </div>


                                </form>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Layout>
        </ThemeProvider>
    );
}

const styles = {
    section: {
        //height: [null, null, null, null, '100vh', '100vh',]
    },
    hiringLogo: {
        width: [null, null, null, '100%', '60%', '50%'],
        height: 'auto',
        marginTop: [null, null, null, '5rem', '5rem', '5rem'],
        marginBottom: '1rem',
    },
    contentWrapper: {
        display: ['block', null, null, 'flex', 'flex', 'flex'],
        gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
        gap: [0, 0, 0, 0, 10],
        //minHeight: ['80vh', '90vh', '90vh', '90vh', '90vh', '90vh', '90vh'],
        minHeight: '60vh',
        pt: ['70px', null, '60px', '70px', '25px', null, 0],
        textAlign: ['left', null, 'left'],
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentForm: {
        display: 'block',
        maxWidth: '600px',
        m: 'auto',
        textAlign: 'center',
    },
    form: {
        margin: '0 auto 5rem auto',
        pt: '20px',
        '.formGroup': {
            textAlign: 'left',
            flex: 1,
            'footer': {
                paddingTop: [1, 2, 2, 2, 2, 2,],
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                borderTop: '2px solid',
                borderColor: 'primary',
                margin: '1 0 4 0',
                height: '50px',
            }
        },
        '.msg': {
            display: 'block',
            textAlign: 'right',
            color: 'muted',
            fontSize: ['.8rem', '.9rem', '1rem', '1rem', '1rem', '1.1rem',],
            '&.wrn': {
                color: 'warning',
            }
        },
        'label': {
            display: 'block',
            padding: '0',
            paddingBottom: ['.3rem', '.3rem', '.3rem', '.4rem', '.5rem', '.6rem',],
            fontSize: ['1rem', '1rem', '1.1rem', '1.2rem', '1.3rem', '1.3rem',],
            lineHeight: ['1.1rem', '1.2rem', '1.3rem', '1.4rem', '1.5rem', '1.6rem',],
        },
        'p.exm': {
            margin: '.7rem 0'
        },
        "input[type='text'],textarea, select": {
            display: 'block',
            width: '100%',
            border: 'none',
            padding: '8px 0',
            backgroundColor: 'transparent',
            outline: '0',
            color: 'heading',
            fontSize: ['1rem', '1rem', '1rem', '1.2rem', '1.3rem', '1.4rem',],
            resize: 'none',
            '&:focus, &:active': {
                outline: '0',
                boxShadow: 'none'
            }
        },
        'textarea': {
            height: ['50px', '60px', '70px', '80px', '90px', '100px',],
        },
        '.slct *': {
            backgroundColor: 'background',
        },
    },
    content: {
        maxWidth: [null, null, null, null, null, '80%'],
        //margin: [null, null, null, '0 auto', 0],
        textAlign: [null, null, null, 'left', 'left'],
        marginTop: '5rem',
        marginBottom: '1rem',
        h1: {
            color: 'text',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 600,
            fontSize: ['34px', '34px', '34px', '44px', '40px', '49px', '62px'],
            lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
            textShadow: '2px 1px var(--theme-ui-colors-textShadow)',
            //textShadow: '0 0 3px #fff'
        },
        p: {
            color: 'text',
            maxWidth: [null, null, null, 'none', 450],
            fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
            lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
            mt: ['25px', null, null, null, 4],
            textShadow: '2px 1px var(--theme-ui-colors-textShadow)'
        },
    },
};