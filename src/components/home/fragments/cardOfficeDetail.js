import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardOfficeMAPDetail } from "./cardOfficeMAPDetail";
import { RequestAllProducts } from "../../helpers/requestAllProducts";

export const CardOfficeDetail = () => {
  const [loading, setLoading] = useState(false);
  const [pcOffice, setPcOffice] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    RequestAllProducts()
      .then((resp) => {
        if (!catId) {
          setPcOffice(resp);
        } else {
          // eslint-disable-next-line eqeqeq
          setPcOffice(resp.filter((articulo) => articulo.id == catId));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);
  return (
    <>
      {loading ? <p>Loading..</p> : <CardOfficeMAPDetail pcOffice={pcOffice[0]} />}
    </>
  );
};
