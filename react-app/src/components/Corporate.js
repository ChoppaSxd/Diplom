import React from "react";
import { Link } from "react-router-dom";
import "../components/Corporate.css";
import "../components/Media.css";
import fotos_corporate_1 from "../images/fotos_corporate_1.jpg";
import fotos_corporate_2 from "../images/fotos_corporate_2.jpg";
import useKrpano from 'react-krpano-hooks';

export default function Corporate() {
    const Example = () => {
        const { containerRef } = useKrpano({
            globalFunctions: {
                logNewScene: (scene) => {
                    console.log('New scene: ', scene)
                },
            },
        })

        return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    }
    return (
        <div className="Corporate">
            <section>
                <div className="container">
                    <div className="block_corporate">
                        <div className="row">
                            <div class="col-12">
                                <iframe src="../Tour/vt1/START.html" width="800" height="600" > </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}