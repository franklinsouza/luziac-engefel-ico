import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
  ssr: false,
})

export default function Counter() {
    return (
        <>
            <div id="counter" className="counter-area section-pt-140 section-pb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="counter-item-wrap">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="counter-item">                                            
                                            <CounterUp count={51} time={1} />
                                            <p>Completed <span>projects</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="counter-item">                                            
                                            <CounterUp count={30} time={1} />
                                            <p>under <span>construction</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="counter-item">                                            
                                            <CounterUp count={17} time={1} />
                                            <p>Projects <span>underway</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="counter-item">                                            
                                            <CounterUp count={45} time={1} />
                                            <p>Joint ventures <span>completed</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
