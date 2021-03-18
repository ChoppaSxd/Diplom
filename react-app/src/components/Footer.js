import React from "react";
import "../components/Footer.css";
import "../components/Media.css";

export default function Footer() {
    return (
        <div className="Footer">
            <footer>
                <div className="container">
                    <div className="row">
                        {/*                         <div class="col-md-3">
                            <h4>Ми в соціальних мережах</h4>
                            <div className="block_fotos">
                                <img className="img_f" src={Vector7} alt="" />
                                <img className="img_f" src={Vector8} alt="" />
                                <img className="img_f" src={Vector9} alt="" />
                                <img className="img_f" src={insta} alt="" />
                            </div>
                        </div> */}
                        <div className="">
                            <h6>© Відокремлений структурний підрозділ «Львівський фаховий коледж харчової і переробної промисловості НУХТ» (ВСП «ЛФКХПП НУХТ»), 2021</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}