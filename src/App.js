import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import Container from "react-bootstrap/cjs/Container";
import WasteoMeter from "./components/WasteoMeter";
import PerHouse from "./components/PerHouse";
import Footer from './components/Footer'
import logo from './assets/logo-ata-blanco.png'
import fblogo from './assets/fa.jpg'
import instlogo from './assets/in.jpg'
import twitterlog from './assets/tw.jpg'
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";
import axios from 'axios'
import Button from "react-bootstrap/cjs/Button";

// const CONNECTION_PORT = process.env.PORT || 'localhost:8080/'
let socket = io('https://budget-real-time.herokuapp.com')

function App() {
    const [showSpecifics, setShowSpecifics] = useState(true)
    const [allPrograms, setAllPrograms] = useState([])
    const [totalPerHouse, setTotalPerHouse] = useState()
    const [totalPerPerson, setTotalPerPerson] = useState()
    const [totalAmount, setTotalAmount] = useState([])
    const [total, setTotal] = useState([])
    const programs = async () => {
        let data = await axios.get(`https://budget-real-time.herokuapp.com/program`)
        return data
    }
    useEffect(() => {
        programs()
            .then(data => {
                setAllPrograms(data.data.data)
            })
    }, [])
    socket.on('updatedPrograms', function (data) {
        setAllPrograms(allPrograms.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    monto: data.monto ? data.monto : item.monto,
                    programa: data.programa ? data.programa : item.programa
                }
            }
            return item
        }))
    });
    socket.on('deletedPrograms', function (data) {
        let deletePrograms = allPrograms.filter((item) => item.id !== data.id );
     setAllPrograms(deletePrograms)
    });
    socket.on('newPrograms', function (data) {
        setAllPrograms([...allPrograms, data])
    });
    const amount = () => {
        let data = allPrograms.map((item) => {
            return item.monto
        })
        let suma = data.reduce(function (previous, current) {
            return previous + current;
        }, 0);
        let parse = parseFloat(Math.round(suma * 100) / 100).toFixed(2);
        setTotalAmount(parse)
    }
    const formatter = new Intl.NumberFormat('en-GB')
    const perHouse = () => {
        let payload = totalAmount / 8420000
        let parse = parseFloat(Math.round(payload * 100) / 100).toFixed(2);
        const div = formatter.format(parse)
        setTotalPerHouse(div)
    }
    const perPerson = () => {
        let payload = totalAmount / 24998000
        let parse = parseFloat(Math.round(payload * 100) / 100).toFixed(2);
        const div = formatter.format(parse)
        setTotalPerPerson(div)
    }
    useEffect(() => {
        amount()
    }, [allPrograms])

    useEffect(() => {
        console.log(allPrograms)
    }, [allPrograms])

    useEffect(() => {
        console.log(totalAmount)
        perHouse()
        perPerson()
        // setTotal([total])
    }, [totalAmount])
    useEffect(() => {
        console.log(totalPerHouse)
    }, [totalPerHouse])

    useEffect(() => {
        console.log(totalPerPerson)
    }, [totalPerPerson])
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <header>
                <img height={'85%'} src={logo} alt='img1'/>
            </header>
            <div className={'app'} style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
            }}>
                <h1 style={{color: 'white', textAlign: 'center'}}>
                    WASTE WATCHERS
                </h1>
                <p style={{color: 'white'}}>The Australian Taxpayers' Alliance budget night tracker</p>
                <div>
                    <Container xs={11} md={10} xl={4} lg={4}
                               style={{display: "flex", padding: '1px 0px', margin: '26px 0px'}}
                               className={'containerAlt'}>
                        <Col style={{padding: '2px', maxWidth: '200px'}}>
                            <Row>
                                <h3>
                                    Get our budget night summary
                                </h3>
                            </Row>
                        </Col>
                        <Col style={{padding: '2px', maxWidth: '200px'}}>

                            <input
                                style={{width: '70%', marginBottom: '5px'}}/>


                            <Button style={{width: '70%'}} variant="secondary" size="sm">
                                Submit
                            </Button>

                        </Col>
                    </Container>
                </div>

                <WasteoMeter
                    setTotal={setTotal}
                    total={total}
                    totalAmount={totalAmount}
                    allPrograms={allPrograms}
                    showSpecifics={showSpecifics}
                    setShowSpecifics={setShowSpecifics}/>
                <div>
                    <PerHouse
                        totalPerHouse={totalPerHouse}
                        totalPerPerson={totalPerPerson}
                        totalAmount={totalAmount}
                    />
                </div>

                {/*<div>*/}

                {/*    <Container md={4} className={'containerAlt'}>*/}
                {/*        <div className="centerContent">*/}
                {/*            <h2>*/}
                {/*                <img src={twet} width="60" alt="twitter"/>*/}
                {/*                Live Update*/}
                {/*            </h2>*/}
                {/*            <div className="selfCenter standardWidth">*/}
                {/*                <TwitterTimelineEmbed*/}
                {/*                    sourceType="timeline"*/}
                {/*                    id="539487832448843776"*/}
                {/*                    theme="dark"*/}
                {/*                    options={{height: 600, width: 600}}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </Container>*/}

                {/*</div>*/}

                <div>
                    <Container className={'buttonContainer'}
                               style={{marginTop: '1em', backgroundColor: 'null', display: "flex"}}>
                        <Col xs={7} md={8} className={'buttons'} style={{marginRight: '15px'}}>
                            <Row>
                                <a href={'http://www.taxpayers.org.au/sign-up-newsletter'} target={'blank'}
                                   role={'button'}>
                                    Subscribe
                                </a>
                            </Row>
                        </Col>

                        <Col xs={5} md={8} className={'buttons'}>
                            <Row>
                                <a href={'http://www.taxpayers.org.au/donate'} target={'blank'}>
                                    Donate
                                </a>
                            </Row>
                        </Col>
                    </Container>
                </div>
                <div style={{display: 'flex', marginTop: '3em'}}>
                    <div style={{padding: '8px',}}>
                        <a href={'https://www.facebook.com/AusTaxpayers'} role={'button'} target={'blank'}>
                            <img style={{height: '50px'}} src={fblogo} alt={'tweet'}/>
                        </a>
                    </div>
                    <div style={{padding: '8px'}}>
                        <a href={'https://www.instagram.com/austaxpayersalliance/'} target={'blank'}>
                            <img style={{height: '50px'}} src={instlogo} alt={'tweet'}/>
                        </a>
                    </div>
                    <div style={{padding: '8px'}}>
                        <a href={'https://twitter.com/AusTaxpayers'} target={'blank'}>
                            <img style={{height: '50px'}} src={twitterlog} alt={'tweet'}/>
                        </a>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
