/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function DiscountCode() {
  const [activeLabel, setActiveLabel] = useState(null);
  const labels = [
    { id: 1, name: "ابتدایی", color: "#007BFF", borderColor: "#007BFF" },
    {
      id: 2,
      name: "دوره اول متوسطه",
      color: "#007BFF",
      borderColor: "#007BFF",
    },
    {
      id: 3,
      name: "دوره دوم متوسطه",
      color: "#007BFF",
      borderColor: "#007BFF",
    },
    { id: 4, name: "کنکور", color: "#DC3545", borderColor: "#DC3545" },
    { id: 5, name: "دانشگاه", color: "#e0ba32", borderColor: "#e0ba32" },
    { id: 6, name: "کسب و کار", color: "#29AC95", borderColor: "#29AC95" },
  ];
  const discountCards = [
    {
      title: "کد تخفیف برای درس مهندسی نرم افزار استاد امیرحسین باذیار",
      duration: "7 روز",
      tag: "# دانشگاه",
      code: "A44SD8YY",
      discount: "80%",
    },
    {
      title: "کد تخفیف برای درس پایگاه داده استاد محمدی",
      duration: "3 روز",
      tag: "# دانشجویی",
      code: "DB2023",
      discount: "50%",
    },
    {
      title: "کد تخفیف برای درس هوش مصنوعی",
      duration: "5 روز",
      tag: "# ویژه",
      code: "AI50OFF",
      discount: "60%",
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex gap-3 flex-wrap">
                {labels.map((label) => (
                  <div
                    key={label.id}
                    className={`p-3 rounded-5 cursor-pointer text-center`}
                    style={{
                      width: "180px",
                      backgroundColor:
                        activeLabel === label.id ? label.color : "white",
                      border:
                        activeLabel === label.id
                          ? `3px solid ${label.borderColor}`
                          : `1px solid ${label.borderColor}`,
                      color: activeLabel === label.id ? "white" : label.color,
                      transition: "all 0.3s ease",
                      fontWeight: "500",
                    }}
                    onClick={() => setActiveLabel(label.id)}
                  >
                    {label.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {discountCards.map((card, index) => (
                <div className="col-md-6 col-lg-6 mt-3" key={index}>
                  <div
                    className="d-flex rounded overflow-hidden h-100"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      border: "1px dashed #ccc",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center px-3"
                      style={{
                        minWidth: "100px",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "900",
                          fontSize: "32px",
                          lineHeight: "1",
                          color: "#222",
                        }}
                      >
                        {card.discount}
                      </span>
                    </div>
                    <div
                      className="p-3 flex-grow-1 d-flex flex-column"
                      style={{ borderRight: "1px dashed #ccc" }}
                    >
                      <h5 className="mb-2">{card.title}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <small
                          className="text-white bg-success rounded-pill p-2"
                          style={{ fontSize: "11px", lineHeight: "1.2" }}
                        >
                          مهلت استفاده : {card.duration}
                        </small>
                      </div>
                      <a
                        href="#"
                        className="text-decoration-none d-inline-block my-3"
                        style={{ fontSize: "12px" }}
                      >
                        <span
                          className="bg-warning rounded rounded-pill px-2 py-1"
                          style={{ color: "#222" }}
                        >
                          {card.tag}
                        </span>
                      </a>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="text-muted small">کد تخفیف:</span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center gap-2"
                          style={{ fontSize: "13px", fontWeight: "bold" }}
                          onClick={() => {
                            navigator.clipboard.writeText(card.code);
                            alert("کد تخفیف کپی شد!");
                          }}
                        >
                          {card.code}
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DiscountCode;
