import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectEmployee}>Get Simpsons</button>
        </div>
    );
};

export  default  GenerateEmployee;