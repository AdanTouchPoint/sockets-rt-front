import React, {Fragment, useState, useEffect} from 'react';
import io from 'socket.io-client'
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import WasteoMeter from "./components/WasteoMeter";
import PerHouse from "./components/PerHouse";
import axios from 'axios'

const CONNECTION_PORT = 'localhost:8080/'
let socket = io(CONNECTION_PORT)

function App() {
    const [showSpecifics, setShowSpecifics] = useState(true)
    const [allPrograms, setAllPrograms] = useState([])
    const [totalPerHouse, setTotalPerHouse] = useState()
    const [totalPerPerson, setTotalPerPerson] = useState()
    const [totalAmount, setTotalAmount] = useState([])

    const programs = async () => {
        let data = await axios.get(`http://localhost:8080/program`)
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

    // socket.on('deletedPrograms', function (data) {
    //  let del = allPrograms.forEach(function (item, index, object) {
    //         if (item.id === data.id) {
    //             object.splice(index, 1);
    //             return item
    //         }
    //     });
    //  setAllPrograms([del])
    // });

    socket.on('newPrograms', function (data) {
        setAllPrograms([...allPrograms,data])
    });

    const amount = () => {
        let data = allPrograms.map((item) => {
            return item.monto
        })
        let suma = data.reduce(function (previous, current) {
            return previous + current;
        }, 0);

        setTotalAmount(suma)
    }

    const perHouse = () => {
        let payload = totalAmount / 8420000
        setTotalPerHouse(payload)
    }
    const perPerson = () => {
        let payload = totalAmount / 24998000
        setTotalPerPerson(payload)
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
    }, [totalAmount])

    useEffect(() => {
        console.log(totalPerHouse)
    }, [totalPerHouse])
    useEffect(() => {
        console.log(totalPerPerson)
    }, [totalPerPerson])

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <header style={{background: '#e4eaf1'}}>
                <img width={'15%'} src='../public/legalise-vaping-logo.png' alt='img1'/>
            </header>
            <div style={{background: '#6a7b8d', flex: '1'}}>
                <h1 style={{color: 'white'}}>
                    WASTE WATCHERS
                </h1>
                <p style={{color: 'white'}}>The Australian Taxpayers' Alliance budget night tracker</p>
                <WasteoMeter
                    totalAmount={totalAmount}
                    allPrograms={allPrograms}
                    showSpecifics={showSpecifics}
                    setShowSpecifics={setShowSpecifics}/>
                <PerHouse
                    totalPerHouse={totalPerHouse}
                    totalPerPerson={totalPerPerson}
                    totalAmount={totalAmount}
                />
                <div style={{background: 'white', alignItems: 'center'}}>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTimelineEmbed
                                sourceType="timeline"
                                id="539487832448843776"
                                theme="dark"
                                options={{height: 600, width: 600}}
                            />
                        </div>
                    </div>
                    <div>
                        <h1>
                            Get our budget night summary
                        </h1>
                        <input/>
                        <button>
                            Submit
                        </button>
                    </div>
                    <div>
                        <button>
                            Subscribe
                        </button>
                        <button>
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
