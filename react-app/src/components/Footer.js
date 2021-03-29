import React from "react";
import "../components/Footer.css";
import "../components/Media.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div style={{ height: 100 }}>
              <h5>
                © Відокремлений структурний підрозділ «Львівський фаховий коледж
                харчової і переробної промисловості НУХТ» (ВСП «ЛФКХПП НУХТ»),
                2021
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
