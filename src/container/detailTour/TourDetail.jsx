import React, { useState } from "react";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";

const TourDetail = () => {
  const [introductionOn, setIntroduction] = useState(true);

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
          {introductionOn ? <h1>Giới thiệu chung</h1> : <h1>Lịch trình</h1>}
        </div>
      </div>
    </>
  );
};

export default TourDetail;
