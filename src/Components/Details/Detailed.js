import React, { useEffect, useState } from 'react';
import './Detailed.css';
import { useNavigate } from 'react-router-dom';


let purl = "https://flipkart-api.herokuapp.com/addItemToCart";
let Url;
function Detailed(props) {

    const navigate = useNavigate()
    const [count, setcount] = useState(0);

    const [loadedItem, setLoadedItem] = useState("")
    const [addmsg, setaddmsg] = useState(false);
    const [errormsg, setErrorMsg] = useState(false)
    const [denymsg, setdenymsg] = useState(false)

    const [imgone, setImgone] = useState(true);
    const [imgtwo, setImgtwo] = useState(false);
    const [imgthree, setImgthree] = useState(false);
    const [imgfour, setImgfour] = useState(false);
    const [imgfive, setImgfive] = useState(false);

    const [readmore, setReadmore] = useState(false)


    function imageone() {
        setImgone(true)
        setImgtwo(false)
        setImgthree(false)
        setImgfour(false)
        setImgfive(false)
    }

    function imagetwo() {
        setImgone(false)
        setImgtwo(true)
        setImgthree(false)
        setImgfour(false)
        setImgfive(false)
    }

    function imagethree() {
        setImgone(false)
        setImgtwo(false)
        setImgthree(true)
        setImgfour(false)
        setImgfive(false)
    }

    function imagefour() {
        setImgone(false)
        setImgtwo(false)
        setImgthree(false)
        setImgfour(true)
        setImgfive(false)
    }

    function imagefive() {
        setImgone(false)
        setImgtwo(false)
        setImgthree(false)
        setImgfour(false)
        setImgfive(true)
    }

    function readMoreHandler() {
        setReadmore(true)
    }
    function readLessHandler() {
        setReadmore(false)
    }

    function addToCart() {


        sessionStorage.setItem("attempted", 1)
        if (sessionStorage.getItem("loginStatus") === "false") {
            navigate('/login')
        } else {

            let itemLength = Number(sessionStorage.getItem("length"))

            if (itemLength < 5) {
                let email = sessionStorage.getItem("userInfo").split(',')[1]
                let getamount = Number(sessionStorage.getItem("amount"))
                let getOldamount = Number(sessionStorage.getItem("price"))
                let obj = {
                    email: email,
                    item: loadedItem
                }

                fetch(purl, {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                    .then(res => {
                        if (res.status === 200) {
                            setaddmsg(true)
                            sessionStorage.setItem('amount', getamount + loadedItem.new_price)
                            sessionStorage.setItem('price', getOldamount + loadedItem.old_price)
                            navigate('/cart')
                        } else {
                            setErrorMsg(true)
                        }

                    })


                setTimeout(() => {
                    setaddmsg(false);
                    setErrorMsg(false)
                }, 3000)
            } else {
                setdenymsg(true)
            }

        }

    }
    useEffect(() => {

        let itemid = sessionStorage.getItem("itemId")
        console.log(itemid)
        Url = `https://flipkart-api.herokuapp.com/details/${itemid}`
        fetch(Url)
            .then(res => res.json())
            .then((data) => {
                console.log(data[0])
                setLoadedItem(data[0])
            })

    }, [])

    const displayitem = ({ items }) => {
        if (items) {

            console.log(items)
            // if(items[0].product_specifications[0]){
            //     setpackcont(true)
            // }
            return items.map((item) => {
                return (
                    <div id="maincont">
                        <div id="mainimgcont">
                            <div id="imgnav">
                                <div onMouseOver={imageone} onClick={imageone} className='imgs'>
                                    <img src={item.image_gallery[0]} width="100%" height="100px" />
                                </div>
                                <div onMouseOver={imagetwo} onClick={imagetwo} className='imgs'>
                                    <img src={item.image_gallery[1]} width="100%" height="100px" />
                                </div>
                                <div onMouseOver={imagethree} onClick={imagethree} className='imgs'>
                                    <img src={item.image_gallery[2]} width="100%" height="100px" />
                                </div>
                                <div onMouseOver={imagefour} onClick={imagefour} className='imgs'>
                                    <img src={item.image_gallery[3]} width="100%" height="100px" />
                                </div>
                                <div onMouseOver={imagefive} onClick={imagefive} className='imgs'>
                                    <img src={item.image_gallery[4]} width="100%" height="100px" />
                                </div>

                            </div>
                            <div id="mainimg">
                                <div id="imgdisplay">
                                    {imgone && <img src={item.image_gallery[0]} width="100%" height="550px" />}
                                    {imgtwo && <img src={item.image_gallery[1]} width="100%" height="550px" />}
                                    {imgthree && <img src={item.image_gallery[2]} width="100%" height="550px" />}
                                    {imgfour && <img src={item.image_gallery[3]} width="100%" height="550px" />}
                                    {imgfive && <img src={item.image_gallery[4]} width="100%" height="550px" />}
                                </div>
                            </div>
                            <div className='btns_cart'>
                                <button onClick={addToCart} id="addToCart">BUY NOW</button>
                                {/* <button id="orderNow">ORDER NOW</button> */}
                            </div>
                            <div style={{ marginLeft: "25%" }}>
                                {denymsg && <span style={{ color: "red", fontWeight: "600", fontSize: "18px" }}>Sorry...You cannot add more than 5 items to the cart</span>}
                                {addmsg && <span style={{ color: "#08ad08", fontWeight: "600", fontSize: "18px" }}>1 Item added to the Cart</span>}
                                {errormsg && <span style={{ color: "red", fontWeight: "600", fontSize: "18px" }}>Sorry...could not add item to the Cart</span>}
                            </div>

                        </div>
                        <div id="rightdiv">
                            <p id="companyy">{item.company}</p>
                            <p id="itemname">{item.name}</p>
                            <button id="rating">{item.ratings}<span class="glyphicon glyphicon-star icons"></span></button>
                            <p className='static'>{item.returns}</p>
                            <p className='static'>{item.cod}</p>
                            <p id="seller">SELLER: {item.seller}</p>
                            <p id="deltime">Delivery within 2 Days</p>
                            <p className="b_offer"><i className='glyphicon glyphicon-tags tagcol'></i>{item.offers[0].offer1}</p>
                            <p className="b_offer"><i className='glyphicon glyphicon-tags tagcol'></i>{item.offers[0].offer2}</p>

                            <div id="prices">
                                <span id="new">₹ {item.new_price}</span>
                                <span id="old"><del>{item.old_price}</del></span>
                                <span id="offer">{item.offer}</span>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/F0K6C6S/68264-fl-png.jpg" width="200px" height="60px" />
                            </div>
                            <p id="desc">Description: {item.description}</p>
                            <h2>Product Specifications</h2>
                            <table>
                                <tbody>
                                    {item.product_specifications[0].package_contents && <tr>
                                        <td className='data1'>Package Contents</td>
                                        <td className="data2">{item.product_specifications[0].package_contents}</td>
                                    </tr>}
                                    {item.product_specifications[0].model_name && <tr>
                                        <td className='data1'>Model Name</td>
                                        <td className="data2">{item.product_specifications[0].model_name}</td>
                                    </tr>}
                                    {item.product_specifications[0].primary_product_type && <tr>
                                        <td className='data1'>Primary Product Type</td>
                                        <td className="data2">{item.product_specifications[0].primary_product_type}</td>
                                    </tr>}
                                    {item.product_specifications[0].secondary_product_type && <tr>
                                        <td className='data1'>Secondary Product Type</td>
                                        <td className="data2">{item.product_specifications[0].secondary_product_type}</td>
                                    </tr>}
                                    {item.product_specifications[0].quantity && <tr>
                                        <td className='data1'>Quantity</td>
                                        <td className="data2">{item.product_specifications[0].quantity}</td>
                                    </tr>}
                                    {item.product_specifications[0].features && <tr>
                                        <td className='data1'>Features</td>
                                        <td className="data2">{item.product_specifications[0].features}</td>
                                    </tr>}
                                    {item.product_specifications[0].country && <tr>
                                        <td className='data1'>Country</td>
                                        <td className="data2">{item.product_specifications[0].country}</td>
                                    </tr>}
                                    {item.product_specifications[0].model_number && <tr>
                                        <td className='data1'>Model Number</td>
                                        <td className="data2">{item.product_specifications[0].model_number}</td>
                                    </tr>}
                                    {item.product_specifications[0].color && <tr>
                                        <td className='data1'>Color</td>
                                        <td className="data2">{item.product_specifications[0].color}</td>
                                    </tr>}
                                    {item.product_specifications[0].browse_type && <tr>
                                        <td className='data1'>Browse Type</td>
                                        <td className="data2">{item.product_specifications[0].browse_type}</td>
                                    </tr>}
                                    {item.product_specifications[0].sim_type && <tr>
                                        <td className='data1'>SIM Type</td>
                                        <td className="data2">{item.product_specifications[0].sim_type}</td>
                                    </tr>}
                                    {item.product_specifications[0].hybrid_sim_slot && <tr>
                                        <td className='data1'>Hybrid Sim Slot</td>
                                        <td className="data2">{item.product_specifications[0].hybrid_sim_slot}</td>
                                    </tr>}
                                    {item.product_specifications[0].touchscreen && <tr>
                                        <td className='data1'>Touchscreen</td>
                                        <td className="data2">{item.product_specifications[0].touchscreen}</td>
                                    </tr>}
                                    {item.product_specifications[0].otg_compatible && <tr>
                                        <td className='data1'>OTG_Compatible</td>
                                        <td className="data2">{item.product_specifications[0].otg_compatible}</td>
                                    </tr>}
                                    {item.product_specifications[0].sound_enhancements && <tr>
                                        <td className='data1'>Sound_Enhancements</td>
                                        <td className="data2">{item.product_specifications[0].sound_enhancements}</td>
                                    </tr>}
                                    {item.product_specifications[0].sar_value && <tr>
                                        <td className='data1'>SAR Value</td>
                                        <td className="data2">{item.product_specifications[0].sar_value}</td>
                                    </tr>}
                                    {item.product_specifications[0].Type && <tr>
                                        <td className='data1'>Type</td>
                                        <td className="data2">{item.product_specifications[0].Type}</td>
                                    </tr>}
                                    {item.product_specifications[0].sleeve && <tr>
                                        <td className='data1'>Sleeve</td>
                                        <td className="data2">{item.product_specifications[0].sleeve}</td>
                                    </tr>}
                                    {item.product_specifications[0].Fit && <tr>
                                        <td className='data1'>Fit</td>
                                        <td className="data2">{item.product_specifications[0].Fit}</td>
                                    </tr>}
                                    {item.product_specifications[0].Fabric && <tr>
                                        <td className='data1'>Fabric</td>
                                        <td className="data2">{item.product_specifications[0].Fabric}</td>
                                    </tr>}
                                    {item.product_specifications[0].Ideal_For && <tr>
                                        <td className='data1'>Ideal For</td>
                                        <td className="data2">{item.product_specifications[0].Ideal_For}</td>
                                    </tr>}
                                    {item.product_specifications[0].suitable_for && <tr>
                                        <td className='data1'>Suitable For</td>
                                        <td className="data2">{item.product_specifications[0].suitable_for}</td>
                                    </tr>}
                                    {item.product_specifications[0].style_code && <tr>
                                        <td className='data1'>Style Code</td>
                                        <td className="data2">{item.product_specifications[0].style_code}</td>
                                    </tr>}
                                    {item.product_specifications[0].pattern && <tr>
                                        <td className='data1'>Pattern</td>
                                        <td className="data2">{item.product_specifications[0].pattern}</td>
                                    </tr>}
                                    {item.product_specifications[0].occasion && <tr>
                                        <td className='data1'>Occasion</td>
                                        <td className="data2">{item.product_specifications[0].occasion}</td>
                                    </tr>}
                                    {item.product_specifications[0].decorative_material && <tr>
                                        <td className='data1'>Decorative Material</td>
                                        <td className="data2">{item.product_specifications[0].decorative_material}</td>
                                    </tr>}
                                    {item.product_specifications[0].length_type && <tr>
                                        <td className='data1'>Length Type</td>
                                        <td className="data2">{item.product_specifications[0].length_type}</td>
                                    </tr>}
                                    {item.product_specifications[0].headphone_type && <tr>
                                        <td className='data1'>Headphone Type</td>
                                        <td className="data2">{item.product_specifications[0].headphone_type}</td>
                                    </tr>}
                                    {item.product_specifications[0].inline_remote && <tr>
                                        <td className='data1'>Inline Remote</td>
                                        <td className="data2">{item.product_specifications[0].inline_remote}</td>
                                    </tr>}
                                    {item.product_specifications[0].connectivity && <tr>
                                        <td className='data1'>Connectivity</td>
                                        <td className="data2">{item.product_specifications[0].connectivity}</td>
                                    </tr>}
                                    {item.product_specifications[0].design && <tr>
                                        <td className='data1'>Design</td>
                                        <td className="data2">{item.product_specifications[0].design}</td>
                                    </tr>}
                                    {item.product_specifications[0].processor_brand && <tr>
                                        <td className='data1'>Processor Brand</td>
                                        <td className="data2">{item.product_specifications[0].processor_brand}</td>
                                    </tr>}
                                    {item.product_specifications[0].processor_name && <tr>
                                        <td className='data1'>Processor Name</td>
                                        <td className="data2">{item.product_specifications[0].processor_name}</td>
                                    </tr>}
                                    {item.product_specifications[0].design && <tr>
                                        <td className='data1'>Design</td>
                                        <td className="data2">{item.product_specifications[0].design}</td>
                                    </tr>}
                                    {item.product_specifications[0].generation && <tr>
                                        <td className='data1'>generation</td>
                                        <td className="data2">{item.product_specifications[0].generation}</td>
                                    </tr>}
                                    {item.product_specifications[0].SSD && <tr>
                                        <td className='data1'>SSD</td>
                                        <td className="data2">{item.product_specifications[0].SSD}</td>
                                    </tr>}
                                    {item.product_specifications[0].SSD_capacity && <tr>
                                        <td className='data1'>SSD_capacity</td>
                                        <td className="data2">{item.product_specifications[0].SSD_capacity}</td>
                                    </tr>}
                                    {item.product_specifications[0].RAM && <tr>
                                        <td className="data2">RAM</td>
                                        <td className="data2">{item.product_specifications[0].RAM}</td>
                                    </tr>}
                                    {item.product_specifications[0].OS && <tr>
                                        <td className='data1'>OS</td>
                                        <td className="data2">{item.product_specifications[0].OS}</td>
                                    </tr>}
                                    {item.product_specifications[0].Material && <tr>
                                        <td className='data1'>Material</td>
                                        <td className="data2">{item.product_specifications[0].Material}</td>
                                    </tr>}
                                    {item.product_specifications[0].no_of_shoe_pairs && <tr>
                                        <td className='data1'>No of Shoe Pairs</td>
                                        <td className="data2">{item.product_specifications[0].no_of_shoe_pairs}</td>
                                    </tr>}
                                    {item.product_specifications[0].size && <tr>
                                        <td className='data1'>size</td>
                                        <td className="data2">{item.product_specifications[0].size}</td>
                                    </tr>}


                                </tbody>
                            </table>
                            {item.dimensions && <div>
                                <h2>Dimensions</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className='data1'>Wieght</th>
                                            <th className='data2'>{item.dimensions[0].wieght}</th>
                                        </tr>
                                        <tr>
                                            <th className='data1'>Height</th>
                                            <th className='data2'>{item.dimensions[0].height}</th>
                                        </tr>
                                        <tr>
                                            <th className='data1'>Width</th>
                                            <th className='data2'>{item.dimensions[0].width}</th>
                                        </tr>
                                        <tr>
                                            <th className='data1'>Depth</th>
                                            <th className='data2'>{item.dimensions[0].depth}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>}

                            <div>
                                {item.Display_Features && <h4 onClick={readMoreHandler} style={{ color: "#2874f0", marginTop: "3.5%" }} >Read More <i className="fa fa-angle-down colored"></i></h4>}
                                {readmore && <>
                                    {item.Display_Features && <div>
                                        <div>
                                            <h3>Display Features</h3>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='data1'>Display Size</td>
                                                        <td className='data2'>{item.Display_Features[0].Display_Size}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Resolution</td>
                                                        <td className='data2'>{item.Display_Features[0].Resolution}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Resolution Type</td>
                                                        <td className='data2'>{item.Display_Features[0].Resolution_Type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>GPU</td>
                                                        <td className='data2'>{item.Display_Features[0].GPU}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Display Type</td>
                                                        <td className='data2'>{item.Display_Features[0].Display_Type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Display Colors</td>
                                                        <td className='data2'>{item.Display_Features[0].Display_Colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Other Display Features</td>
                                                        <td className='data2'>{item.Display_Features[0].Other_Display_Features}</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <h3>Processor Features</h3>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='data1'>Operating System</td>
                                                        <td className='data2'>{item.Processor_Features[0].Operating_System}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Processor Type</td>
                                                        <td className='data2'>{item.Processor_Features[0].Processor_Type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Processor Core</td>
                                                        <td className='data2'>{item.Processor_Features[0].Processor_Core}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Primary Clock Speed</td>
                                                        <td className='data2'>{item.Processor_Features[0].Primary_Clock_Speed}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Secondary Clock Speed</td>
                                                        <td className='data2'>{item.Processor_Features[0].Secondary_Clock_Speed}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <h3>Storage Features</h3>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='data1'>Internal Storage</td>
                                                        <td className='data2'>{item.Storage_Features[0].Internal_Storage}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>RAM</td>
                                                        <td className='data2'>{item.Storage_Features[0].RAM}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Expandable Storage</td>
                                                        <td className='data2'>{item.Storage_Features[0].Expandable_Storage}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Supported Memory Card Type</td>
                                                        <td className='data2'>{item.Storage_Features[0].Supported_Memory_Card_Type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='data1'>Memory Card Slot Type</td>
                                                        <td className='data2'>{item.Storage_Features[0].Memory_Card_Slot_Type}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h4 onClick={readLessHandler} style={{ color: "#2874f0" }}>Read Less <i className="fa fa-angle-up colored"></i></h4>

                                    </div>}
                                </>}
                            </div>

                        </div>

                    </div>
                )
            })
        }
    }
    return (
        <div>
            {displayitem(props)}
        </div>
    );
}

export default Detailed;