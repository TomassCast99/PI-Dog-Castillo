import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, resState } from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import "./Details.css";

export default function Detail() {
  const { id } = useParams();
  const dogDetail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(resState());
    };
  }, [dispatch, id]);

  return (
    <div>
      {Object.keys(dogDetail).length > 0 ? (
        <main className="paginado2">
          <div>
            <div>
              <Link to="/home">
                <button className="boton4" onClick={resState}>
                  Home
                </button>
              </Link>
            </div>
            <div>
              <img
                className="imagdetalle"
                src={dogDetail.image}
                alt={dogDetail.name}
              />
            </div>
          </div>
          <div className="cardDetalle">
            <div>
              <h1>{dogDetail.name}</h1>
            </div>
            <div className="base3">
              <h4>Temperament:</h4>
              <p>{dogDetail.temperament}</p>
            </div>
            <div className="base3">
              <h4>Height:</h4>
              <p>{dogDetail.height}</p>
            </div>
            <div className="base3">
              <h4>Weight:</h4>
              <p>{dogDetail.weight}</p>
            </div>
            <div className="base3">
              <h4>Life Span:</h4>
              <p>{dogDetail.life_span}</p>
            </div>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
}
