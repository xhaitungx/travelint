import React, { useState } from "react";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";

import "./detailTour.scss";
const TourDetail = ({ tourData }) => {
  const [introductionOn, setIntroduction] = useState(true);

  const renderIntroduction = (diaDiem, index) => (
    <div className={`introduction--item ${index % 2 === 0 ? "even" : "odd"}`}>
      <img
        src={`https://tour-api-dev.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
      />
      <div className="place--infor">
        <h1>{diaDiem.id_dia_diem.ten}</h1>
        <p>{diaDiem.id_dia_diem.mo_ta}</p>
      </div>
    </div>
  );
  const renderDetail = (diaDiem, index) => (
    <div className={`detail--item ${index % 2 === 0 ? "even" : "odd"}`}>
      <img
        src={`https://tour-api-dev.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
      />
      <div className="place--infor">
        <h1>{diaDiem.id_dia_diem.ten}</h1>
        <p>{diaDiem.dich_vu}</p>
        <p>{diaDiem.ngay_o} ngày</p>
      </div>
    </div>
  );
  return (
    <>
      <div className="tour--information__detail">
        <div className="button--section">
          {introductionOn ? (
            <>
              <ButtonCustom
                nameString="Giới thiệu chung"
                variant="contained"
                customFunction={() => setIntroduction(true)}
              />
              <ButtonCustom
                nameString="Lịch trình cụ thể"
                variant="outlined"
                customFunction={() => setIntroduction(false)}
              />
            </>
          ) : (
            <>
              <ButtonCustom
                nameString="Giới thiệu chung"
                variant="outlined"
                customFunction={() => setIntroduction(true)}
              />
              <ButtonCustom
                nameString="Lịch trình cụ thể"
                variant="contained"
                customFunction={() => setIntroduction(false)}
              />
            </>
          )}
        </div>

        <div className="content">
          {introductionOn ? (
            <div className="introduction--container">
              {tourData.lich_trinh?.map((diaDiem, index) =>
                renderIntroduction(diaDiem, index)
              )}
            </div>
          ) : (
            <div className="detail--container">
              {tourData.lich_trinh?.map((diaDiem, index) =>
                renderDetail(diaDiem, index)
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TourDetail;
