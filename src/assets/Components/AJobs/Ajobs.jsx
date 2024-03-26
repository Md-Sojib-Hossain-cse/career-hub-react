const Ajobs = ({job}) => {
    const {category_name , availability , logo} = job;
    return (
        <div className="flex gap-4 my-4">
            <img src={logo} alt="" />
            <div>
                <h6>Title : {category_name}</h6>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default Ajobs;