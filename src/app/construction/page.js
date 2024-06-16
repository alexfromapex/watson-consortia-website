"use client";
import {useEffect} from "react";
import styles from "./construction.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function Construction() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center py-3">
            <div className={`row ${styles.hero}`}>
              <div className="jumbotron p-5 justify-content-end d-flex">
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container px-3 fade-in-top justify-content-center">
      </div>
    </>
  );
}
