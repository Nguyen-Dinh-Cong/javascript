function ChinhSachItem (props){
    const Image=props.imag;
    const Title=props.title;
    const Des=props.des;
    <div className="row">
        <div class="col-md-4">
            <img src={Image} alt="chinhsach"/>
        </div>
        <div className="col-md-8">
            <h5><strong>{Title}</strong></h5>
            <p>{Des}</p>
        </div>
    </div>
}
export default ChinhSachItem