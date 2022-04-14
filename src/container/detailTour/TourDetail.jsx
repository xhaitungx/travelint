import React, { useState } from "react";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";

const TourDetail = ({ tourData }) => {
  const [introductionOn, setIntroduction] = useState(true);

  const renderIntroduce = () => <></>;

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
          {introductionOn
            ? tourData.lich_trinh?.map((diaDiem) => (
                <>
                  <img
                    src={`https://tour-api-dev.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
                  />
                  <div>{diaDiem.id_dia_diem.ten}</div>
                  <div>{diaDiem.id_dia_diem.mo_ta}</div>
                </>
              ))
            : tourData.lich_trinh?.map((diaDiem) => (
                <>
                  <img
                    src={`https://tour-api-dev.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
                  />
                  <div>{diaDiem.id_dia_diem.ten}</div>
                  <div>{diaDiem.dich_vu}</div>
                  <div>{diaDiem.ngay_o} ngày</div>
                </>
              ))}
        </div>
      </div>
    </>
  );
};

export default TourDetail;
