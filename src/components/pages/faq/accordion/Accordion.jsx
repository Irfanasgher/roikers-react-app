import React, {Component} from 'react';
import './Accordion.scss';
class Accordion extends Component {
    render() {
        return (
            <div id='accordion'>
                {this.props.data.map((data , index) =>{
                    return(

                <div className="container accordion-latestblog-section" id={data.main_id} key={data.id}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-offset-1 col-md-10 col-12  accordion-section">
                            <div className="section-header d-flex align-items-center">
                                {/*<img src={`${this.props.image}`} height={50}/>*/}
                                <img src={data.image} height={50}/>
                                <h3>{data.heading}</h3>
                            </div>
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                {data.accordionData.map((data,index) =>{
                                    return(
                                        <div className="panel panel-default" key={data.id}>
                                            <div className="panel-heading" role="tab" id={data.id}>
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                                       href={data.href_id} aria-expanded={data.aria_expanded}
                                                       aria-controls={data.aria_controls}>{data.heading}</a>
                                                </h4>
                                            </div>
                                            <div id={data.subling_id} className="panel-collapse collapse in" role="tabpanel"
                                                 aria-labelledby={data.aria_labelledby}>
                                                <div className="panel-body">
                                                    <p>{data.para}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/*<div className="panel panel-default">*/}
                                {/*    <div className="panel-heading" role="tab" id="accordion_1">*/}
                                {/*        <h4 className="panel-title">*/}
                                {/*            <a role="button" data-toggle="collapse" data-parent="#accordion"*/}
                                {/*               href="#accordion1" aria-expanded="true"*/}
                                {/*               aria-controls="accordion1">¿Por que he de registrarme en Roikers?</a>*/}
                                {/*        </h4>*/}
                                {/*    </div>*/}
                                {/*    <div id="accordion1" className="panel-collapse collapse in" role="tabpanel"*/}
                                {/*         aria-labelledby="accordion_1">*/}
                                {/*        <div className="panel-body">*/}
                                {/*            <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santiumuo*/}
                                {/*                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illomas*/}
                                {/*                inventore veritatis et quasi architecto beatae vitae dicta sunt*/}
                                {/*                explicaon Nemo enim ipsam voluptatem quia voluptas</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="panel panel-default">*/}
                                {/*    <div className="panel-heading" role="tab" id="accordion_2">*/}
                                {/*        <h4 className="panel-title">*/}
                                {/*            <a className="collapsed" role="button" data-toggle="collapse"*/}
                                {/*               data-parent="#accordion" href="#accordion2" aria-expanded="false"*/}
                                {/*               aria-controls="accordion2">¿Por que he de registrarme en Roikers?</a>*/}
                                {/*        </h4>*/}
                                {/*    </div>*/}
                                {/*    <div id="accordion2" className="panel-collapse collapse" role="tabpanel"*/}
                                {/*         aria-labelledby="accordion_2">*/}
                                {/*        <div className="panel-body">*/}
                                {/*            <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santiumuo*/}
                                {/*                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illomas*/}
                                {/*                inventore veritatis et quasi architecto beatae vitae dicta sunt*/}
                                {/*                explicaon Nemo enim ipsam voluptatem quia voluptas</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="panel panel-default">*/}
                                {/*    <div className="panel-heading" role="tab" id="accordion_3">*/}
                                {/*        <h4 className="panel-title">*/}
                                {/*            <a className="collapsed" role="button" data-toggle="collapse"*/}
                                {/*               data-parent="#accordion" href="#accordion3" aria-expanded="false"*/}
                                {/*               aria-controls="accordion3">¿Por que he de registrarme en Roikers?</a>*/}
                                {/*        </h4>*/}
                                {/*    </div>*/}
                                {/*    <div id="accordion3" className="panel-collapse collapse" role="tabpanel"*/}
                                {/*         aria-labelledby="accordion_3">*/}
                                {/*        <div className="panel-body">*/}
                                {/*            <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santiumuo*/}
                                {/*                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illomas*/}
                                {/*                inventore veritatis et quasi architecto beatae vitae dicta sunt*/}
                                {/*                explicaon Nemo enim ipsam voluptatem quia voluptas</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="panel panel-default">*/}
                                {/*    <div className="panel-heading" role="tab" id="accordion_4">*/}
                                {/*        <h4 className="panel-title">*/}
                                {/*            <a className="collapsed" role="button" data-toggle="collapse"*/}
                                {/*               data-parent="#accordion" href="#accordion4" aria-expanded="false"*/}
                                {/*               aria-controls="accordion4">¿Por que he de registrarme en Roikers?</a>*/}
                                {/*        </h4>*/}
                                {/*    </div>*/}
                                {/*    <div id="accordion4" className="panel-collapse collapse" role="tabpanel"*/}
                                {/*         aria-labelledby="accordion_4">*/}
                                {/*        <div className="panel-body">*/}
                                {/*            <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santiumuo*/}
                                {/*                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illomas*/}
                                {/*                inventore veritatis et quasi architecto beatae vitae dicta sunt*/}
                                {/*                explicaon Nemo enim ipsam voluptatem quia voluptas</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="panel panel-default">*/}
                                {/*    <div className="panel-heading" role="tab" id="accordion_5">*/}
                                {/*        <h4 className="panel-title">*/}
                                {/*            <a className="collapsed" role="button" data-toggle="collapse"*/}
                                {/*               data-parent="#accordion" href="#accordion5" aria-expanded="false"*/}
                                {/*               aria-controls="accordion5">¿Por que he de registrarme en Roikers?</a>*/}
                                {/*        </h4>*/}
                                {/*    </div>*/}
                                {/*    <div id="accordion5" className="panel-collapse collapse" role="tabpanel"*/}
                                {/*         aria-labelledby="accordion_5">*/}
                                {/*        <div className="panel-body">*/}
                                {/*            <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santiumuo*/}
                                {/*                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illomas*/}
                                {/*                inventore veritatis et quasi architecto beatae vitae dicta sunt*/}
                                {/*                explicaon Nemo enim ipsam voluptatem quia voluptas</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        );
    }
}

export default Accordion;