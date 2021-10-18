import React from 'react';
import epert1 from '../../../images/expert/epert2.png'
import expert2 from '../../../images/expert/expert1.png'
import expert3 from '../../../images/expert/expert3.png'
import Expert from '../Expert/Expert';
import '../Product/Product.css'




const experts = [
    {
        img: epert1,
        name: 'rashmi ras',
        mail: 'ramshi@ras.com',
        job: 'beauty therapy'
    },
    {
        img: expert2,
        name: 'hamshi has',
        mail: 'hamshi@has.com',
        job: 'Hair Designer'
    },
    {
        img: expert3,
        name: 'eamshi kas',
        mail: 'eamshi@kas.com',
        job: 'facial expert'
    },


]

const Experts = () => {



    return (
        <div id="experts" className='container'>
            <div className='font-h4'>
                <h1>Meets Out Experts</h1>
                <hr />
                <h1>Our those share we capture</h1>
            </div>

            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }

            </div>

        </div>
    );
};

export default Experts;