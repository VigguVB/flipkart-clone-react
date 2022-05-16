import React, { Fragment } from 'react';
import "./Quick.css"
function Quick(props) {
    return (

        <div className="quicksearch  list">
                <div className="quickdiv">
                    <img src="https://i.ibb.co/vzSkx4g/top.png" alt="Top Offers" />
                    <ul>
                        <li className="menu">Offers</li>
                    </ul>
                </div>

            <div className="quickdiv">
                <img src="https://i.ibb.co/q0f0jJj/grocery.png" alt="grocery" />
                <ul>
                    <li className="menu">Groceries</li>
                </ul>
            </div>


            <div className="quickdiv">
                <img src="https://i.ibb.co/W6mj0C2/mobiles.png" alt="mobiles" />
                <ul>
                    <li className="menu">Mobiles</li>
                </ul>
            </div>
            <div id="fashions" className="quickdiv">
                <img src="https://i.ibb.co/HGsSH6n/fashion.png" alt="fashions" />
                <ul>
                    <li className="menu">Fashions <i className="fa fa-angle-down"></i></li>
                    <div>
                        <ul className="fashionHoverDiv list">
                            <li id="menTop">Men's Top wear <i className="fa fa-angle-right right"></i>
                                <ul className="menTopWear list">
                                    <li>All</li>
                                    <li>Men's T-Shirts</li>
                                    <li>Men's Casual-Shirts</li>
                                    <li>Men's Formal Shirts</li>
                                    <li>Men's Kurtas</li>
                                    <li>Men's Ethenic Sets</li>
                                    <li>Men's Blazers</li>
                                    <li>Men's Raincoat</li>
                                    <li>Men's Windcheaters</li>
                                    <li>Men's Suit</li>
                                    <li>Men's Fabrics</li>
                                </ul>
                            </li>
                            <li id="bottomMen">Men's Bottom wear <i className="fa fa-angle-right right"></i>
                                <ul className="menBottomWear list">
                                    <li>All</li>
                                    <li>Men's Jeans</li>
                                    <li>Men's Trousers</li>
                                    <li>Men's Trackpants</li>
                                    <li>Men's Shorts</li>
                                    <li>Men's Cargos</li>
                                    <li>Men's Threeourths</li>
                                    <li>Men's Pyjamas & Loungepants</li>
                                    <li>Men's Dhoti</li>
                                    <li>Men's Ethenic Pyjama</li>
                                </ul>
                            </li>
                            <li id="womenEthenic">Women Ethenic <i className="fa fa-angle-right right"></i>
                                <ul className="womenEthenicWear list">
                                    <li>All</li>
                                    <li>Women Sarees</li>
                                    <li>Women Kurtas & kurtis</li>
                                    <li>Women Kurta Sets</li>
                                    <li>Ethenic Dresses</li>
                                    <li>Women Dress Materials</li>
                                    <li>Women Gowns</li>
                                    <li>Women Lehenga Cholis</li>
                                    <li>Women Leggings</li>
                                    <li>Women Palazzos</li>
                                    <li>Women Blouse</li>
                                    <li>Women Dupatta</li>
                                </ul>
                            </li>
                            <li id="womenWestern">Women Western <i className="fa fa-angle-right right"></i>
                                <ul className="womenWesternWear list">
                                    <li>All</li>
                                    <li>Women Tops</li>
                                    <li>Women Dresses</li>
                                    <li>Women T-Shirts</li>
                                    <li>Women Jeans</li>
                                    <li>Women Nighties</li>
                                    <li>Women Nightsuit</li>
                                    <li>Women Track Pants</li>
                                    <li>Women Trouser</li>
                                    <li>Women Jumpsuit</li>
                                    <li>Women Shapewear</li>
                                    <li>Women Sports Bra</li>
                                </ul>
                            </li>
                            <li id="menFootwear">Men Footwear <i className="fa fa-angle-right right"></i>
                                <ul className="mensFootwear list">
                                    <li>All</li>
                                    <li>Men's Sports Shoes</li>
                                    <li>Men's Casual Shoes</li>
                                    <li>Men's Sandals & Floaters</li>
                                    <li>Men's Slippers</li>
                                    <li>Men's Formal Shoes</li>
                                    <li>Men's Ethenic Shoes</li>
                                    <li>Active Footwear</li>
                                    <li>Combo Footwear</li>
                                    <li>Shoe Care</li>
                                </ul>
                            </li>
                            <li id="womenFootwear">Women Footwear <i className="fa fa-angle-right right"></i>
                                <ul className="womensFootwear list">
                                    <li>All</li>
                                    <li>Women Tops</li>
                                    <li>Women Dresses</li>
                                    <li>Women T-Shirts</li>
                                    <li>Women Jeans</li>
                                    <li>Women Nighties</li>
                                    <li>Women Nightsuit</li>
                                    <li>Women Track Pants</li>
                                    <li>Women Trouser</li>
                                    <li>Women Jumpsuit</li>
                                    <li>Women Shapewear</li>
                                    <li>Women Sports Bra</li>
                                </ul>
                            </li>
                            <li id="watch">Watches and Accessories <i className="fa fa-angle-right right"></i>
                                <ul className="watches list">
                                    <li>Men & Women Watches</li>
                                    <li>Men & Women Sunglasses</li>
                                    <li>Wallets</li>
                                    <li>Men & Women Belts</li>
                                    <li>Women Fashion Jewellery</li>
                                    <li>Preciuous Jewellery</li>
                                    <li>Precious Coins & Bars</li>
                                    <li>Precious Articles</li>
                                    <li>Frames & Contact Lenses</li>
                                    <li>Kids Accessories</li>
                                </ul>
                            </li>
                            <li id="luggages">Bags, suitacses & Luggages <i className="fa fa-angle-right right"></i>
                                <ul className="bags list">
                                    <li>All</li>
                                    <li>Backpacks</li>
                                    <li>Suitcases & Trolleys</li>
                                    <li>Dufflebags</li>
                                    <li>Rucksacks</li>
                                    <li>Handbags</li>
                                    <li>Slingbags</li>
                                    <li>Women Clutches & Wallets</li>
                                    <li>Messenger Bags</li>
                                    <li>Travel Accessories</li>
                                </ul>
                            </li>
                            <li id="fashionkids">Kids <i className="fa fa-angle-right right"></i>
                                <ul className="fashionkids list">
                                    <li>All</li>
                                    <li>Girls Dresses</li>
                                    <li>Boys & Girls Tshirts</li>
                                    <li>Boys & Girls Combosets</li>
                                    <li>Boys & Girls Ethenic</li>
                                    <li>Boys & Girls Jeans</li>
                                    <li>Boys & Girls Shorts</li>
                                    <li>Boys & Girls Trackpants</li>
                                    <li>Boys & Girls Innerwear</li>
                                    <li>Infant Wear</li>
                                    <li>Kids Slippers</li>
                                    <li>Kids Shoes</li>
                                </ul>
                            </li>
                            <li id="essentials">Essentials <i className="fa fa-angle-right right"></i>
                                <ul className="essentials list">
                                    <li>Men's Briefs % Trunks</li>
                                    <li>Men's Vests</li>
                                    <li>Men's Boxers</li>
                                    <li>Women Lingerie Sets</li>
                                    <li>Women Bra</li>
                                    <li>Women Panty</li>
                                    <li>Women Sarees</li>
                                    <li>Women Kurtas</li>
                                    <li>Women Salwar Suits</li>
                                    <li>Boys Innerwear</li>
                                    <li>Girls Innerwear</li>
                                    <li>Women slipper Flip Flops</li>
                                </ul>
                            </li>
                            <li id="winter">Winter <i className="fa fa-angle-right right"></i>
                                <ul className="winter list">
                                    <li>All</li>
                                    <li>Men's Jackets</li>
                                    <li>Mens's Sweatshirts</li>
                                    <li>Mens's Sweaters</li>
                                    <li>Mens's Thermals</li>
                                    <li>Women's Jackets</li>
                                    <li>Women's Sweatshirts</li>
                                    <li>Women's Sweaters</li>
                                    <li>Women's Shrugs</li>
                                    <li>Kids Sweatshirts</li>
                                    <li>Women's Kurtas</li>
                                    <li>Kids Jackets</li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                </ul>

            </div>
            <div id="electronics" className="quickdiv">
                <img src="https://i.ibb.co/pnkpFtb/electroinic.png" alt="electronics" />
                <ul>
                    <li className="menu">Electronics <i className="fa fa-angle-down"></i></li>
                    <ul className="elecHoverDiv list">
                        <li id="audio">Audio <i className="fa fa-angle-right right"></i>
                            <ul className="audio list">
                                <li>All</li>
                                <li>Bluetooth Headphones</li>
                                <li>Wired Headphones</li>
                                <li>True Wireless Earbuds</li>
                                <li>Bluetooth Speakers</li>
                                <li>Soundbars</li>
                                <li>Home Theatres</li>
                                <li>TV Streaming Device</li>
                                <li>Remote Control</li>
                                <li>DTH Set Top Box</li>
                                <li>Headphone Pouches</li>
                                <li>Case Covers</li>
                            </ul>
                        </li>
                        <li>Electronics GST Store</li>
                        <li id="camera">Cameras & Accessories <i className="fa fa-angle-right right"></i>
                            <ul className="camera list">
                                <li>All</li>
                                <li>DSLR & Mirrorless</li>
                                <li>Sports & Action</li>
                                <li>Point & Shoot</li>
                                <li>Instant Cameras</li>
                                <li>Camcorders</li>
                                <li>Camera Tripods</li>
                                <li>Camera Lenses</li>
                                <li>Drone</li>
                                <li>Flashes</li>
                                <li>Gimbals</li>
                                <li>Binoculars</li>
                            </ul>
                        </li>
                        <li id="peripherals">Computer Peripherals <i className="fa fa-angle-right right"></i>
                            <ul className="peripherals list">
                                <li>All</li>
                                <li>Printers</li>
                                <li>Monitors</li>
                                <li>Projectors</li>
                                <li>Portable Projectors</li>
                                <li>Toners</li>
                                <li>Ink Catridges</li>
                                <li>Ink Bottles</li>
                                <li>Receipt Printers</li>
                                <li>Lamination Machines</li>
                                <li>Note Counting Machines</li>
                                <li>Barcode Scanners</li>
                            </ul>
                        </li>
                        <li id="gaming">Gaming <i className="fa fa-angle-right right"></i>
                            <ul className="gaming list">
                                <li>All</li>
                                <li>Gaming Consoles</li>
                                <li>Gaming Mouse</li>
                                <li>Gaming Keyboards</li>
                                <li>Games</li>
                                <li>Accessory Kits</li>
                                <li>Gaming Accessories Combo</li>
                                <li>Gaming Mousepads</li>
                                <li>Membership Cards</li>
                                <li>Controllers</li>
                                <li>Other Gaming Accessories</li>
                                <li>Gaming Components</li>
                            </ul>
                        </li>
                        <li id="personal">Health & Personal Care <i className="fa fa-angle-right right"></i>
                            <ul className="personal list">
                                <li>All</li>
                                <li>Trimmers</li>
                                <li>Shavers</li>
                                <li>Har Straighteners</li>
                                <li>Hair dryers</li>
                                <li>Epilators</li>
                                <li>Glucometers & Accesories</li>
                                <li>Blood Pressure Monitors</li>
                                <li>Digital Thermometers</li>
                                <li>Weighing Scales</li>
                                <li>Massagers</li>
                                <li>Nebulizers</li>
                                <li>Vapourizers</li>
                            </ul>
                        </li>
                        <li id="lap-accessories">Laptop Accessories <i className="fa fa-angle-right right"></i>
                            <ul className="lap-accessories list">
                                <li>All</li>
                                <li>Mouse</li>
                                <li>Laptop Keyboards</li>
                                <li>Router</li>
                                <li>Data Card</li>
                                <li>UPS</li>
                                <li>USB Gadgets</li>
                                <li>Security Software</li>
                                <li>Laptop Battery</li>
                                <li>Laptop Adapter</li>
                                <li>Wireless USB Adapter</li>
                                <li>Processor</li>
                                <li>Other Accessories</li>
                            </ul>
                        </li>
                        <li id="lap-desktop">Laptop & Desktop <i className="fa fa-angle-right right"></i>
                            <ul className="lap-desktop list">
                                <li>All</li>
                                <li>Laptops</li>
                                <li>Gaming Laptops</li>
                                <li>Desktop PCs</li>
                                <li>All In One PCs</li>
                                <li>Mini PCs</li>
                                <li>Tower PCs</li>
                                <li>PC Finder</li>
                                <li>GST Invoice on Laptops</li>
                                <li>Laptop Buying Guide</li>
                            </ul>
                        </li>
                        <li id="mobile-accesory">Mobile Accesory <i className="fa fa-angle-right right"></i>
                            <ul className="mobile-accesory list">
                                <li>All</li>
                                <li>Plain Cases</li>
                                <li>Designer Cases</li>
                                <li>Screen Guards</li>
                                <li>Camera Lens Protectors</li>
                                <li>Tablet Accessories</li>
                                <li>Mobile Cable</li>
                                <li>Mobile Charger</li>
                                <li>Mobile Pouches</li>
                                <li>Mobile Flash</li>
                                <li>Mobile Holder</li>
                                <li>Mobile USB Gadget</li>
                                <li>Mobile Accesories Combo</li>
                            </ul>
                        </li>
                        <li>Powerbank</li>
                        <li id="smart-home">Smart Home Automation <i className="fa fa-angle-right right"></i>
                            <ul className="smart-home list">
                                <li>All</li>
                                <li>Smart Assistants</li>
                                <li>Smart Lights</li>
                                <li>Smart Cameras</li>
                                <li>Smart Switches</li>
                                <li>Smart Door Locks</li>
                                <li>Sensors & Alarms</li>
                            </ul>
                        </li>
                        <li id="smart-wearables">Smart Wearables <i className="fa fa-angle-right right"></i>
                            <ul className="smart-wearables list">
                                <li>All</li>
                                <li>Smart Watches</li>
                                <li>Smart Bands</li>
                                <li>Smart Glasses</li>
                            </ul>
                        </li>
                        <li id="storage">Storage <i className="fa fa-angle-right right"></i>
                            <ul className="storage">
                                <li>All</li>
                                <li>Memory Card</li>
                                <li>Computer Stoarge Pendrive</li>
                                <li>Mobile Stoarge Pendrive</li>
                                <li>External Hard Drive</li>
                                <li>Internal Hard Drive</li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </div>




            <div id="home" className="quickdiv">
                <img src="https://i.ibb.co/VC64x3K/furniture05.png" alt="home" />
                <ul>
                    <li className="menu">Home <i className="fa fa-angle-down"></i></li>
                    <ul className="homeHoverDiv list">
                        <li id="homeFurnishing">Home Furnishings<i className="fa fa-angle-right right"></i>
                            <ul className="homeFurnishing list">
                                <li>All</li>
                                <li>Bed Linens</li>
                                <li>Bedsheets</li>
                                <li>Blankets</li>
                                <li>Curtains & Accesories</li>
                                <li>Bath Linen</li>
                                <li>Floor Coverings</li>
                                <li>Covers & Protectors</li>
                                <li>Cusions & Pillows</li>
                                <li>Kitchen Linen Sets</li>
                                <li>Table Linen Sets</li>
                                <li>Sofa & Curtain Fabrics</li>
                            </ul>
                        </li>
                        <li id="livingRoom">Living Room<i className="fa fa-angle-right right"></i>
                            <ul className="livingRoom list">
                                <li>All</li>
                                <li>Softa Sets & Sectionals</li>
                                <li>TV Units</li>
                                <li>Dining Sets</li>
                                <li>Cofee Tables</li>
                                <li>Sofa Beds</li>
                                <li>Recliners</li>
                                <li>Living Room Chairs</li>
                                <li>Cabinets and Drawers</li>
                                <li>Book Shelves</li>
                                <li>Shoe Racks</li>
                                <li>Office Tables</li>
                                <li>Office Chairs</li>
                            </ul>
                        </li>
                        <li id="kitchen">Kitchen & Dining<i className="fa fa-angle-right right"></i>
                            <ul className="kitchen list">
                                <li>All</li>
                                <li>Cookware</li>
                                <li>Lunchboxes, Bottles & Flasks</li>
                                <li>Knives, Choppers & Cutters</li>
                                <li>Gas Stoves & Accessories</li>
                                <li>Kitchen Tools</li>
                                <li>Tableware & Dinnerware</li>
                                <li>Containers & Kitchen Storage</li>
                                <li>Barware</li>
                                <li>Bakeware</li>
                                <li>Hand Juicers & Grinders</li>
                                <li>Disposable Supplies</li>
                                <li>Outdoor Cooking</li>
                            </ul>
                        </li>

                        <li id="homeDecor">Home Decor<i className="fa fa-angle-right right"></i>
                            <ul className="homeDecor list">
                                <li>All</li>
                                <li>Lightings</li>
                                <li>Stickers & Wallpapers</li>
                                <li>Paintings & Posters</li>
                                <li>Clocks</li>
                                <li>Showpieces & Decoratives</li>
                                <li>Wall Decor</li>
                                <li>Flowers & Vases</li>
                                <li>Home Fragrances</li>
                                <li>Windchimes & Dreamcatchers</li>
                                <li>Photo Frames & Albums</li>
                                <li>Diyas, Candles & Holders</li>
                                <li>Festive & Gifting</li>
                            </ul>
                        </li>
                        <li id="tools">Tools & Utility<i className="fa fa-angle-right right"></i>
                            <ul className="tools list">
                                <li>All</li>
                                <li>Hand Tools</li>
                                <li>Power Tools</li>
                                <li>Measuring Tools</li>
                                <li>Home Storage & Organizers</li>
                                <li>Umbrellas</li>
                                <li>Appliance Trolley & Stands</li>
                                <li>Cloth Drier Stand</li>
                                <li>Appliance Filter & Catridges</li>
                                <li>Laundry Organization</li>
                                <li>Lock & Security</li>
                                <li>Fire & Personal safety</li>
                                <li>Paint Supplies & Equipments</li>
                            </ul>
                        </li>
                        <li id="lightings">Lightings & Electricals<i className="fa fa-angle-right right"></i>
                            <ul className="lightings list">
                                <li>All</li>
                                <li>Bulbs</li>
                                <li>Emergency Lights</li>
                                <li>Torches</li>
                                <li>Tubelighgts</li>
                                <li>Extension Cords</li>
                                <li>Outdoor Lamps</li>
                                <li>Batteries</li>
                                <li>ElectricWire</li>
                                <li>Electrical Socket</li>
                                <li>Electrical Door Bell</li>
                                <li>Solar Light, Panel & Batteries</li>
                                <li>Electrical Hardware</li>
                            </ul>
                        </li>
                        <li id="space">Space Saving<i className="fa fa-angle-right right"></i>
                            <ul className="space list">
                                <li>All</li>
                                <li>Portable Laptop Tables</li>
                                <li>Collapsible Wardrobes</li>
                                <li>Bean Bags & Covers</li>
                                <li>Cabinet Drawers</li>
                                <li>Inflatable Sofas</li>
                                <li>Hammock Swings</li>
                                <li>Home Temples</li>
                                <li>TV Mounts</li>
                                <li>Kitchen Trolley</li>
                                <li>Kitchen Cabinet</li>
                            </ul>
                        </li>
                        <li id="cleaning">Cleaning & Bath<i className="fa fa-angle-right right"></i>
                            <ul className="cleaning list">
                                <li>All</li>
                                <li>Mops</li>
                                <li>Cleaning Supplies</li>
                                <li>House Hold Supplies</li>
                                <li>Air Fresheners</li>
                                <li>Cleaning Gloves</li>
                                <li>Liquid Detergents</li>
                                <li>Taps & Faucet</li>
                                <li>Toothbrush Holder</li>
                                <li>Bath & Kitchen Fittings</li>
                                <li>Bathroom Accesories</li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </div>
            <div id="appliances" className="quickdiv">
                <img src="https://i.ibb.co/PgcTtJH/appliance.png" alt="appliances" />
                <ul>
                    <li className="menu">Appliances<i className="fa fa-angle-down"></i></li>
                    <ul className="applianceHoverDiv list">
                        <li>Televisions</li>
                        <li>Washing Machines</li>
                        <li>Air Conditioners</li>
                        <li>Refrigerators</li>
                        <li>Kitchen Appliances</li>
                        <li>Home Appliances</li>
                        <li>Seasonal Appliances</li>
                        <li>Premium Appliances</li>
                        <li>Buying Guides</li>
                        <li>Flipkart Benifits</li>
                     
                        </ul>
                        </ul>
                    </div>
                    <div className="quickdiv">
                        <img src="https://i.ibb.co/mFd2KCk/11-plane-png-image.png" alt="travel" width="180px" />
                        <ul>
                            <li className="menu">Travel</li>
                        </ul>
                    </div>
                    <div id="toys" className="quickdiv">
                        <img src="https://i.ibb.co/6XL187h/dff3f7adcf3a90c6.png" alt="toys" />
                        <ul>
                            <li style={{marginLeft: "-15%"}} className="menu">Beauty,Toys & more <i className="fa fa-angle-down"></i></li>
                            <ul className="toysHoverDiv list">
                                <li>Beauty & Personal Care</li>
                                <li>Men's Grooming</li>
                                <li>Food & Drinks</li>
                                <li>Nutrition & Health Care</li>
                                <li>Baby Care</li>
                                <li>Toys & school Supplies</li>
                                <li>Sports & Fitness</li>
                                <li>Books & Music</li>
                                <li>Stationery & Office Supplies</li>
                                <li>Auto Accesories</li>
                                <ul>
                                </ul>

                            </ul>
                            </ul>
                    </div>
            </div>
       

    );
}

export default Quick;